


document.addEventListener("DOMContentLoaded", () => {
  const iconMap = {
    "EMAILS": "emails_folder.png",
    "COMPANY": "storage_folder.png",
    "SPEC OPS": "projects_folder.png",
    "MEMORY LOGS": "memory_folder.png",
    "TRUSTED BUILDS": "trusted_builds_folder.png",
    "THEMES": "xmb_themes_folder.png",
    "MODGPT": "modgpt_folder.png"
  };

  const folderMap = window.folderMap || {};
  const dashboard = document.getElementById("dashboard");
  const submenu = document.getElementById("submenu");
  const panel = document.getElementById("panel");

  let folders = [];
  let subItems = [];
  let currentFolderIndex = 0;
  let currentSubIndex = 0;

  function triggerSubItem() {
    const item = subItems[currentSubIndex];
    if (!item) return;
    const label = item.textContent;
    const safe = label.toLowerCase().replace(/[^a-z0-9]/g, "_") + ".html";
    const target = "panels/" + safe;

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

  function updateSubFocus() {
    subItems.forEach(s => s.classList.remove("focused"));
    if (subItems[currentSubIndex]) {
      subItems[currentSubIndex].classList.add("focused");
    }
  }

  function updateFocus() {
    folders.forEach(f => f.classList.remove("focused"));
    folders[currentFolderIndex].classList.add("focused");
    renderSubmenu(folders[currentFolderIndex].dataset.id);
  }

  for (const folder in folderMap) {
    const div = document.createElement("div");
    div.className = "icon";
    div.dataset.id = folder;

    const img = document.createElement("img");
    img.src = iconMap[folder] || "folder_outline.png";

    const label = document.createElement("div");
    label.textContent = folder;

    div.appendChild(img);
    div.appendChild(label);
    dashboard.appendChild(div);
    folders.push(div);

    div.addEventListener("mouseenter", () => {
      currentFolderIndex = folders.indexOf(div);
      updateFocus();
    });

    div.addEventListener("click", () => updateFocus());
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") currentFolderIndex = (currentFolderIndex - 1 + folders.length) % folders.length, updateFocus();
    if (e.key === "ArrowRight") currentFolderIndex = (currentFolderIndex + 1) % folders.length, updateFocus();
    if (e.key === "ArrowUp") currentSubIndex = (currentSubIndex - 1 + subItems.length) % subItems.length, updateSubFocus();
    if (e.key === "ArrowDown") currentSubIndex = (currentSubIndex + 1) % subItems.length, updateSubFocus();
    if (e.key === "Enter") triggerSubItem();
    if (e.key === "Escape") panel.style.display = "none";
  });

  updateFocus();
});
