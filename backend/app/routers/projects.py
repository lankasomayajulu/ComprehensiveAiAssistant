import os
import re
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
    CardCommentCreate, CardCommentResponse, AILogResponse, FileReorderPayload,
    StoryContinuePayload, AIResponsePayload
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

def safe_decrypt_data(val: str) -> str:
    if not val:
        return ""
    decrypted = decrypt_data(val)
    if decrypted == "" and val != "":
        return val
    return decrypted

def encrypt_card_doc(card_doc: dict) -> dict:
    if not card_doc:
        return card_doc
    if "title" in card_doc and card_doc["title"]:
        card_doc["title"] = encrypt_data(card_doc["title"])
    if "description" in card_doc and card_doc["description"]:
        card_doc["description"] = encrypt_data(card_doc["description"])
    if "comments" in card_doc:
        for c in card_doc["comments"]:
            if "text" in c and c["text"]:
                c["text"] = encrypt_data(c["text"])
    return card_doc

def decrypt_card_doc(card_doc: dict) -> dict:
    if not card_doc:
        return card_doc
    if "title" in card_doc and card_doc["title"]:
        card_doc["title"] = safe_decrypt_data(card_doc["title"])
    if "description" in card_doc and card_doc["description"]:
        card_doc["description"] = safe_decrypt_data(card_doc["description"])
    if "comments" in card_doc:
        for c in card_doc["comments"]:
            if "text" in c and c["text"]:
                c["text"] = safe_decrypt_data(c["text"])
    return card_doc

def decrypt_log_doc(log: dict) -> dict:
    if not log:
        return log
    if "request_text" in log and log["request_text"]:
        log["request_text"] = safe_decrypt_data(log["request_text"])
    if "output_text" in log and log["output_text"]:
        log["output_text"] = safe_decrypt_data(log["output_text"])
    return log


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

@router.get("/admin/ai-logs-stats")
async def get_admin_ai_logs_stats(current_user: dict = Depends(get_current_user)):
    if current_user["role"] != "administrator":
        raise HTTPException(status_code=403, detail="Only administrators can access global stats")
    
    # Aggregation for project stats
    pipeline_project = [
        {
            "$group": {
                "_id": "$project_id",
                "count": {"$sum": 1},
                "total_cost": {"$sum": "$cost"}
            }
        }
    ]
    project_logs = list(logs_col.aggregate(pipeline_project))
    
    project_stats = []
    for item in project_logs:
        p_id = item["_id"]
        proj = projects_col.find_one({"_id": ObjectId(p_id)}) if p_id else None
        p_name = proj["name"] if proj else "Unknown Project"
        project_stats.append({
            "project_name": p_name,
            "count": item["count"],
            "total_cost": round(item["total_cost"], 6)
        })
        
    # Aggregation for user stats
    pipeline_user = [
        {
            "$group": {
                "_id": "$username",
                "count": {"$sum": 1},
                "total_cost": {"$sum": "$cost"}
            }
        }
    ]
    user_logs = list(logs_col.aggregate(pipeline_user))
    
    user_stats = []
    for item in user_logs:
        user_stats.append({
            "username": item["_id"] or "Unknown User",
            "count": item["count"],
            "total_cost": round(item["total_cost"], 6)
        })
        
    return {
        "by_project": project_stats,
        "by_user": user_stats
    }

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
        cards.append(serialize_doc(decrypt_card_doc(c)))
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
    
    db_card = encrypt_card_doc(dict(new_card))
    res = cards_col.insert_one(db_card)
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
        update_data["title"] = encrypt_data(payload.title)
    if payload.description is not None:
        update_data["description"] = encrypt_data(payload.description)
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
    return serialize_doc(decrypt_card_doc(updated_card))

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
    
    db_comment = dict(new_comment)
    db_comment["text"] = encrypt_data(payload.text)
    
    cards_col.update_one(
        {"_id": card_oid, "project_id": ObjectId(project_id)},
        {
            "$push": {"comments": db_comment},
            "$set": {"updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat()}
        }
    )
    
    card = cards_col.find_one({"_id": card_oid})
    return serialize_doc(decrypt_card_doc(card))

@router.post("/{project_id}/cards/{card_id}/ai-response", response_model=KanbanCardResponse)
async def generate_ai_response(
    project_id: str, card_id: str, payload: AIResponsePayload, current_user: dict = Depends(get_current_user)
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
        
    # Decrypt Card
    card = decrypt_card_doc(card)
        
    # Get user settings for OpenRouter key
    settings = settings_collection.find_one({"username": current_user["username"]})
    openrouter_key = decrypt_data(settings.get("openrouter_api_key", "")) if settings else ""
    
    if not openrouter_key:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="OpenRouter API Key not configured. Please add it under Profile Settings."
        )

    # Determine prompts, context, and file generation if applicable
    model = payload.current_model or project["settings"].get("default_openrouter_model") or "google/gemini-2.5-flash"
    
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
    
    # Collect all project files for context & spelling autocorrection
    files_context = ""
    vfiles_list = []
    if project["type"] == "Coding":
        root = project["settings"].get("root_folder")
        if root and os.path.exists(root):
            try:
                file_tree = []
                for root_dir, _, filenames in os.walk(root):
                    for f in filenames[:10]:
                        full = os.path.join(root_dir, f)
                        rel = os.path.relpath(full, root)
                        snippet = ""
                        try:
                            with open(full, "r", encoding="utf-8", errors="ignore") as file_read:
                                snippet = file_read.read(500)
                        except:
                            pass
                        file_tree.append(f"File Relative Path: {rel}\nSnippet: {snippet[:200]}...")
                files_context = "\n\n".join(file_tree)
            except Exception as e:
                files_context = f"Error reading file structure: {str(e)}"
    else:
        vfiles = files_col.find({"project_id": ObjectId(project_id)})
        for vf in vfiles:
            name = safe_decrypt_data(vf.get("name", ""))
            content = safe_decrypt_data(vf.get("content", ""))
            vfiles_list.append(f"File Name: '{name}'\nContent:\n{content}\n---")
        files_context = "\n\n".join(vfiles_list)
        
    # Get conversation history
    history = ""
    for c in card.get("comments", []):
        author_type = "AI" if c.get("is_ai_response") else "User"
        history += f"[{author_type}] {c.get('author')}: {c.get('text')}\n"

    # Set up story instructions
    prompts = project["settings"].get("prompts", {})
    continue_system = prompts.get("continue_system_prompt") or "You are a helpful story creation assistant."
    continue_prompt = prompts.get("continue_prompt") or "Continue writing the story."
    revise_system = prompts.get("revise_system_prompt") or "You are a helpful story editor assistant."
    revise_prompt = prompts.get("revise_prompt") or "Please revise the text below according to the request."

    system_prompt = f"""You are an advanced creative story writing AI agent. You act like a software engineering coding agent, but specifically for creative stories and story virtual files.

Your role:
1. Carefully analyze the Kanban Ticket title, description, and the replies history.
2. Read the discussion thread history to understand the user's prompt, feedback, revisions, and replies.
3. Review all available project files provided under "Project Files Context".
4. Determine the appropriate inputs and outputs:
   - Identify which files are referred to as input. Autocorrect any typos or spelling mistakes (e.g. "Ploy Idea" -> "Plot Idea") to match the actual available filenames.
   - Read the content of these input files to generate high-quality text that fits perfectly.
   - Identify the output file name where the text should be saved. If no output file name is explicitly specified in the ticket or discussion thread, use your imagination and creativity to invent an appropriate, meaningful filename (e.g. "Chapter 3 Scene 7").
5. Handle revision requests:
   - If the user's latest comment asks for a revision (e.g. "I did not like Paragraph 2. Revise it."), locate the target file in the project, review its current content, make the requested change, and output the entire updated file content.
6. Handle planning or general creative questions:
   - If the user is asking for general creative suggestions (e.g. "plan next chapter"), generate a plan. If it doesn't require creating/updating a file, simply write a reply.
7. You must respond in a specific XML format so the system can automatically parse and write files:
   <thread_response>
   Provide a helpful, detailed comment to be displayed in the forum discussion thread. Summarize the changes or what you did, and reference the file created/updated.
   </thread_response>
   
   If you created or updated a file, include the following tags:
   <file_update>
     <filename>Name of the file (e.g. Chapter 3 Scene 7)</filename>
     <content>
     The complete, full content of the file. Do NOT surround this content with markdown code wrappers. Output the raw text of the story/document.
     </content>
   </file_update>
"""

    consolidated_user_content = f"""
Language of Story: {project["settings"].get("language", "English")}
Story Type/Genres: {', '.join(project["settings"].get("story_type", []))}

Kanban Ticket Details:
Title: {card.get('title')}
Description: {card.get('description')}

Discussion Thread History:
{history}

Project Files Context:
{files_context}

Please respond using the XML structure (<thread_response> and optional <file_update>).
"""

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
            "HTTP-Referer": "http://localhost:5173",
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
        
        # Parse XML Response
        thread_match = re.search(r"<thread_response>(.*?)</thread_response>", reply_text, re.DOTALL | re.IGNORECASE)
        comment_text = thread_match.group(1).strip() if thread_match else reply_text
        
        file_update_match = re.search(r"<file_update>(.*?)</file_update>", reply_text, re.DOTALL | re.IGNORECASE)
        if file_update_match and project["type"] == "Story Creation":
            inner_content = file_update_match.group(1)
            filename_match = re.search(r"<filename>(.*?)</filename>", inner_content, re.DOTALL | re.IGNORECASE)
            content_match = re.search(r"<content>(.*?)</content>", inner_content, re.DOTALL | re.IGNORECASE)
            
            if filename_match and content_match:
                final_file_name = filename_match.group(1).strip()
                file_content = content_match.group(1).strip()
                
                # Check for chapter info to find/create folder
                chapter_info = ""
                card_title = card.get("title", "")
                ch_match = re.search(r'(Chapter\s*\d+)', card_title, re.IGNORECASE)
                if ch_match:
                    chapter_info = ch_match.group(1).title()
                
                # If chapter is in title but not file name, we can prefix or keep as is.
                target_folder_name = chapter_info if chapter_info else "Story Folders"
                
                # Find or create virtual folder
                folder_doc = folders_col.find_one({"project_id": ObjectId(project_id), "name": target_folder_name})
                if not folder_doc:
                    new_folder = {
                        "project_id": ObjectId(project_id),
                        "name": target_folder_name,
                        "description": f"Folder for {target_folder_name}"
                    }
                    folders_col.insert_one(new_folder)
                    folder_id = new_folder["_id"]
                else:
                    folder_id = folder_doc["_id"]
                
                enc_name = encrypt_data(final_file_name)
                enc_content = encrypt_data(file_content)
                
                # Try to find if this file exists in any folder (in case it is an update/revision)
                existing_file = files_col.find_one({"project_id": ObjectId(project_id), "name": enc_name})
                if existing_file:
                    files_col.update_one({"_id": existing_file["_id"]}, {"$set": {"content": enc_content}})
                else:
                    # Place in folder
                    last_file = files_col.find_one({"project_id": ObjectId(project_id), "folder_id": ObjectId(folder_id)}, sort=[("order", -1)])
                    next_order = (last_file.get("order", 0) + 1) if last_file else 1
                    new_file = {
                        "project_id": ObjectId(project_id),
                        "folder_id": ObjectId(folder_id),
                        "name": enc_name,
                        "content": enc_content,
                        "order": next_order
                    }
                    files_col.insert_one(new_file)
            
        # Log to Database
        log_entry = {
            "project_id": ObjectId(project_id),
            "username": current_user["username"],
            "model_used": model,
            "input_tokens": input_tokens,
            "output_tokens": output_tokens,
            "cost": cost,
            "finish_reason": finish_reason,
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "request_text": encrypt_data(consolidated_user_content),
            "output_text": encrypt_data(reply_text)
        }
        logs_col.insert_one(log_entry)
        
        # Add comment to card
        ai_comment = {
            "comment_id": str(uuid.uuid4()),
            "author": f"AI ({model.split('/')[-1]})",
            "text": comment_text,
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "is_ai_response": True
        }
        
        db_ai_comment = dict(ai_comment)
        db_ai_comment["text"] = encrypt_data(comment_text)
        
        cards_col.update_one(
            {"_id": card_oid},
            {
                "$push": {"comments": db_ai_comment},
                "$set": {"updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat()}
            }
        )
        
        updated_card = cards_col.find_one({"_id": card_oid})
        return serialize_doc(decrypt_card_doc(updated_card))
        
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
        logs.append(serialize_doc(decrypt_log_doc(l)))
    return logs

@router.post("/{project_id}/generate-prompt")
async def generate_story_system_prompt(project_id: str, current_user: dict = Depends(get_current_user)):
    project = get_project_or_404(project_id, current_user)
    if project["type"] != "Story Creation":
        raise HTTPException(status_code=400, detail="Only Story Creation projects support prompt generation")
    
    settings = settings_collection.find_one({"username": current_user["username"]})
    openrouter_key = decrypt_data(settings.get("openrouter_api_key", "")) if settings else ""
    if not openrouter_key:
        raise HTTPException(status_code=400, detail="OpenRouter API Key not configured")
    
    story_types = project["settings"].get("story_type", [])
    language = project["settings"].get("language", "English")
    
    prompt_instructions = f"""You are an expert creative writing AI prompt engineer.
Generate a professional, detailed, and highly effective "Continue System Prompt" for an AI writing assistant.
The story genres/tags are: {", ".join(story_types)}.
The language of the story is: {language}.

The generated system prompt should instruct the AI on:
1. How to maintain the tone and conventions of these genres ({", ".join(story_types)}).
2. Stylistic guidelines, pacing, vocabulary, and formatting appropriate for these genres in {language}.
3. Avoiding generic filler and creating engaging narrative continuation.

Output ONLY the generated prompt content. Do NOT include any markdown code wrappers, intro text ("Here is your prompt:"), or outro text. Simply output the text of the prompt itself."""
    
    model = project["settings"].get("default_openrouter_model") or "google/gemini-2.5-flash"
    
    try:
        url = "https://openrouter.ai/api/v1/chat/completions"
        payload_data = {
            "model": model,
            "messages": [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt_instructions}
            ],
            "max_tokens": 2048
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {openrouter_key}",
            "HTTP-Referer": "http://localhost:5173",
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
        
        reply_text = res_body["choices"][0]["message"]["content"].strip()
        return {"prompt": reply_text}
    except Exception as e:
        fallback = f"You are a helpful story creation assistant. Write in {language} focusing on {', '.join(story_types)} genres. Maintain high descriptive quality, realistic dialogue, and appropriate pacing."
        return {"prompt": fallback}

@router.post("/{project_id}/continue-story")
async def continue_story(
    project_id: str, payload: StoryContinuePayload, current_user: dict = Depends(get_current_user)
):
    project = get_project_or_404(project_id, current_user)
    if project["type"] != "Story Creation":
        raise HTTPException(status_code=400, detail="Only Story Creation projects support continuation")
    
    # Verify OpenRouter key
    settings = settings_collection.find_one({"username": current_user["username"]})
    openrouter_key = decrypt_data(settings.get("openrouter_api_key", "")) if settings else ""
    if not openrouter_key:
        raise HTTPException(status_code=400, detail="OpenRouter API Key not configured")
        
    # Get active file
    try:
        active_oid = ObjectId(payload.active_file_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid active file ID")
        
    active_file = files_col.find_one({"_id": active_oid, "project_id": ObjectId(project_id)})
    if not active_file:
        raise HTTPException(status_code=404, detail="Active file not found")
        
    active_name = safe_decrypt_data(active_file.get("name", ""))
    active_content = safe_decrypt_data(active_file.get("content", ""))
    
    # Get selected files content
    selected_context = []
    for file_id in payload.selected_file_ids:
        try:
            f_oid = ObjectId(file_id)
        except Exception:
            continue
        f_doc = files_col.find_one({"_id": f_oid, "project_id": ObjectId(project_id)})
        if f_doc:
            f_name = safe_decrypt_data(f_doc.get("name", ""))
            f_content = safe_decrypt_data(f_doc.get("content", ""))
            selected_context.append(f"File: {f_name}\nContent:\n{f_content}")
            
    files_context = "\n\n".join(selected_context)
    
    # Retrieve prompts
    prompts = project["settings"].get("prompts", {})
    system_prompt = prompts.get("continue_system_prompt") or "You are a helpful story creation assistant."
    user_prompt = f"{prompts.get('continue_prompt') or 'Continue writing the story.'}\n\nProject Context:\nLanguage: {project['settings'].get('language', 'English')}\nStory Type: {', '.join(project['settings'].get('story_type', []))}"
    
    consolidated_user_content = f"""{user_prompt}

Current Draft Story Content (Active File '{active_name}'):
{active_content}

Selected Reference Materials Context:
{files_context}

Please write the continuation of the story. Do not include markdown code wrappers unless writing actual code block files."""

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
    
    try:
        url = "https://openrouter.ai/api/v1/chat/completions"
        req_payload = {
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
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "Comprehensive AI Assistant"
        }
        
        req = urllib.request.Request(
            url,
            data=json.dumps(req_payload).encode("utf-8"),
            headers=headers,
            method="POST"
        )
        
        with urllib.request.urlopen(req, timeout=30) as response:
            res_body = json.loads(response.read().decode("utf-8"))
            
        reply_text = res_body["choices"][0]["message"]["content"]
        usage = res_body.get("usage", {})
        input_tokens = usage.get("prompt_tokens", 0)
        output_tokens = usage.get("completion_tokens", 0)
        cost = estimate_cost(model, input_tokens, output_tokens)
        finish_reason = res_body["choices"][0].get("finish_reason", "stop")
        
        # Append continuation to active file
        new_content = active_content + "\n\n" + reply_text
        files_col.update_one(
            {"_id": active_oid},
            {"$set": {"content": encrypt_data(new_content)}}
        )
        
        # Detect chapter number
        ch_match = re.search(r'(Chapter\s*\d+)', active_name, re.IGNORECASE)
        if not ch_match:
            ch_match = re.search(r'#+\s*(Chapter\s*\d+)', active_content, re.IGNORECASE)
        
        detected_chapter = ch_match.group(1).title() if ch_match else "Chapter Continuation"
        
        # Create Kanban card automatically
        new_card = {
            "project_id": ObjectId(project_id),
            "title": f"Continuation - {detected_chapter}",
            "description": f"Automatically created card for story continuation of active file '{active_name}'.",
            "phase": "Completed",
            "assigned_to": [current_user["username"]],
            "comments": [],
            "created_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat()
        }
        
        # AI response comment
        ai_comment = {
            "comment_id": str(uuid.uuid4()),
            "author": f"AI ({model.split('/')[-1]})",
            "text": reply_text,
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "is_ai_response": True
        }
        
        db_ai_comment = dict(ai_comment)
        db_ai_comment["text"] = encrypt_data(reply_text)
        new_card["comments"].append(db_ai_comment)
        
        db_card = encrypt_card_doc(dict(new_card))
        cards_res = cards_col.insert_one(db_card)
        new_card["id"] = str(cards_res.inserted_id)
        
        # Log to Database
        log_entry = {
            "project_id": ObjectId(project_id),
            "username": current_user["username"],
            "model_used": model,
            "input_tokens": input_tokens,
            "output_tokens": output_tokens,
            "cost": cost,
            "finish_reason": finish_reason,
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "request_text": encrypt_data(consolidated_user_content),
            "output_text": encrypt_data(reply_text)
        }
        logs_col.insert_one(log_entry)
        
        # Return decrypted card structure
        new_card["title"] = safe_decrypt_data(db_card.get("title", ""))
        new_card["description"] = safe_decrypt_data(db_card.get("description", ""))
        new_card["comments"][0]["text"] = reply_text
        
        return {
            "new_content": new_content,
            "detected_chapter": detected_chapter,
            "card": new_card
        }
        
    except urllib.error.HTTPError as he:
        err_msg = he.read().decode("utf-8")
        try:
            err_json = json.loads(err_msg)
            msg = err_json.get("error", {}).get("message", err_msg)
        except:
            msg = err_msg
        raise HTTPException(status_code=he.code, detail=f"OpenRouter Error: {msg}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Story Continuation Failed: {str(e)}")

@router.delete("/{project_id}/logs/{log_id}")
async def delete_individual_log(project_id: str, log_id: str, current_user: dict = Depends(get_current_user)):
    get_project_or_404(project_id, current_user)
    try:
        log_oid = ObjectId(log_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid log ID format")
    
    res = logs_col.delete_one({"_id": log_oid, "project_id": ObjectId(project_id)})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Log entry not found")
    return {"message": "AI log entry deleted successfully."}

@router.delete("/{project_id}/logs/by-month/{year}/{month}")
async def delete_logs_by_month(project_id: str, year: int, month: int, current_user: dict = Depends(get_current_user)):
    get_project_or_404(project_id, current_user)
    
    month_str = f"{month:02d}"
    prefix = f"{year}-{month_str}"
    
    res = logs_col.delete_many({
        "project_id": ObjectId(project_id),
        "timestamp": {"$regex": f"^{prefix}"}
    })
    return {"message": f"Deleted {res.deleted_count} logs for {prefix} successfully."}

@router.delete("/{project_id}/logs/by-year/{year}")
async def delete_logs_by_year(project_id: str, year: int, current_user: dict = Depends(get_current_user)):
    get_project_or_404(project_id, current_user)
    
    prefix = f"{year}"
    res = logs_col.delete_many({
        "project_id": ObjectId(project_id),
        "timestamp": {"$regex": f"^{prefix}"}
    })
    return {"message": f"Deleted {res.deleted_count} logs for year {prefix} successfully."}
