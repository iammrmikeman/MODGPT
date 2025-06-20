// ✅ Trusted Memory Validation Script
import fs from 'fs';
import path from 'path';

const registryPath = './memory_registry.md';
const triggerPath = './memory_triggers.json';

export function validateMemoryRegistry() {
  if (!fs.existsSync(registryPath)) {
    throw new Error("❌ Missing memory_registry.md");
  }
  if (!fs.existsSync(triggerPath)) {
    throw new Error("❌ Missing memory_triggers.json");
  }

  const registry = fs.readFileSync(registryPath, 'utf-8').split('\n');
  const lines = registry.filter(line => line.startsWith('| ') && !line.includes('Label'));

  for (const line of lines) {
    const parts = line.split('|').map(p => p.trim());
    const label = parts[1];
    const folder = parts[2];
    const readmePath = path.join(folder, '_README_BANK.md');

    if (!fs.existsSync(folder)) {
      throw new Error(`❌ Memory bank folder missing: ${folder}`);
    }
    if (!fs.existsSync(readmePath)) {
      throw new Error(`❌ Missing _README_BANK.md in ${folder}`);
    }
  }

  console.log("✅ Memory registry is valid.");
}