// 🐜 Swarm Memory Indexer
import fs from 'fs';
import path from 'path';

export function crawlMemoryBanks() {
  const baseDir = './MEMORY_BANKS/';
  const banks = fs.readdirSync(baseDir).filter(name => !name.startsWith('.'));

  for (const bank of banks) {
    const folder = path.join(baseDir, bank);
    const readme = path.join(folder, '_README_BANK.md');
    if (fs.existsSync(readme)) {
      const content = fs.readFileSync(readme, 'utf-8');
      const labelLine = content.split('\n')[0] || '';
      const label = labelLine.replace('# 🧠 ', '').trim();
      console.log(`🧠 Memory Bank Loaded: "${label}"`);
    } else {
      console.warn(`⚠️  No _README_BANK.md found for ${bank}`);
    }
  }
}