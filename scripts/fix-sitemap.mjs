import fs from 'fs';

let content = fs.readFileSync('src/app/sitemap/page.tsx', 'utf8');

// Remove unused Link import
content = content.replace('import Link from "next/link";\n', '');

// Replace unescaped quotes inside JSX text tags
content = content.replace(/>([^<]*)</g, (match, text) => {
  if (text.includes('"')) {
    const fixedText = text.replace(/"/g, '&quot;');
    return `>${fixedText}<`;
  }
  return match;
});

fs.writeFileSync('src/app/sitemap/page.tsx', content);
console.log('Fixed quotes in sitemap/page.tsx');
