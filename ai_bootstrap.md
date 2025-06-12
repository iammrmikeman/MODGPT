# MODGPT AI Bootstrap Doctrine


### 🛠 Path Handling Enforcement (2025-06-12)
All AI-generated Python scripts that handle file paths **must**:
- Use `replace(os.sep, "/")` for all path normalization
- Never use hardcoded double backslashes (`"\\"`) or ambiguous escape sequences
- This rule is permanent doctrine and applies to all tools including:
  - `file_mapper.py`
  - `trustedupdate?`
  - `GPT-integrated CLI tools`
  - `.exe` memory validators
