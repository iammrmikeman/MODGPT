
const dashboard = document.getElementById('dashboard');
const submenu = document.getElementById('submenu');

const iconMap = {
  'EMAILS': 'emails_folder.png',
  'COMPANY': 'projects_folder.png',
  'SPEC OPS': 'docs_folder.png',
  'MEMORY LOGS': 'memory_folder.png',
  'TRUSTED BUILDS': 'trusted_builds_folder.png',
  'THEMES': 'xmb_themes_folder.png',
  'MODGPT': 'modgpt_folder.png'
};

function renderTopLevelFolders() {
  dashboard.innerHTML = '';
  Object.keys(window.folderMap).forEach(folder => {
    const div = document.createElement('div');
    div.className = 'icon';
    div.innerHTML = `<img src="${iconMap[folder]}"><div class="label">${folder}</div>`;
    div.addEventListener('click', () => renderSubmenu(folder));
    dashboard.appendChild(div);
  });
}

function renderSubmenu(folder) {
  submenu.innerHTML = '';
  window.folderMap[folder].forEach(item => {
    const div = document.createElement('div');
    div.className = 'subitem';
    div.innerText = item;
    submenu.appendChild(div);
  });
}

window.onload = renderTopLevelFolders;
