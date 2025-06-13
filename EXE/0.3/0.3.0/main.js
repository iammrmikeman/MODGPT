
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Dev mode: point Electron at Vite dev server
  win.loadURL('http://localhost:5173');
}

app.whenReady().then(createWindow);
