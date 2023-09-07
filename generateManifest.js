import fs from 'fs';
import path from 'path';

const root = '/images/';
const manifest = {};
for (const file of fs.readdirSync('.')) {
  const name = path.basename(file);
  if (name.endsWith('.png')) {
    manifest[name.replace('.png', '')] = `${root}${name}`;
  }
}
fs.writeFileSync('manifest.json', JSON.stringify(manifest));