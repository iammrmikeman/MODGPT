// main.js — Node (Electron main process)
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') // optional
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
