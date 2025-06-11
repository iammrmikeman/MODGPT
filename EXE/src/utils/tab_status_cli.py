# Worker 5: CLI Tool to Check Tab Status
# Purpose: Print status from tab_lifecycle_status.log

def show_status():
    with open("MODGPT/EXE/system/export_log/tab_lifecycle_status.log") as f:
        for line in f.readlines()[-5:]:
            print(line.strip())

if __name__ == "__main__":
    show_status()
