// 🧠 BossGPT Tab (JS-Only UI + Logic)
import { loadMemoryTriggers } from '../../memory_loader.js';
import { inferMemoryTrigger } from '../../gpt_trigger_inference.js';

window.addEventListener('DOMContentLoaded', () => {
  loadMemoryTriggers();

  const panel = document.createElement('div');
  panel.className = 'boss-panel';
  panel.innerHTML = `
    <h2>🧠 BossGPT Memory Tools</h2>
    <input type="text" id="memoryInput" placeholder="Enter a memory topic..." />
    <button id="triggerSearch">Search</button>
    <div id="memoryOutput" class="output-box"></div>
    <p class="desc">Auto-routes to memory banks using GPT trigger matches. No server required.</p>
  `;
  document.body.appendChild(panel);

  document.getElementById('triggerSearch').addEventListener('click', () => {
    const query = document.getElementById('memoryInput').value;
    const output = document.getElementById('memoryOutput');
    const result = inferMemoryTrigger(query);
    if (result) {
      output.innerHTML = `<strong>🧠 Memory Path:</strong> <code>${result}</code>`;
    } else {
      output.innerHTML = `<span style='color:red;'>❌ No memory trigger matched.</span>`;
    }
  });
});