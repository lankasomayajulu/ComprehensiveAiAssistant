import os
import datetime
import uuid
import urllib.request
import json
from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, status
from typing import List, Optional
from ..database import db, users_collection, settings_collection
from ..auth import get_current_user
from ..models import (
    ProjectCreate, ProjectResponse, ProjectSettings, StoryPrompts,
    ProjectUpdateSettings, ProjectUpdateContributors,
    VirtualFolderCreate, VirtualFolderResponse,
    VirtualFileCreate, VirtualFileResponse, VirtualFileUpdate,
    KanbanCardCreate, KanbanCardResponse, KanbanCardUpdate,
    CardCommentCreate, CardCommentResponse, AILogResponse, FileReorderPayload
)
from ..secrets_manager import encrypt_data, decrypt_data

router = APIRouter(prefix="/projects", tags=["projects"])

# Database Collection handles
projects_col = db["projects"]
folders_col = db["virtual_folders"]
files_col = db["virtual_files"]
cards_col = db["kanban_cards"]
logs_col = db["ai_logs"]

# --- Helpers ---

def get_project_or_404(project_id: str, user: dict) -> dict:
    try:
        oid = ObjectId(project_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid project ID format")
    
    project = projects_col.find_one({"_id": oid})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Check access permission
    username = user["username"]
    role = user["role"]
    is_author = project.get("author") == username
    is_contributor = username in project.get("contributing_users", [])
    is_admin = role == "administrator"
    
    if not (is_author or is_contributor or is_admin):
        raise HTTPException(status_code=403, detail="You do not have access to this project")
        
    return project

def serialize_doc(doc: dict) -> dict:
    if not doc:
        return doc
    doc = dict(doc)
    doc["id"] = str(doc.pop("_id"))
    for k, v in doc.items():
        if isinstance(v, ObjectId):
            doc[k] = str(v)
    return doc

def estimate_cost(model: str, input_tokens: int, output_tokens: int) -> float:
    rates = {
        "google/gemini-2.5-flash": {"input": 0.075, "output": 0.30},
        "google/gemini-2.5-pro": {"input": 1.25, "output": 5.00},
        "meta-llama/llama-3.3-70b-instruct": {"input": 0.60, "output": 0.60},
        "anthropic/claude-3.5-sonnet": {"input": 3.00, "output": 15.00},
        "openai/gpt-4o-mini": {"input": 0.15, "output": 0.60},
        "openai/gpt-4o": {"input": 2.50, "output": 10.00},
    }
    rate = rates.get(model, {"input": 0.50, "output": 1.50})
    cost = (input_tokens * rate["input"] + output_tokens * rate["output"]) / 1_000_000.0
    return round(cost, 6)

def verify_path_in_root(root: str, path: str) -> str:
    abs_root = os.path.abspath(root)
    abs_target = os.path.abspath(os.path.join(root, path))
    if not abs_target.startswith(abs_root):
        raise HTTPException(status_code=403, detail="Path is outside the project root directory")
    return abs_target

# --- OpenRouter Model List ---

@router.get("/openrouter/models", response_model=List[str])
async def list_openrouter_models(current_user: dict = Depends(get_current_user)):
    """
    Fetch openrouter models and list them alphabetically.
    """
    try:
        url = "https://openrouter.ai/api/v1/models"
        req = urllib.request.Request(url, headers={"User-Agent": "ComprehensiveAI"})
        with urllib.request.urlopen(req, timeout=5) as response:
            data = json.loads(response.read().decode("utf-8"))
            models = [m["id"] for m in data.get("data", [])]
            return sorted(models)
    except Exception as e:
        print(f"Error fetching openrouter models: {e}")
        # Default fallback list
        return sorted([
            "google/gemini-2.5-flash",
            "google/gemini-2.5-pro",
            "meta-llama/llama-3.3-70b-instruct",
            "anthropic/claude-3.5-sonnet",
            "openai/gpt-4o-mini",
            "openai/gpt-4o"
        ])

# --- Projects CRUD ---

@router.get("", response_model=List[ProjectResponse])
async def get_projects(current_user: dict = Depends(get_current_user)):
    """
    List all projects the user is authorized to see.
    """
    username = current_user["username"]
    role = current_user["role"]
    
    if role == "administrator":
        cursor = projects_col.find()
    else:
        cursor = projects_col.find({
            "$or": [
                {"author": username},
                {"contributing_users": username}
            ]
        })
        
    projects = []
    for p in cursor:
        projects.append(serialize_doc(p))
    return projects

@router.post("", response_model=ProjectResponse)
async def create_project(payload: ProjectCreate, current_user: dict = Depends(get_current_user)):
    """
    Create a new project. Sets up defaults.
    """
    # Check uniqueness
    existing = projects_col.find_one({"name": payload.name})
    if existing:
        raise HTTPException(status_code=400, detail="Project with this name already exists")
    
    settings_dict = {}
    if payload.settings:
        settings_dict = payload.settings.dict()
    else:
        # Default Settings
        settings_dict = {
            "default_openrouter_model": "google/gemini-2.5-flash",
            "favorite_models": ["google/gemini-2.5-flash", "google/gemini-2.5-pro"],
            "reasoning_length": "Minimal",
            "output_length": "Medium",
            "story_type": ["Action", "Adventure", "Fantasy", "Thriller"],
            "language": "English",
            "chapters": 5,
            "root_folder": "",
            "prompts": {
                "continue_system_prompt": "You are a helpful story creation writing assistant.",
                "continue_prompt": "Please write the next section of the story, matching the tone and style.",
                "revise_system_prompt": "You are a helpful story editor assistant.",
                "revise_prompt": "Please revise the text below according to the request."
            }
        }

    # Ensure Story creation defaults
    if payload.type == "Story Creation":
        if not settings_dict.get("prompts"):
            settings_dict["prompts"] = {
                "continue_system_prompt": "You are a helpful story creation writing assistant.",
                "continue_prompt": "Please write the next section of the story, matching the tone and style.",
                "revise_system_prompt": "You are a helpful story editor assistant.",
                "revise_prompt": "Please revise the text below according to the request."
            }
            
    new_proj = {
        "name": payload.name,
        "type": payload.type,
        "description": payload.description,
        "author": current_user["username"],
        "contributing_users": [],
        "created_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "settings": settings_dict
    }
    
    res = projects_col.insert_one(new_proj)
    new_proj["_id"] = res.inserted_id
    return serialize_doc(new_proj)

@router.get("/{project_id}", response_model=ProjectResponse)
async def get_project_details(project_id: str, current_user: dict = Depends(get_current_user)):
    project = get_project_or_404(project_id, current_user)
    return serialize_doc(project)

@router.put("/{project_id}/settings", response_model=ProjectResponse)
async def update_project_settings(
    project_id: str, payload: ProjectUpdateSettings, current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    
    # Validation constraints: Story Creation language/name/description cannot be changed later.
    # Name and description are in the project itself, language is in settings.
    # We enforce: if type is Story Creation, we preserve language.
    updated_settings = payload.settings.dict()
    if project["type"] == "Story Creation":
        updated_settings["language"] = project["settings"].get("language", "English")
        
    projects_col.update_one(
        {"_id": ObjectId(project_id)},
        {"$set": {"settings": updated_settings}}
    )
    project["settings"] = updated_settings
    return serialize_doc(project)

@router.put("/{project_id}/contributors", response_model=ProjectResponse)
async def update_project_contributors(
    project_id: str, payload: ProjectUpdateContributors, current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    
    # Must be admin or author to update contributors
    if current_user["role"] != "administrator" and project["author"] != current_user["username"]:
        raise HTTPException(status_code=403, detail="Only the project author or an administrator can add contributors")
        
    # Verify contributors exist
    for u in payload.contributing_users:
        user_check = users_collection.find_one({"username": u})
        if not user_check:
            raise HTTPException(status_code=400, detail=f"User '{u}' does not exist")
            
    projects_col.update_one(
        {"_id": ObjectId(project_id)},
        {"$set": {"contributing_users": payload.contributing_users}}
    )
    project["contributing_users"] = payload.contributing_users
    return serialize_doc(project)

@router.delete("/{project_id}")
async def delete_project(project_id: str, current_user: dict = Depends(get_current_user)):
    project = get_project_or_404(project_id, current_user)
    if current_user["role"] != "administrator" and project["author"] != current_user["username"]:
        raise HTTPException(status_code=403, detail="Only the author or an admin can delete the project")
        
    # Clean up associated items
    oid = ObjectId(project_id)
    projects_col.delete_one({"_id": oid})
    folders_col.delete_many({"project_id": oid})
    files_col.delete_many({"project_id": oid})
    cards_col.delete_many({"project_id": oid})
    logs_col.delete_many({"project_id": oid})
    
    return {"message": "Project and all related data deleted successfully."}

# --- Virtual Folder and File CRUD ---

@router.get("/{project_id}/folders")
async def get_project_structure(project_id: str, current_user: dict = Depends(get_current_user)):
    project = get_project_or_404(project_id, current_user)
    
    # Coding project lists real disk files
    if project["type"] == "Coding":
        root = project["settings"].get("root_folder")
        if not root:
            return {"folders": [], "files": [], "coding_files": [], "error": "Root folder not configured."}
        try:
            # We list relative items in root
            items = []
            for dirpath, dirnames, filenames in os.walk(root):
                # Avoid hidden folders
                dirnames[:] = [d for d in dirnames if not d.startswith('.')]
                for d in dirnames:
                    full = os.path.join(dirpath, d)
                    rel = os.path.relpath(full, root).replace("\\", "/")
                    items.append({"name": d, "path": rel, "is_dir": True})
                for f in filenames:
                    full = os.path.join(dirpath, f)
                    rel = os.path.relpath(full, root).replace("\\", "/")
                    items.append({"name": f, "path": rel, "is_dir": False, "size": os.path.getsize(full)})
            return {"type": "Coding", "root_folder": root, "files": sorted(items, key=lambda x: (not x["is_dir"], x["path"]))}
        except Exception as e:
            return {"type": "Coding", "root_folder": root, "files": [], "error": str(e)}

    # Virtual files/folders (for other project types)
    oid = ObjectId(project_id)
    folders_cursor = folders_col.find({"project_id": oid})
    files_cursor = files_col.find({"project_id": oid})
    
    folders = [serialize_doc(f) for f in folders_cursor]
    files = []
    for f in files_cursor:
        file_doc = serialize_doc(f)
        file_doc["name"] = decrypt_data(file_doc.get("name", ""))
        # We don't fetch full content in tree request to keep it fast
        file_doc["content"] = ""
        files.append(file_doc)
        
    # Append Prompts Folder virtual items if Story Creation
    if project["type"] == "Story Creation":
        prompts_folder = {
            "id": "prompts_folder",
            "project_id": project_id,
            "name": "Prompts Folder",
            "description": "Special settings-based prompts folder",
            "is_special": True
        }
        folders.append(prompts_folder)
        
        prompt_files = ["Continue System Prompt", "Continue Prompt", "Revise System Prompt", "Revise Prompt"]
        for idx, pf in enumerate(prompt_files):
            files.append({
                "id": pf.lower().replace(" ", "_"),
                "project_id": project_id,
                "folder_id": "prompts_folder",
                "name": pf,
                "content": "",
                "order": idx,
                "is_special": True
            })
            
    return {"type": "Virtual", "folders": folders, "files": files}

@router.post("/{project_id}/folders", response_model=VirtualFolderResponse)
async def create_virtual_folder(
    project_id: str, payload: VirtualFolderCreate, current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    if project["type"] == "Coding":
        raise HTTPException(status_code=400, detail="Cannot create virtual folders in Coding project")
        
    oid = ObjectId(project_id)
    
    # Check folder name uniqueness for project
    existing = folders_col.find_one({"project_id": oid, "name": payload.name})
    if existing or payload.name.lower() == "prompts folder":
        raise HTTPException(status_code=400, detail="Folder name must be unique in project")
        
    new_folder = {
        "project_id": oid,
        "name": payload.name,
        "description": payload.description
    }
    res = folders_col.insert_one(new_folder)
    new_folder["_id"] = res.inserted_id
    return serialize_doc(new_folder)

@router.post("/{project_id}/folders/{folder_id}/files", response_model=VirtualFileResponse)
async def create_virtual_file(
    project_id: str, folder_id: str, payload: VirtualFileCreate, current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    if project["type"] == "Coding":
        raise HTTPException(status_code=400, detail="Cannot create virtual files in Coding project")
        
    if folder_id == "prompts_folder":
        raise HTTPException(status_code=400, detail="Cannot add files to the prompts folder")
        
    # Verify folder
    try:
        f_oid = ObjectId(folder_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid folder ID format")
        
    folder = folders_col.find_one({"_id": f_oid, "project_id": ObjectId(project_id)})
    if not folder:
        raise HTTPException(status_code=404, detail="Parent folder not found in project")
        
    # Create file
    encrypted_name = encrypt_data(payload.name)
    encrypted_content = encrypt_data(payload.content)
    
    # Get last order value
    last_file = files_col.find_one(
        {"project_id": ObjectId(project_id), "folder_id": f_oid},
        sort=[("order", -1)]
    )
    next_order = (last_file.get("order", 0) + 1) if last_file else 1
    
    new_file = {
        "project_id": ObjectId(project_id),
        "folder_id": f_oid,
        "name": encrypted_name,
        "content": encrypted_content,
        "order": next_order
    }
    
    res = files_col.insert_one(new_file)
    new_file["_id"] = res.inserted_id
    
    decrypted = serialize_doc(new_file)
    decrypted["name"] = payload.name
    decrypted["content"] = payload.content
    return decrypted

@router.get("/{project_id}/files/{file_id}", response_model=VirtualFileResponse)
async def get_file_content(project_id: str, file_id: str, current_user: dict = Depends(get_current_user)):
    project = get_project_or_404(project_id, current_user)
    
    # Special Settings Prompts handler
    if file_id in ["continue_system_prompt", "continue_prompt", "revise_system_prompt", "revise_prompt"]:
        prompt_key = file_id
        prompts = project["settings"].get("prompts", {})
        content = prompts.get(prompt_key, "")
        name = file_id.replace("_", " ").title()
        
        return {
            "id": file_id,
            "project_id": project_id,
            "folder_id": "prompts_folder",
            "name": name,
            "content": content,
            "order": 0
        }
        
    # Disk File reader for Coding Project
    if project["type"] == "Coding":
        root = project["settings"].get("root_folder")
        if not root:
            raise HTTPException(status_code=400, detail="Root folder not configured")
        # file_id represents relative path here, replace hyphens/slashes as passed by frontend if needed
        # We assume file_id is passed as relative path string
        target_path = verify_path_in_root(root, file_id)
        if not os.path.exists(target_path) or os.path.isdir(target_path):
            raise HTTPException(status_code=404, detail="File not found")
        try:
            with open(target_path, "r", encoding="utf-8", errors="replace") as f:
                content = f.read()
            return {
                "id": file_id,
                "project_id": project_id,
                "folder_id": "root",
                "name": os.path.basename(target_path),
                "content": content,
                "order": 0
            }
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Read error: {str(e)}")

    # Standard database virtual file
    try:
        file_oid = ObjectId(file_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid file ID format")
        
    file_doc = files_col.find_one({"_id": file_oid, "project_id": ObjectId(project_id)})
    if not file_doc:
        raise HTTPException(status_code=404, detail="File not found")
        
    decrypted = serialize_doc(file_doc)
    decrypted["name"] = decrypt_data(file_doc.get("name", ""))
    decrypted["content"] = decrypt_data(file_doc.get("content", ""))
    return decrypted

@router.put("/{project_id}/files/{file_id}", response_model=VirtualFileResponse)
async def update_file(
    project_id: str, file_id: str, payload: VirtualFileUpdate, current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    
    # Special Settings Prompts updater
    if file_id in ["continue_system_prompt", "continue_prompt", "revise_system_prompt", "revise_prompt"]:
        prompt_key = file_id
        prompts = project["settings"].get("prompts", {})
        if payload.content is not None:
            prompts[prompt_key] = payload.content
            
        projects_col.update_one(
            {"_id": ObjectId(project_id)},
            {"$set": {"settings.prompts": prompts}}
        )
        
        name = file_id.replace("_", " ").title()
        return {
            "id": file_id,
            "project_id": project_id,
            "folder_id": "prompts_folder",
            "name": name,
            "content": payload.content or "",
            "order": 0
        }
        
    # Disk File saver for Coding Project
    if project["type"] == "Coding":
        root = project["settings"].get("root_folder")
        if not root:
            raise HTTPException(status_code=400, detail="Root folder not configured")
        target_path = verify_path_in_root(root, file_id)
        
        # Ensure parent folder exists
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        
        try:
            # Overwrite/Create
            with open(target_path, "w", encoding="utf-8") as f:
                f.write(payload.content or "")
            return {
                "id": file_id,
                "project_id": project_id,
                "folder_id": "root",
                "name": os.path.basename(target_path),
                "content": payload.content or "",
                "order": 0
            }
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Write error: {str(e)}")

    # Standard database virtual file
    try:
        file_oid = ObjectId(file_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid file ID format")
        
    file_doc = files_col.find_one({"_id": file_oid, "project_id": ObjectId(project_id)})
    if not file_doc:
        raise HTTPException(status_code=404, detail="File not found")
        
    update_data = {}
    if payload.name is not None:
        update_data["name"] = encrypt_data(payload.name)
    if payload.content is not None:
        update_data["content"] = encrypt_data(payload.content)
        
    if update_data:
        files_col.update_one({"_id": file_oid}, {"$set": update_data})
        
    updated_doc = files_col.find_one({"_id": file_oid})
    decrypted = serialize_doc(updated_doc)
    decrypted["name"] = decrypt_data(updated_doc.get("name", ""))
    decrypted["content"] = decrypt_data(updated_doc.get("content", ""))
    return decrypted

@router.delete("/{project_id}/files/{file_id}")
async def delete_file(project_id: str, file_id: str, current_user: dict = Depends(get_current_user)):
    project = get_project_or_404(project_id, current_user)
    
    if file_id in ["continue_system_prompt", "continue_prompt", "revise_system_prompt", "revise_prompt"]:
        raise HTTPException(status_code=400, detail="Cannot delete prompts files")
        
    if project["type"] == "Coding":
        root = project["settings"].get("root_folder")
        target_path = verify_path_in_root(root, file_id)
        if os.path.exists(target_path):
            os.remove(target_path)
        return {"message": "File deleted from disk."}
        
    try:
        file_oid = ObjectId(file_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid file ID format")
        
    res = files_col.delete_one({"_id": file_oid, "project_id": ObjectId(project_id)})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="File not found")
    return {"message": "Virtual File deleted."}

@router.delete("/{project_id}/folders/{folder_id}")
async def delete_folder(project_id: str, folder_id: str, current_user: dict = Depends(get_current_user)):
    project = get_project_or_404(project_id, current_user)
    if project["type"] == "Coding":
        root = project["settings"].get("root_folder")
        target_path = verify_path_in_root(root, folder_id)
        if os.path.exists(target_path) and os.path.isdir(target_path):
            import shutil
            shutil.rmtree(target_path)
        return {"message": "Directory deleted from disk."}
        
    try:
        folder_oid = ObjectId(folder_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid folder ID format")
        
    # Check if folder exists
    folder = folders_col.find_one({"_id": folder_oid, "project_id": ObjectId(project_id)})
    if not folder:
        raise HTTPException(status_code=404, detail="Folder not found")
        
    # Delete folder and its contents
    folders_col.delete_one({"_id": folder_oid})
    files_col.delete_many({"folder_id": folder_oid})
    
    return {"message": "Folder and contents deleted successfully."}

@router.put("/{project_id}/files/reorder")
async def reorder_files(
    project_id: str, payload: List[FileReorderPayload], current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    if project["type"] == "Coding":
        # Disk movements could be supported, but instructions specify:
        # "Explorer: Drag and drop Virtual Files between different folders... move them up or down"
        # Since Coding project doesn't use virtual files, we only support for Virtual Projects.
        raise HTTPException(status_code=400, detail="Reordering virtual files only supported in Virtual Projects")
        
    for p in payload:
        try:
            file_oid = ObjectId(p.file_id)
            target_folder_oid = ObjectId(p.target_folder_id)
        except Exception:
            continue
            
        files_col.update_one(
            {"_id": file_oid, "project_id": ObjectId(project_id)},
            {"$set": {
                "folder_id": target_folder_oid,
                "order": p.order
            }}
        )
    return {"message": "Files reordered successfully."}

# --- Kanban Board CRUD ---

@router.get("/{project_id}/cards", response_model=List[KanbanCardResponse])
async def get_project_cards(project_id: str, current_user: dict = Depends(get_current_user)):
    get_project_or_404(project_id, current_user)
    
    cursor = cards_col.find({"project_id": ObjectId(project_id)})
    cards = []
    for c in cursor:
        cards.append(serialize_doc(c))
    return cards

@router.post("/{project_id}/cards", response_model=KanbanCardResponse)
async def create_kanban_card(
    project_id: str, payload: KanbanCardCreate, current_user: dict = Depends(get_current_user)
):
    get_project_or_404(project_id, current_user)
    
    new_card = {
        "project_id": ObjectId(project_id),
        "title": payload.title,
        "description": payload.description,
        "phase": payload.phase,
        "assigned_to": payload.assigned_to,
        "comments": [],
        "created_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat()
    }
    
    res = cards_col.insert_one(new_card)
    new_card["_id"] = res.inserted_id
    return serialize_doc(new_card)

@router.put("/{project_id}/cards/{card_id}", response_model=KanbanCardResponse)
async def update_kanban_card(
    project_id: str, card_id: str, payload: KanbanCardUpdate, current_user: dict = Depends(get_current_user)
):
    get_project_or_404(project_id, current_user)
    
    try:
        card_oid = ObjectId(card_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid card ID format")
        
    card = cards_col.find_one({"_id": card_oid, "project_id": ObjectId(project_id)})
    if not card:
        raise HTTPException(status_code=404, detail="Card not found")
        
    update_data = {}
    if payload.title is not None:
        update_data["title"] = payload.title
    if payload.description is not None:
        update_data["description"] = payload.description
    if payload.phase is not None:
        update_data["phase"] = payload.phase
    if payload.assigned_to is not None:
        # Verify assigned users exist
        for u in payload.assigned_to:
            user_check = users_collection.find_one({"username": u})
            if not user_check:
                raise HTTPException(status_code=400, detail=f"Assignee '{u}' does not exist")
        update_data["assigned_to"] = payload.assigned_to
        
    update_data["updated_at"] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    
    cards_col.update_one({"_id": card_oid}, {"$set": update_data})
    
    updated_card = cards_col.find_one({"_id": card_oid})
    return serialize_doc(updated_card)

@router.delete("/{project_id}/cards/{card_id}")
async def delete_kanban_card(project_id: str, card_id: str, current_user: dict = Depends(get_current_user)):
    get_project_or_404(project_id, current_user)
    try:
        card_oid = ObjectId(card_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid card ID")
        
    res = cards_col.delete_one({"_id": card_oid, "project_id": ObjectId(project_id)})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Card not found")
    return {"message": "Card deleted successfully."}

@router.post("/{project_id}/cards/{card_id}/comments", response_model=KanbanCardResponse)
async def add_card_comment(
    project_id: str, card_id: str, payload: CardCommentCreate, current_user: dict = Depends(get_current_user)
):
    get_project_or_404(project_id, current_user)
    
    try:
        card_oid = ObjectId(card_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid card ID")
        
    new_comment = {
        "comment_id": str(uuid.uuid4()),
        "author": current_user["username"],
        "text": payload.text,
        "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "is_ai_response": False
    }
    
    cards_col.update_one(
        {"_id": card_oid, "project_id": ObjectId(project_id)},
        {
            "$push": {"comments": new_comment},
            "$set": {"updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat()}
        }
    )
    
    card = cards_col.find_one({"_id": card_oid})
    return serialize_doc(card)

# --- OpenRouter Integration and AI generation ---

@router.post("/{project_id}/cards/{card_id}/ai-response", response_model=KanbanCardResponse)
async def generate_ai_response(
    project_id: str, card_id: str, current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    
    # Verify Card
    try:
        card_oid = ObjectId(card_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid card ID format")
        
    card = cards_col.find_one({"_id": card_oid, "project_id": ObjectId(project_id)})
    if not card:
        raise HTTPException(status_code=404, detail="Card not found")
        
    # Get user settings for OpenRouter key
    settings = settings_collection.find_one({"username": current_user["username"]})
    openrouter_key = decrypt_data(settings.get("openrouter_api_key", "")) if settings else ""
    
    if not openrouter_key:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="OpenRouter API Key not configured. Please add it under Profile Settings."
        )
        
    # Gather Context: Project virtual files or disk files
    files_context = ""
    if project["type"] == "Coding":
        root = project["settings"].get("root_folder")
        if root and os.path.exists(root):
            try:
                # Get a brief overview of file-system files
                file_tree = []
                for root_dir, _, filenames in os.walk(root):
                    for f in filenames[:10]: # Limit to 10 files to keep prompt small
                        full = os.path.join(root_dir, f)
                        rel = os.path.relpath(full, root)
                        # read small snippet
                        snippet = ""
                        try:
                            with open(full, "r", encoding="utf-8", errors="ignore") as file_read:
                                snippet = file_read.read(500)
                        except:
                            pass
                        file_tree.append(f"File: {rel}\nSnippet: {snippet[:200]}...")
                files_context = "\n\n".join(file_tree)
            except Exception as e:
                files_context = f"Error reading file structure: {str(e)}"
    else:
        # Story or other virtual files
        vfiles = files_col.find({"project_id": ObjectId(project_id)})
        vfiles_list = []
        for vf in vfiles:
            name = decrypt_data(vf.get("name", ""))
            content = decrypt_data(vf.get("content", ""))
            vfiles_list.append(f"File: {name}\nContent:\n{content[:1000]}")
        files_context = "\n\n".join(vfiles_list)
        
    # Build comment history context
    history = ""
    for c in card.get("comments", []):
        author_type = "AI" if c.get("is_ai_response") else "User"
        history += f"[{author_type}] {c.get('author')}: {c.get('text')}\n"
        
    # Build prompts matching active file if Story Creation
    system_prompt = "You are an assistant helping write a story."
    user_prompt = "Help write the story section."
    
    # Story Creation project settings check
    model = project["settings"].get("default_openrouter_model") or "google/gemini-2.5-flash"
    max_tokens_map = {
        "Very Short": 1024,
        "Short": 2048,
        "Medium": 4096,
        "Large": 8192,
        "Extra Large": 16384,
        "Max": 32768,
        "Super Max": 65536
    }
    output_length = project["settings"].get("output_length", "Medium")
    max_tokens = max_tokens_map.get(output_length, 4096)
    
    if project["type"] == "Story Creation":
        prompts = project["settings"].get("prompts", {})
        system_prompt = prompts.get("continue_system_prompt") or "You are a helpful story creation assistant."
        user_prompt = f"{prompts.get('continue_prompt') or 'Continue writing the story.'}\n\nProject Context:\nLanguage: {project['settings'].get('language', 'English')}\nStory Type: {', '.join(project['settings'].get('story_type', []))}"
        
    # Final consolidated user content
    consolidated_user_content = f"""{user_prompt}
    
Kanban Ticket Details:
Title: {card.get('title')}
Description: {card.get('description')}

Discussion Thread History:
{history}

Project Files Context:
{files_context}

Please respond with helpful content, suggestions, or continuation. Do not include markdown code wrappers unless writing actual code block files."""

    # Call OpenRouter API
    try:
        url = "https://openrouter.ai/api/v1/chat/completions"
        payload_data = {
            "model": model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": consolidated_user_content}
            ],
            "max_tokens": max_tokens
        }
        
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {openrouter_key}",
            "HTTP-Referer": "http://localhost:5173", # Optional referer
            "X-Title": "Comprehensive AI Assistant"
        }
        
        req = urllib.request.Request(
            url, 
            data=json.dumps(payload_data).encode("utf-8"),
            headers=headers,
            method="POST"
        )
        
        with urllib.request.urlopen(req, timeout=30) as response:
            res_body = json.loads(response.read().decode("utf-8"))
            
        choices = res_body.get("choices", [])
        if not choices:
            raise HTTPException(status_code=502, detail="Failed to get valid output choices from OpenRouter")
            
        reply_text = choices[0]["message"]["content"]
        finish_reason = choices[0].get("finish_reason", "stop")
        
        # Token metrics
        usage = res_body.get("usage", {})
        input_tokens = usage.get("prompt_tokens", 0)
        output_tokens = usage.get("completion_tokens", 0)
        
        # Calculate cost
        cost = estimate_cost(model, input_tokens, output_tokens)
        
        # Log to Database
        log_entry = {
            "project_id": ObjectId(project_id),
            "username": current_user["username"],
            "model_used": model,
            "input_tokens": input_tokens,
            "output_tokens": output_tokens,
            "cost": cost,
            "finish_reason": finish_reason,
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat()
        }
        logs_col.insert_one(log_entry)
        
        # Add comment to card
        ai_comment = {
            "comment_id": str(uuid.uuid4()),
            "author": f"AI ({model.split('/')[-1]})",
            "text": reply_text,
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "is_ai_response": True
        }
        
        cards_col.update_one(
            {"_id": card_oid},
            {
                "$push": {"comments": ai_comment},
                "$set": {"updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat()}
            }
        )
        
        updated_card = cards_col.find_one({"_id": card_oid})
        return serialize_doc(updated_card)
        
    except urllib.error.HTTPError as he:
        err_msg = he.read().decode("utf-8")
        try:
            err_json = json.loads(err_msg)
            msg = err_json.get("error", {}).get("message", err_msg)
        except:
            msg = err_msg
        raise HTTPException(status_code=he.code, detail=f"OpenRouter Error: {msg}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI Invocation Failed: {str(e)}")

# --- Logs Retrospective ---

@router.get("/{project_id}/logs", response_model=List[AILogResponse])
async def get_project_ai_logs(project_id: str, current_user: dict = Depends(get_current_user)):
    get_project_or_404(project_id, current_user)
    
    cursor = logs_col.find({"project_id": ObjectId(project_id)}).sort("timestamp", -1)
    logs = []
    for l in cursor:
        logs.append(serialize_doc(l))
    return logs
