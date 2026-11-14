import Image from "next/image";
import Link from "next/link";
import RoamIcon from "@/components/RoamIcon";

interface Category {
  id: string;
  badge: string;
  location: string;
  title: string;
  description: string;
  feature: string;
  icon: string;
  image: string;
  alt: string;
  highlights: string[];
}

const categories: Category[] = [
  {
    id: "alpine",
    badge: "2,200m Elevation",
    location: "Dolomites · Swiss Alps",
    title: "Alpine Sanctuaries",
    description:
      "Geothermal cedar spas, Michelin private hearth chefs, and uninterrupted cliffside silence.",
    feature: "Peak Season: Dec – Apr",
    icon: "ac_unit",
    image: "/images/roam/category-alpine.jpg",
    alt: "Larch wood and floor-to-ceiling glass modernist chalet in Cortina Dolomites",
    highlights: [
      "Private heli-transit from Milan / Zurich",
      "Geothermal cedar onsen & cliffside sauna",
      "Dedicated 3-Star Michelin private chef",
      "24/7 ROAM Alpine Mountain Guide",
    ],
  },
  {
    id: "coastal",
    badge: "Private Moorings",
    location: "Amalfi · Cyclades",
    title: "Coastal Havens",
    description:
      "Restored watchtowers, sea caves with tenders on standby, and salt-scented fig terraces.",
    feature: "Nautical Tender Included",
    icon: "sailing",
    image: "/images/roam/category-coastal.jpg",
    alt: "Sun-bleached limestone terrace over the sapphire waters of Positano Amalfi Coast",
    highlights: [
      "65ft private Riva mahogany tender on call",
      "Secluded cliffside funicular & private cove",
      "Private cellar sommelier & fresh sea dining",
      "Sunset anchorages in volcanic sea caves",
    ],
  },
  {
    id: "cultural",
    badge: "Exclusive Access",
    location: "Kyoto · Rajasthan",
    title: "Cultural Heritage",
    description:
      "Centuries-old private tearooms, Zen Abbot morning consultations, and royal havelis.",
    feature: "Private Shinto & Tea Access",
    icon: "temple_buddhist",
    image: "/images/roam/category-heritage.jpg",
    alt: "Traditional Kyoto Machiya wooden courtyard garden with raked gravel",
    highlights: [
      "After-hours Daitoku-ji temple meditation",
      "Master ceramist & kintsugi atelier access",
      "Royal heritage haveli & machiya buyouts",
      "Curated tea ceremony with 15th-gen master",
    ],
  },
  {
    id: "nordic",
    badge: "Dark Sky Sanctuary",
    location: "Lofoten · Lapland",
    title: "Nordic Wilderness",
    description:
      "Arctic architect pods, private ice-yacht expeditions, and aurora observatory suites.",
    feature: "Aurora Forecast: KP 5.2 (High)",
    icon: "wb_twilight",
    image: "/images/roam/category-nordic.jpg",
    alt: "Modern stilt architectural cabin in Reine Lofoten over still fjord waters",
    highlights: [
      "Heated glass roof aurora observatory suites",
      "Private zodiac fjord & whale safari",
      "Wood-fired floating arctic sea sauna",
      "Midnight sun & twilight polar expeditions",
    ],
  },
];

export default function CategoryCards() {
  return (
    <section id="sanctuaries" className="w-full min-h-screen flex flex-col justify-center max-w-[1320px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
      <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              Collections of Stillness
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-normal">
            Architectural Sanctuaries by Landscape
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
          Every residence is privately surveyed for acoustic purity, architectural restraint, and bespoke culinary stewardship. Hover over any sanctuary to inspect its architectural dossier.
        </p>
      </div>

      {/* 4 Architectural Category 3D Flip Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            data-delay={index * 120}
            className="reveal-on-scroll group [perspective:1200px] h-[480px] cursor-pointer"
          >
            {/* Flip Container */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[20px] shadow-sm hover:shadow-2xl">
              {/* FRONT FACE */}
              <article className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[20px] overflow-hidden bg-surface-container-low border border-surface-container-high/40 flex flex-col justify-between">
                <div className="absolute inset-0">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent pointer-events-none" />

                <div className="relative z-10 p-6 flex flex-col justify-between h-full text-on-primary">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md font-label-sm text-label-sm tracking-wider text-secondary-fixed uppercase border border-white/10">
                      {cat.badge}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-surface-container-lowest/20 backdrop-blur-md flex items-center justify-center text-secondary-fixed shadow-sm">
                      <RoamIcon name="sync" className="w-4 h-4 text-secondary-fixed shrink-0" />
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2 font-label-sm text-label-sm text-surface-variant uppercase tracking-widest font-semibold">
                      <span>{cat.location}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-surface mb-2 font-normal leading-snug">
                      {cat.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-variant/80 line-clamp-2 mb-4 font-light">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 text-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase border-t border-white/10">
                      <div className="flex items-center gap-1.5">
                        <RoamIcon name={cat.icon} className="w-4 h-4 text-secondary-fixed shrink-0" />
                        <span>{cat.feature}</span>
                      </div>
                      <span className="text-[11px] opacity-80 lowercase flex items-center gap-0.5">
                        flip ↺
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* BACK FACE */}
              <article className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-[20px] overflow-hidden bg-[#102921] dark:bg-[#0e1a14] text-white dark:text-[#edf3ee] p-6 flex flex-col justify-between border-2 border-secondary/40 shadow-2xl relative">
                {/* Subtle Luxury Ambient Glow */}
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-10 -top-10 w-44 h-44 bg-primary-container rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header Strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
                        <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                          Dossier #{cat.id.toUpperCase()}
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-primary/70 uppercase">
                        {cat.badge}
                      </span>
                    </div>

                    <span className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-variant mb-1">
                      {cat.location}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-primary mb-3 font-normal">
                      {cat.title}
                    </h3>

                    <p className="font-body-sm text-body-sm text-on-primary/80 mb-4 line-clamp-2">
                      {cat.description}
                    </p>

                    {/* Curated Highlights */}
                    <div className="space-y-2 mb-4 bg-primary-container/40 p-3.5 rounded-xl border border-white/10">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold block">
                        Curated Inclusions
                      </span>
                      <ul className="space-y-1.5 text-body-sm text-on-primary/90">
                        {cat.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs">
                            <span className="text-secondary-fixed">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Back Actions */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between gap-2">
                    <Link
                      href="/explore"
                      className="flex-1 py-2.5 px-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md text-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shadow-md flex items-center justify-center gap-1 group/btn"
                    >
                      <span>Explore Enclaves</span>
                      <RoamIcon name="arrow_forward" className="w-4 h-4 text-on-secondary group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
                    </Link>
                    <Link
                      href="/plan-a-trip"
                      className="p-2.5 rounded-lg bg-primary-container hover:bg-white/15 text-on-primary transition-colors flex items-center justify-center"
                      title="Plan Bespoke Journey"
                    >
                      <RoamIcon name="edit_calendar" className="w-4 h-4 text-on-primary shrink-0" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
