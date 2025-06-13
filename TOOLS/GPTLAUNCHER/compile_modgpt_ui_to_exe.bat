@echo off
cd /d "%~dp0"

echo Installing electron-packager (if not already installed)...
npm install -g electron-packager

echo Compiling Electron app into .exe...
electron-packager . MODGPTLauncher --platform=win32 --arch=x64 --overwrite

echo ✅ Build complete. Check the MODGPTLauncher-win32-x64 folder.
pause