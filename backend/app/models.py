from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any

class UserLogin(BaseModel):
    username: str = Field(..., min_length=1, max_length=50)
    password: str = Field(..., min_length=1)

class UserCreate(BaseModel):
    username: str = Field(..., min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_-]+$")
    password: str = Field(..., min_length=4)
    role: str = Field("normal_user", pattern=r"^(administrator|normal_user)$")

class PasswordChange(BaseModel):
    new_password: str = Field(..., min_length=4)

class AdminPasswordChange(BaseModel):
    username: str = Field(..., min_length=1)
    new_password: str = Field(..., min_length=4)

class UserSettingsUpdate(BaseModel):
    openrouter_api_key: Optional[str] = Field("", max_length=200)
    google_ai_key: Optional[str] = Field("", max_length=200)
    theme: Optional[str] = Field("dark", max_length=20)

class UserResponse(BaseModel):
    username: str
    role: str

class UserSettingsResponse(BaseModel):
    openrouter_api_key: str
    google_ai_key: str
    theme: str

class AIResponsePayload(BaseModel):
    current_model: Optional[str] = ""

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    username: str
    role: str

# --- Kanban and Project Manager Schemas ---

class StoryPrompts(BaseModel):
    continue_system_prompt: str = ""
    continue_prompt: str = ""
    revise_system_prompt: str = ""
    revise_prompt: str = ""

class ProjectSettings(BaseModel):
    default_openrouter_model: str = ""
    favorite_models: List[str] = []
    reasoning_length: str = "Minimal"
    output_length: str = "Medium"
    # Story creation specific
    story_type: List[str] = []
    language: str = ""
    chapters: int = 1
    # Coding specific
    root_folder: str = ""
    # Story prompts
    prompts: StoryPrompts = Field(default_factory=StoryPrompts)

class ProjectCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    type: str = Field(..., pattern=r"^(Story Creation|Coding|Audio Generation|Image Generation|Video Generation)$")
    description: str = ""
    settings: Optional[ProjectSettings] = None

class ProjectUpdateSettings(BaseModel):
    settings: ProjectSettings

class ProjectUpdateContributors(BaseModel):
    contributing_users: List[str]

class ProjectResponse(BaseModel):
    id: str
    name: str
    type: str
    description: str
    author: str
    contributing_users: List[str]
    created_at: str
    settings: ProjectSettings

class VirtualFolderCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: str = ""

class VirtualFolderResponse(BaseModel):
    id: str
    project_id: str
    name: str
    description: str

class VirtualFileCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    content: str = ""

class VirtualFileUpdate(BaseModel):
    name: Optional[str] = None
    content: Optional[str] = None

class VirtualFileResponse(BaseModel):
    id: str
    project_id: str
    folder_id: str
    name: str
    content: str
    order: int

class FileReorderPayload(BaseModel):
    file_id: str
    target_folder_id: str
    order: int

class CardCommentCreate(BaseModel):
    text: str = Field(..., min_length=1)

class CardCommentResponse(BaseModel):
    comment_id: str
    author: str
    text: str
    timestamp: str
    is_ai_response: bool

class KanbanCardCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    description: str = ""
    phase: str = Field("Not Started", pattern=r"^(Not Started|In Development|Testing|Review|Completed)$")
    assigned_to: List[str] = []

class KanbanCardUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    phase: Optional[str] = None
    assigned_to: Optional[List[str]] = None

class KanbanCardResponse(BaseModel):
    id: str
    project_id: str
    title: str
    description: str
    phase: str
    assigned_to: List[str]
    comments: List[CardCommentResponse]
    created_at: str
    updated_at: str

class AILogResponse(BaseModel):
    id: str
    project_id: str
    username: str
    model_used: str
    input_tokens: int
    output_tokens: int
    cost: float
    finish_reason: str
    timestamp: str
    request_text: Optional[str] = None
    output_text: Optional[str] = None

class StoryContinuePayload(BaseModel):
    active_file_id: str
    selected_file_ids: List[str]

