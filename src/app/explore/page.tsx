"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RoamIcon from "@/components/RoamIcon";
import Footer from "@/components/Footer";

interface Sanctuary {
  id: string;
  title: string;
  price: string;
  category: string;
  weatherIcon: string;
  temp: string;
  bestSeason: string;
  rating: number;
  description: string;
  itinerary: string;
  image: string;
  alt: string;
  region: string;
  tier: string;
}

const sanctuariesData: Sanctuary[] = [
  {
    id: "amalfi",
    title: "Amalfi Coast, Italy",
    price: "From $1,800/nt",
    category: "Coastal",
    weatherIcon: "sunny",
    temp: "24°C",
    bestSeason: "Best: May–Oct",
    rating: 4.99,
    description:
      "Cliffside Sanctuary & Mediterranean Cruising. Private Riva yacht transit with cliffside lemon grove terraces.",
    itinerary: "Preview 5-Day Nautical Itinerary",
    image: "/images/roam/atlas-amalfi.jpg",
    alt: "Sun-drenched cliffside luxury villa in Amalfi Italy overlooking sapphire Mediterranean Sea",
    region: "Coastal & Islands",
    tier: "$$$$ Luxury Sanctuary",
  },
  {
    id: "kyoto",
    title: "Kyoto, Japan",
    price: "From $1,450/nt",
    category: "Cultural",
    weatherIcon: "air",
    temp: "16°C",
    bestSeason: "Best: Oct–Dec / Mar–Apr",
    rating: 4.98,
    description:
      "Historic Ryokans & Private Zen Gardens. After-hours tea pavilions, kintsugi masters, and private forest baths.",
    itinerary: "Preview 6-Day Cultural Itinerary",
    image: "/images/roam/atlas-kyoto.jpg",
    alt: "Traditional cedar luxury ryokan in Arashiyama Kyoto Japan surrounded by moss gardens",
    region: "Cultural Capitals",
    tier: "$$$$ Luxury Sanctuary",
  },
  {
    id: "stmoritz",
    title: "St. Moritz, Switzerland",
    price: "From $2,200/nt",
    category: "Alpine",
    weatherIcon: "ac_unit",
    temp: "-3°C",
    bestSeason: "Best: Dec–Apr",
    rating: 5.0,
    description:
      "Alpine Grandeur & Private Heli-Skiing. Historic palace hotel suites and untracked powder descents on glacier ridges.",
    itinerary: "Preview 7-Day Alpine Itinerary",
    image: "/images/roam/atlas-stmoritz.jpg",
    alt: "Dramatic Engadin alpine chalet in St Moritz Switzerland covered in crisp white powder snow",
    region: "Alpine",
    tier: "$$$$$ Ultra-Private Reserve",
  },
  {
    id: "lofoten",
    title: "Lofoten Islands, Norway",
    price: "From $1,100/nt",
    category: "Wilderness",
    weatherIcon: "nightlight",
    temp: "2°C",
    bestSeason: "Best: Sep–Mar (Aurora)",
    rating: 4.96,
    description:
      "Arctic Design Cabins & Midnight Sun. Waterfront rorbu suites, private polar sauna rituals, and fjord expedition vessels.",
    itinerary: "Preview 5-Day Arctic Itinerary",
    image: "/images/roam/atlas-lofoten.jpg",
    alt: "Modern architectural timber cabin perched over calm Arctic fjord in Lofoten Norway",
    region: "Remote Wilderness",
    tier: "$$$$ Luxury Sanctuary",
  },
  {
    id: "capetown",
    title: "Cape Town & Winelands",
    price: "From $1,350/nt",
    category: "Vineyard",
    weatherIcon: "sunny",
    temp: "26°C",
    bestSeason: "Best: Nov–Mar",
    rating: 4.97,
    description:
      "Atlantic Villas & Private Vineyard Tastings. Sommelier-led barrel reserves, Clifton cove estates, and Table Mountain flights.",
    itinerary: "Preview 6-Day Terroir Itinerary",
    image: "/images/roam/atlas-capetown.jpg",
    alt: "Cape Dutch historic vineyard estate in Stellenbosch Franschhoek South Africa",
    region: "Vineyard Estates",
    tier: "$$$$ Luxury Sanctuary",
  },
  {
    id: "marrakech",
    title: "Marrakech, Morocco",
    price: "From $1,250/nt",
    category: "Heritage",
    weatherIcon: "sunny",
    temp: "22°C",
    bestSeason: "Best: Oct–Apr",
    rating: 4.95,
    description:
      "Exclusive Riads & Sahara Encampments. Hidden Medina courtyards, private Atlas helicopter hops, and desert starlight dining.",
    itinerary: "Preview 5-Day Oasis Itinerary",
    image: "/images/roam/atlas-marrakech.jpg",
    alt: "Luxurious riad courtyard in Marrakech Morocco with carved plaster arches",
    region: "Cultural Capitals",
    tier: "$$$$ Luxury Sanctuary",
  },
];

const regions = [
  "All Regions",
  "Alpine",
  "Coastal & Islands",
  "Cultural Capitals",
  "Remote Wilderness",
  "Vineyard Estates",
];

const enclaves = [
  "Kyoto",
  "Amalfi",
  "St. Moritz",
  "Reykjavik",
  "Patagonia",
  "Marrakech",
];

export default function ExplorePage() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedTier, setSelectedTier] = useState("all");
  const [selectedSeason, setSelectedSeason] = useState("current");
  const [selectedSort, setSelectedSort] = useState("curator");

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredSanctuaries = sanctuariesData.filter((item) => {
    const matchesRegion =
      selectedRegion === "All Regions" || item.region === selectedRegion;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-surface font-body-md text-on-surface">
      <Navbar />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)] flex-grow">
        <div className="flex flex-col w-full">
          {/* Header & Search Hero */}
          <div className="w-full bg-surface-container-low/40 border-b border-surface-variant/30">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-[64px] pt-12 pb-16">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 mb-6">
                <Link
                  href="/"
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                >
                  Atelier Home
                </Link>
                <span className="text-secondary/60 text-xs">/</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Destinations Directory
                </span>
              </div>

              {/* Title & Tag */}
              <div className="reveal-on-scroll flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                <div className="max-w-2xl">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary mb-3 block font-semibold">
                    Bespoke Geographical Compendium
                  </span>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
                    The Curated World Atlas
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Handpicked sanctuaries and private residences vetted by our in-house travel curators for architectural resonance and unhurried luxury.
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container shadow-[0_2px_12px_rgba(37,41,37,0.03)] border border-surface-container-high/50">
                    <span className="w-2 h-2 rounded-full bg-surface-tint animate-pulse" />
                    <span className="font-label-md text-label-md text-on-surface">
                      Autumn / Winter Solstice Editions
                    </span>
                  </div>
                </div>
              </div>

              {/* Search & Filter Box */}
              <div className="reveal-on-scroll p-4 md:p-6 rounded-[20px] bg-surface-container-lowest shadow-[0_8px_32px_rgba(38,63,54,0.05)] border border-surface-container-high/40">
                <div className="relative flex flex-col md:flex-row items-stretch md:items-center gap-4">
                  <div className="relative flex-1 flex items-center">
                    <RoamIcon name="search" className="absolute left-4 text-secondary text-[24px] shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by terroir, archipelago, valley, or secluded enclave..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 text-outline-variant hover:text-on-surface"
                      >
                        <RoamIcon name="close" className="text-[20px] shrink-0" />
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedRegion("All Regions");
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-[0_4px_16px_rgba(16,41,33,0.15)] cursor-pointer"
                    >
                      <span>Filter Catalog</span>
                      <RoamIcon name="tune" className="text-[18px] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Featured Enclaves Tags */}
                <div className="flex items-center flex-wrap gap-2.5 mt-5 pt-4 border-t border-surface-container-high/30">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mr-2 font-semibold">
                    Featured Enclaves:
                  </span>
                  {enclaves.map((enclave) => (
                    <button
                      key={enclave}
                      onClick={() => setSearchQuery(enclave)}
                      className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                        searchQuery.toLowerCase() === enclave.toLowerCase()
                          ? "bg-primary text-on-primary font-semibold"
                          : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                      }`}
                    >
                      {enclave}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Region Tabs & Controls Strip */}
          <div className="w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-[64px] py-12">
            <div className="flex flex-col gap-6">
              {/* Region Pill Tabs + Grid/Map Toggle */}
              <div className="flex items-center justify-between overflow-x-auto pb-2 scrollbar-none gap-4">
                <div className="flex items-center gap-2">
                  {regions.map((region) => {
                    const active = selectedRegion === region;
                    return (
                      <button
                        key={region}
                        onClick={() => setSelectedRegion(region)}
                        className={`px-5 py-2.5 rounded-full font-label-md text-label-md shrink-0 transition-all cursor-pointer ${
                          active
                            ? "bg-primary text-on-primary shadow-[0_2px_8px_rgba(16,41,33,0.12)] font-semibold"
                            : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                        }`}
                      >
                        {region}
                      </button>
                    );
                  })}
                </div>

                {/* View Switcher */}
                <div className="hidden md:flex items-center p-1 bg-surface-container rounded-lg shrink-0 border border-surface-container-high/40">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-label-sm text-label-sm transition-all cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-surface-container-lowest text-primary shadow-[0_1px_4px_rgba(0,0,0,0.04)] font-semibold"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <RoamIcon name="grid_view" className="text-[16px] shrink-0" />
                    <span>Grid View</span>
                  </button>
                  <button
                    onClick={() => {
                      setViewMode("map");
                      const mapEl = document.getElementById("cartographic-grid");
                      if (mapEl) mapEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-label-sm text-label-sm transition-all cursor-pointer ${
                      viewMode === "map"
                        ? "bg-surface-container-lowest text-primary shadow-[0_1px_4px_rgba(0,0,0,0.04)] font-semibold"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <RoamIcon name="map" className="text-[16px] shrink-0" />
                    <span>Interactive Map</span>
                  </button>
                </div>
              </div>

              {/* Secondary Select Dropdowns & Counter */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-4 border-t border-surface-container-high/40">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Season Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedSeason}
                      onChange={(e) => setSelectedSeason(e.target.value)}
                      className="appearance-none pl-4 pr-10 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)] focus:outline-none cursor-pointer border border-surface-container-high/30"
                    >
                      <option value="current">Current Season (Autumn/Winter)</option>
                      <option value="spring">Spring Blossoms (Mar–May)</option>
                      <option value="summer">Summer Escape (Jun–Aug)</option>
                    </select>
                    <RoamIcon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[18px] shrink-0" />
                  </div>

                  {/* Tiers Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="appearance-none pl-4 pr-10 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)] focus:outline-none cursor-pointer border border-surface-container-high/30"
                    >
                      <option value="all">All Tiers ($$$$ to $$$$$)</option>
                      <option value="luxury">$$$$ Luxury Sanctuary</option>
                      <option value="reserve">$$$$$ Ultra-Private Reserve</option>
                    </select>
                    <RoamIcon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[18px] shrink-0" />
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
                      className="appearance-none pl-4 pr-10 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)] focus:outline-none cursor-pointer border border-surface-container-high/30"
                    >
                      <option value="curator">Curator&apos;s Choice</option>
                      <option value="rated">Highest Rated (4.95+)</option>
                      <option value="new">New Additions</option>
                      <option value="pace">Pace: Relaxed to Intense</option>
                    </select>
                    <RoamIcon name="swap_vert" className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[18px] shrink-0" />
                  </div>
                </div>

                {/* Hand-Vetted Counter */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <RoamIcon name="verified" className="text-secondary text-[20px] shrink-0" />
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      Showing{" "}
                      <strong className="text-primary font-semibold">
                        {filteredSanctuaries.length}
                      </strong>{" "}
                      hand-vetted sanctuaries
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Sanctuary Cards Grid */}
          <div className="w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-[64px] pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSanctuaries.map((item) => {
                const isSaved = !!favorites[item.id];
                return (
                  <div
                    key={item.id}
                    className="group [perspective:1200px] h-[540px] cursor-pointer"
                  >
                    {/* 3D Flip Card Container */}
                    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[20px] shadow-[0_4px_24px_rgba(37,41,37,0.04)] hover:shadow-2xl">
                      {/* FRONT FACE */}
                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[20px] bg-surface-container-lowest overflow-hidden border border-surface-container-high/40 flex flex-col justify-between">
                        {/* Media Aspect */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                          {/* Top Badges */}
                          <div className="absolute top-4 left-4 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold shadow-sm">
                              {item.category}
                            </span>
                            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/85 backdrop-blur-md text-on-primary font-label-sm text-label-sm">
                              <RoamIcon name={item.weatherIcon} className="text-[14px] shrink-0" />
                              <span>{item.temp}</span>
                            </div>
                          </div>

                          {/* Bookmark Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(item.id);
                            }}
                            className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center transition-colors shadow-sm cursor-pointer z-10 ${
                              isSaved ? "text-error" : "text-primary hover:text-error"
                            }`}
                            title={isSaved ? "Saved to Favorites" : "Save Sanctuary"}
                          >
                            <RoamIcon name="favorite" className="text-[18px] shrink-0" />
                          </button>

                          {/* Bottom Info Strip */}
                          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
                            <span className="font-label-sm text-label-sm opacity-90">
                              {item.bestSeason}
                            </span>
                            <div className="flex items-center gap-1 font-label-sm text-label-sm font-semibold">
                              <RoamIcon name="star" className="text-secondary-fixed text-[16px] shrink-0" />
                              <span>{item.rating.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-baseline justify-between gap-2">
                              <h3 className="font-headline-sm text-headline-sm text-primary transition-colors">
                                {item.title}
                              </h3>
                              <span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider font-semibold shrink-0">
                                {item.price}
                              </span>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                              {item.description}
                            </p>
                          </div>

                          <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
                              <span className="flex items-center gap-1.5">
                                <RoamIcon name="schedule" className="text-[16px] shrink-0" />
                                <span>{item.itinerary}</span>
                              </span>
                              <span className="text-[11px] text-on-surface-variant flex items-center gap-0.5">
                                flip ↺
                              </span>
                            </div>

                            <div className="flex items-center gap-2 pt-2 border-t border-surface-container-high/40">
                              <Link
                                href="/plan-a-trip"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 py-2.5 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md text-center hover:bg-primary-container transition-colors shadow-sm"
                              >
                                Explore Sanctuary
                              </Link>
                              <div className="p-2.5 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                                <RoamIcon name="sync" className="text-[18px] shrink-0" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-[20px] bg-primary text-on-primary p-6 flex flex-col justify-between border-2 border-secondary/40 shadow-2xl relative overflow-hidden">
                        {/* Subtle Glow */}
                        <div className="absolute right-0 bottom-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute left-0 top-0 w-48 h-48 bg-primary-container rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                          <div>
                            {/* Top Strip */}
                            <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                                {item.category} · {item.region}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm border border-white/10">
                                {item.tier}
                              </span>
                            </div>

                            <div className="flex items-baseline justify-between gap-2 mb-2">
                              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                                {item.title}
                              </h3>
                              <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold shrink-0">
                                {item.price}
                              </span>
                            </div>

                            <p className="font-body-sm text-body-sm text-on-primary/80 mb-4 line-clamp-3 leading-relaxed">
                              {item.description}
                            </p>

                            {/* Dossier Inclusions Box */}
                            <div className="p-3.5 rounded-xl bg-primary-container/40 border border-white/10 space-y-2 mb-4">
                              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold block">
                                Dossier Highlights
                              </span>
                              <div className="space-y-1.5 text-body-sm text-on-primary/90 text-xs">
                                <div className="flex items-center gap-2">
                                  <span className="text-secondary-fixed">✦</span>
                                  <span>{item.itinerary}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-secondary-fixed">✦</span>
                                  <span>{item.bestSeason} · Ideal Climate {item.temp}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-secondary-fixed">✦</span>
                                  <span>Rated {item.rating.toFixed(2)} / 5.00 by Private Members</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Back Action Buttons */}
                          <div className="pt-3 border-t border-white/15 flex items-center gap-2">
                            <Link
                              href="/plan-a-trip"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 py-3 px-4 rounded-lg bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-md text-label-md text-center transition-colors shadow-md flex items-center justify-center gap-1.5"
                            >
                              <span>Reserve Sanctuary</span>
                              <RoamIcon name="arrow_forward" className="text-[16px] shrink-0" />
                            </Link>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(item.id);
                              }}
                              className={`p-3 rounded-lg border border-white/20 transition-colors ${
                                isSaved
                                  ? "bg-error text-white"
                                  : "bg-white/10 text-on-primary hover:bg-white/20"
                              }`}
                              title={isSaved ? "Saved" : "Save"}
                            >
                              <RoamIcon name="favorite" className="text-[18px] shrink-0" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cartographic Overview Section */}
          <div id="cartographic-grid" className="w-full min-h-screen flex flex-col justify-center bg-surface-container-low py-20 border-t border-surface-variant/30">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-[64px]">
              <div className="reveal-scale p-8 lg:p-10 rounded-[20px] bg-surface-container-lowest shadow-[0_8px_32px_rgba(37,41,37,0.04)] border border-surface-container-high/40">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between mb-8 pb-6 border-b border-surface-container-high/40">
                  <div className="flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      Cartographic Overview
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary">
                      Sanctuary Grid &amp; Airfield Corridors
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      Each enclave is vetted for seamless private terminal access, dedicated rotary transfers, and low-friction door-to-door transit.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm border border-surface-container-high/50">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <span>Private Terminal Enabled</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm border border-surface-container-high/50">
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-tint" />
                      <span>Helipad On-Property</span>
                    </div>
                  </div>
                </div>

                {/* Map Display with Interactive Pins */}
                <div className="relative w-full h-[420px] md:h-[500px] rounded-xl overflow-hidden bg-surface-container shadow-inner">
                  <Image
                    src="/images/roam/atlas-map.jpg"
                    alt="Mediterranean and Alps Europe topographical cartographic map"
                    fill
                    sizes="(max-width: 1320px) 100vw, 1320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 pointer-events-none" />

                  {/* Pin 1: St. Moritz */}
                  <div className="absolute top-1/4 left-1/3 group cursor-pointer z-10">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-secondary/30 animate-ping" />
                      <div className="w-4 h-4 rounded-full bg-secondary shadow-md" />
                      <div className="absolute left-6 whitespace-nowrap px-3 py-1.5 rounded bg-surface-container-lowest/95 backdrop-blur-md text-primary font-label-sm text-label-sm shadow-lg border border-surface-container-high/50 pointer-events-none">
                        St. Moritz (LSZS Samedan Airfield: 12 min)
                      </div>
                    </div>
                  </div>

                  {/* Pin 2: Amalfi Coast */}
                  <div className="absolute bottom-1/3 left-1/2 group cursor-pointer z-10">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-surface-tint/30 animate-ping" />
                      <div className="w-4 h-4 rounded-full bg-surface-tint shadow-md" />
                      <div className="absolute left-6 whitespace-nowrap px-3 py-1.5 rounded bg-surface-container-lowest/95 backdrop-blur-md text-primary font-label-sm text-label-sm shadow-lg border border-surface-container-high/50 pointer-events-none">
                        Amalfi Coast (Private Yacht Pier &amp; Heli)
                      </div>
                    </div>
                  </div>

                  {/* Air Corridor Sync Card */}
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-lg shadow-md max-w-xs border border-surface-container-high/50">
                    <div className="flex items-center gap-2 mb-1">
                      <RoamIcon name="flight_takeoff" className="text-secondary text-[18px] shrink-0" />
                      <span className="font-label-md text-label-md text-primary font-semibold">
                        Direct Air Corridor Sync
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Real-time slot availability for Bombardier and Gulfstream charters directly through our concierge desk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Private Estates Desk Banner */}
          <div className="w-full min-h-screen flex flex-col justify-center max-w-[1320px] mx-auto px-margin-mobile lg:px-[64px] py-20">
            <div className="relative overflow-hidden rounded-[20px] bg-[#102921] dark:bg-[#0e1a14] text-white dark:text-[#edf3ee] p-8 lg:p-16 shadow-[0_16px_40px_rgba(16,41,33,0.18)] border border-secondary/20 dark:border-secondary/30 transition-colors duration-500">
              <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none" />
              <div className="absolute right-12 bottom-0 opacity-10 pointer-events-none hidden lg:block">
                <RoamIcon name="explore" className="text-[240px] shrink-0" />
              </div>
              <div className="relative z-10 max-w-2xl flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold">
                    Private Estates Desk
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary">
                  Seeking an unlisted private island or private manor?
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container">
                  More than sixty percent of our global properties are never published publicly to safeguard principal privacy. Speak directly with our lead travel architect to unlock rare private heritage listings.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/#plan-trip"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary-fixed-dim transition-colors shadow-lg active:scale-95"
                  >
                    Request Custom Dossier
                  </Link>
                  <Link
                    href="/#plan-trip"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md active:scale-95"
                  >
                    <RoamIcon name="support_agent" className="text-[18px] shrink-0" />
                    <span>Schedule Atelier Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
