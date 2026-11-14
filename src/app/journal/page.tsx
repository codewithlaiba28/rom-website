"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RoamIcon from "@/components/RoamIcon";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  category: string;
  location: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
  alt: string;
}

const articlesData: Article[] = [
  {
    id: "bastides",
    category: "Architectural Stays",
    location: "Southern France · Luberon",
    readTime: "6 Min Read",
    title:
      "The Revival of Provençal Bastides: Lime-wash Plaster, Wild Thyme, and 18th-Century Terraces",
    excerpt:
      "Restoring the mineral serenity of rural stone estates with artisanal lime techniques and drought-tolerant perennial gardens.",
    author: "Camille Vaneau",
    image: "/images/roam/journal-provence.jpg",
    alt: "Sun-bleached 18th century stone bastide estate in Luberon France with soft lime-wash plaster",
  },
  {
    id: "superyacht",
    category: "Cultural Immersion",
    location: "Sicily & Lipari · Maritime",
    readTime: "7 Min Read",
    title:
      "Superyacht Protocols in the Aeolian Archipelago: Navigating Volcanic Coves by Starlight",
    excerpt:
      "A nocturnal logbook along obsidian coastlines, night fishing rituals with Salina elders, and discreet volcanic anchorages.",
    author: "Matteo Rinaldi",
    image: "/images/roam/journal-aeolian.jpg",
    alt: "Dusk aerial shot of a sleek wooden-decked sailing yacht anchored in volcanic cove",
  },
  {
    id: "fermentation",
    category: "Culinary & Terroir",
    location: "Dolomites · Alpine Wine",
    readTime: "5 Min Read",
    title:
      "High-Altitude Fermentation: The Secret Micro-Vineyards of South Tyrol",
    excerpt:
      "Pioneering vignerons cultivating indigenous grapes at 1,100 meters, using subterranean glacier ice rooms and wild pine yeasts.",
    author: "Lucas Falk",
    image: "/images/roam/journal-tyrol.jpg",
    alt: "Steep alpine terraced vineyards in South Tyrol Dolomites bathed in crisp morning autumn mist",
  },
  {
    id: "riad",
    category: "Architectural Stays",
    location: "Morocco · Medina Sanctuary",
    readTime: "8 Min Read",
    title:
      "Acoustic Restraint in Marrakech: The Engineering of Private Riad Courtyards",
    excerpt:
      "Unpacking centuries-old geometric acoustics that cancel the bustle of the Medina, creating meditative chambers of pure stillness.",
    author: "Soraya Benjelloun",
    image: "/images/roam/journal-riad.jpg",
    alt: "Intimate central courtyard of a high-end historic Marrakech riad featuring zellij tiles",
  },
  {
    id: "packing",
    category: "Curator Notes",
    location: "Atelier Style · Ephemera & Gear",
    readTime: "4 Min Read",
    title:
      "The Modern Nomad’s Packing Protocol: Bespoke Wardrobe & Archival Travel Gear",
    excerpt:
      "A capsule philosophy for long-distance trains and remote transitions: merino layering, vegetable-tanned luggage, and vintage fountain pens.",
    author: "Julian Thorpe",
    image: "/images/roam/journal-packing.jpg",
    alt: "Flat lay still life of bespoke travel essentials: passport wallet, compass, linen shirt",
  },
  {
    id: "arctic",
    category: "Winter Solitude",
    location: "Norway · Nordic Fjord",
    readTime: "6 Min Read",
    title:
      "Midnight Sun & Geothermal Bathing: Arctic Cabin Sanctuaries of Senja Island",
    excerpt:
      "Off-grid hydro-thermal immersion among dramatic fjord peaks, where total isolation meets warm pine-clad saunas and glacial plunges.",
    author: "Astrid Lindqvist",
    image: "/images/roam/journal-senja.jpg",
    alt: "Remote modern architectural sauna cabin perched on jagged granite rocks over Norwegian sea",
  },
];

const categories = [
  { id: "all", label: "All Essays" },
  { id: "Architectural Stays", label: "Architectural Stays" },
  { id: "Culinary & Terroir", label: "Culinary & Terroir" },
  { id: "Cultural Immersion", label: "Cultural Immersion" },
  { id: "Winter Solitude", label: "Winter Solitude" },
  { id: "Curator Notes", label: "Curator Notes" },
];

interface SoundTrack {
  id: string;
  title: string;
  location: string;
  duration: string;
}

const soundTracks: SoundTrack[] = [
  {
    id: "track-1",
    title: "Kyoto Sagano: Dawn Bamboo Forest Rain",
    location: "Arashiyama Sanctuary · Recorded at 05:20 AM · 48kHz Master",
    duration: "24:18",
  },
  {
    id: "track-2",
    title: "Aeolian Sea Swell Against Obsidian Rocks",
    location: "Salina Coastal Grotto · Hydrophone & Shore Microphone",
    duration: "31:05",
  },
  {
    id: "track-3",
    title: "Senja Arctic Wind & Pine Wood Fireplace",
    location: "Troms Fjord Cabin · Pure Binaural Warmth",
    duration: "42:10",
  },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedCover, setSavedCover] = useState(false);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [subName, setSubName] = useState("");
  const [subEmail, setSubEmail] = useState("");

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleTrack = (id: string) => {
    setPlayingTrack(playingTrack === id ? null : id);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subName && subEmail) {
      setSubscribed(true);
    }
  };

  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-surface font-body-md text-on-surface">
      <Navbar />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Top Subtle Ambient Light Glow & Header Section */}
          <div className="relative w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin pt-12 pb-8">
            <div className="absolute -top-16 left-1/3 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-48 right-12 w-80 h-80 rounded-full bg-primary-container/5 blur-3xl pointer-events-none -z-10" />

            {/* Editorial Header */}
            <header className="flex flex-col gap-6">
              {/* Breadcrumb & Metadata String */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  <Link href="/" className="hover:text-primary transition-colors">
                    ROAM Atelier
                  </Link>
                  <span className="text-outline-variant">/</span>
                  <span className="text-secondary font-semibold">The Dispatch</span>
                  <span className="text-outline-variant">/</span>
                  <span className="text-on-surface">Volume IV · Issue II</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface border border-surface-container-high/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Equinox Edition · Winter / Spring 2025
                  </span>
                  <span className="hidden sm:inline text-outline-variant">|</span>
                  <span className="hidden sm:inline">Circulation: 2,400 Copies Worldwide</span>
                </div>
              </div>

              {/* Main Headline Block */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4">
                <div className="max-w-3xl">
                  <div className="inline-block font-label-md text-label-md uppercase tracking-[0.2em] text-secondary mb-3 font-semibold">
                    The ROAM Dispatch · Volume IV
                  </div>
                  <h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-[1.08]">
                    Essays, Terroirs &amp; <br className="hidden sm:block" />
                    Architectural Solitude
                  </h1>
                </div>
                <p className="max-w-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Slow-travel dispatches, conversations with quiet vignerons, acoustic explorations of ancient spaces, and field dispatches from remote sanctuaries.
                </p>
              </div>

              {/* Interactive Filter Bar & Search */}
              <div className="mt-4 p-2 rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(37,41,37,0.04),0_2px_6px_-1px_rgba(197,167,122,0.08)] border border-surface-container-high/40 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Category Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1">
                  {categories.map((cat) => {
                    const active = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 rounded-lg font-label-sm text-label-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                          active
                            ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                            : "bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                {/* Search Input */}
                <div className="relative shrink-0 w-full md:w-72">
                  <RoamIcon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline shrink-0" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search authors, valleys, archives..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline-variant font-body-sm text-body-sm focus:outline-none focus:bg-surface-container transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface"
                    >
                      <RoamIcon name="close" className="text-[16px] shrink-0" />
                    </button>
                  )}
                </div>
              </div>
            </header>
          </div>

          {/* Section 2: Lead Feature Story (Cinematic Split Hero) - Full Height Frame */}
          <section className="reveal-scale w-full min-h-screen flex flex-col justify-center max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-12">
            <article className="relative rounded-2xl overflow-hidden bg-surface-container-lowest shadow-[0_12px_32px_-4px_rgba(38,63,54,0.06),0_4px_12px_-2px_rgba(197,167,122,0.12)] border border-surface-container-high/40">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                {/* Visual Column: 7 Cols */}
                <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-full overflow-hidden group">
                  <Image
                    src="/images/roam/journal-nagano.jpg"
                    alt="Minimalist charred cedar and raw volcanic stone ryokan in Nagano Japanese Alps"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-primary/20 lg:to-primary-container pointer-events-none" />

                  {/* Floating Image Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-md border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
                      Issue Cover Feature
                    </span>
                  </div>

                  {/* Image Metadata Pill */}
                  <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/70 backdrop-blur-md text-surface font-label-sm text-label-sm border border-white/10">
                    <RoamIcon name="photo_camera" className="text-[16px] text-secondary-fixed shrink-0" />
                    <span>Hida Mountains, Nagano Prefecture · 36°14′N 137°38′E</span>
                  </div>
                </div>

                {/* Editorial Text Column: 5 Cols */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-primary-container text-surface">
                  {/* Metadata & Read Time */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-on-primary-container font-label-sm text-label-sm">
                      <span className="uppercase tracking-widest text-secondary-fixed font-semibold">
                        Architectural Stays &amp; Rituals
                      </span>
                      <span className="flex items-center gap-1.5">
                        <RoamIcon name="schedule" className="text-[15px] shrink-0" />
                        9 Min Read
                      </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight leading-[1.12]">
                      In Search of Silence: The Living Wood &amp; Charcoal Architecture of the Japanese Alps
                    </h2>

                    {/* Lead Snippet */}
                    <p className="font-body-md text-body-md text-surface/85 leading-relaxed mt-2">
                      How remote cedar-clad onsen sanctuaries preserve acoustic quietude, charred yakisugi timbers, and 400-year-old water rituals across Nagano’s snowbound valleys.
                    </p>

                    {/* Curated Quote */}
                    <div className="mt-2 p-4 rounded-lg bg-primary/40 border border-white/10">
                      <p className="font-headline-sm italic text-secondary-fixed text-sm leading-relaxed">
                        “Acoustic silence is not the absence of sound, but the presence of architecture listening to snowfall.”
                      </p>
                    </div>
                  </div>

                  {/* Author & CTAs Footer */}
                  <div className="pt-8 flex flex-col gap-6">
                    {/* Author Byline */}
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary shrink-0 border border-secondary/40">
                        <Image
                          src="/images/roam/author-helene.jpg"
                          alt="Hélène Moreau author portrait"
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-surface font-semibold">
                          Hélène Moreau
                        </span>
                        <span className="font-body-sm text-body-sm text-on-primary-container">
                          Senior Architectural Editor · Photos by Kenzo Nishida
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href="#audio-bookshelf"
                        className="px-6 py-3 rounded-lg bg-surface text-primary hover:bg-secondary-fixed hover:text-primary transition-all font-label-md text-label-md flex items-center gap-2 shadow-sm font-semibold cursor-pointer active:scale-95"
                      >
                        <span>Read Complete Essay</span>
                        <RoamIcon name="arrow_forward" className="text-[18px] shrink-0" />
                      </a>
                      <button
                        onClick={() => setSavedCover(!savedCover)}
                        className={`px-4 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 transition-all cursor-pointer ${
                          savedCover
                            ? "bg-secondary-fixed text-primary font-semibold"
                            : "bg-primary/50 text-surface hover:bg-primary"
                        }`}
                        title="Save for Itinerary"
                      >
                        <RoamIcon name={savedCover ? "bookmark" : "bookmark_border"} className="text-[18px] shrink-0" />
                        <span className="hidden sm:inline">
                          {savedCover ? "Saved to Itinerary" : "Add to Itinerary"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Section 3: Three-Column Editorial Grid (Curated Articles) */}
          <section className="reveal-on-scroll w-full min-h-screen flex flex-col justify-center max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-20">
            <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1 font-semibold">
                  Curated Folio
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Recent Dispatches &amp; Field Notes
                </h2>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                <span>Displaying {filteredArticles.length} Curated Stories</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  data-delay={index * 100}
                  className="reveal-on-scroll hover-float group flex flex-col rounded-[20px] bg-surface-container-lowest overflow-hidden shadow-[0_4px_20px_-2px_rgba(37,41,37,0.04),0_2px_6px_-1px_rgba(197,167,122,0.08)] hover:shadow-2xl border border-surface-container-high/40 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm">
                      {article.location.split("·")[0].trim()}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-primary/75 text-surface font-label-sm text-label-sm flex items-center gap-1 backdrop-blur-sm">
                      <RoamIcon name="schedule" className="text-[13px] shrink-0" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-medium">
                        <span>{article.category}</span>
                        <span>·</span>
                        <span>{article.location.split("·")[1]?.trim() || "Field Dispatch"}</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight group-hover:text-surface-tint transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 flex items-center justify-between border-t border-surface-container-high/40">
                      <span className="font-body-sm text-body-sm text-outline">
                        By {article.author}
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-md text-label-md text-primary group-hover:text-secondary transition-colors font-medium">
                        <span>Read Article</span>
                        <RoamIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform shrink-0" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 4: Curator's Bookshelf & Soundscapes - Full Screen Height Section */}
          <section
            id="audio-bookshelf"
            className="w-full min-h-screen flex flex-col justify-center bg-surface-container-low py-20 border-t border-surface-variant/30"
          >
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin w-full">
              <div className="p-8 lg:p-12 rounded-2xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(37,41,37,0.03)] border border-surface-container-high/40">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-surface-container-high/40">
                  <div>
                    <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 font-semibold">
                      <RoamIcon name="headphones" className="text-[16px] shrink-0" />
                      Sensory Atelier
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                      Curator’s Bookshelf &amp; Ambient Field Audio
                    </h2>
                  </div>
                  <p className="max-w-md font-body-sm text-body-sm text-on-surface-variant">
                    Carefully paired literature and binaural field recordings captured by our roving concierges to accompany your journey planning.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                  {/* Soundscapes Panel (Left 7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      Archival Soundscapes · Live Binaural Audio
                    </span>
                    <div className="flex flex-col gap-3">
                      {soundTracks.map((track) => {
                        const isPlaying = playingTrack === track.id;
                        return (
                          <div
                            key={track.id}
                            onClick={() => toggleTrack(track.id)}
                            className={`flex items-center justify-between p-4 rounded-xl transition-all shadow-sm cursor-pointer border ${
                              isPlaying
                                ? "bg-surface-container border-secondary/50 shadow-md"
                                : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/40"
                            }`}
                          >
                            <div className="flex items-center gap-4 min-w-0">
                              <button
                                aria-label={isPlaying ? "Pause" : "Play"}
                                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95 ${
                                  isPlaying
                                    ? "bg-secondary text-surface"
                                    : "bg-primary-container text-surface"
                                }`}
                              >
                                <RoamIcon name={isPlaying ? "pause" : "play_arrow"} className="text-[20px] shrink-0" />
                              </button>
                              <div className="flex flex-col min-w-0">
                                <span className="font-label-md text-label-md text-primary font-semibold truncate">
                                  {track.title}
                                </span>
                                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                  {track.location}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 ml-2">
                              {/* Animated Wave SVG */}
                              <svg
                                className={`w-16 h-6 hidden sm:block ${
                                  isPlaying
                                    ? "text-secondary animate-pulse"
                                    : "text-secondary/40"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 64 24"
                              >
                                <rect height="8" rx="1.5" width="3" x="2" y="8" />
                                <rect height="16" rx="1.5" width="3" x="10" y="4" />
                                <rect height="6" rx="1.5" width="3" x="18" y="9" />
                                <rect height="20" rx="1.5" width="3" x="26" y="2" />
                                <rect height="12" rx="1.5" width="3" x="34" y="6" />
                                <rect height="4" rx="1.5" width="3" x="42" y="10" />
                                <rect height="14" rx="1.5" width="3" x="50" y="5" />
                                <rect height="8" rx="1.5" width="3" x="58" y="8" />
                              </svg>
                              <span className="font-label-sm text-label-sm text-secondary tracking-widest font-mono">
                                {track.duration}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bookshelf Recommendations (Right 5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      Required Reading · Selected Monographs
                    </span>
                    <div className="flex flex-col gap-3">
                      <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4 border border-surface-container-high/40">
                        <div className="w-12 h-16 rounded bg-primary-container shrink-0 flex items-center justify-center text-surface shadow-sm">
                          <RoamIcon name="auto_stories" className="text-[24px] text-secondary-fixed shrink-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-headline-sm text-sm text-primary font-serif font-semibold">
                            “In Praise of Shadows”
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Jun’ichirō Tanizaki · Leete’s Island Books
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary">
                            Essential companion for the Nagano ryokan voyage.
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4 border border-surface-container-high/40">
                        <div className="w-12 h-16 rounded bg-secondary shrink-0 flex items-center justify-center text-surface shadow-sm">
                          <RoamIcon name="menu_book" className="text-[24px] text-surface shrink-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-headline-sm text-sm text-primary font-serif font-semibold">
                            “The Poetics of Space”
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Gaston Bachelard · Beacon Press
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary">
                            Meditation on domestic sanctums and stone architecture.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Atelier Newsletter & Print Edition Callout - Screen Height Section */}
          <section className="w-full min-h-screen flex flex-col justify-center max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-20">
            <div className="relative rounded-2xl bg-primary text-surface overflow-hidden p-8 sm:p-12 lg:p-16 shadow-[0_16px_40px_rgba(16,41,33,0.18)]">
              {/* Ambient Botanical Glow */}
              <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary-container opacity-40 blur-3xl pointer-events-none" />
              <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-secondary/15 blur-2xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
                      Limited Print Archive
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight leading-[1.12]">
                    Receive The Solstice &amp; Equinox Bound Edition
                  </h2>
                  <p className="font-body-md text-body-md text-surface/85 max-w-xl leading-relaxed">
                    Printed in Italy on 160gsm archival Fedrigoni cotton stock. Each biannual volume features uncompressed medium-format photo plates, hand-tipped maps, and essays reserved strictly for members.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 pt-2 font-label-sm text-label-sm text-on-primary-container">
                    <span className="flex items-center gap-1.5">
                      <RoamIcon name="done" className="text-[16px] text-secondary-fixed shrink-0" />
                      Hand-numbered slipcase
                    </span>
                    <span className="flex items-center gap-1.5">
                      <RoamIcon name="done" className="text-[16px] text-secondary-fixed shrink-0" />
                      Zero commercial advertising
                    </span>
                    <span className="flex items-center gap-1.5">
                      <RoamIcon name="done" className="text-[16px] text-secondary-fixed shrink-0" />
                      Worldwide concierge courier
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-3">
                  <div className="p-6 rounded-xl bg-primary-container/70 backdrop-blur-md shadow-inner flex flex-col gap-4 border border-white/10">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                      Request Volume IV Print Dispatch
                    </span>
                    {subscribed ? (
                      <div className="p-4 rounded-lg bg-surface-container-lowest text-primary font-body-sm text-body-sm flex items-center gap-2 shadow-sm">
                        <RoamIcon name="mark_email_read" className="text-secondary text-lg shrink-0" />
                        <span>Invitation noted. The Spring Solstice folio is being prepared for you.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-sm text-label-sm text-surface/80" htmlFor="sub-name">
                            Full Name
                          </label>
                          <input
                            id="sub-name"
                            type="text"
                            required
                            value={subName}
                            onChange={(e) => setSubName(e.target.value)}
                            placeholder="Lady Eleanor Vance"
                            className="px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary-fixed"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-sm text-label-sm text-surface/80" htmlFor="sub-email">
                            Private Correspondence Address
                          </label>
                          <input
                            id="sub-email"
                            type="email"
                            required
                            value={subEmail}
                            onChange={(e) => setSubEmail(e.target.value)}
                            placeholder="eleanor@vance-atelier.com"
                            className="px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary-fixed"
                          />
                        </div>
                        <button
                          type="submit"
                          className="mt-2 w-full py-3 rounded-lg bg-secondary text-surface font-label-md text-label-md hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(197,167,122,0.35)] cursor-pointer active:scale-95"
                        >
                          <RoamIcon name="mark_email_read" className="text-[18px] shrink-0" />
                          <span>Request Issue · Spring 2025</span>
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
