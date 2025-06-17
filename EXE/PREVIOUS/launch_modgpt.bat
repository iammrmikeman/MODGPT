@echo off
cd /d "%~dp0"
echo ---------------
echo CURRENT FOLDER: %cd%
echo ---------------
echo Launching MODGPT UI with local Electron...
npx electron .
pause