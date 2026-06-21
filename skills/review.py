import os
import re
try:
    from skills.coding import CodingPracticesSkill
except ImportError:
    from coding import CodingPracticesSkill

class CodeReviewSkill:
    """
    Skill 3: Code Review
    Audits the codebase for CodingPractices compliance and documentation coverage.
    Generates docs/ReviewReport.md and identifies undocumented functionality.
    """
    def __init__(self, workspace_root: str):
        self.workspace_root = workspace_root
        self.checker = CodingPracticesSkill(workspace_root)
        self.docs_dir = os.path.join(workspace_root, "docs")
        self.report_path = os.path.join(self.docs_dir, "ReviewReport.md")

    def find_all_functions(self) -> dict:
        """
        Parses python files to find all function signatures and docstrings.
        """
        functions = {}
        backend_dir = os.path.join(self.workspace_root, "backend")
        if os.path.exists(backend_dir):
            for root, _, files in os.walk(backend_dir):
                for file in files:
                    if file.endswith(".py"):
                        path = os.path.join(root, file)
                        rel_path = os.path.relpath(path, self.workspace_root)
                        functions[rel_path] = self._parse_python_functions(path)
        return functions

    def _parse_python_functions(self, filepath: str) -> list:
        functions = []
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Regex to find def statements and capture signature
        matches = re.finditer(r"def\s+(\w+)\(([^)]*)\):", content)
        for m in matches:
            name = m.group(1)
            args = m.group(2).strip().replace("\n", " ")
            # Check if followed by a docstring
            has_docstring = False
            rest = content[m.end():].strip()
            if rest.startswith('"""') or rest.startswith("'''"):
                has_docstring = True
            functions.append({
                "name": name,
                "signature": f"def {name}({args})",
                "has_docstring": has_docstring
            })
        return functions

    def check_documentation_coverage(self, functions_map: dict) -> tuple:
        """
        Checks if documented in docs/ folder.
        """
        undocumented = []
        documented_count = 0
        total_count = 0

        # Read all docs content
        docs_content = ""
        if os.path.exists(self.docs_dir):
            for root, _, files in os.walk(self.docs_dir):
                for file in files:
                    if file.endswith(".md") and file != "ReviewReport.md":
                        with open(os.path.join(root, file), "r", encoding="utf-8") as f:
                            docs_content += "\n" + f.read()

        for filepath, funcs in functions_map.items():
            for func in funcs:
                total_count += 1
                name = func["name"]
                # A function is documented if it has a docstring or is mentioned in docs/ markdown files
                if func["has_docstring"] or (name in docs_content):
                    documented_count += 1
                else:
                    undocumented.append({
                        "file": filepath,
                        "name": name,
                        "signature": func["signature"]
                    })
        return undocumented, documented_count, total_count

    def generate_review_report(self) -> str:
        os.makedirs(self.docs_dir, exist_ok=True)
        
        # Audit coding practices
        naming_violations = self.checker.check_naming_conventions()
        length_violations = self.checker.check_function_lengths()
        
        # Audit documentation
        funcs_map = self.find_all_functions()
        undocumented, doc_count, total_funcs = self.check_documentation_coverage(funcs_map)
        
        violations_content = ""
        if not naming_violations and not length_violations:
            violations_content = "* No coding practice violations detected."
        else:
            if naming_violations:
                violations_content += "\n### Naming Conventions Violations\n"
                for v in naming_violations:
                    violations_content += f"- {v}\n"
            if length_violations:
                violations_content += "\n### Function Length Violations\n"
                for v in length_violations:
                    violations_content += f"- {v}\n"

        undocumented_content = ""
        if not undocumented:
            undocumented_content = "* All functions/classes are documented."
        else:
            undocumented_content = "\n| File | Function Signature | Status |\n| :--- | :--- | :--- |\n"
            for item in undocumented:
                undocumented_content += f"| {item['file']} | `{item['signature']}` | Undocumented |\n"

        report_markdown = f"""# Code Review Report

This report compiles all coding practice and documentation audits.

---

## Coding Practice Compliance

{violations_content}

---

## Documentation Coverage

* **Total Functions**: {total_funcs}
* **Documented**: {doc_count}
* **Documentation Rate**: {(doc_count / total_funcs * 100) if total_funcs > 0 else 100:.1f}%

### Undocumented Elements
{undocumented_content}

---

## Instructions for Undocumented Elements
If any undocumented elements exist above, write documentation for them in the [docs/](file:///d:/Projects/ComprehensiveAiAssistant/docs/) folder, including:
1. Expected inputs.
2. Expected outputs/returns.
3. Brief description of functionality.
"""
        with open(self.report_path, "w", encoding="utf-8") as f:
            f.write(report_markdown)
        return f"Review Report generated at {self.report_path}"

if __name__ == "__main__":
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    reviewer = CodeReviewSkill(root)
    print(reviewer.generate_review_report())
