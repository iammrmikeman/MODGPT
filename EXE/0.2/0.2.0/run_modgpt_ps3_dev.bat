@echo off
:: MODGPTEXE - PS3 XMB v0.2.0 Dev Server

title MODGPT PS3 XMB - Live Dev Server

cd /d %~dp0

echo 🔄 Launching Vite dev server...
call npm run dev

echo ⚠️ If this window closes, check for errors in CMD manually.
pause
