// 🧠 GPT-Based Trigger Inference Engine
import fs from 'fs';

export function inferMemoryTrigger(userInput) {
  const triggers = require('./memory_triggers.json');
  const lowerInput = userInput.toLowerCase();
  for (const [trigger, path] of Object.entries(triggers)) {
    if (lowerInput.includes(trigger)) {
      console.log(`🧠 Trigger matched: '${trigger}' → ${path}`);
      return path;
    }
  }
  console.warn("⚠️ No matching memory trigger found.");
  return null;
}