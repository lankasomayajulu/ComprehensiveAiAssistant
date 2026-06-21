import os

class PlanningSkill:
    """
    Skill 1: Planning Skill
    Reads instructions.txt, analyzes the workspace, and updates plans/CurrentPlan.md.
    """
    def __init__(self, workspace_root: str):
        self.workspace_root = workspace_root
        self.instructions_path = os.path.join(workspace_root, "instructions.txt")
        self.plan_path = os.path.join(workspace_root, "plans", "CurrentPlan.md")

    def read_instructions(self) -> str:
        if not os.path.exists(self.instructions_path):
            return "No active task found."
        with open(self.instructions_path, "r", encoding="utf-8") as f:
            return f.read().strip()

    def scan_codebase(self) -> dict:
        """
        Scans frontend and backend folders for existing functionality.
        """
        scan_results = {"frontend": [], "backend": []}
        for folder in ["frontend", "backend"]:
            path = os.path.join(self.workspace_root, folder)
            if not os.path.exists(path):
                continue
            for root, _, files in os.walk(path):
                for file in files:
                    rel_path = os.path.relpath(os.path.join(root, file), self.workspace_root)
                    scan_results[folder].append(rel_path)
        return scan_results

    def generate_plan(self) -> str:
        task = self.read_instructions()
        scan = self.scan_codebase()
        
        frontend_files = ", ".join(scan["frontend"]) if scan["frontend"] else "None"
        backend_files = ", ".join(scan["backend"]) if scan["backend"] else "None"

        plan_content = f"""# Current Plan

This plan tracks the incremental phases of development for the active task defined in [instructions.txt](file:///d:/Projects/ComprehensiveAiAssistant/instructions.txt).

---

## Core Guidelines & Safety Constraints

> [!WARNING]
> **Constraint 1: Avoid Modifying Existing Functions**
> Do not directly modify any existing function or component unless explicitly required. If modification is necessary, clone the existing function to a new name/file, modify the cloned version, and use the cloned version.

> [!IMPORTANT]
> **Constraint 2: Incremental & Reversible Development**
> All code changes must be strictly incremental, tested, and documented. Existing tests must not fail (regression testing is mandatory).

---

## Active Task Definition
* **Source Task**: {task}
* **Status**: In Progress

---

## Codebase Audit Summary
* **Frontend Files**: {frontend_files}
* **Backend Files**: {backend_files}

---

## Implementation Phases

### Phase 1: Preparation & Setup
- [ ] Initialize/Audit any dependency or project file requirements.
- [ ] Ensure all safety clones are created for functions to be modified.

### Phase 2: Core Development (Incremental)
- [ ] Implement new isolated components or backend scripts.
- [ ] Write dedicated unit tests for new functionality.

### Phase 3: Regression Testing & Review
- [ ] Run regression tests on existing functionality.
- [ ] Check coding practices and generate Code Review reports.
- [ ] Add documentation in docs folder.
"""
        # Ensure plans folder exists
        os.makedirs(os.path.dirname(self.plan_path), exist_ok=True)
        with open(self.plan_path, "w", encoding="utf-8") as f:
            f.write(plan_content)
        return f"Plan successfully created at {self.plan_path}"

if __name__ == "__main__":
    # If run directly, run planning on the parent directory of this file
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    planner = PlanningSkill(root)
    print(planner.generate_plan())
