
function toggleSettings() {
  const modal = document.getElementById('settings-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function saveKey() {
  const key = document.getElementById('api-key').value;
  const repo = document.getElementById('repo-path').value;
  const exportPath = document.getElementById('export-path').value;
  const model = document.getElementById('model').value;

  localStorage.setItem('gpt_key', key);
  localStorage.setItem('modgpt_repo', repo);
  localStorage.setItem('export_path', exportPath);
  localStorage.setItem('gpt_model', model);

  alert("Saved.");
}

function openSwarm() {
  const panel = document.getElementById('chat-panel');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}
