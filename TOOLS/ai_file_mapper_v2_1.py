# ai_file_mapper_v2_1.py
# Purpose: Adds doctrine detection, SHA conflict logging, and anomaly tagging
# Output: file_intelligence_index.json, file_anomalies_log.txt, mapper_selfcheck_log.md

import os
import hashlib
import json
from datetime import datetime, timezone
from collections import defaultdict

EXCLUDED_DIRS = {'.git', '__pycache__', 'node_modules', 'bin', 'build', '.vs'}
OUTPUT_INDEX = "system/file_intelligence_index.json"
OUTPUT_ANOMALIES = "system/file_anomalies_log.txt"
OUTPUT_SELFREPORT = "system/mapper_selfcheck_log.md"

DOCTRINE_FILES = {
    "ai_bootstrap.md",
    "README_MEMORY_ZIP_POLICY.md",
    "MODGPT_SEAL_OF_TRUST"
}

TAG_MAP = {
    "ragdoll": ["ragdoll", "physics"],
    "headshot": ["head", "brain", "fatal"],
    "gore": ["blood", "decal", "flesh", "dismember"],
    "swarm": ["swarm", "dispatch", "assign", "route"],
    "memory": ["snapshot", "log", "ai_bootstrap", "index"],
    "gui": ["panel", "html", "boot", "css", "interface"],
    "trusted": ["seal", "trusted", "verify"]
}

def generate_sha256(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()

def tag_file(path, content):
    tags = set()
    lower_path = path.lower()

    for group, keywords in TAG_MAP.items():
        if any(kw in lower_path for kw in keywords):
            tags.add(group)
        if any(kw in content for kw in keywords):
            tags.add(group)

    return sorted(list(tags))

def is_doctrine_file(filename):
    return os.path.basename(filename) in DOCTRINE_FILES

def scan_directory(base_dir="."):
    index = []
    sha_map = defaultdict(list)
    duplicate_warnings = []
    suspicious_names = []
    doctrine_hits = []
    total_files = 0

    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]
        for file in files:
            total_files += 1
            path = os.path.join(root, file)
            if not os.path.isfile(path):
                continue
            try:
                with open(path, "rb") as f:
                    raw = f.read()
                content = raw.decode("utf-8", errors="ignore")
            except:
                continue

            rel_path = os.path.relpath(path, base_dir).replace(os.sep, "/")
            ext = os.path.splitext(file)[-1].lstrip(".").lower()
            sha = generate_sha256(content)
            tags = tag_file(rel_path, content)

            # Detect anomalies
            sha_map[sha].append(rel_path)
            if any(bad in file.lower() for bad in ["copy", "backup", "old", "temp"]):
                suspicious_names.append(rel_path)

            entry = {
                "file": rel_path,
                "purpose": "Inferred via ai_file_mapper_v2.1",
                "type": ext,
                "tags": tags,
                "sha256": sha,
                "injected_by": "ai_file_mapper_v2.1",
                "trusted": "trusted" in tags or "memory" in tags,
                "last_updated": datetime.now(timezone.utc).isoformat()
            }

            if is_doctrine_file(file):
                entry["system_role"] = "doctrine"
                entry["core_doctrine"] = True
                doctrine_hits.append(rel_path)

            index.append(entry)

    # Write intelligence index
    os.makedirs("system", exist_ok=True)
    with open(OUTPUT_INDEX, "w", encoding="utf-8") as f:
        json.dump(index, f, indent=2)

    # Write anomaly log
    with open(OUTPUT_ANOMALIES, "w", encoding="utf-8") as f:
        f.write("🛑 Duplicate SHA256 Entries:\n")
        for sha, paths in sha_map.items():
            if len(paths) > 1:
                f.write(f"[{sha[:10]}...] -> {paths}\n")
        f.write("\n⚠️ Suspicious Filenames:\n")
        for name in suspicious_names:
            f.write(f"- {name}\n")

    # Write self-check log
    with open(OUTPUT_SELFREPORT, "w", encoding="utf-8") as f:
        f.write(f"# Mapper Self-Check Report\n")
        f.write(f"🧠 Total files scanned: {total_files}\n")
        f.write(f"✅ Files indexed: {len(index)}\n")
        f.write(f"📚 Doctrine files detected: {len(doctrine_hits)}\n")
        f.write(f"🛑 SHA duplicates: {sum(1 for s in sha_map if len(sha_map[s]) > 1)}\n")
        f.write(f"⚠️ Suspicious names: {len(suspicious_names)}\n")
        f.write(f"🕒 Timestamp: {datetime.now(timezone.utc).isoformat()}\n")

    print(f"✅ File Intelligence Index saved to {OUTPUT_INDEX}")
    print(f"📄 Anomalies logged in {OUTPUT_ANOMALIES}")
    print(f"📘 Self-check summary in {OUTPUT_SELFREPORT}")
    input("Press Enter to exit...")
