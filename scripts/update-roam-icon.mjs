import fs from 'fs';

let code = fs.readFileSync('src/components/RoamIcon.tsx', 'utf8');

const targetHeader = `export default function RoamIcon({
  name,
  className = "w-5 h-5",
  size,
}: RoamIconProps) {
  const normalized = (name || "").trim().toLowerCase();
  const style = size ? { width: size, height: size } : undefined;`;

const replacementHeader = `export default function RoamIcon({
  name,
  className = "",
  size,
}: RoamIconProps) {
  const normalized = (name || "").trim().toLowerCase();

  let inferredSize: string | undefined = undefined;
  const pxMatch = className.match(/text-\\[(\\d+)px\\]/);
  if (pxMatch) {
    inferredSize = pxMatch[1] + 'px';
  } else if (/\\btext-xs\\b/.test(className)) {
    inferredSize = '12px';
  } else if (/\\btext-sm\\b/.test(className)) {
    inferredSize = '14px';
  } else if (/\\btext-base\\b/.test(className)) {
    inferredSize = '16px';
  } else if (/\\btext-lg\\b/.test(className)) {
    inferredSize = '18px';
  } else if (/\\btext-xl\\b/.test(className)) {
    inferredSize = '20px';
  } else if (/\\btext-2xl\\b/.test(className)) {
    inferredSize = '24px';
  } else if (/\\btext-3xl\\b/.test(className)) {
    inferredSize = '30px';
  }

  const hasWidth = /\\bw-\\S+/.test(className);
  const hasHeight = /\\bh-\\S+/.test(className);

  const style: React.CSSProperties = {
    ...(size
      ? { width: size, height: size }
      : inferredSize && !hasWidth && !hasHeight
      ? { width: inferredSize, height: inferredSize }
      : !hasWidth && !hasHeight
      ? { width: '1.25em', height: '1.25em' }
      : {}),
  };

  const finalClass = ('inline-block align-middle shrink-0 ' + className).trim();`;

if (!code.includes(targetHeader)) {
  console.error('Target header not found in RoamIcon.tsx');
  process.exit(1);
}

code = code.replace(targetHeader, replacementHeader);

// Replace all standard SVGs: className={className} style={style}
code = code.replace(/<svg\s+className=\{className\}\s+style=\{style\}/g, '<svg width="1em" height="1em" className={finalClass} style={style}');

// Also handle the animate-spin case:
code = code.replace(/className=\{`animate-spin \$\{className\}`\}/g, 'width="1em" height="1em" className={`animate-spin ${finalClass}`} style={style}');

fs.writeFileSync('src/components/RoamIcon.tsx', code);
console.log('Successfully updated RoamIcon.tsx with auto-sizing logic!');
