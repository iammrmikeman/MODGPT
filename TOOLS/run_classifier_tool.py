import os
import json
from datetime import datetime, timezone

# Create output paths
output_dir = "system"
os.makedirs(output_dir, exist_ok=True)

classified_files = []

# Walk everything from current directory
for root, dirs, files in os.walk(os.getcwd()):
    for file in files:
        file_path = os.path.join(root, file)
        rel_path = os.path.relpath(file_path, os.getcwd()).replace("\\", "/")
        print(f"→ Scanning: {rel_path}")
        classified_files.append(rel_path)

# Output JSON
index_path = os.path.join(output_dir, "classified_file_index.json")
with open(index_path, "w", encoding="utf-8") as f:
    json.dump(classified_files, f, indent=2)

# Output audit log
log_path = os.path.join(output_dir, "classifier_log__military_audit.md")
with open(log_path, "w", encoding="utf-8") as f:
    f.write("# MODGPT Classifier Audit Log\n\n")
    f.write(f"Scan Time: {datetime.now(timezone.utc).isoformat()}\n")
    f.write(f"Total Files: {len(classified_files)}\n\n")
    for path in classified_files:
        f.write(f"- {path}\n")

print("\nClassification complete.")
print(f"→ {index_path}")
print(f"→ {log_path}")
input("Press ENTER to close...")
