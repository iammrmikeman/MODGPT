let currentFolderIndex = 0;
let currentSubIndex = 0;
let folders = document.querySelectorAll('.folder-icon');
let subItems = [];
let inSubmenu = false;

const pollGamepad = () => {
  const pads = navigator.getGamepads();
  if (!pads[0]) return;
  const pad = pads[0];

  const hAxis = pad.axes[0];
  const vAxis = pad.axes[1];

  const btnA = pad.buttons[0].pressed;
  const btnB = pad.buttons[1].pressed;
  const btnStart = pad.buttons[9].pressed;

  handleStickInput(hAxis, vAxis);
  if (btnA) selectItem();
  if (btnB) goBack();
  if (btnStart) openSettings();
};

let lastHInput = 0;
let lastVInput = 0;

const handleStickInput = (h, v) => {
  if (Math.abs(h) > 0.5 && Math.abs(lastHInput) < 0.5) {
    if (!inSubmenu) {
      currentFolderIndex += h > 0 ? 1 : -1;
      updateFolderFocus();
    }
  }
  if (Math.abs(v) > 0.5 && Math.abs(lastVInput) < 0.5) {
    if (inSubmenu) {
      currentSubIndex += v > 0 ? 1 : -1;
      updateSubFocus();
    }
  }
  lastHInput = h;
  lastVInput = v;
};

const updateFolderFocus = () => {
  currentFolderIndex = (currentFolderIndex + folders.length) % folders.length;
  folders.forEach(f => f.classList.remove('focused'));
  folders[currentFolderIndex].classList.add('focused');
  openSubmenu(folders[currentFolderIndex]);
};

const openSubmenu = (folder) => {
  inSubmenu = true;
  subItems = folder.querySelectorAll('.submenu-item');
  currentSubIndex = 0;
  updateSubFocus();
};

const updateSubFocus = () => {
  subItems.forEach(s => s.classList.remove('focused'));
  if (subItems.length > 0) {
    currentSubIndex = (currentSubIndex + subItems.length) % subItems.length;
    subItems[currentSubIndex].classList.add('focused');
  }
};

const selectItem = () => {
  if (!inSubmenu) return;
  const selected = subItems[currentSubIndex];
  if (selected) selected.click();
};

const goBack = () => {
  if (inSubmenu) {
    inSubmenu = false;
    subItems = [];
    document.querySelectorAll('.submenu-item').forEach(s => s.classList.remove('focused'));
  }
};

const openSettings = () => {
  const icon = document.getElementById('modgpt-icon');
  if (icon) icon.click();
};

const gamepadLoop = () => {
  pollGamepad();
  requestAnimationFrame(gamepadLoop);
};

document.addEventListener('DOMContentLoaded', () => {
  folders = document.querySelectorAll('.folder-icon');
  updateFolderFocus();
  gamepadLoop();
});