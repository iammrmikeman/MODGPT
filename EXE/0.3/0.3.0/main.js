const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    webPreferences: {
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
});