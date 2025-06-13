const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('launch-app', (event, app) => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true
  });

  if (app === 'modgpt') {
    win.loadURL('https://github.com/iammrmikeman/MODGPT').catch(err => {
      console.error("MODGPT failed to load", err);
      win.loadFile('error.html');
    });
  } else if (app === 'chatgpt') {
    win.loadURL('https://chat.openai.com').catch(err => {
      console.error("ChatGPT failed to load", err);
      win.loadFile('error.html');
    });
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});