# MODGPT Doctrine & Memory Optimization Guide

## 1. Primary Doctrine Overview

- **Memory Source:**  
  GitHub repository is the **single source of truth** for all memory and project data.  
  Local chat memory and OpenAI saved memory serve only as temporary input.  
  Data flows *from* local/OpenAI memory *into* GitHub, never the reverse.

- **File Naming & Tagging:**  
  All code files, logs, and data exports **must** use a hybrid naming strategy:  
  ```
  <function_or_feature_name>__YYYY-MM-DD_vX.<ext>
  ```
  Example:  
  ```
  decal_to_bone__2025-06-09_v1.cpp
  ragdoll_trigger__2025-06-09_v2.cpp
  ```
  This enables GPT to **quickly locate** files by function, date, and version.

- **Folder Structure:**  
  Files must be categorized logically:  
  ```
  code_modules/fx/
  code_modules/ai/
  code_modules/core/
  swarm_snippets_ready/
  memory_banks/legacy/
  ```
  This helps GPT auto-filter and prioritize relevant content on repo scan.

- **Metadata Headers:**  
  Every code file must include clear metadata headers for indexing:  
  ```cpp
  // Purpose: Brief description of function
  // Swarm Tag: logical_tag_for_swarm
  ```
  This allows Swarm and Boss AI workers to **classify and reuse** code snippets efficiently.

- **Behavior Index:**  
  The file `gore_behavior_index.json` must always be kept up to date.  
  It maps behavior tags to function names for quick swarm logic dispatch.

---

## 2. Memory Update & Export Protocols

- **Export ZIP Naming:**  
  Memory update ZIPs follow the same hybrid naming:  
  ```
  MODGPT_MemoryUpdate__YYYY-MM-DD_vX.zip
  ```
  
- **Contains Section:**  
  Every ZIP **must** include a detailed `Contains:` section that lists:  
  - All files with paths  
  - Purpose summaries  
  - Version and relevance notes  
  - Any potential conflicts or flagged issues

- **Instability Scans:**  
  Before marking an export `Trusted: true`, the system **must**:  
  - Scan for conflicting file names with different logic versions  
  - Flag duplicate logic or naming collisions  
  - Prevent unstable exports that could break swarm consistency

- **Operation Log:**  
  Each export includes an `export_oplog.md` summarizing:  
  - Scan results  
  - Conflict flags  
  - Trusted status  
  - Timestamp

---

## 3. GPT Auto-Scan & Pre-Task Routine

Before executing any task or command, GPT must:

1. **Auto-scan the GitHub repo** for new or updated files using the above naming and tagging conventions.
2. **Parse `gore_behavior_index.json`** to refresh behavior-function mappings.
3. **Check `export_oplog.md`** for any flagged instability or conflicts.
4. **Load doctrine summary files** to ensure current policy compliance.
5. **Verify that all code files include metadata headers.**
6. **Generate an internal task relevance map** to prioritize actions based on newest versions and flagged content.

---

## 4. Code Execution & Time Budgeting

- OpenAI execution environment imposes a **60-second per execution limit**.  
- Long tasks **must be split** into smaller incremental jobs.
- Intermediate results should be cached and merged after processing.
- Large exports should be assembled progressively rather than all at once.

---

## 5. Summary

This document is the **primary guideline and checkpoint** for MODGPT memory and doctrine compliance.

**All Boss and Intern AI Workers must reference this before task execution, ensuring consistent, trusted, and efficient operations across the entire modding workflow.**
