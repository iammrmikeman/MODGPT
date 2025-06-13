const { ipcRenderer } = require('electron');

function launchApp(app) {
  ipcRenderer.send('launch-app', app);
}