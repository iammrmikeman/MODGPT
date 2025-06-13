const { app, BrowserWindow } = require('electron');
app.commandLine.appendSwitch("disable-gpu-shader-disk-cache");
function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
