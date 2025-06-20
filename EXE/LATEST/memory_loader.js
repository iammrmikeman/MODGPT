// 🔄 MODGPT Memory Loader (EXE Boot Layer)
export function loadMemoryTriggers() {
  try {
    const triggers = require('./memory_triggers.json');
    window.gptMemoryMap = triggers;
    console.log("🧠 Memory routing loaded:", Object.keys(triggers));
  } catch (e) {
    console.error("❌ Failed to load memory triggers:", e);
  }
}