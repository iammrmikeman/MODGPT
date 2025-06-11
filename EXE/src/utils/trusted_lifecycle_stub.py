# Worker 3: Trusted Lifecycle Verifier Stub
# Purpose: Simulate future trustedlifecycle? audit logic

def run_trusted_lifecycle_check(log_path="MODGPT/EXE/system/export_log/tab_lifecycle_status.log"):
    with open(log_path) as f:
        lines = f.readlines()
    if any("dead" in line for line in lines[-5:]):
        return "UNTRUSTED"
    return "TRUSTED"

if __name__ == "__main__":
    print(run_trusted_lifecycle_check())
