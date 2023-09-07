import fs from 'fs';
import path from 'path';

const root = '/images/';
const manifest = {};
for (const file of fs.readdirSync('./images')) {
  const name = path.basename(file);
  if (name.endsWith('.png')) {
    manifest[name.replace('.png', '')] = `${root}${name}`;
  }
}
fs.writeFileSync('./images/manifest.json', JSON.stringify(manifest));