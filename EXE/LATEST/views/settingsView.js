
export default function settingsView() {
  const div = document.createElement("div");
  div.className = "settings-view";
  div.innerHTML = `
    <div style="padding: 40px; color: #e2e8f0; font-family: 'Segoe UI', sans-serif;">
      <h1 style="font-size: 1.6rem; margin-bottom: 18px;">Settings</h1>
      <label for="openai-key" style="font-weight: bold;">OpenAI API Key:</label><br/>
      <input type="text" id="openai-key" placeholder="sk-..." style="margin-top: 6px; padding: 10px; font-size: 1rem; width: 100%; max-width: 400px; border-radius: 8px; border: none;" /><br/>
      <button onclick="saveKey()" style="margin-top: 16px; padding: 10px 24px; font-size: 1rem; background: #38bdf8; border: none; border-radius: 8px; color: white; cursor: pointer;">Save</button>
    </div>
  `;
  return div;
}
