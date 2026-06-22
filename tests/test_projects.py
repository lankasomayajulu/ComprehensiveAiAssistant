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
        # Seed test user settings with dummy OpenRouter key
        from backend.app.secrets_manager import encrypt_data
        db["user_settings"].delete_many({"username": "test_author"})
        db["user_settings"].insert_one({
            "username": "test_author",
            "openrouter_api_key": encrypt_data("sk-or-test-key-12345"),
            "google_ai_key": "",
            "updated_at": datetime.datetime.utcnow()
        })

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
        
        # Verify card encryption in MongoDB
        db_card = db["kanban_cards"].find_one({"_id": ObjectId(card_id)})
        self.assertIsNotNone(db_card)
        self.assertNotEqual(db_card["title"], "Write draft")
        self.assertEqual(decrypt_data(db_card["title"]), "Write draft")

        # Drag Card (Update Phase)
        drag_payload = {"phase": "In Development"}
        res_drag = self.client.put(f"/api/projects/{project_id}/cards/{card_id}", json=drag_payload, headers=headers)
        self.assertEqual(res_drag.status_code, 200)
        self.assertEqual(res_drag.json()["phase"], "In Development")

        # Add card comment
        comment_payload = {"text": "A test comment"}
        res_comment = self.client.post(f"/api/projects/{project_id}/cards/{card_id}/comments", json=comment_payload, headers=headers)
        self.assertEqual(res_comment.status_code, 200)
        
        # Verify comment encryption
        db_card_updated = db["kanban_cards"].find_one({"_id": ObjectId(card_id)})
        self.assertNotEqual(db_card_updated["comments"][0]["text"], "A test comment")
        self.assertEqual(decrypt_data(db_card_updated["comments"][0]["text"]), "A test comment")

        # Generate prompt
        res_prompt = self.client.post(f"/api/projects/{project_id}/generate-prompt", headers=headers)
        self.assertEqual(res_prompt.status_code, 200)
        self.assertIn("prompt", res_prompt.json())

        # Insert a test log directly into DB for deletion testing
        from backend.app.secrets_manager import encrypt_data
        test_log = {
            "project_id": ObjectId(project_id),
            "username": "test_author",
            "model_used": "google/gemini-2.5-flash",
            "input_tokens": 100,
            "output_tokens": 200,
            "cost": 0.0001,
            "finish_reason": "stop",
            "timestamp": "2026-06-22T10:00:00Z",
            "request_text": encrypt_data("test prompt"),
            "output_text": encrypt_data("test response")
        }
        res_log_insert = db["ai_logs"].insert_one(test_log)
        log_id = str(res_log_insert.inserted_id)
        
        # Fetch logs and verify decryption
        res_logs_list = self.client.get(f"/api/projects/{project_id}/logs", headers=headers)
        self.assertEqual(res_logs_list.status_code, 200)
        self.assertTrue(len(res_logs_list.json()) >= 1)
        self.assertEqual(res_logs_list.json()[0]["request_text"], "test prompt")
        self.assertEqual(res_logs_list.json()[0]["output_text"], "test response")
        
        # Delete log
        res_del = self.client.delete(f"/api/projects/{project_id}/logs/{log_id}", headers=headers)
        self.assertEqual(res_del.status_code, 200)

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
