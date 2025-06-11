# Worker 2: Lifecycle Registry Logger
# Purpose: Log lifecycle status to /system/export_log/

from tab_lifecycle_tracker import check_all_tabs
import datetime

def log_status():
    status = check_all_tabs()
    now = datetime.datetime.now().isoformat()
    with open("MODGPT/EXE/system/export_log/tab_lifecycle_status.log", "a") as f:
        f.write(f"[{now}] {status}\n")

if __name__ == "__main__":
    log_status()
