import unittest
import sys
import os
import datetime
from bson import ObjectId

# Set test database name before importing backend modules
os.environ["MONGO_DB_NAME"] = "AI_Assistant_test_db"

# Adjust paths to import backend modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi.testclient import TestClient
from backend.app.main import app
from backend.app.database import db, users_collection
from backend.app.auth import get_password_hash, create_access_token
from backend.app.secrets_manager import decrypt_data

class TestProjectsRouter(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)
        
        # Seed test users
        users_collection.delete_many({"username": {"$in": ["test_author", "test_contrib", "test_unauth"]}})
        
        hashed = get_password_hash("password123")
        cls.author_user = {
            "username": "test_author",
            "password_hash": hashed,
            "role": "normal_user",
            "created_at": datetime.datetime.utcnow()
        }
        cls.contrib_user = {
            "username": "test_contrib",
            "password_hash": hashed,
            "role": "normal_user",
            "created_at": datetime.datetime.utcnow()
        }
        cls.unauth_user = {
            "username": "test_unauth",
            "password_hash": hashed,
            "role": "normal_user",
            "created_at": datetime.datetime.utcnow()
        }
        
        users_collection.insert_many([cls.author_user, cls.contrib_user, cls.unauth_user])
        
        # Generate tokens
        cls.author_token = create_access_token({"sub": "test_author", "role": "normal_user"})
        cls.contrib_token = create_access_token({"sub": "test_contrib", "role": "normal_user"})
        cls.unauth_token = create_access_token({"sub": "test_unauth", "role": "normal_user"})

    @classmethod
    def tearDownClass(cls):
        # Clean up test users
        users_collection.delete_many({"username": {"$in": ["test_author", "test_contrib", "test_unauth"]}})

    def setUp(self):
        # Clean projects, folders, files, cards
        db["projects"].delete_many({})
        db["virtual_folders"].delete_many({})
        db["virtual_files"].delete_many({})
        db["kanban_cards"].delete_many({})

    def test_project_crud(self):
        headers = {"Authorization": f"Bearer {self.author_token}"}
        
        # Create Project
        payload = {
            "name": "Test Adventure Story",
            "type": "Story Creation",
            "description": "An epic testing quest",
            "settings": {
                "default_openrouter_model": "google/gemini-2.5-flash",
                "favorite_models": ["google/gemini-2.5-flash"],
                "reasoning_length": "Minimal",
                "output_length": "Medium",
                "story_type": ["Adventure"],
                "language": "English",
                "chapters": 3,
                "root_folder": ""
            }
        }
        
        response = self.client.post("/api/projects", json=payload, headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        project_id = data["id"]
        self.assertEqual(data["name"], "Test Adventure Story")
        self.assertEqual(data["author"], "test_author")
        
        # Add contributor
        contrib_payload = {"contributing_users": ["test_contrib"]}
        res_contrib = self.client.put(f"/api/projects/{project_id}/contributors", json=contrib_payload, headers=headers)
        self.assertEqual(res_contrib.status_code, 200)
        
        # Verify unauth user cannot read project
        unauth_headers = {"Authorization": f"Bearer {self.unauth_token}"}
        res_unauth = self.client.get(f"/api/projects/{project_id}", headers=unauth_headers)
        self.assertEqual(res_unauth.status_code, 403)
        
        # Contributor can read
        contrib_headers = {"Authorization": f"Bearer {self.contrib_token}"}
        res_read = self.client.get(f"/api/projects/{project_id}", headers=contrib_headers)
        self.assertEqual(res_read.status_code, 200)
        
        # Create Folder
        folder_payload = {"name": "Chapter 1", "description": "Intro"}
        res_folder = self.client.post(f"/api/projects/{project_id}/folders", json=folder_payload, headers=headers)
        self.assertEqual(res_folder.status_code, 200)
        folder_id = res_folder.json()["id"]
        
        # Create File
        file_payload = {"name": "scene1.md", "content": "Once upon a time in a unit test..."}
        res_file = self.client.post(f"/api/projects/{project_id}/folders/{folder_id}/files", json=file_payload, headers=headers)
        self.assertEqual(res_file.status_code, 200)
        file_id = res_file.json()["id"]
        
        # Verify encryption in MongoDB
        db_file = db["virtual_files"].find_one({"_id": ObjectId(file_id)})
        self.assertIsNotNone(db_file)
        self.assertNotEqual(db_file["content"], "Once upon a time in a unit test...")
        self.assertEqual(decrypt_data(db_file["content"]), "Once upon a time in a unit test...")

        # Create Kanban Card
        card_payload = {"title": "Write draft", "description": "Self explanatory", "phase": "Not Started"}
        res_card = self.client.post(f"/api/projects/{project_id}/cards", json=card_payload, headers=headers)
        self.assertEqual(res_card.status_code, 200)
        card_id = res_card.json()["id"]
        
        # Drag Card (Update Phase)
        drag_payload = {"phase": "In Development"}
        res_drag = self.client.put(f"/api/projects/{project_id}/cards/{card_id}", json=drag_payload, headers=headers)
        self.assertEqual(res_drag.status_code, 200)
        self.assertEqual(res_drag.json()["phase"], "In Development")

        # Update Project Settings
        settings_payload = {
            "settings": {
                "default_openrouter_model": "google/gemini-2.5-pro",
                "favorite_models": ["google/gemini-2.5-flash", "google/gemini-2.5-pro"],
                "reasoning_length": "Medium",
                "output_length": "Large",
                "story_type": ["Adventure", "Fantasy"],
                "language": "English",
                "chapters": 4,
                "root_folder": "",
                "prompts": {
                    "continue_system_prompt": "System Prompt",
                    "continue_prompt": "Continue Prompt",
                    "revise_system_prompt": "Revise System Prompt",
                    "revise_prompt": "Revise Prompt"
                }
            }
        }
        res_settings = self.client.put(f"/api/projects/{project_id}/settings", json=settings_payload, headers=headers)
        self.assertEqual(res_settings.status_code, 200)
        self.assertEqual(res_settings.json()["settings"]["default_openrouter_model"], "google/gemini-2.5-pro")
        self.assertEqual(res_settings.json()["settings"]["reasoning_length"], "Medium")

if __name__ == "__main__":
    unittest.main()
