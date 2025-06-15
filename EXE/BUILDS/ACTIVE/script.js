
const dashboard = document.getElementById('dashboard');
const submenu = document.getElementById('submenu');

// Folder label to icon file map
const iconMap = {
  'EMAILS': 'emails_folder.png',
  'COMPANY': 'projects_folder.png',
  'SPEC OPS': 'docs_folder.png',
  'MEMORY LOGS': 'memory_folder.png',
  'TRUSTED BUILDS': 'trusted_builds_folder.png',
  'THEMES': 'xmb_themes_folder.png',
  'MODGPT': 'icon_128_MODGPT_PERFECT.png'
};

function renderTopLevelFolders() {
  dashboard.innerHTML = '';
  Object.keys(window.folderMap).forEach(folder => {
    const div = document.createElement('div');
    const icon = iconMap[folder] || 'folder.png';
    div.className = 'icon';
    div.innerHTML = `<img src="${icon}"><div class="label">${folder}</div>`;
    div.onclick = () => renderSubmenu(folder);
    dashboard.appendChild(div);
  });
}

function renderSubmenu(folder) {
  submenu.innerHTML = '';
  window.folderMap[folder].forEach(item => {
    const div = document.createElement('div');
    div.className = 'subitem';
    div.innerText = item;
    div.onclick = () => alert(`Open: ${folder} → ${item}`);
    submenu.appendChild(div);
  });
}

window.onload = renderTopLevelFolders;
