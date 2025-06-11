@echo off
cd /d "C:\Users\pc\Desktop\MODGPT"

:: Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not added to PATH.
    pause
    exit /b
)

:: Fetch remote info
git fetch origin

:: Reset local repo to match remote
git reset --hard origin/main

:: Add and commit all files
git add .
git commit -m "🔥 Full reset: Local MODGPT overwrite"

:: Force push to overwrite GitHub
git push origin main --force

echo.
echo ✅ MODGPT has been force pushed to GitHub successfully.
pause
