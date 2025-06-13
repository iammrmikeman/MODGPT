@echo off
cd /d "%~dp0"
echo [MODGPT] Installing dependencies...
call npm install || goto fail

echo [MODGPT] Launching Sidebar...
npm start
pause
exit

:fail
echo ❌ npm install failed. Press any key to exit.
pause
