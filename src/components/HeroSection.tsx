"use client";

import { useState } from "react";
import Image from "next/image";
import RoamIcon from "@/components/RoamIcon";

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [style, setStyle] = useState("all");
  const [season, setSeason] = useState("autumn-2025");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const target = document.getElementById("sanctuaries");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen -mt-20 flex flex-col justify-center items-center overflow-hidden bg-[#102921] dark:bg-[#07120e] text-white transition-colors duration-500">
      {/* Cinematic Visual Background with Soft Vignette */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/roam/hero.jpg"
          alt="Cinematic wide-angle view of misty Dolomite mountain peaks at golden hour sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65 scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#102921]/80 via-[#102921]/50 to-[#102921] dark:from-[#07120e]/85 dark:via-[#07120e]/50 dark:to-[#07120e] pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 sm:px-12 lg:px-16 pt-32 pb-20 md:pt-36 md:pb-24 flex flex-col items-center text-center">
        {/* Monogram Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md mb-8 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
            ROAM Private Atelier
          </span>
          <span className="font-label-sm text-label-sm text-surface-variant/60">·</span>
          <span className="font-label-sm text-label-sm text-surface-variant tracking-wider">
            Edition MMXXV
          </span>
        </div>

        {/* Grand Editorial Title */}
        <h1 className="font-headline-lg text-display-hero-mobile lg:text-display-hero max-w-4xl text-surface font-normal leading-tight tracking-tight mb-6">
          Bespoke Journeys Crafted for the Discerning Nomad.
        </h1>

        <p className="font-body-lg text-body-lg text-surface-variant/90 max-w-2xl font-light leading-relaxed mb-12">
          Curated private sanctuaries, Michelin itineraries, and intuitive day-by-day travel architecture calibrated for quiet elegance.
        </p>

        {/* Floating Omni-Search Bar */}
        <div className="w-full max-w-4xl bg-surface/95 backdrop-blur-2xl rounded-[20px] p-3 md:p-4 text-on-surface shadow-2xl border border-white/30">
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
          >
            {/* Destination Field */}
            <div className="md:col-span-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container focus-within:bg-surface-container-high transition-colors text-left group">
              <RoamIcon name="explore" className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col min-w-0 flex-1">
                <label htmlFor="search-destination" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  Where Next
                </label>
                <input
                  id="search-destination"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Amalfi, Kyoto, St. Moritz..."
                  className="bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none w-full truncate"
                />
              </div>
            </div>

            {/* Travel Style Dropdown */}
            <div className="md:col-span-3 flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container focus-within:bg-surface-container-high transition-colors text-left group">
              <RoamIcon name="villa" className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col min-w-0 flex-1">
                <label htmlFor="search-style" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  Sanctuary Style
                </label>
                <select
                  id="search-style"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="bg-transparent font-body-md text-body-md text-on-surface focus:outline-none w-full cursor-pointer appearance-none truncate"
                >
                  <option value="all">All Atmospheres</option>
                  <option value="villa">Private Villa</option>
                  <option value="yacht">Private Yachting</option>
                  <option value="alpine">Alpine Hideaway</option>
                  <option value="ryokan">Heritage Ryokan</option>
                </select>
              </div>
              <RoamIcon name="expand_more" className="w-4 h-4 text-outline-variant pointer-events-none shrink-0" />
            </div>

            {/* Season Selector */}
            <div className="md:col-span-2 flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container focus-within:bg-surface-container-high transition-colors text-left group">
              <RoamIcon name="calendar_today" className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col min-w-0 flex-1">
                <label htmlFor="search-season" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  Season
                </label>
                <select
                  id="search-season"
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="bg-transparent font-body-md text-body-md text-on-surface focus:outline-none w-full cursor-pointer appearance-none truncate"
                >
                  <option value="autumn-2025">Autumn &apos;25</option>
                  <option value="winter-2025">Winter &apos;25</option>
                  <option value="spring-2026">Spring &apos;26</option>
                  <option value="summer-2026">Summer &apos;26</option>
                </select>
              </div>
              <RoamIcon name="expand_more" className="w-4 h-4 text-outline-variant pointer-events-none shrink-0" />
            </div>

            {/* Primary CTA Button */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-lg hover:shadow-xl group active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Sanctuaries</span>
                <RoamIcon name="near_me" className="w-5 h-5 text-secondary-fixed group-hover:rotate-45 transition-transform duration-300 shrink-0" />
              </button>
            </div>
          </form>
        </div>

        {/* Trust & Provenance Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-surface-variant font-label-sm text-label-sm tracking-wider uppercase opacity-90">
          <span className="flex items-center gap-2 text-surface-bright">
            <RoamIcon name="hotel_class" className="w-4 h-4 text-secondary-fixed shrink-0" />
            140+ Private Sanctuaries
          </span>
          <span className="text-surface-variant/40 hidden sm:inline">·</span>
          <span className="flex items-center gap-2 text-surface-bright">
            <RoamIcon name="route" className="w-4 h-4 text-secondary-fixed shrink-0" />
            48 Curated Journeys
          </span>
          <span className="text-surface-variant/40 hidden sm:inline">·</span>
          <span className="flex items-center gap-2 text-surface-bright">
            <RoamIcon name="eco" className="w-4 h-4 text-secondary-fixed shrink-0" />
            100% Carbon Offset
          </span>
          <span className="text-surface-variant/40 hidden sm:inline">·</span>
          <span className="flex items-center gap-2 text-surface-bright">
            <RoamIcon name="concierge" className="w-4 h-4 text-secondary-fixed shrink-0" />
            24/7 Dedicated Atelier Concierge
          </span>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a
        href="#sanctuaries"
        aria-label="Scroll to Sanctuaries"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-surface-variant/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="font-label-sm text-[10px] uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
          Scroll
        </span>
        <RoamIcon name="arrow_downward" className="w-5 h-5 animate-bounce shrink-0" />
      </a>
    </section>
  );
}
