# trustedfile.py
# Purpose: Verifies a single file's trust status using file_intelligence_index.json
# Usage: python trustedfile.py path/to/file.ext

import os
import sys
import hashlib
import json

INDEX_PATH = "system/file_intelligence_index.json"

def generate_sha256(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()

def load_index():
    if not os.path.exists(INDEX_PATH):
        print("❌ ERROR: file_intelligence_index.json not found.")
        return []
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def main():
    if len(sys.argv) < 2:
        print("Usage: python trustedfile.py path/to/file.ext")
        return

    target_path = sys.argv[1]
    if not os.path.exists(target_path):
        print(f"❌ ERROR: File not found: {target_path}")
        return

    with open(target_path, "rb") as f:
        raw = f.read()
    try:
        content = raw.decode("utf-8", errors="ignore")
    except:
        content = ""

    sha = generate_sha256(content)
    index = load_index()
    match = None
    for entry in index:
        if entry["sha256"] == sha:
            match = entry
            break

    if not match:
        print("❌ File not found in file_intelligence_index.json.")
        print(f"🔍 SHA256: {sha}")
        return

    print("✅ FILE VERIFIED")
    print(f"📄 Path: {match['file']}")
    print(f"🔖 Tags: {match['tags']}")
    print(f"🔐 Trusted: {'✅' if match['trusted'] else '❌'}")
    print(f"🕒 Last Updated: {match['last_updated']}")
    if "system_role" in match:
        print(f"📘 Role: {match['system_role']}")
    if "core_doctrine" in match and match["core_doctrine"]:
        print(f"🧠 DOCTRINE FILE")

if __name__ == "__main__":
    main()
