const { spawn } = require('child_process');
const http = require('http');

const POSSIBLE_PORTS = [5173, 5174, 3000];
const MAX_RETRIES = 30;
const RETRY_INTERVAL = 500;

// 1. Start Vite
console.log("🚀 Launching Vite dev server...");
const vite = spawn('npm', ['run', 'dev'], { shell: true });

vite.stdout.on('data', data => process.stdout.write(`VITE: ${data}`));
vite.stderr.on('data', data => process.stderr.write(`VITE ERR: ${data}`));

function checkPorts(ports, maxRetries = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function tryPorts() {
      const port = ports.find(p => tryPort(p));
      if (port) {
        resolve(port);
      } else if (++attempts >= maxRetries) {
        reject("❌ Failed to detect any working Vite port.");
      } else {
        console.log(`⏳ Waiting for Vite (${attempts}/${maxRetries})...`);
        setTimeout(tryPorts, RETRY_INTERVAL);
      }
    }

    function tryPort(port) {
      const url = `http://localhost:${port}`;
      try {
        http.get(url, res => {
          if (res.statusCode === 200) {
            console.log(`✅ Vite is ready at ${url}`);
            resolve(port);
          }
          res.resume();
        }).on('error', () => {});
      } catch {
        return false;
      }
      return false;
    }

    tryPorts();
  });
}

checkPorts(POSSIBLE_PORTS).then(port => {
  const electron = spawn('npx', ['electron', '.'], {
    shell: true,
    env: { ...process.env, MODGPT_VITE_PORT: port }
  });
  electron.stdout.on('data', data => process.stdout.write(`ELECTRON: ${data}`));
  electron.stderr.on('data', data => process.stderr.write(`ELECTRON ERR: ${data}`));
  electron.on('exit', code => {
    console.log(`🛑 Electron exited with code ${code}`);
    vite.kill('SIGINT');
  });
}).catch(err => {
  console.error(err);
  vite.kill('SIGINT');
});
