"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RoamIcon from "@/components/RoamIcon";
import Footer from "@/components/Footer";

type TabKey = "upcoming" | "drafting" | "past" | "wishlist";

interface WishlistSanctuary {
  id: string;
  tag: string;
  title: string;
  location: string;
  pricing: string;
  image: string;
  alt: string;
  isFavorited: boolean;
}

interface PastExpedition {
  id: string;
  code: string;
  title: string;
  dates: string;
  duration: string;
  curator: string;
  highlights: string[];
  image: string;
}

const initialWishlist: WishlistSanctuary[] = [
  {
    id: "lofoten",
    tag: "Nordic Wilderness",
    title: "Lofoten Arctic Cabins",
    location: "Reinefjorden, Norway",
    pricing: "From $1,450 / night · Private Sauna & Zodiac",
    image: "/images/roam/trips-wishlist-lofoten.jpg",
    alt: "Nordic minimalist architectural red wooden stilt cabins in Reine Lofoten Islands Norway on crystal blue fjord",
    isFavorited: true,
  },
  {
    id: "marrakech",
    tag: "Ochre Oasis",
    title: "Marrakech Medina Riad",
    location: "Old Medina, Morocco",
    pricing: "From $980 / night · Rooftop Plunge Pool",
    image: "/images/roam/trips-wishlist-marrakech.jpg",
    alt: "Quiet historic riad courtyard in Marrakech with deep emerald green zellij ceramic tiles",
    isFavorited: true,
  },
  {
    id: "stmoritz",
    tag: "Engadin Valley",
    title: "St. Moritz Ski Chalet",
    location: "Graubünden, Switzerland",
    pricing: "From $3,200 / night · Private Ski-in/Ski-out",
    image: "/images/roam/trips-wishlist-stmoritz.jpg",
    alt: "Luxury alpine timber ski chalet in St. Moritz Engadin Valley Switzerland with floor-to-ceiling glass windows",
    isFavorited: true,
  },
  {
    id: "franschhoek",
    tag: "Winelands Heritage",
    title: "Cape Town Vineyard",
    location: "Franschhoek, South Africa",
    pricing: "From $1,100 / night · Cellar Master Tastings",
    image: "/images/roam/trips-wishlist-franschhoek.jpg",
    alt: "Scenic historical Cape Dutch architecture wine manor in Franschhoek South Africa surrounded by rolling lush vineyards",
    isFavorited: true,
  },
  {
    id: "kyoto-sanctuary",
    tag: "Zen Sanctuary",
    title: "Higashiyama Villa",
    location: "Kyoto, Japan",
    pricing: "From $2,100 / night · Private Hinoki Onsen",
    image: "/images/roam/journey-kyoto.jpg",
    alt: "Traditional Kyoto cedar villa with moss garden and private stone courtyard",
    isFavorited: true,
  },
  {
    id: "amalfi-sanctuary",
    tag: "Tyrrhenian Coast",
    title: "Ravello Cliffside Estate",
    location: "Amalfi Coast, Italy",
    pricing: "From $3,500 / night · Private Cliff Funicular",
    image: "/images/roam/atlas-amalfi.jpg",
    alt: "Panoramic cliffside estate overlooking turquoise sea in Amalfi",
    isFavorited: true,
  },
];

const pastExpeditionsData: PastExpedition[] = [
  {
    id: "past-1",
    code: "DOSSIER #JP-812",
    title: "Kyoto Zen & Naoshima Modern Architecture",
    dates: "May 4 – 14, 2024",
    duration: "11 Days · 10 Nights",
    curator: "Kenzo Nishida",
    highlights: ["Chichu Art Museum private curfew access", "Katsura Imperial Villa architecture walk", "Gion tea house evening banquet"],
    image: "/images/roam/journey-kyoto.jpg",
  },
  {
    id: "past-2",
    code: "DOSSIER #IT-331",
    title: "Aeolian Archipelago Yacht Charter & Etna Terroir",
    dates: "September 12 – 19, 2023",
    duration: "8 Days · 7 Nights",
    curator: "Matteo Rinaldi",
    highlights: ["Sailing Stromboli by nighttime eruptions", "Volcanic vineyard sommelier vertical tasting", "Salina caper farm harvest dinner"],
    image: "/images/roam/dispatch-aeolian.jpg",
  },
  {
    id: "past-3",
    code: "DOSSIER #NO-510",
    title: "Senja Aurora & Arctic Architecture Expedition",
    dates: "February 1 – 7, 2023",
    duration: "7 Days · 6 Nights",
    curator: "Astrid Lindholm",
    highlights: ["Midnight sun fjord dog sledding", "Architectural stargazing cabin over oceanic cliffs", "Arctic ocean sauna rituals"],
    image: "/images/roam/journal-senja.jpg",
  },
];

export default function MyTripsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("upcoming");
  const [wishlist, setWishlist] = useState<WishlistSanctuary[]>(initialWishlist);
  const [wishlistPage, setWishlistPage] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);
  const [conciergeModalOpen, setConciergeModalOpen] = useState(false);
  const [conciergeMessage, setConciergeMessage] = useState("");
  const [conciergeSent, setConciergeSent] = useState(false);

  const toggleFavorite = (id: string) => {
    setWishlist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorited: !item.isFavorited } : item
      )
    );
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleDownloadDossier = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 4000);
  };

  const handleSendConcierge = (e: React.FormEvent) => {
    e.preventDefault();
    if (conciergeMessage.trim()) {
      setConciergeSent(true);
      setTimeout(() => {
        setConciergeSent(false);
        setConciergeModalOpen(false);
        setConciergeMessage("");
      }, 2500);
    }
  };

  const wishlistVisible = wishlist.slice(wishlistPage * 4, wishlistPage * 4 + 4);
  const canNextWishlist = (wishlistPage + 1) * 4 < wishlist.length;
  const canPrevWishlist = wishlistPage > 0;

  return (
    <div suppressHydrationWarning className="bg-surface text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Notification Toasts */}
          {copiedLink && (
            <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-primary text-on-primary rounded-xl shadow-2xl flex items-center gap-2.5 text-label-md animate-in fade-in slide-in-from-bottom-2 duration-200">
              <RoamIcon name="check_circle" className="text-[18px] text-secondary-fixed shrink-0" />
              <span>Dossier link copied to clipboard</span>
            </div>
          )}

          {downloadNotice && (
            <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-primary text-on-primary rounded-xl shadow-2xl flex items-center gap-2.5 text-label-md animate-in fade-in slide-in-from-bottom-2 duration-200">
              <RoamIcon name="download_done" className="text-[18px] text-secondary-fixed shrink-0" />
              <span>Preparing encrypted offline PDF dossier for Honshu Expedition...</span>
            </div>
          )}

          {/* Outer Content Bounds */}
          <div className="max-w-[1320px] w-full mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
            {/* 1. Hub Header */}
            <header className="reveal-on-scroll pt-space-xl pb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-lg border-b border-surface-variant/40">
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    MEMBER DOSSIER · GUEST ID #RM-8829
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  My Journeys &amp; Private Archives
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Manage upcoming itineraries, review curated drafts, and revisit memories from past sanctuaries across the globe.
                </p>
              </div>

              <div className="flex items-center gap-space-sm shrink-0">
                <Link
                  href="/plan-a-trip"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all group active:scale-[0.98]"
                >
                  <RoamIcon name="add" className="text-[18px] text-secondary-fixed transition-transform group-hover:rotate-90 duration-300 shrink-0" />
                  <span>Create New Journey</span>
                </Link>
              </div>
            </header>

            {/* 2. Status Navigation Tabs */}
            <nav aria-label="Trip status views" className="pt-space-md pb-space-lg">
              <div className="flex items-center gap-space-md sm:gap-space-lg overflow-x-auto no-scrollbar border-b border-surface-variant/30">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`relative pb-3 font-label-md text-label-md transition-colors whitespace-nowrap cursor-pointer group ${
                    activeTab === "upcoming"
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>Upcoming Journeys</span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
                        activeTab === "upcoming"
                          ? "bg-secondary-container text-on-secondary-container font-bold"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      1
                    </span>
                  </span>
                  {activeTab === "upcoming" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("drafting")}
                  className={`relative pb-3 font-label-md text-label-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === "drafting"
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>In Drafting</span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
                        activeTab === "drafting"
                          ? "bg-secondary-container text-on-secondary-container font-bold"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      2
                    </span>
                  </span>
                  {activeTab === "drafting" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("past")}
                  className={`relative pb-3 font-label-md text-label-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === "past"
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>Past Expeditions</span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
                        activeTab === "past"
                          ? "bg-secondary-container text-on-secondary-container font-bold"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      3
                    </span>
                  </span>
                  {activeTab === "past" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`relative pb-3 font-label-md text-label-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === "wishlist"
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>Saved Sanctuaries &amp; Wishlist</span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
                        activeTab === "wishlist"
                          ? "bg-secondary-container text-on-secondary-container font-bold"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {wishlist.filter((w) => w.isFavorited).length}
                    </span>
                  </span>
                  {activeTab === "wishlist" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary rounded-full" />
                  )}
                </button>
              </div>
            </nav>

            {/* TAB VIEW: UPCOMING (Hero Active Journey) */}
            {(activeTab === "upcoming" || activeTab === "drafting" || activeTab === "wishlist") && (
              <section className="reveal-scale mb-space-2xl min-h-[580px] flex flex-col justify-center">
                <div className="relative bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden border border-surface-variant/40">
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                    {/* Cinematic Image Canvas (7 cols on Desktop) */}
                    <div className="relative lg:col-span-7 min-h-[360px] lg:min-h-full overflow-hidden">
                      <Image
                        src="/images/roam/trips-kyoto-hero.jpg"
                        alt="Serene Japanese temple garden in Kyoto surrounded by vibrant crimson maple autumn foliage"
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-primary/20 lg:to-primary/70" />

                      {/* Overlaid Badge & Geographic Coordinates */}
                      <div className="absolute top-6 left-6 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm text-secondary font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Confirmed &amp; Concierge Assigned
                        </span>
                        <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-primary/70 backdrop-blur-md text-on-primary font-label-sm text-label-sm tracking-widest uppercase">
                          35.0116° N, 135.7681° E
                        </span>
                      </div>

                      {/* Countdown Vignette Mobile/Desktop Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 lg:right-auto max-w-sm p-4 rounded-xl bg-surface/90 backdrop-blur-md shadow-lg flex items-center justify-between gap-4 border border-surface-variant/40">
                        <div>
                          <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                            Departure In
                          </span>
                          <span className="font-headline-md text-headline-md text-primary font-semibold">
                            38 Days
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-secondary">
                          <RoamIcon name="calendar_today" className="text-[20px] shrink-0" />
                          <span className="font-label-md text-label-md font-medium">
                            Oct 14, 2025
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Structured Dossier Details (5 cols on Desktop) */}
                    <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-surface-container-low">
                      <div className="flex flex-col gap-6">
                        {/* Trip Title & Duration */}
                        <div>
                          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                            HONSHU EXPEDITION · DOSSIER #JP-941
                          </span>
                          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1 mb-2">
                            Autumn in the Japanese Alps
                          </h2>
                          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                            <RoamIcon name="schedule" className="text-secondary text-[18px] shrink-0" />
                            <span>October 14 – October 23, 2025 · 10 Days, 9 Nights</span>
                          </p>
                        </div>

                        {/* Itinerary Micro Milestones */}
                        <div className="flex flex-col gap-3">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                            Curated Itinerary Route
                          </span>
                          <div className="relative pl-6 flex flex-col gap-4">
                            {/* Continuous subtle vertical stem line */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-outline-variant/60" />

                            {/* Stop 1 */}
                            <div className="relative flex items-start gap-3">
                              <span className="absolute -left-[24px] top-1 w-3.5 h-3.5 rounded-full bg-surface-container-lowest ring-2 ring-primary flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              </span>
                              <div>
                                <span className="font-label-md text-label-md text-primary font-semibold">
                                  Flight NH008 · Haneda Tokyo
                                </span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                  Private airport arrival escort &amp; VIP lounge clearance
                                </p>
                              </div>
                            </div>

                            {/* Stop 2 */}
                            <div className="relative flex items-start gap-3">
                              <span className="absolute -left-[24px] top-1 w-3.5 h-3.5 rounded-full bg-surface-container-lowest ring-2 ring-secondary flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                              </span>
                              <div>
                                <span className="font-label-md text-label-md text-primary font-semibold">
                                  Private Heli to Gora Kadan Ryokan
                                </span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                  Hakone onsen sanctuary · Multi-course kaiseki dinner
                                </p>
                              </div>
                            </div>

                            {/* Stop 3 */}
                            <div className="relative flex items-start gap-3">
                              <span className="absolute -left-[24px] top-1 w-3.5 h-3.5 rounded-full bg-surface-container-lowest ring-2 ring-secondary flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                              </span>
                              <div>
                                <span className="font-label-md text-label-md text-primary font-semibold">
                                  Shinkansen Gran Class to Nagano
                                </span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                  Cedar forest walk, Zenko-ji dawn prayers
                                </p>
                              </div>
                            </div>

                            {/* Stop 4 */}
                            <div className="relative flex items-start gap-3">
                              <span className="absolute -left-[24px] top-1 w-3.5 h-3.5 rounded-full bg-surface-container-lowest ring-2 ring-primary flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              </span>
                              <div>
                                <span className="font-label-md text-label-md text-primary font-semibold">
                                  Aman Kyoto Pavilion Stay
                                </span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                  Private tea ceremony masterclass &amp; Arashiyama bamboo grove
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Assigned Curator Profile */}
                        <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between gap-4 border border-surface-variant/40">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-primary-container">
                              <Image
                                src="/images/roam/trips-curator-kenzo.jpg"
                                alt="Kenzo Nishida - Lead Travel Architect"
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <span className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                                Lead Travel Architect
                              </span>
                              <span className="block font-label-md text-label-md text-primary truncate font-semibold">
                                Kenzo Nishida
                              </span>
                              <span className="block font-body-sm text-body-sm text-on-surface-variant truncate">
                                Direct line on WhatsApp &amp; Concierge
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => setConciergeModalOpen(true)}
                              className="p-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-bright transition-colors shadow-sm cursor-pointer"
                              title="Call Curator"
                            >
                              <RoamIcon name="phone" className="text-[18px] shrink-0" />
                            </button>
                            <button
                              onClick={() => setConciergeModalOpen(true)}
                              className="p-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-bright transition-colors shadow-sm cursor-pointer"
                              title="Message Curator"
                            >
                              <RoamIcon name="chat_bubble_outline" className="text-[18px] shrink-0" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <Link
                          href="/explore"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-md group active:scale-[0.98]"
                        >
                          <span>Open Live Trip Dashboard</span>
                          <RoamIcon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1 shrink-0" />
                        </Link>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={handleDownloadDossier}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors cursor-pointer"
                            title="Download Dossier"
                          >
                            <RoamIcon name="description" className="text-[18px] shrink-0" />
                            <span className="hidden xl:inline">Offline PDF</span>
                          </button>
                          <button
                            onClick={handleShare}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center p-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors cursor-pointer"
                            title="Share Itinerary"
                          >
                            <RoamIcon name="share" className="text-[18px] shrink-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* TAB VIEW: IN DRAFTING (Proposals Section) */}
            {(activeTab === "upcoming" || activeTab === "drafting") && (
              <section className="reveal-on-scroll mb-space-2xl min-h-[500px] flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-space-lg">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="font-headline-md text-headline-md text-primary">
                        Drafting &amp; Unconfirmed Proposals
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        2 In Review
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Refine bespoke routing with your travel designer before final reservation locks.
                    </p>
                  </div>
                  <Link
                    href="/plan-a-trip"
                    className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1 self-start md:self-auto group"
                  >
                    <span>View All Archived Drafts</span>
                    <RoamIcon name="chevron_right" className="text-[16px] transition-transform group-hover:translate-x-0.5 shrink-0" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  {/* Draft Card A */}
                  <article className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all border border-surface-variant/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                          <RoamIcon name="edit_note" className="text-[14px] text-secondary shrink-0" />
                          Draft · 80% Complete
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Edited 3 days ago
                        </span>
                      </div>

                      {/* Card Image Thumbnail */}
                      <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                        <Image
                          src="/images/roam/trips-draft-dolomite.jpg"
                          alt="Panoramic jagged limestone peaks of the Italian Dolomites at golden sunrise"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-surface/85 backdrop-blur-md font-label-sm text-label-sm text-primary font-semibold">
                          South Tyrol, Italy
                        </div>
                      </div>

                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                        Dolomite High Passes &amp; Alpine Refugios
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        5 Days, 4 Nights · Helicopter transit from Venice, private mountain guide via Ferrata, helicopter hut-to-hut wine dining.
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-1.5 mb-6">
                        <div className="flex justify-between items-center font-label-sm text-label-sm">
                          <span className="text-on-surface-variant">Itinerary Completeness</span>
                          <span className="text-secondary font-semibold">80%</span>
                        </div>
                        <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-secondary rounded-full w-4/5" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-surface-variant/30">
                      <div className="flex items-center gap-2">
                        <RoamIcon name="person_outline" className="text-outline-variant text-[20px] shrink-0" />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Sole Traveler
                        </span>
                      </div>
                      <Link
                        href="/plan-a-trip"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                      >
                        <span>Resume Planning</span>
                        <RoamIcon name="arrow_forward" className="text-[16px] shrink-0" />
                      </Link>
                    </div>
                  </article>

                  {/* Draft Card B */}
                  <article className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all border border-surface-variant/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                          <RoamIcon name="group" className="text-[14px] text-secondary shrink-0" />
                          Shared Proposal
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Awaiting Co-Traveler Sign-Off
                        </span>
                      </div>

                      {/* Card Image Thumbnail */}
                      <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                        <Image
                          src="/images/roam/trips-draft-amalfi.jpg"
                          alt="Sun-drenched Amalfi cliffside coastline in Positano overlooking azure Tyrrhenian Mediterranean sea"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-surface/85 backdrop-blur-md font-label-sm text-label-sm text-primary font-semibold">
                          Campania, Italy
                        </div>
                      </div>

                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                        Amalfi Cliffside Yacht &amp; Capri Villa
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        7 Days, 6 Nights · 3-night private Riva charter between Nerano and Faraglioni rocks, secluded cliffside Anacapri estate.
                      </p>

                      {/* Collaborators Badge */}
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between mb-6 border border-surface-variant/30">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-sm text-label-sm font-bold">
                            EV
                          </div>
                          <div>
                            <span className="block font-label-sm text-label-sm text-primary font-semibold">
                              Shared with Eleanor Vance
                            </span>
                            <span className="block font-body-sm text-body-sm text-on-surface-variant">
                              Has editing permissions
                            </span>
                          </div>
                        </div>
                        <RoamIcon name="verified" className="text-secondary text-[18px] shrink-0" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-surface-variant/30">
                      <div className="flex items-center gap-2">
                        <RoamIcon name="calendar_month" className="text-outline-variant text-[20px] shrink-0" />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Proposed: July 2026
                        </span>
                      </div>
                      <Link
                        href="/plan-a-trip"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors"
                      >
                        <span>View Draft</span>
                        <RoamIcon name="visibility" className="text-[16px] shrink-0" />
                      </Link>
                    </div>
                  </article>
                </div>
              </section>
            )}

            {/* TAB VIEW: PAST EXPEDITIONS (When tab is active or overview) */}
            {activeTab === "past" && (
              <section className="mb-space-2xl min-h-[500px] flex flex-col justify-center animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-space-lg">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="font-headline-md text-headline-md text-primary">
                        Archived Expeditions &amp; Past Dossiers
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                        3 Completed
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Relive completed memories, review past wine cellars and accommodations, or re-order bespoke itineraries.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                  {pastExpeditionsData.map((trip) => (
                    <article
                      key={trip.id}
                      className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-surface-variant/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={trip.image}
                            alt={trip.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                          />
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-surface/90 backdrop-blur-md font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                            {trip.code}
                          </div>
                        </div>

                        <div className="p-6">
                          <span className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                            {trip.dates} · {trip.duration}
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                            {trip.title}
                          </h3>

                          <div className="space-y-1.5 mb-4">
                            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold block">
                              Memorable Milestones
                            </span>
                            <ul className="space-y-1 text-body-sm text-on-surface-variant">
                              {trip.highlights.map((hl, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span className="text-secondary text-xs">•</span>
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center gap-2 pt-2 text-body-sm text-on-surface-variant">
                            <span className="font-label-sm text-label-sm text-primary font-semibold">
                              Lead Architect:
                            </span>
                            <span>{trip.curator}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-surface-variant/30 mt-4">
                        <button
                          onClick={handleDownloadDossier}
                          className="flex-1 py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm transition-colors text-center font-semibold cursor-pointer"
                        >
                          Archival Dossier
                        </button>
                        <Link
                          href="/plan-a-trip"
                          className="flex-1 py-2 px-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm transition-colors text-center font-semibold"
                        >
                          Re-create Trip
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* TAB VIEW: SAVED SANCTUARIES & WISHLIST */}
            {(activeTab === "upcoming" || activeTab === "wishlist") && (
              <section className="reveal-on-scroll mb-space-2xl min-h-[500px] flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-space-lg">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="font-headline-md text-headline-md text-primary">
                        Saved Sanctuaries &amp; Wishlist
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                        {wishlist.filter((w) => w.isFavorited).length} Enclaves
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Private villas, design estates, and remote lodges flagged for upcoming departures.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={() => canPrevWishlist && setWishlistPage((p) => p - 1)}
                      disabled={!canPrevWishlist}
                      className={`p-2 rounded-lg transition-colors cursor-pointer ${
                        canPrevWishlist
                          ? "bg-surface-container hover:bg-surface-container-high text-primary"
                          : "bg-surface-container-low text-outline-variant cursor-not-allowed"
                      }`}
                      title="Previous set"
                    >
                      <RoamIcon name="arrow_back" className="text-[20px] shrink-0" />
                    </button>
                    <button
                      onClick={() => canNextWishlist && setWishlistPage((p) => p + 1)}
                      disabled={!canNextWishlist}
                      className={`p-2 rounded-lg transition-colors cursor-pointer ${
                        canNextWishlist
                          ? "bg-surface-container hover:bg-surface-container-high text-primary"
                          : "bg-surface-container-low text-outline-variant cursor-not-allowed"
                      }`}
                      title="Next set"
                    >
                      <RoamIcon name="arrow_forward" className="text-[20px] shrink-0" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                  {wishlistVisible.map((sanctuary) => (
                    <div
                      key={sanctuary.id}
                      className="group [perspective:1200px] h-[390px] cursor-pointer"
                    >
                      {/* 3D Flip Container */}
                      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-sm hover:shadow-2xl">
                        {/* FRONT FACE */}
                        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-surface-container-lowest border border-surface-variant/40 flex flex-col justify-between">
                          <div className="relative h-56 overflow-hidden">
                            <Image
                              src={sanctuary.image}
                              alt={sanctuary.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(sanctuary.id);
                              }}
                              className={`absolute top-3 right-3 p-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer z-10 ${
                                sanctuary.isFavorited
                                  ? "bg-surface/90 text-error hover:bg-surface"
                                  : "bg-surface/70 text-on-surface-variant hover:text-error"
                              }`}
                              title={sanctuary.isFavorited ? "Remove from wishlist" : "Add to wishlist"}
                            >
                              <RoamIcon
                                name="favorite"
                                className={`w-4 h-4 shrink-0 ${
                                  sanctuary.isFavorited ? "text-error fill-current" : "text-on-surface-variant"
                                }`}
                              />
                            </button>

                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                                {sanctuary.tag}
                              </span>
                              <h4 className="font-headline-sm text-headline-sm text-on-primary">
                                {sanctuary.title}
                              </h4>
                            </div>
                          </div>

                          <div className="p-4 flex-1 flex flex-col justify-between bg-surface-container-lowest">
                            <div className="mb-2">
                              <span className="block font-body-sm text-body-sm text-on-surface-variant">
                                {sanctuary.location}
                              </span>
                              <p className="font-body-sm text-body-sm text-primary font-medium mt-1 truncate">
                                {sanctuary.pricing}
                              </p>
                            </div>
                            <div className="flex items-center justify-between gap-2 pt-2 border-t border-surface-variant/30 text-secondary font-label-sm text-label-sm">
                              <span>Hover to flip details</span>
                              <RoamIcon name="sync" className="text-[16px] shrink-0" />
                            </div>
                          </div>
                        </div>

                        {/* BACK FACE */}
                        <div className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl bg-primary text-on-primary p-5 flex flex-col justify-between border-2 border-secondary/40 shadow-2xl relative overflow-hidden">
                          <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                              <div className="flex items-center justify-between pb-2 border-b border-white/15 mb-3">
                                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                                  {sanctuary.tag}
                                </span>
                                <span className="text-[11px] text-surface-variant">
                                  Wishlist Dossier
                                </span>
                              </div>

                              <h4 className="font-headline-sm text-headline-sm text-on-primary mb-1">
                                {sanctuary.title}
                              </h4>
                              <span className="block font-body-sm text-body-sm text-surface-variant mb-3">
                                {sanctuary.location}
                              </span>

                              <div className="p-3 rounded-lg bg-primary-container/40 border border-white/10 mb-3 space-y-1">
                                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider text-[10px] block font-semibold">
                                  Rate &amp; Inclusions
                                </span>
                                <p className="font-body-sm text-body-sm text-on-primary/90 text-xs">
                                  {sanctuary.pricing}
                                </p>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-white/15 flex items-center gap-2">
                              <Link
                                href="/plan-a-trip"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 py-2 px-3 rounded-lg bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-sm text-label-sm transition-colors text-center font-semibold"
                              >
                                Plan Trip Here
                              </Link>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFavorite(sanctuary.id);
                                }}
                                className={`p-2 rounded-lg border border-white/20 transition-colors ${
                                  sanctuary.isFavorited ? "bg-error text-white" : "bg-white/10 text-on-primary"
                                }`}
                                title="Toggle favorite"
                              >
                                <RoamIcon name="favorite" className="text-[16px] shrink-0" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. Concierge Direct Line Banner */}
            <section className="reveal-scale rounded-2xl bg-primary text-on-primary p-8 sm:p-12 relative overflow-hidden shadow-xl border border-primary-container min-h-[320px] flex flex-col justify-center">
              {/* Decorative Organic Radial Glow */}
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-container rounded-full blur-3xl pointer-events-none opacity-50" />
              <div className="absolute left-1/4 -top-24 w-72 h-72 bg-secondary rounded-full blur-3xl pointer-events-none opacity-20" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                <div className="max-w-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
                      PRIORITY ATELIER ASSISTANCE
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-primary">
                    Need adjustments to your upcoming travel?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                    Your personal travel curator and private logistics desk are on call 24 hours a day to calibrate flight shifts, suite preferences, or private dining access.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                  <div className="flex items-center gap-3 pr-4">
                    <div className="flex -space-x-3 overflow-hidden">
                      <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-primary overflow-hidden bg-primary-container">
                        <Image
                          src="/images/roam/trips-concierge-1.jpg"
                          alt="Concierge Specialist"
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-primary overflow-hidden bg-primary-container">
                        <Image
                          src="/images/roam/trips-concierge-2.jpg"
                          alt="Concierge Curator"
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="block font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                        Desk Status
                      </span>
                      <span className="block font-body-sm text-body-sm text-on-primary">
                        Active · &lt; 8 min response
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setConciergeModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-md group active:scale-[0.98] cursor-pointer"
                  >
                    <RoamIcon name="chat" className="text-[18px] shrink-0" />
                    <span>Message Concierge</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Concierge Modal / Dialog */}
        {conciergeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-surface rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-surface-variant/40 relative">
              <button
                onClick={() => setConciergeModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                aria-label="Close dialog"
              >
                <RoamIcon name="close" className="text-[20px] shrink-0" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <RoamIcon name="support_agent" className="text-[22px] shrink-0" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Private Concierge Desk
                  </h3>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                    Dossier #JP-941 · Kenzo Nishida
                  </span>
                </div>
              </div>

              {conciergeSent ? (
                <div className="py-8 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <RoamIcon name="check_circle" className="text-[28px] shrink-0" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Transmission Dispatched
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                    Kenzo Nishida has received your request and will reply via your encrypted dossier channel within 8 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendConcierge} className="flex flex-col gap-4">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Transmit requests regarding flight amendments, bespoke culinary bookings, private security, or itinerary adaptations directly to your lead travel architect.
                  </p>
                  <div>
                    <label
                      htmlFor="concierge-text"
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-1.5"
                    >
                      Urgent Request or Instruction
                    </label>
                    <textarea
                      id="concierge-text"
                      rows={4}
                      required
                      value={conciergeMessage}
                      onChange={(e) => setConciergeMessage(e.target.value)}
                      placeholder="e.g. Please arrange a private helicopter transfer from Haneda on Day 1 instead of ground escort..."
                      className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-variant/50 text-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setConciergeModalOpen(false)}
                      className="px-4 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors shadow-sm flex items-center gap-2"
                    >
                      <RoamIcon name="send" className="text-[16px] shrink-0" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
