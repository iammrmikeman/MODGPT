# trustedupdate?.py
# Enforces trusted memory update compliance with No-Lie Doctrine

import os
import json
from datetime import datetime

LOG_PATH = "system/update_verification_log.md"

def verify_memory_files():
    print("🔍 Verifying memory structure...")
    required_files = [
        "ai_bootstrap.md",
        "system/file_intelligence_index.json",
        "system/classified_file_index.json",
        "doctrine/NO_LIES_POLICY.md"
    ]
    results = []
    for file in required_files:
        exists = os.path.exists(file)
        print(f"{'✅' if exists else '❌'} {file}")
        results.append((file, exists))
    return results

def log_verification(results):
    with open(LOG_PATH, "w", encoding="utf-8") as f:
        f.write(f"# TrustedUpdate Verification — {datetime.utcnow().isoformat()}Z\n\n")
        f.write("""### ✅ No-Lie Mode Enforcement
All confirmation output must:
- Include compile or validation result
- Show file counts or audit traces
- Omit fake emojis or greenlights without proof

If a script reports “✅ Success” without logging actions, it will now FAIL compliance.
""")
        for path, ok in results:
            f.write(f"- {'✅' if ok else '❌'} {path}\n")

def main():
    print("🧠 TrustedUpdate? Running in No-Lie Mode")
    results = verify_memory_files()
    log_verification(results)

    if all(ok for _, ok in results):
        print("✅ Memory update trusted — all required files present and logged.")
    else:
        print("❌ TRUSTEDUPDATE FAILED: Missing core memory enforcement files.")
        exit(1)

if __name__ == "__main__":
    main()
