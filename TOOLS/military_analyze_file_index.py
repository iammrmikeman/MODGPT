# military_analyze_file_index.py
# Purpose: Deterministically classify files from MODGPT based on filenames, paths, extensions, content, and known patterns.
# Outputs: classified_file_index.json + military_memory_audit.md

import os
import json
import hashlib
from datetime import datetime

INPUT_INDEX = "system/file_intelligence_index.json"
OUTPUT_INDEX = "system/classified_file_index.json"
AUDIT_LOG = "system/military_memory_audit.md"

EXTENSION_TAGS = {
    ".cpp": "mod_logic",
    ".py": "tooling",
    ".md": "doctrine",
    ".bat": "automation",
    ".ahk": "automation",
    ".json": "memory_data",
    ".zip": "archive",
    ".txt": "log_or_note",
    ".swarm": "swarm_logic"
}

KEYWORDS_TAGS = {
    "gore": ["gore", "fx"],
    "blood": ["gore", "fx"],
    "headshot": ["ai", "reaction"],
    "npc": ["ai", "mod_logic"],
    "patch": ["swarm", "runtime"],
    "update": ["swarm", "runtime"],
    "bootstrap": ["doctrine", "core"],
    "seal": ["doctrine", "auth"],
    "mapper": ["memory", "scan"],
    "scan": ["memory", "intel"],
    "debug": ["logs", "testing"],
    "trust": ["security", "trust"],
    "ragdoll": ["physics", "fx"]
}

PATH_TAGS = {
    "code_modules/fx": ["gore", "fx"],
    "code_modules/ai": ["ai", "mod_logic"],
    "EXE/bin": ["binary", "build_output"],
    "system": ["memory", "core"],
    "RockstarGPT/company_history": ["research", "timeline"],
    "specialops": ["swarm", "combat_ai"]
}

def confidence_score(engines_hit):
    return min(1.0, 0.5 + 0.1 * engines_hit)

def classify(file_entry):
    path = file_entry.get("file", "")
    file_ext = os.path.splitext(path)[1].lower()
    tags = set()
    purpose = []
    system_role = "unclassified"
    engines_used = 0
    flags = []

    # 1. Path tag inference
    for key, val in PATH_TAGS.items():
        if key in path:
            tags.update(val)
            engines_used += 1

    # 2. Extension inference
    if file_ext in EXTENSION_TAGS:
        tags.add(EXTENSION_TAGS[file_ext])
        engines_used += 1

    # 3. Filename keyword tagging
    fname = os.path.basename(path).lower()
    for key, val in KEYWORDS_TAGS.items():
        if key in fname:
            tags.update(val)
            engines_used += 1

    # 4. Suspect pattern detection
    if any(x in fname for x in ["backup", "copy", "final", "temp", "old"]):
        flags.append("suspected_junk_or_duplicate")

    if not tags:
        flags.append("unclassified")

    return {
        "file": path,
        "tags": sorted(list(tags)),
        "trusted": file_entry.get("trusted", False),
        "confidence_score": round(confidence_score(engines_used), 3),
        "purpose": "Auto-classified by deterministic engine." if tags else "UNKNOWN",
        "system_role": EXTENSION_TAGS.get(file_ext, "unknown"),
        "suspected_flags": flags
    }

def load_file_index():
    with open(INPUT_INDEX, "r", encoding="utf-8") as f:
        return json.load(f)

def save_classified_index(data):
    with open(OUTPUT_INDEX, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def write_audit_log(classified_data):
    with open(AUDIT_LOG, "w", encoding="utf-8") as f:
        f.write(f"# MODGPT Military Memory Audit — {datetime.utcnow().isoformat()}Z\n\n")
        for entry in classified_data:
            path = entry["file"]
            conf = entry["confidence_score"]
            tags = ", ".join(entry["tags"])
            flags = entry["suspected_flags"]
            line = f"- [{'⚠️' if flags else '✔️'} {conf}] {path} → {tags or 'No Tags'}"
            if flags:
                line += f" | Flags: {', '.join(flags)}"
            f.write(line + "\n")

def main():
    index = load_file_index()
    classified = [classify(entry) for entry in index]
    save_classified_index(classified)
    write_audit_log(classified)
    print(f"✅ CLASSIFIED {len(classified)} FILES")
    print(f"📄 {OUTPUT_INDEX}")
    print(f"🪵 {AUDIT_LOG}")
    input("Press Enter to exit...")

if __name__ == "__main__":
    main()
