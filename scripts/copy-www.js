// Copy public web assets into www/ for Capacitor packaging.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const www = path.join(root, 'www');

const ASSETS = [
  'index.html',
  'game.js',
  'sw.js',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-1024.png',
  'manifest.webmanifest'
];

fs.mkdirSync(www, { recursive: true });

let count = 0;
for (const file of ASSETS) {
  const src = path.join(root, file);
  const dest = path.join(www, file);
  if (!fs.existsSync(src)) {
    console.warn(`skip (not found): ${file}`);
    continue;
  }
  fs.copyFileSync(src, dest);
  count += 1;
  console.log(`copied: ${file}`);
}

console.log(`Copied ${count} files into www/.`);
