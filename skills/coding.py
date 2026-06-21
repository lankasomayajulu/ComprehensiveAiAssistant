import os
import re

class CodingPracticesSkill:
    """
    Skill 2: CodingPractices
    Helper script to run sanity checks on code structure, size, naming conventions,
    and update checklist items in plans/CurrentPlan.md.
    """
    def __init__(self, workspace_root: str):
        self.workspace_root = workspace_root
        self.plan_path = os.path.join(workspace_root, "plans", "CurrentPlan.md")

    def check_naming_conventions(self) -> list:
        """
        Ensures frontend files are React JS JSX only and backend files are Python only.
        """
        violations = []
        # Check frontend
        frontend_dir = os.path.join(self.workspace_root, "frontend")
        if os.path.exists(frontend_dir):
            for root, _, files in os.walk(frontend_dir):
                # Ignore node_modules
                if "node_modules" in root:
                    continue
                for file in files:
                    # Frontend files should be jsx, html, css, json or config files
                    ext = os.path.splitext(file)[1].lower()
                    if ext == ".js":
                        violations.append(
                            f"Frontend JS violation: file '{file}' should use .jsx extension."
                        )
        # Check backend
        backend_dir = os.path.join(self.workspace_root, "backend")
        if os.path.exists(backend_dir):
            for root, _, files in os.walk(backend_dir):
                for file in files:
                    ext = os.path.splitext(file)[1].lower()
                    # Backend files should be py, txt, json, config, etc.
                    if ext in [".js", ".jsx"]:
                        violations.append(
                            f"Backend JS/JSX violation: file '{file}' should be python-based (.py)."
                        )
        return violations

    def check_function_lengths(self, max_lines: int = 40) -> list:
        """
        Checks python files for functions/methods exceeding max_lines.
        """
        violations = []
        backend_dir = os.path.join(self.workspace_root, "backend")
        if os.path.exists(backend_dir):
            for root, _, files in os.walk(backend_dir):
                for file in files:
                    if file.endswith(".py"):
                        file_path = os.path.join(root, file)
                        violations.extend(self._scan_python_file_funcs(file_path, max_lines))
        return violations

    def _scan_python_file_funcs(self, filepath: str, max_lines: int) -> list:
        violations = []
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
        
        current_func = None
        func_start = 0
        indent_level = 0

        for i, line in enumerate(lines):
            stripped = line.strip()
            # Detect function start
            match = re.match(r"^(\s*)def\s+(\w+)\(", line)
            if match:
                if current_func:
                    # Calculate previous function length
                    length = i - func_start
                    if length > max_lines:
                        violations.append(
                            f"{os.path.basename(filepath)}: function '{current_func}' has {length} lines (max {max_lines})."
                        )
                indent_level = len(match.group(1))
                current_func = match.group(2)
                func_start = i
            elif current_func and stripped:
                # Check indentation to detect function end
                line_indent = len(line) - len(line.lstrip())
                if line_indent <= indent_level and not stripped.startswith("#") and not stripped.startswith(")"):
                    # Function has ended
                    length = i - func_start
                    if length > max_lines:
                        violations.append(
                            f"{os.path.basename(filepath)}: function '{current_func}' has {length} lines (max {max_lines})."
                        )
                    current_func = None

        if current_func:
            length = len(lines) - func_start
            if length > max_lines:
                violations.append(
                    f"{os.path.basename(filepath)}: function '{current_func}' has {length} lines (max {max_lines})."
                )
        return violations

    def check_off_task(self, task_keyword: str) -> bool:
        """
        Finds a task in CurrentPlan.md containing the keyword and marks it as completed [x].
        """
        if not os.path.exists(self.plan_path):
            return False
        with open(self.plan_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Regex to find unchecked tasks matching the keyword
        pattern = re.compile(rf"- \[\s\] (.*{re.escape(task_keyword)}.*)")
        match = pattern.search(content)
        if match:
            original_line = match.group(0)
            completed_line = original_line.replace("- [ ]", "- [x]")
            updated_content = content.replace(original_line, completed_line, 1)
            with open(self.plan_path, "w", encoding="utf-8") as f:
                f.write(updated_content)
            return True
        return False

if __name__ == "__main__":
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    checker = CodingPracticesSkill(root)
    print("Sanity violations:", checker.check_naming_conventions())
    print("Large functions:", checker.check_function_lengths())
