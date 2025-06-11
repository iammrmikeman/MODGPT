
#Requires AutoHotkey v2.0
#SingleInstance Force

; === CONFIGURATION ===
pollDelay := 20000 ; 20 seconds per tab
logPath := "C:\Users\pc\Desktop\MODGPT\5. SYS_MEMORY\mia\MIA_Report_Log.txt"
maxTabs := 5
tabHotkey := "^{{Tab}}" ; Ctrl+Tab
stopHotkey := "Numpad0"

; === INITIALIZATION ===
TrayTip("MIA Polling Active", "Polling 5 GPT Swarm tabs (CLIPBOARD ONLY)...", 5)

; === EMERGENCY STOP HOTKEY ===
Hotkey(stopHotkey, (*) => ExitApp())

; === MAIN LOOP ===
Loop maxTabs {
    ; Activate GPT tab
    Send(tabHotkey)
    Sleep(1000)

    ; Send MIA prompt
    A_Clipboard := ""
    Send("^a")
    Sleep(100)
    Send("You are a MODGPT Worker. Report findings to MIA.")
    Sleep(100)
    Send("{Enter}")
    Sleep(pollDelay)

    ; Read response from clipboard
    Send("^a")
    Sleep(100)
    Send("^c")
    Sleep(500)
    ClipWait(5)
    result := A_Clipboard

    ; Log result
    timestamp := FormatTime(, "yyyy-MM-dd HH:mm:ss")
    if result != "" {
        FileAppend(">>> TAB " A_Index " [" timestamp "]`n" result "`n`n", logPath)
    } else {
        FileAppend(">>> TAB " A_Index " [" timestamp "] ⚠️ No response (Possibly dead tab).`n`n", logPath)
    }
}
TrayTip("MIA Polling Complete", "5-tab clipboard-only test finished.", 3)
ExitApp()
