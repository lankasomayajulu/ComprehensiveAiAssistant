import os
from cryptography.fernet import Fernet

# Save secrets in backend root folder
SECRETS_FILE = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 
    ".secrets.env"
)

def get_or_create_secrets():
    """
    Retrieves existing JWT and encryption secrets from a local file,
    or generates and saves new ones if they do not exist.
    """
    jwt_secret = None
    encryption_key = None
    
    if os.path.exists(SECRETS_FILE):
        try:
            with open(SECRETS_FILE, "r", encoding="utf-8") as f:
                for line in f:
                    if "=" in line:
                        key, val = line.split("=", 1)
                        if key.strip() == "JWT_SECRET":
                            jwt_secret = val.strip()
                        elif key.strip() == "ENCRYPTION_KEY":
                            encryption_key = val.strip()
        except Exception as e:
            print(f"Error reading secrets file: {e}")
            
    # Generate missing secrets
    updated = False
    if not jwt_secret:
        jwt_secret = os.urandom(32).hex()
        updated = True
    if not encryption_key:
        encryption_key = Fernet.generate_key().decode("utf-8")
        updated = True
        
    if updated:
        try:
            with open(SECRETS_FILE, "w", encoding="utf-8") as f:
                f.write(f"JWT_SECRET={jwt_secret}\n")
                f.write(f"ENCRYPTION_KEY={encryption_key}\n")
        except Exception as e:
            print(f"Error writing secrets file: {e}")
            
    return jwt_secret, encryption_key

# Load keys
JWT_SECRET, ENCRYPTION_KEY = get_or_create_secrets()
fernet_instance = Fernet(ENCRYPTION_KEY.encode("utf-8"))

def encrypt_data(plain_text: str) -> str:
    """
    Encrypts a plain text string using the persistent Fernet key.
    """
    if not plain_text:
        return ""
    encrypted_bytes = fernet_instance.encrypt(plain_text.encode("utf-8"))
    return encrypted_bytes.decode("utf-8")

def decrypt_data(encrypted_text: str) -> str:
    """
    Decrypts an encrypted string using the persistent Fernet key.
    """
    if not encrypted_text:
        return ""
    try:
        decrypted_bytes = fernet_instance.decrypt(encrypted_text.encode("utf-8"))
        return decrypted_bytes.decode("utf-8")
    except Exception as e:
        print(f"Decryption error: {e}")
        return ""
