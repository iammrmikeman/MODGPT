@echo off
cd /d "%~dp0"
echo [MODGPT.EXE] Installing dependencies...
call npm install
if %errorlevel% NEQ 0 (
  echo ❌ npm install failed.
  pause
  exit /b
)
echo.
echo [MODGPT.EXE] Starting dashboard...
call npm start
pause