import fs from 'fs';

const files = [
  'src/app/explore/page.tsx',
  'src/app/journal/page.tsx',
  'src/app/my-trips/page.tsx',
  'src/app/plan-a-trip/page.tsx',
  'src/app/contact/page.tsx',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Add RoamIcon import if not present
  if (!content.includes('RoamIcon')) {
    content = content.replace(
      'import Navbar from "@/components/Navbar";',
      'import Navbar from "@/components/Navbar";\nimport RoamIcon from "@/components/RoamIcon";'
    );
  }

  // Replace simple static icon spans:
  // e.g. <span className="material-symbols-outlined ...">icon_name</span>
  content = content.replace(
    /<span\s+className=["']material-symbols-outlined\s*([^"']*)["'][^>]*>\s*([a-zA-Z0-9_]+)\s*<\/span>/g,
    (match, extraClasses, iconName) => {
      // determine clean class name
      let cls = (extraClasses || '').trim();
      if (!cls.includes('w-') && !cls.includes('text-')) {
        cls += ' w-4 h-4';
      }
      return `<RoamIcon name="${iconName}" className="${cls} shrink-0" />`;
    }
  );

  // Also replace multi-line or styled icon spans:
  // <span\s+className=["']material-symbols-outlined([^"']*)["'][^>]*>\s*([a-zA-Z0-9_]+)\s*<\/span>
  content = content.replace(
    /<span\s+className=["']([^"']*?)material-symbols-outlined([^"']*?)["'][^>]*>\s*([a-zA-Z0-9_]+)\s*<\/span>/g,
    (match, c1, c2, iconName) => {
      let cls = `${c1} ${c2}`.replace(/\s+/g, ' ').trim();
      return `<RoamIcon name="${iconName}" className="${cls} shrink-0" />`;
    }
  );

  // Dynamic icon name, e.g. {item.weatherIcon} or {pillar.icon} or {cat.icon}
  content = content.replace(
    /<span\s+className=["']([^"']*?)material-symbols-outlined([^"']*?)["'][^>]*>\s*\{([^}]+)\}\s*<\/span>/g,
    (match, c1, c2, expr) => {
      let cls = `${c1} ${c2}`.replace(/\s+/g, ' ').trim();
      return `<RoamIcon name={${expr}} className="${cls} shrink-0" />`;
    }
  );

  fs.writeFileSync(file, content);
  console.log('Migrated icons in', file);
}
