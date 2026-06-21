import os
import datetime
from pymongo import MongoClient
import bcrypt

MONGO_DETAILS = os.getenv("MONGODB_URL", "mongodb://localhost:27017")

# Initialize client
client = MongoClient(MONGO_DETAILS)
db = client[os.getenv("MONGO_DB_NAME", "AI_Assistant_db")]
users_collection = db["users"]
settings_collection = db["user_settings"]

def init_db():
    """
    Initializes the database by checking for and creating the default admin user.
    """
    try:
        # Check if database is accessible
        client.admin.command('ping')
        
        # Check if users collection exists and has an admin
        admin = users_collection.find_one({"username": "admin"})
        if not admin:
            salt = bcrypt.gensalt()
            hashed_password = bcrypt.hashpw(b"admin", salt).decode("utf-8")
            
            admin_user = {
                "username": "admin",
                "password_hash": hashed_password,
                "role": "administrator",
                "created_at": datetime.datetime.now(datetime.timezone.utc)
            }
            users_collection.insert_one(admin_user)
            print("Database initialized: Admin user seeded successfully.")
        else:
            print("Database connection verified. Admin user already exists.")
            
        # Ensure indexes
        users_collection.create_index("username", unique=True)
        settings_collection.create_index("username", unique=True)
        
    except Exception as e:
        print(f"Error during database initialization: {e}")
        raise e
