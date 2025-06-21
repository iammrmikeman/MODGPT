
const fs = require('fs');
const path = require('path');
const { contextBridge } = require('electron');

const configPath = path.join(__dirname, 'config/ai_engine.json');

contextBridge.exposeInMainWorld('modgpt', {
    getAIEngine: () => {
        try {
            return Promise.resolve(JSON.parse(fs.readFileSync(configPath)).engine);
        } catch (e) {
            return Promise.resolve("unknown");
        }
    },
    toggleAIEngine: () => {
        try {
            const cfg = JSON.parse(fs.readFileSync(configPath));
            const newEngine = cfg.engine === "openai" ? "deepseek" : "openai";
            fs.writeFileSync(configPath, JSON.stringify({ engine: newEngine }, null, 2));
            return Promise.resolve();
        } catch (e) {
            return Promise.reject("Failed to toggle engine");
        }
    }
});
