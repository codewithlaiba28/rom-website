import fs from 'fs';

let body = fs.readFileSync('scripts/brand-directory-main.html', 'utf8');

// Replace standard HTML attributes with JSX attributes
body = body
  .replace(/class=/g, 'className=')
  .replace(/stroke-linecap=/g, 'strokeLinecap=')
  .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
  .replace(/stroke-width=/g, 'strokeWidth=')
  .replace(/stroke-dasharray=/g, 'strokeDasharray=')
  .replace(/stroke-opacity=/g, 'strokeOpacity=')
  .replace(/fill-rule=/g, 'fillRule=')
  .replace(/clip-rule=/g, 'clipRule=')
  .replace(/stop-color=/g, 'stopColor=')
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
  .replace(/&rarr;/g, '→')
  .replace(/&copy;/g, '©');

// Replace unescaped quotes inside JSX text tags
body = body.replace(/>([^<]*)</g, (match, text) => {
  if (text.includes('"')) {
    const fixedText = text.replace(/"/g, '&quot;');
    return `>${fixedText}<`;
  }
  return match;
});

const pageContent = `"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BrandAssetsPage() {
  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-surface font-body-md text-on-surface">
      <Navbar />

      <div className="w-full pt-20 bg-surface flex-grow">
${body}
      </div>

      <Footer />
    </div>
  );
}
`;

fs.mkdirSync('src/app/brand-assets', { recursive: true });
fs.writeFileSync('src/app/brand-assets/page.tsx', pageContent);
console.log('Successfully written src/app/brand-assets/page.tsx');
