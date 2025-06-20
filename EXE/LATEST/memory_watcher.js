// 🔁 Hot Reload for MEMORY_BANKS/
import fs from 'fs';
import path from 'path';

export function watchMemoryBanks(callback) {
  const dir = './MEMORY_BANKS/';
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.md')) {
      console.log(`🔄 Memory file changed: ${filename}`);
      callback(filename);
    }
  });
}