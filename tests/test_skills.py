import os
import unittest
import shutil
import tempfile
from skills.planning import PlanningSkill
from skills.coding import CodingPracticesSkill
from skills.review import CodeReviewSkill
from skills.refactor import CodeRefactoringSkill

class TestSkillsSystem(unittest.TestCase):
    def setUp(self):
        # Create a temporary workspace root to run tests in isolation
        self.test_dir = tempfile.mkdtemp()
        
        # Create folder structure
        os.makedirs(os.path.join(self.test_dir, "frontend"))
        os.makedirs(os.path.join(self.test_dir, "backend"))
        os.makedirs(os.path.join(self.test_dir, "plans"))
        os.makedirs(os.path.join(self.test_dir, "docs"))
        os.makedirs(os.path.join(self.test_dir, "skills"))

        # Create mock instructions.txt
        self.instructions_path = os.path.join(self.test_dir, "instructions.txt")
        with open(self.instructions_path, "w", encoding="utf-8") as f:
            f.write("Task: Build a simple backend calculator API and a React UI.")

    def tearDown(self):
        # Clean up the temporary workspace
        shutil.rmtree(self.test_dir)

    def test_planning_skill(self):
        planner = PlanningSkill(self.test_dir)
        res = planner.generate_plan()
        self.assertIn("Plan successfully created", res)
        
        plan_file = os.path.join(self.test_dir, "plans", "CurrentPlan.md")
        self.assertTrue(os.path.exists(plan_file))
        
        with open(plan_file, "r", encoding="utf-8") as f:
            content = f.read()
            self.assertIn("Build a simple backend calculator API", content)
            self.assertIn("Constraint 1: Avoid Modifying Existing Functions", content)

    def test_coding_practices_naming(self):
        checker = CodingPracticesSkill(self.test_dir)
        
        # Create a valid backend python file
        with open(os.path.join(self.test_dir, "backend", "calculator.py"), "w", encoding="utf-8") as f:
            f.write("def add(a, b):\n    return a + b\n")

        # Create a violation: frontend file with .js instead of .jsx
        with open(os.path.join(self.test_dir, "frontend", "App.js"), "w", encoding="utf-8") as f:
            f.write("export default function App() { return <div>Calculator</div>; }\n")

        violations = checker.check_naming_conventions()
        self.assertEqual(len(violations), 1)
        self.assertIn("App.js", violations[0])

    def test_coding_practices_func_length(self):
        checker = CodingPracticesSkill(self.test_dir)
        
        # Create a function that exceeds the limit
        long_func_content = "def long_func():\n" + "\n".join([f"    print({i})" for i in range(50)]) + "\n"
        with open(os.path.join(self.test_dir, "backend", "long_file.py"), "w", encoding="utf-8") as f:
            f.write(long_func_content)

        violations = checker.check_function_lengths(max_lines=30)
        self.assertEqual(len(violations), 1)
        self.assertIn("long_func", violations[0])

    def test_code_review_and_refactor(self):
        # Create undocumented function
        with open(os.path.join(self.test_dir, "backend", "math_utils.py"), "w", encoding="utf-8") as f:
            f.write("def subtract(a, b):\n    return a - b\n")

        # Create frontend JS file to trigger rename refactoring
        js_file = os.path.join(self.test_dir, "frontend", "Navbar.js")
        with open(js_file, "w", encoding="utf-8") as f:
            f.write("export default function Navbar() { return <nav></nav>; }\n")

        # Run Code Review
        reviewer = CodeReviewSkill(self.test_dir)
        reviewer.generate_review_report()
        
        report_file = os.path.join(self.test_dir, "docs", "ReviewReport.md")
        self.assertTrue(os.path.exists(report_file))
        
        with open(report_file, "r", encoding="utf-8") as f:
            report_content = f.read()
            self.assertIn("Navbar.js", report_content)
            self.assertIn("subtract", report_content)

        # Run Refactoring
        refactorer = CodeRefactoringSkill(self.test_dir)
        refactor_log = refactorer.auto_refactor()
        
        # Check that js file was renamed to jsx
        self.assertFalse(os.path.exists(js_file))
        self.assertTrue(os.path.exists(os.path.join(self.test_dir, "frontend", "Navbar.jsx")))
        self.assertIn("Renamed frontend file", refactor_log)
        self.assertIn("Generated documentation template", refactor_log)
        
        # Check that documentation file has been generated
        docs_file = os.path.join(self.test_dir, "docs", "FunctionDocs.md")
        self.assertTrue(os.path.exists(docs_file))
        with open(docs_file, "r", encoding="utf-8") as f:
            docs_content = f.read()
            self.assertIn("Function: subtract", docs_content)

if __name__ == "__main__":
    unittest.main()
