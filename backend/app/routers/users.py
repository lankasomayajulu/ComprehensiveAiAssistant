from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
import datetime
from ..database import users_collection, settings_collection
from ..auth import (
    verify_password, 
    get_password_hash, 
    create_access_token, 
    get_current_user, 
    get_admin_user
)
from ..models import (
    UserLogin, 
    UserCreate, 
    PasswordChange, 
    AdminPasswordChange, 
    UserSettingsUpdate, 
    UserResponse, 
    UserSettingsResponse, 
    TokenResponse
)
from ..secrets_manager import encrypt_data, decrypt_data

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/login", response_model=TokenResponse)
async def login(credentials: UserLogin):
    """
    Authenticate user and return a JWT access token.
    """
    user = users_collection.find_one({"username": credentials.username})
    if not user or not verify_password(credentials.password, user["password_hash"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    
    # Generate token
    token_data = {"sub": user["username"], "role": user["role"]}
    access_token = create_access_token(data=token_data)
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "username": user["username"],
        "role": user["role"]
    }

@router.get("/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    """
    Get profile details of the current logged-in user.
    """
    return {
        "username": current_user["username"],
        "role": current_user["role"]
    }

@router.put("/me/password")
async def change_my_password(payload: PasswordChange, current_user: dict = Depends(get_current_user)):
    """
    Change password of the current logged-in user.
    """
    new_hashed = get_password_hash(payload.new_password)
    users_collection.update_one(
        {"username": current_user["username"]},
        {"$set": {"password_hash": new_hashed}}
    )
    return {"message": "Password changed successfully."}

@router.get("/me/settings", response_model=UserSettingsResponse)
async def get_my_settings(current_user: dict = Depends(get_current_user)):
    """
    Retrieve OpenRouter and Google AI API keys for the current user.
    """
    settings = settings_collection.find_one({"username": current_user["username"]})
    if not settings:
        return {"openrouter_api_key": "", "google_ai_key": ""}
    return {
        "openrouter_api_key": decrypt_data(settings.get("openrouter_api_key", "")),
        "google_ai_key": decrypt_data(settings.get("google_ai_key", ""))
    }

@router.put("/me/settings")
async def update_my_settings(payload: UserSettingsUpdate, current_user: dict = Depends(get_current_user)):
    """
    Save or update API keys in the settings collection.
    """
    encrypted_openrouter = encrypt_data(payload.openrouter_api_key or "")
    encrypted_google = encrypt_data(payload.google_ai_key or "")
    
    settings_collection.update_one(
        {"username": current_user["username"]},
        {
            "$set": {
                "openrouter_api_key": encrypted_openrouter,
                "google_ai_key": encrypted_google,
                "updated_at": datetime.datetime.now(datetime.timezone.utc)
            }
        },
        upsert=True
    )
    return {"message": "User settings updated successfully."}

# ==================== ADMIN ONLY ROUTE ENDPOINTS ====================

@router.get("/", response_model=List[UserResponse])
async def list_users(admin_user: dict = Depends(get_admin_user)):
    """
    List all registered users (excluding password hashes).
    """
    cursor = users_collection.find({}, {"username": 1, "role": 1})
    users = []
    for doc in cursor:
        users.append({
            "username": doc["username"],
            "role": doc["role"]
        })
    return users

@router.post("/create", response_model=UserResponse)
async def create_user(payload: UserCreate, admin_user: dict = Depends(get_admin_user)):
    """
    Register a new user in the system with a specified role (Admin only).
    """
    # Check if username exists
    existing = users_collection.find_one({"username": payload.username})
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists"
        )
    
    hashed_password = get_password_hash(payload.password)
    new_user = {
        "username": payload.username,
        "password_hash": hashed_password,
        "role": payload.role,
        "created_at": datetime.datetime.now(datetime.timezone.utc)
    }
    
    users_collection.insert_one(new_user)
    return {
        "username": payload.username,
        "role": payload.role
    }

@router.put("/change-password")
async def admin_change_password(payload: AdminPasswordChange, admin_user: dict = Depends(get_admin_user)):
    """
    Force change password of any user (Admin only).
    """
    user = users_collection.find_one({"username": payload.username})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    # Prevent admin from locking themselves out via this endpoint if needed, but standard force change is allowed.
    new_hashed = get_password_hash(payload.new_password)
    users_collection.update_one(
        {"username": payload.username},
        {"$set": {"password_hash": new_hashed}}
    )
    return {"message": f"Password for user '{payload.username}' changed successfully."}
