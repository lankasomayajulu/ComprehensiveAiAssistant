import os
import re
try:
    from skills.review import CodeReviewSkill
except ImportError:
    from review import CodeReviewSkill

class CodeRefactoringSkill:
    """
    Skill 4: Code Refactoring
    Refactors the code to follow coding practices and generates missing documentation.
    """
    def __init__(self, workspace_root: str):
        self.workspace_root = workspace_root
        self.reviewer = CodeReviewSkill(workspace_root)
        self.docs_dir = os.path.join(workspace_root, "docs")
        self.docs_file = os.path.join(self.docs_dir, "FunctionDocs.md")

    def auto_refactor(self) -> str:
        logs = []
        
        # 1. Handle file naming violations (rename frontend .js to .jsx)
        frontend_dir = os.path.join(self.workspace_root, "frontend")
        if os.path.exists(frontend_dir):
            for root, _, files in os.walk(frontend_dir):
                if "node_modules" in root:
                    continue
                for file in files:
                    if file.endswith(".js"):
                        old_path = os.path.join(root, file)
                        new_file = file[:-3] + ".jsx"
                        new_path = os.path.join(root, new_file)
                        os.rename(old_path, new_path)
                        logs.append(f"Renamed frontend file '{file}' to '{new_file}' for React Vite compatibility.")

        # 2. Add documentation for any undocumented functions
        funcs_map = self.reviewer.find_all_functions()
        undocumented, doc_count, total = self.reviewer.check_documentation_coverage(funcs_map)
        
        if undocumented:
            os.makedirs(self.docs_dir, exist_ok=True)
            
            # Read existing documentation if present
            existing_docs = ""
            if os.path.exists(self.docs_file):
                with open(self.docs_file, "r", encoding="utf-8") as f:
                    existing_docs = f.read()

            new_entries = []
            for item in undocumented:
                func_name = item["name"]
                # Skip if already in the document to prevent duplicate entries
                if f"### Function: {func_name}" in existing_docs:
                    continue
                
                entry = f"""
### Function: {func_name}
* **Location**: {item['file']}
* **Signature**: `{item['signature']}`
* **Purpose**: [Brief description of what this function does]
* **Expected Inputs**:
  - [Input parameter name]: [Type and description]
* **Expected Outputs**:
  - [Return value name/type]: [Description]
"""
                new_entries.append(entry)
                logs.append(f"Generated documentation template for function '{func_name}' in FunctionDocs.md.")

            if new_entries:
                mode = "a" if os.path.exists(self.docs_file) else "w"
                with open(self.docs_file, mode, encoding="utf-8") as f:
                    if mode == "w":
                        f.write("# Function Documentation Reference\n\nThis file documents code functions and classes.")
                    for entry in new_entries:
                        f.write(entry)

        if not logs:
            return "No automatic refactoring or documentation updates were required."
        return "\n".join(logs)

if __name__ == "__main__":
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    refactorer = CodeRefactoringSkill(root)
    print(refactorer.auto_refactor())
