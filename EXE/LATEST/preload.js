
const fs = require("fs");
const path = require("path");

contextBridge.exposeInMainWorld("gpt", {
  ask: (prompt) => ipcRenderer.invoke("ask-gpt", prompt),
  saveKey: (key) => {
    const keyPath = path.join(__dirname, "gpt_key.txt");
    fs.writeFileSync(keyPath, key);
  }
});

// No-op for now; used to expose APIs later
