"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BrandAssetsPage() {
  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-surface font-body-md text-on-surface">
      <Navbar />

      <div className="w-full pt-20 bg-surface flex-grow">
<main className="max-w-[1340px] mx-auto px-6 py-12 space-y-16">

    {/*  Page Title & Scope Header  */}
    <section className="space-y-4 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#263F36]/5 border border-[#C5A77A]/40 text-[#263F36] text-[11px] font-semibold tracking-[0.2em] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A77A]"></span>
        Complete Visual Asset Catalog
      </div>
      <h1 className="text-4xl md:text-5xl font-serif-luxury font-medium text-[#263F36] tracking-tight">
        ROAM Brand Logos, Emblems & Icon System
      </h1>
      <p className="text-base text-[#263F36]/70 leading-relaxed font-light">
        A single comprehensive showcase of all official logo lockups, monograms, nautical symbols, and UI icons utilized across every page of the ROAM Luxury Travel Planner.
      </p>
    </section>

    {/*  SECTION 1: MASTER LOGO LOCKUPS (Light & Dark Variants)  */}
    <section className="space-y-6">
      <div className="flex items-end justify-between border-b border-[#263F36]/15 pb-4">
        <div>
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#C5A77A]">Section 01</span>
          <h2 className="text-2xl md:text-3xl font-serif-luxury text-[#263F36] font-semibold">Primary Brand Logos & Wordmarks</h2>
        </div>
        <span className="text-xs text-[#263F36]/60">4 Master Variations</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/*  Card 1: Official Primary Horizontal Lockup (Light Background)  */}
        <div className="bg-white rounded-2xl p-8 border border-[#263F36]/10 shadow-sm flex flex-col justify-between group hover:border-[#C5A77A] transition-all">
          <div className="h-44 bg-[#F8F6F1] rounded-xl flex items-center justify-center p-6 border border-[#263F36]/5">
            {/*  Full Vector Logo: Compass + ROAM TRAVEL ATELIER  */}
            <svg className="w-full max-w-[340px] h-auto" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(6, 6)">
                <circle cx="24" cy="24" r="22" stroke="#263F36" strokeWidth="1.2" strokeOpacity="0.3" />
                <circle cx="24" cy="24" r="18" stroke="#C5A77A" strokeWidth="1.5" />
                <line x1="24" y1="2" x2="24" y2="7" stroke="#263F36" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="24" y1="41" x2="24" y2="46" stroke="#263F36" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="2" y1="24" x2="7" y2="24" stroke="#263F36" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="41" y1="24" x2="46" y2="24" stroke="#263F36" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M24 10 L26.5 21.5 L38 24 L26.5 26.5 L24 38 L21.5 26.5 L10 24 L21.5 21.5 Z" fill="#263F36" />
                <circle cx="24" cy="24" r="2.5" fill="#C5A77A" />
              </g>
              <text x="68" y="33" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" letter-spacing="4.5" fill="#263F36">ROAM</text>
              <text x="70" y="47" font-family="'Manrope', sans-serif" font-size="8.5" font-weight="600" letter-spacing="3" fill="#C5A77A">TRAVEL ATELIER</text>
            </svg>
          </div>
          <div className="mt-6 pt-4 border-t border-[#263F36]/10 flex items-start justify-between">
            <div>
              <h3 className="font-serif-luxury text-lg font-semibold text-[#263F36]">Primary Horizontal Logo Lockup</h3>
              <p className="text-xs text-[#263F36]/70 mt-1">Used on: Top Nav Header (All Pages), Desktop Header Chrome</p>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#263F36]/5 px-2.5 py-1 rounded text-[#263F36]">ROAM_LOGO_PRIMARY_LIGHT</span>
          </div>
        </div>

        {/*  Card 2: Inverse Dark Mode / Forest Green Lockup  */}
        <div className="bg-[#263F36] rounded-2xl p-8 border border-[#263F36] shadow-sm flex flex-col justify-between group hover:border-[#C5A77A] transition-all text-[#F8F6F1]">
          <div className="h-44 bg-[#1B2F28] rounded-xl flex items-center justify-center p-6 border border-white/5">
            {/*  Inverse Vector Logo  */}
            <svg className="w-full max-w-[340px] h-auto" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(6, 6)">
                <circle cx="24" cy="24" r="22" stroke="#F8F6F1" strokeWidth="1.2" strokeOpacity="0.3" />
                <circle cx="24" cy="24" r="18" stroke="#C5A77A" strokeWidth="1.5" />
                <line x1="24" y1="2" x2="24" y2="7" stroke="#C5A77A" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="24" y1="41" x2="24" y2="46" stroke="#C5A77A" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="2" y1="24" x2="7" y2="24" stroke="#C5A77A" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="41" y1="24" x2="46" y2="24" stroke="#C5A77A" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M24 10 L26.5 21.5 L38 24 L26.5 26.5 L24 38 L21.5 26.5 L10 24 L21.5 21.5 Z" fill="#F8F6F1" />
                <circle cx="24" cy="24" r="2.5" fill="#C5A77A" />
              </g>
              <text x="68" y="33" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" letter-spacing="4.5" fill="#F8F6F1">ROAM</text>
              <text x="70" y="47" font-family="'Manrope', sans-serif" font-size="8.5" font-weight="600" letter-spacing="3" fill="#C5A77A">TRAVEL ATELIER</text>
            </svg>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-start justify-between">
            <div>
              <h3 className="font-serif-luxury text-lg font-semibold text-white">Reverse Dark Atelier Wordmark</h3>
              <p className="text-xs text-white/70 mt-1">Used on: Dark CTA Banners, Hero Overlays, Night Mode & Footer</p>
            </div>
            <span className="text-[10px] font-mono uppercase bg-white/10 px-2.5 py-1 rounded text-[#C5A77A]">ROAM_LOGO_REVERSE_DARK</span>
          </div>
        </div>

        {/*  Card 3: Stacked Editorial Seal / Monogram Emblem  */}
        <div className="bg-white rounded-2xl p-8 border border-[#263F36]/10 shadow-sm flex flex-col justify-between group hover:border-[#C5A77A] transition-all">
          <div className="h-48 bg-[#F8F6F1] rounded-xl flex items-center justify-center p-6 border border-[#263F36]/5">
            {/*  Vertical Stacked Luxury Seal  */}
            <svg className="h-36 w-auto" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="52" r="38" stroke="#263F36" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="2 3"/>
              <circle cx="80" cy="52" r="32" stroke="#C5A77A" strokeWidth="1.5"/>
              <line x1="80" y1="12" x2="80" y2="20" stroke="#263F36" strokeWidth="2" strokeLinecap="round"/>
              <line x1="80" y1="84" x2="80" y2="92" stroke="#263F36" strokeWidth="2" strokeLinecap="round"/>
              <line x1="40" y1="52" x2="48" y2="52" stroke="#263F36" strokeWidth="2" strokeLinecap="round"/>
              <line x1="112" y1="52" x2="120" y2="52" stroke="#263F36" strokeWidth="2" strokeLinecap="round"/>
              <path d="M80 28 L84 48 L104 52 L84 56 L80 76 L76 56 L56 52 L76 48 Z" fill="#263F36"/>
              <circle cx="80" cy="52" r="4" fill="#C5A77A"/>
              <text x="80" y="116" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-weight="700" letter-spacing="4" fill="#263F36">ROAM</text>
              <text x="80" y="132" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="8" font-weight="600" letter-spacing="3" fill="#C5A77A">EST. 2025 · GENEVA</text>
            </svg>
          </div>
          <div className="mt-6 pt-4 border-t border-[#263F36]/10 flex items-start justify-between">
            <div>
              <h3 className="font-serif-luxury text-lg font-semibold text-[#263F36]">Stacked Atelier Crest & Seal</h3>
              <p className="text-xs text-[#263F36]/70 mt-1">Used on: Itinerary PDF Covers, Dossier Stamps, Journal Frontispiece</p>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#263F36]/5 px-2.5 py-1 rounded text-[#263F36]">ROAM_CREST_SEAL</span>
          </div>
        </div>

        {/*  Card 4: Minimal App Icon & Mobile Favicon Monogram  */}
        <div className="bg-white rounded-2xl p-8 border border-[#263F36]/10 shadow-sm flex flex-col justify-between group hover:border-[#C5A77A] transition-all">
          <div className="h-48 bg-[#F8F6F1] rounded-xl flex items-center justify-center gap-8 p-6 border border-[#263F36]/5">
            {/*  Icon 1: Deep Green App Icon  */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-2xl bg-[#263F36] shadow-md flex items-center justify-center border border-[#C5A77A]/40">
                <svg className="w-12 h-12" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="24" stroke="#C5A77A" strokeWidth="1.8"/>
                  <circle cx="30" cy="30" r="28" stroke="#F8F6F1" strokeWidth="1" strokeOpacity="0.3"/>
                  <path d="M30 12 L33.5 26.5 L48 30 L33.5 33.5 L30 48 L26.5 33.5 L12 30 L26.5 26.5 Z" fill="#C5A77A"/>
                  <circle cx="30" cy="30" r="3.5" fill="#263F36"/>
                </svg>
              </div>
              <span className="text-[10px] text-[#263F36]/60 font-medium">iOS / Android App Icon</span>
            </div>
            {/*  Icon 2: Gold Champagne Favicon  */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-[#F8F6F1] shadow-sm flex items-center justify-center border border-[#C5A77A]">
                <svg className="w-10 h-10" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="24" stroke="#263F36" strokeWidth="1.5"/>
                  <path d="M30 12 L33.5 26.5 L48 30 L33.5 33.5 L30 48 L26.5 33.5 L12 30 L26.5 26.5 Z" fill="#263F36"/>
                  <circle cx="30" cy="30" r="3" fill="#C5A77A"/>
                </svg>
              </div>
              <span className="text-[10px] text-[#263F36]/60 font-medium">Browser Favicon (32x32)</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#263F36]/10 flex items-start justify-between">
            <div>
              <h3 className="font-serif-luxury text-lg font-semibold text-[#263F36]">Minimalist Astrolabe App Icon & Favicon</h3>
              <p className="text-xs text-[#263F36]/70 mt-1">Used on: PWA Home Screen, Browser Tab Favicon, Touch Icons</p>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#263F36]/5 px-2.5 py-1 rounded text-[#263F36]">ROAM_APP_ICON_MARK</span>
          </div>
        </div>

      </div>
    </section>

    {/*  SECTION 2: GLOBAL NAVIGATION & STRUCTURAL UI ICONS  */}
    <section className="space-y-6">
      <div className="flex items-end justify-between border-b border-[#263F36]/15 pb-4">
        <div>
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#C5A77A]">Section 02</span>
          <h2 className="text-2xl md:text-3xl font-serif-luxury text-[#263F36] font-semibold">Global Navigation & Header Icons</h2>
        </div>
        <span className="text-xs text-[#263F36]/60">Used across Top Nav & Shell Bar</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        
        {/*  Icon 1: Compass / Explore  */}
        <div className="bg-white p-5 rounded-xl border border-[#263F36]/10 text-center flex flex-col items-center justify-between hover:border-[#C5A77A] transition-all">
          <div className="w-12 h-12 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#263F36] mb-3">
            <svg className="w-6 h-6 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#C5A77A" stroke="#263F36"/>
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#263F36]">Explore Atlas</span>
          <span className="text-[10px] text-[#263F36]/50 mt-1 font-mono">icon-explore-compass</span>
        </div>

        {/*  Icon 2: Book / Journal  */}
        <div className="bg-white p-5 rounded-xl border border-[#263F36]/10 text-center flex flex-col items-center justify-between hover:border-[#C5A77A] transition-all">
          <div className="w-12 h-12 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#263F36] mb-3">
            <svg className="w-6 h-6 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <line x1="8" y1="6" x2="16" y2="6" stroke="#C5A77A"/>
              <line x1="8" y1="10" x2="14" y2="10" stroke="#C5A77A"/>
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#263F36]">Travel Journal</span>
          <span className="text-[10px] text-[#263F36]/50 mt-1 font-mono">icon-editorial-book</span>
        </div>

        {/*  Icon 3: Map Pin & Compass / Plan a Trip  */}
        <div className="bg-white p-5 rounded-xl border border-[#263F36]/10 text-center flex flex-col items-center justify-between hover:border-[#C5A77A] transition-all">
          <div className="w-12 h-12 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#263F36] mb-3">
            <svg className="w-6 h-6 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
              <line x1="9" y1="3" x2="9" y2="18" stroke="#C5A77A"/>
              <line x1="15" y1="6" x2="15" y2="21" stroke="#C5A77A"/>
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#263F36]">Plan Journey</span>
          <span className="text-[10px] text-[#263F36]/50 mt-1 font-mono">icon-route-map</span>
        </div>

        {/*  Icon 4: Luggage / My Trips  */}
        <div className="bg-white p-5 rounded-xl border border-[#263F36]/10 text-center flex flex-col items-center justify-between hover:border-[#C5A77A] transition-all">
          <div className="w-12 h-12 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#263F36] mb-3">
            <svg className="w-6 h-6 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="15" rx="3"/>
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              <line x1="10" y1="10" x2="10" y2="17" stroke="#C5A77A"/>
              <line x1="14" y1="10" x2="14" y2="17" stroke="#C5A77A"/>
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#263F36]">My Trips Dossier</span>
          <span className="text-[10px] text-[#263F36]/50 mt-1 font-mono">icon-valise-dossier</span>
        </div>

        {/*  Icon 5: Concierge Bell / 24/7 Desk  */}
        <div className="bg-white p-5 rounded-xl border border-[#263F36]/10 text-center flex flex-col items-center justify-between hover:border-[#C5A77A] transition-all">
          <div className="w-12 h-12 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#263F36] mb-3">
            <svg className="w-6 h-6 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#C5A77A"/>
              <circle cx="12" cy="3" r="1" fill="#C5A77A"/>
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#263F36]">Concierge Desk</span>
          <span className="text-[10px] text-[#263F36]/50 mt-1 font-mono">icon-bell-concierge</span>
        </div>

        {/*  Icon 6: User Member Profile  */}
        <div className="bg-white p-5 rounded-xl border border-[#263F36]/10 text-center flex flex-col items-center justify-between hover:border-[#C5A77A] transition-all">
          <div className="w-12 h-12 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#263F36] mb-3">
            <svg className="w-6 h-6 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="4"/>
              <path d="M5.5 21a8.5 8.5 0 0 1 13 0"/>
              <circle cx="12" cy="7" r="1.5" fill="#C5A77A"/>
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#263F36]">Member Account</span>
          <span className="text-[10px] text-[#263F36]/50 mt-1 font-mono">icon-member-profile</span>
        </div>

      </div>
    </section>

    {/*  SECTION 3: SPECIALIZED FEATURE & ATELIER CATEGORY ICONS  */}
    <section className="space-y-6">
      <div className="flex items-end justify-between border-b border-[#263F36]/15 pb-4">
        <div>
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#C5A77A]">Section 03</span>
          <h2 className="text-2xl md:text-3xl font-serif-luxury text-[#263F36] font-semibold">Luxury Terroir, Transit & Planning Icons</h2>
        </div>
        <span className="text-xs text-[#263F36]/60">Used in Explore Atlas, Journey Builder & Dossiers</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {/*  Terroir 1: Alpine Sanctuaries  */}
        <div className="bg-white p-6 rounded-2xl border border-[#263F36]/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#263F36]/5 flex items-center justify-center text-[#263F36]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                <path d="m4.14 15 .76-2 2.1 2 2.5-3 2.5 3" stroke="#C5A77A"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#C5A77A]/15 text-[#926C38] px-2 py-0.5 rounded font-semibold">Alpine</span>
          </div>
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#263F36]">Alpine Peaks & Chalets</h4>
            <p className="text-xs text-[#263F36]/60">St. Moritz, Dolomites, Japanese Alps mountain retreats.</p>
          </div>
          <span className="text-[10px] text-[#263F36]/40 font-mono block">icon-terroir-alpine</span>
        </div>

        {/*  Terroir 2: Coastal & Yachting  */}
        <div className="bg-white p-6 rounded-2xl border border-[#263F36]/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#263F36]/5 flex items-center justify-center text-[#263F36]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 20a4 4 0 0 0 4 0 4 4 0 0 1 4 0 4 4 0 0 0 4 0 4 4 0 0 1 4 0 4 4 0 0 0 4 0"/>
                <path d="m19 14-7-10-7 10h14z" stroke="#263F36"/>
                <line x1="12" y1="4" x2="12" y2="14" stroke="#C5A77A"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#C5A77A]/15 text-[#926C38] px-2 py-0.5 rounded font-semibold">Maritime</span>
          </div>
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#263F36]">Coastal Havens & Riva Yacht</h4>
            <p className="text-xs text-[#263F36]/60">Amalfi cliffside villas, Aeolian private charters.</p>
          </div>
          <span className="text-[10px] text-[#263F36]/40 font-mono block">icon-terroir-maritime</span>
        </div>

        {/*  Terroir 3: Private Aviation / FBO  */}
        <div className="bg-white p-6 rounded-2xl border border-[#263F36]/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#263F36]/5 flex items-center justify-center text-[#263F36]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.4.8-.2 1.8.5 2.3l6.2 4.2-3 3L4 16.5l-1.5 1.5 3 1.5 1.5 3 1.5-1.5-.7-3 3-3 4.2 6.2c.5.7 1.5.9 2.3.5.8-.4 1.2-1.2 1-2z"/>
                <circle cx="18" cy="6" r="1.5" fill="#C5A77A"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#C5A77A]/15 text-[#926C38] px-2 py-0.5 rounded font-semibold">Aviation</span>
          </div>
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#263F36]">Private Aviation & Heli-Shuttle</h4>
            <p className="text-xs text-[#263F36]/60">Airfield corridors, FBO VIP lounge clearance, Heli-transfers.</p>
          </div>
          <span className="text-[10px] text-[#263F36]/40 font-mono block">icon-transit-aviation</span>
        </div>

        {/*  Terroir 4: Heritage & Sanctuary Vault  */}
        <div className="bg-white p-6 rounded-2xl border border-[#263F36]/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#263F36]/5 flex items-center justify-center text-[#263F36]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 3v18"/>
                <circle cx="15" cy="12" r="2.5" stroke="#C5A77A"/>
                <line x1="15" y1="3" x2="15" y2="7"/>
                <line x1="15" y1="17" x2="15" y2="21"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#C5A77A]/15 text-[#926C38] px-2 py-0.5 rounded font-semibold">Vault</span>
          </div>
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#263F36]">Unlisted Private Sanctuaries</h4>
            <p className="text-xs text-[#263F36]/60">Discreet diplomatic properties & private island buyouts.</p>
          </div>
          <span className="text-[10px] text-[#263F36]/40 font-mono block">icon-sanctuary-vault</span>
        </div>

      </div>
    </section>

    {/*  SECTION 4: INTERACTIVE UI CONTROLS & UTILITY ICONS  */}
    <section className="space-y-6">
      <div className="flex items-end justify-between border-b border-[#263F36]/15 pb-4">
        <div>
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#C5A77A]">Section 04</span>
          <h2 className="text-2xl md:text-3xl font-serif-luxury text-[#263F36] font-semibold">UI Controls, Wishlist & Timeline Actions</h2>
        </div>
        <span className="text-xs text-[#263F36]/60">Every interactive symbol across the interface</span>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-[#263F36]/10 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">

          {/*  Heart / Wishlist  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#263F36] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 fill-[#C5A77A] stroke-[#263F36]" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Wishlist / Save</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-heart-save</span>
          </div>

          {/*  Star / Rating  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#C5A77A] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 fill-[#C5A77A]" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Curator Rating</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-star-rating</span>
          </div>

          {/*  Calendar / Solstice  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#263F36] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Travel Dates</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-calendar-date</span>
          </div>

          {/*  Filter / Settings  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#263F36] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                <line x1="4" y1="21" x2="4" y2="14"/>
                <line x1="4" y1="10" x2="4" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="3"/>
                <line x1="20" y1="21" x2="20" y2="16"/>
                <line x1="20" y1="12" x2="20" y2="3"/>
                <circle cx="4" cy="12" r="2" fill="#C5A77A"/>
                <circle cx="12" cy="10" r="2" fill="#C5A77A"/>
                <circle cx="20" cy="14" r="2" fill="#C5A77A"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Atlas Filters</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-filter-sliders</span>
          </div>

          {/*  Audio Wave / Sensory Journal  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#263F36] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 stroke-[#263F36]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="12" y1="2" x2="12" y2="22"/>
                <line x1="8" y1="6" x2="8" y2="18"/>
                <line x1="4" y1="10" x2="4" y2="14"/>
                <line x1="16" y1="6" x2="16" y2="18"/>
                <line x1="20" y1="10" x2="20" y2="14"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Field Audio</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-audio-wave</span>
          </div>

          {/*  Currency / Investment  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#263F36] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"/>
                <path d="M14.5 9a2.5 2.5 0 0 0-5 0c0 3 5 2 5 5a2.5 2.5 0 0 1-5 0"/>
                <line x1="12" y1="5" x2="12" y2="19"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Investment Tier</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-currency-tier</span>
          </div>

          {/*  Clock / Duration  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#263F36] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Itinerary Pacing</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-clock-pacing</span>
          </div>

          {/*  Secure Lock / Confidential  */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-[#263F36]/10 flex items-center justify-center text-[#263F36] hover:bg-[#F8F6F1]">
              <svg className="w-5 h-5 stroke-[#263F36]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                <circle cx="12" cy="16" r="1" fill="#C5A77A"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-[#263F36]">Privacy Protocol</span>
            <span className="text-[9px] font-mono text-[#263F36]/40">icon-lock-protocol</span>
          </div>

        </div>
      </div>
    </section>

    {/*  SECTION 5: DESIGN SPECIFICATIONS & TOKEN CHEATSHEET  */}
    <section className="bg-[#263F36] text-[#F8F6F1] rounded-2xl p-8 md:p-10 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#C5A77A]">Section 05 · Design System Tokens</span>
          <h3 className="text-2xl font-serif-luxury font-semibold mt-1">Logo Usage Guidelines & Palette Standards</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#C5A77A]"></span>
          <span className="text-xs text-white/80 font-mono">Approved for All 8 ROAM Screens</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
          <span className="text-[#C5A77A] font-semibold text-xs uppercase tracking-wider block">1. Clearspace & Sizing</span>
          <p className="text-white/70 text-xs leading-relaxed">
            The astrolabe compass emblem requires minimum padding equal to 50% of its radius (`0.5x`). Minimum desktop height is 36px; mobile header emblem minimum is 28px.
          </p>
        </div>
        <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
          <span className="text-[#C5A77A] font-semibold text-xs uppercase tracking-wider block">2. Typography Pairings</span>
          <p className="text-white/70 text-xs leading-relaxed">
            Main Wordmark: <strong className="text-white font-medium">Cormorant Garamond 600</strong> with +4.5px tracking.<br />
            Atelier Descriptor: <strong className="text-white font-medium">Manrope 600</strong> with +3px uppercase kerning.
          </p>
        </div>
        <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
          <span className="text-[#C5A77A] font-semibold text-xs uppercase tracking-wider block">3. Chromatic Palette</span>
          <p className="text-white/70 text-xs leading-relaxed">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#263F36] border border-white/30 mr-1"></span> Deep Forest: <code className="text-[#C5A77A]">#263F36</code><br />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C5A77A] mr-1"></span> Champagne Gold: <code className="text-[#C5A77A]">#C5A77A</code><br />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F8F6F1] mr-1"></span> Warm Ivory: <code className="text-[#C5A77A]">#F8F6F1</code>
          </p>
        </div>
      </div>
    </section>

  </main>
      </div>

      <Footer />
    </div>
  );
}
