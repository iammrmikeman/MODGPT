# ai_file_mapper_v2.3_FORCELOG.py
# Purpose: Absolute max-verbosity scanner. Shows EVERYTHING it sees and touches. Guarantees trace.

import os
import hashlib
import json
from datetime import datetime, timezone

INDEX_FILE = "system/file_intelligence_index.json"
DEBUG_LOG = "system/mapper_debug_log.md"
EXCLUDED_DIRS = {'.git', '__pycache__', 'node_modules', 'bin', 'build', '.vs'}

def generate_sha256(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()

def scan_directory(base_dir="."):
    print("🧠 MODGPT AI FILE MAPPER v2.3 FORCED MODE")
    print("📍 CWD:", os.getcwd())
    print("📦 Starting full file walk...")

    index = []
    debug_lines = []
    total_files = 0
    skipped = 0

    for root, dirs, files in os.walk(base_dir):
        rel_dir = os.path.relpath(root, base_dir)
        if any(ex in rel_dir for ex in EXCLUDED_DIRS):
            print("⏭️ Skipping dir:", rel_dir)
            debug_lines.append(f"⏭️ SKIPPED DIR: {rel_dir}")
            continue

        print("📂 Dir:", rel_dir)
        for file in files:
            total_files += 1
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, base_dir).replace(os.sep, "/")
            print("📄 Found file:", rel_path)
            debug_lines.append(f"📄 {rel_path}")

            try:
                with open(full_path, "rb") as f:
                    raw = f.read()
                content = raw.decode("utf-8", errors="ignore")
            except Exception as e:
                print("❌ Could not read:", rel_path, "|", e)
                debug_lines.append(f"❌ {rel_path} - {e}")
                skipped += 1
                continue

            sha = generate_sha256(content)
            index.append({
                "file": rel_path,
                "sha256": sha,
                "tags": [],
                "trusted": True,
                "last_updated": datetime.now(timezone.utc).isoformat()
            })

    os.makedirs("system", exist_ok=True)

    with open(INDEX_FILE, "w", encoding="utf-8") as f:
        json.dump(index, f, indent=2)

    with open(DEBUG_LOG, "w", encoding="utf-8") as f:
        f.write(f"# Mapper Log — {datetime.now(timezone.utc).isoformat()}\n")
        f.write(f"Files scanned: {total_files}\n")
        f.write(f"Files skipped: {skipped}\n\n")
        f.writelines(line + "\n" for line in debug_lines)

    print("✅ INDEX WRITTEN:", INDEX_FILE)
    print("🪵 LOG WRITTEN:", DEBUG_LOG)
    print("📊 FILE COUNT:", len(index), "/", total_files)
    input("🧠 Press Enter to close.")

if __name__ == "__main__":
    scan_directory()
