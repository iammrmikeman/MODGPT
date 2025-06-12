# file_mapper.py
# Purpose: Scans the MODGPT repo and generates `file_intelligence_index.json`
# Usage: Run in root of MODGPT repo. Requires Python 3.6+

import os
import hashlib
import json
from datetime import datetime

def generate_sha256(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()

def scan_directory(base_dir="."):
    index = []
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    contents = f.read()
            except:
                continue  # skip binary or unreadable files
            rel_path = os.path.relpath(path, base_dir)
            ext = os.path.splitext(file)[-1].lstrip(".")
            entry = {
                "file": os.path.join(base_dir, rel_path).replace("\\", "/"),
                "purpose": "Auto-scanned file",
                "type": ext,
                "tags": [],
                "sha256": generate_sha256(contents),
                "injected_by": "file_mapper.py",
                "trusted": True,
                "last_updated": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
            }
            index.append(entry)
    return index

if __name__ == "__main__":
    result = scan_directory()
    os.makedirs("system", exist_ok=True)
    with open("system/file_intelligence_index.json", "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2)
    print("✅ file_intelligence_index.json generated in /system")
    input("Press Enter to exit...")
