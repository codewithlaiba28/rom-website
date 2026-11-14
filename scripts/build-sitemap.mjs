import fs from 'fs';

let body = fs.readFileSync('scripts/sitemap-body.html', 'utf8');

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
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
  .replace(/&rarr;/g, '→')
  .replace(/&copy;/g, '©');

// Replace raw href="#" or relative paths with Next.js Link
body = body
  .replace(/href="explore\.html"/g, 'href="/explore"')
  .replace(/href="journal\.html"/g, 'href="/journal"')
  .replace(/href="plan-a-trip\.html"/g, 'href="/plan-a-trip"')
  .replace(/href="my-trips\.html"/g, 'href="/my-trips"')
  .replace(/href="contact\.html"/g, 'href="/contact"')
  .replace(/href="index\.html"/g, 'href="/"');

const pageContent = `"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SitemapArchitecturePage() {
  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-surface font-body-md text-on-surface">
      <Navbar />

      <main className="w-full pt-28 pb-20 bg-surface flex-grow max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="reveal-on-scroll">
${body}
        </div>
      </main>

      <Footer />
    </div>
  );
}
`;

fs.mkdirSync('src/app/sitemap', { recursive: true });
fs.writeFileSync('src/app/sitemap/page.tsx', pageContent);
console.log('Successfully written src/app/sitemap/page.tsx');
