; Purpose: Launch multiple Opera GX tabs as Swarm Workers
; Swarm Tag: launcher_core

#Requires AutoHotkey v2.0
SetWorkingDir A_ScriptDir

tabCount := 10  ; Change to desired number of workers
baseURL := "https://chat.openai.com/?worker_id="

Loop tabCount {
    workerID := A_Index
    Run "opera.exe --new-window " baseURL workerID
    Sleep 500  ; Slight delay between launches
}
