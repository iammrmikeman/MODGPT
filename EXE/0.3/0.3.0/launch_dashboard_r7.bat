@echo off
cd /d "%~dp0"
echo [MODGPT] Running dashboard...
call npm install
IF %ERRORLEVEL% NEQ 0 (
  echo ❌ npm install failed.
  pause
  exit /b
)
call npm start
IF %ERRORLEVEL% NEQ 0 (
  echo ❌ Electron crashed.
  pause
)
pause