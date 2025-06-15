
function triggerSubItem() {
  const item = subItems[currentSubIndex];
  if (!item) return;
  const label = item.textContent;
  const safe = label.toLowerCase().replace(/[^a-z0-9]/g, "_") + ".html";
  const target = "panels/" + safe;
  const panel = document.getElementById("panel");

  fetch(target)
    .then(res => res.text())
    .then(html => {
      panel.innerHTML = html;
      panel.style.display = "block";
    })
    .catch(() => {
      panel.innerHTML = `<h1>${label}</h1><p>Fallback panel loaded.</p>`;
      panel.style.display = "block";
    });
}

function renderSubmenu(id) {
  submenu.innerHTML = "";
  const items = folderMap[id] || [];
  subItems = [];

  items.forEach((name, i) => {
    const el = document.createElement("div");
    el.className = "subitem";
    el.textContent = name;

    el.addEventListener("mouseenter", () => {
      subItems.forEach(s => s.classList.remove("focused"));
      currentSubIndex = i;
      el.classList.add("focused");
    });

    el.addEventListener("click", () => {
      triggerSubItem();
    });

    submenu.appendChild(el);
    subItems.push(el);
  });

  currentSubIndex = 0;
  updateSubFocus();
}

document.addEventListener("DOMContentLoaded", () => {
  const folderMap = window.folderMap;
  const dashboard = document.getElementById("dashboard");
  const submenu = document.getElementById("submenu");

  let folders = [];
  let subItems = [];
  let currentFolderIndex = 0;
  let currentSubIndex = 0;
  let inSubmenu = false;

  const iconMap = {'EMAILS': 'emails_folder.png', 'COMPANY': 'storage_folder.png', 'SPEC OPS': 'projects_folder.png', 'MEMORY LOGS': 'memory_folder.png', 'TRUSTED BUILDS': 'trusted_builds_folder.png', 'THEMES': 'xmb_themes_folder.png', 'MODGPT': 'modgpt_folder.png', 'DEV TOOLS': 'dev_tools_folder.png'};

  for (const folder in folderMap) {
    const iconDiv = document.createElement("div");
    iconDiv.className = "icon";
    iconDiv.dataset.id = folder;

    const img = document.createElement("img");
    img.src = iconMap[folder] || "folder_outline.png";

    const label = document.createElement("div");
    label.textContent = folder;

    iconDiv.appendChild(img);
    iconDiv.appendChild(label);
    dashboard.appendChild(iconDiv);
    folders.push(iconDiv);

    // Mouse hover support
    iconDiv.addEventListener("mouseenter", () => {
      currentFolderIndex = folders.indexOf(iconDiv);
      updateFocus();
    });

    iconDiv.addEventListener("click", () => {
      updateFocus();
    });
  }

  const updateFocus = () => {
    folders.forEach(f => f.classList.remove("focused"));
    folders[currentFolderIndex].classList.add("focused");
    const id = folders[currentFolderIndex].dataset.id;
    renderSubmenu(id);
  };

  const renderSubmenu = (folderId) => {
    submenu.innerHTML = "";
    const items = folderMap[folderId] || [];
    subItems = [];

    items.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "subitem";
      div.textContent = item;

      div.addEventListener("mouseenter", () => {
        subItems.forEach(s => s.classList.remove("focused"));
        currentSubIndex = i;
        div.classList.add("focused");
      });

      div.addEventListener("click", () => {
        alert("Launch: " + item);
      });

      submenu.appendChild(div);
      subItems.push(div);
    });

    inSubmenu = true;
    currentSubIndex = 0;
    updateSubFocus();
  };

  const updateSubFocus = () => {
    subItems.forEach(s => s.classList.remove("focused"));
    if (subItems.length > 0) {
      currentSubIndex = (currentSubIndex + subItems.length) % subItems.length;
      subItems[currentSubIndex].classList.add("focused");
    }
  };

  const moveFolder = (dir) => {
    currentFolderIndex = (currentFolderIndex + dir + folders.length) % folders.length;
    updateFocus();
  };

  const moveSubItem = (dir) => {
    if (!subItems.length) return;
    subItems[currentSubIndex].classList.remove("focused");
    currentSubIndex = (currentSubIndex + dir + subItems.length) % subItems.length;
    subItems[currentSubIndex].classList.add("focused");
  };

  const triggerSubItem = () => {
    const item = subItems[currentSubIndex];
    if (item) item.click();
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") moveFolder(-1);
    if (e.key === "ArrowRight") moveFolder(1);
    if (e.key === "ArrowUp") moveSubItem(-1);
    if (e.key === "ArrowDown") moveSubItem(1);
    if (e.key === "Enter") triggerSubItem();
    if (e.key === "Escape") inSubmenu = false;
    if (e.key.toLowerCase() === "s") openSettings();
  });

  updateFocus();
  gamepadLoop();
});

function openSettings() {
  alert("Settings modal coming soon.");
}

// Gamepad loop (unchanged from last working version)
let lastPadState = {};

function pollAllGamepads() {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];

  for (let i = 0; i < pads.length; i++) {
    const pad = pads[i];
    if (!pad) continue;

    if (!lastPadState[i]) {
      console.log("Gamepad connected on slot", i, pad.id);
      lastPadState[i] = {};
    }

    const h = pad.axes[0];
    const v = pad.axes[1];
    const A = pad.buttons[0].pressed;
    const B = pad.buttons[1].pressed;
    const Start = pad.buttons[9].pressed;

    if (Math.abs(h) > 0.5 && Math.abs(lastPadState[i].h || 0) < 0.5) {
      h > 0 ? moveFolder(1) : moveFolder(-1);
    }
    if (Math.abs(v) > 0.5 && Math.abs(lastPadState[i].v || 0) < 0.5) {
      v > 0 ? moveSubItem(1) : moveSubItem(-1);
    }

    if (A && !lastPadState[i].A) triggerSubItem();
    if (B && !lastPadState[i].B) inSubmenu = false;
    if (Start && !lastPadState[i].Start) openSettings();

    lastPadState[i] = { h, v, A, B, Start };
  }
}

function gamepadLoop() {
  pollAllGamepads();
  requestAnimationFrame(gamepadLoop);
}
