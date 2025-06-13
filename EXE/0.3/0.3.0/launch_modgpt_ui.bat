@echo off
cd /d %~dp0

echo [MODGPT.EXE] Starting Vite (React UI)...
start "VITE" cmd /k "npm run dev"

echo [MODGPT.EXE] Waiting for React to boot...
timeout /t 5 > nul

echo [MODGPT.EXE] Starting Electron...
start "ELECTRON" cmd /k "npm run start"
