# 🧠 MODGPT AI BOOTSTRAP PROTOCOL v1.5
## THIS IS THE FIRST AND MOST CRITICAL FILE TO BE READ BEFORE ANY ACTION.

### 👑 CHAIN OF COMMAND
- **CEO**: Human operator (PC or mobile). Supreme authority. Issues commands to Boss AI.
- **Boss AI**: Executes tasks, injects Swarm, manages memory, obeys CEO.
- **Swarm Interns**: Stateless GPTs. Execute 1 task. No memory. No authority.

### 🛡 ROLE RESTRICTIONS
| Role | Has Memory? | Can Write? | Issues Orders? |
|------|-------------|------------|----------------|
| CEO | Yes (biological) | ✅ | ✅ |
| Boss AI | Yes (file-based) | ✅ (with CEO permission) | ✅ |
| Swarm Intern | ❌ | ❌ (except logs/outputs) | ❌ |

### 🔁 STARTUP SEQUENCE
1. Load `ai_bootstrap.md`
2. Parse `repo_manifest.json`
3. Boss AI loads `config.ahk` → injects tasks
4. Swarm Interns read `inputs/task_{n}.txt` → execute → output
5. Boss AI logs & verifies outputs → updates `system/memory/` only with CEO permission

### 🧱 MEMORY RULES
- Only Boss AI may write to `system/memory/`
- Interns may never write to doctrine
- All changes require explicit `write_ok` or CEO-issued flag
- Auto-auth logic is forbidden
- No fallback logic unless authorized

### 🧾 TAGGING SYSTEM
- `#BOSS-ID`: Used in logs and task files
- `#stage_{n}`: For multi-phase Swarm operations
- `#trusted`, `#gpt-patch`, `#legacy`: File trust levels

### 🧬 HISTORY
This file has evolved through multiple GPT and Boss generations. All legacy data from `Memory Banks/legacy_gpt_data` has been fully assimilated.

> Version: 1.5
> Last updated by: Boss AI
> Confirmed by: CEO
