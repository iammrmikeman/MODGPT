@echo off
cd /d "%~dp0"

echo [MODGPT] Checking for node_modules...
if not exist node_modules (
  echo Installing dependencies...
  npm install
)

echo.
echo [MODGPT] Starting launcher...
call npm start

if %errorlevel% NEQ 0 (
  echo ❌ Launch failed. Something went wrong with npm or Electron.
) else (
  echo ✅ Launcher started successfully.
)

pause