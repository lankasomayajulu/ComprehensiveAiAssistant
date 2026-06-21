import unittest
import sys
import os

# Set test database name before importing backend modules
os.environ["MONGO_DB_NAME"] = "AI_Assistant_test_db"

# Adjust paths to import backend modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.app.auth import get_password_hash, verify_password, create_access_token
from backend.app.secrets_manager import encrypt_data, decrypt_data
from backend.app.models import UserLogin, UserCreate, UserSettingsUpdate

class TestBackendLogic(unittest.TestCase):
    def test_password_hashing(self):
        password = "test_secure_password"
        hashed = get_password_hash(password)
        self.assertNotEqual(password, hashed)
        self.assertTrue(verify_password(password, hashed))
        self.assertFalse(verify_password("wrong_password", hashed))

    def test_token_creation(self):
        data = {"sub": "testuser", "role": "normal_user"}
        token = create_access_token(data)
        self.assertIsInstance(token, str)
        self.assertTrue(len(token) > 20)

    def test_pydantic_model_validation(self):
        # Valid login
        login = UserLogin(username="user1", password="password123")
        self.assertEqual(login.username, "user1")
        
        # Valid user create
        user = UserCreate(username="valid-user_1", password="password", role="normal_user")
        self.assertEqual(user.username, "valid-user_1")
        self.assertEqual(user.role, "normal_user")

        # Valid settings update
        settings = UserSettingsUpdate(openrouter_api_key="sk-or-123", google_ai_key="google-456")
        self.assertEqual(settings.openrouter_api_key, "sk-or-123")
        self.assertEqual(settings.google_ai_key, "google-456")

    def test_data_encryption(self):
        plain_text = "my_super_secret_api_key"
        encrypted = encrypt_data(plain_text)
        self.assertNotEqual(plain_text, encrypted)
        
        decrypted = decrypt_data(encrypted)
        self.assertEqual(plain_text, decrypted)

        # Empty data handling
        self.assertEqual(encrypt_data(""), "")
        self.assertEqual(decrypt_data(""), "")

if __name__ == "__main__":
    unittest.main()
