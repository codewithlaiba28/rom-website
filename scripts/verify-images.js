const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('src');
const imageSrcs = new Set();
files.forEach((f) => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/['"]\/images\/roam\/[^'"]+['"]/g) || [];
  matches.forEach((m) => {
    imageSrcs.add(m.replace(/['"]/g, ''));
  });
});

console.log('Total referenced images:', imageSrcs.size);
let missingCount = 0;
imageSrcs.forEach((img) => {
  const diskPath = path.join('public', img.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    console.log('MISSING ON DISK:', img);
    missingCount++;
  } else {
    const size = fs.statSync(diskPath).size;
    if (size < 1000) {
      console.log('SUSPICIOUSLY SMALL FILE:', img, size);
    }
  }
});
if (missingCount === 0) {
  console.log('ALL REFERENCED IMAGES EXIST ON DISK AND ARE HEALTHY!');
}
