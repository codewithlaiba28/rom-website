import Image from "next/image";
import Link from "next/link";
import RoamIcon from "@/components/RoamIcon";

interface Journey {
  id: string;
  duration: string;
  rating: number;
  reviews: number;
  curator: string;
  region: string;
  title: string;
  description: string;
  arc: { days: string; text: string }[];
  price: string;
  image: string;
  alt: string;
  exclusiveInclusions: string[];
}

const journeys: Journey[] = [
  {
    id: "kyoto",
    duration: "8 Days · 7 Nights",
    rating: 4.98,
    reviews: 34,
    curator: "Kenzo Nishida",
    region: "Kyoto & Uji Valley",
    title: "The Kyoto Sabbatical: 8 Days of Zen & Kaiseki Mastery",
    description:
      "Stay in an impeccably preserved 17th-century merchant machiya. Access private Daitoku-ji tea ceremonies and daily tasting menus by 3-star Michelin masters.",
    arc: [
      { days: "01–03", text: "Historic Gion quarters & private sub-temple meditation" },
      { days: "04–06", text: "Arashiyama cedar forest onsen stay & ceramics masterclass" },
      { days: "07–08", text: "Bespoke matcha harvest estate & closing 12-course feast" },
    ],
    price: "$14,200",
    image: "/images/roam/journey-kyoto.jpg",
    alt: "Atmospheric wooden temple corridor in Kyoto overlooking a rainy moss rock garden",
    exclusiveInclusions: [
      "Curator-accompanied Zen tea masterclass",
      "Private bullet train Gran Class transfers",
      "Private Hinoki bath pavilion reservation",
    ],
  },
  {
    id: "dolomite",
    duration: "6 Days · 5 Nights",
    rating: 4.99,
    reviews: 42,
    curator: "Matteo Valier",
    region: "South Tyrol & Val Badia",
    title: "Dolomite High Passes: 6 Days Alpine Elegance",
    description:
      "Helicopter transfers over the Drei Zinnen, private rifugio buyouts with bespoke sommelier pairings, and guided twilight via ferrata traverses.",
    arc: [
      { days: "01–02", text: "Chalet arrival, spa restoration & alpine wine cellar tasting" },
      { days: "03–04", text: "Private heli-glacier expedition & secluded mountain hut dinner" },
      { days: "05–06", text: "Forest sound therapy & Val Gardena bespoke woodcraft atelier" },
    ],
    price: "$11,800",
    image: "/images/roam/journey-dolomite.jpg",
    alt: "Majestic craggy peaks of the Italian Dolomites reflecting in an emerald alpine tarn",
    exclusiveInclusions: [
      "Twin-engine helicopter mountain transfers",
      "Subterranean glacier wine cellar access",
      "IFMGA-certified private alpine guide",
    ],
  },
  {
    id: "amalfi",
    duration: "7 Days · 6 Nights",
    rating: 4.97,
    reviews: 29,
    curator: "Chiara Mansi",
    region: "Amalfi & Capri Enclave",
    title: "Amalfi Cliffside Odyssey: Yacht & Villa Living",
    description:
      "Split tenure between a clifftop Ravello estate and a 65ft private mahogany motoryacht navigating the hidden grottos of Capri and Li Galli isles.",
    arc: [
      { days: "01–03", text: "Ravello villa sanctuary, private gardens & lemon grove dinner" },
      { days: "04–05", text: "Private yacht embarkation to secluded Faraglioni swim coves" },
      { days: "06–07", text: "Capri after-hours boutique salon access & vintage boat return" },
    ],
    price: "$18,500",
    image: "/images/roam/journey-amalfi.jpg",
    alt: "Sunlit cliffside infinity pool overlooking the pastel architecture of Positano",
    exclusiveInclusions: [
      "Private 65ft Riva motoryacht with captain",
      "Historic Ravello cliffside estate residency",
      "After-hours private Capri boutique access",
    ],
  },
];

export default function FeaturedJourneys() {
  return (
    <section id="journeys" className="w-full min-h-screen flex flex-col justify-center max-w-[1320px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
      <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              Master Dossiers
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-normal">
            Flagship Curated Journeys
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-label-md text-label-md text-on-surface-variant">
            Hover card to inspect reverse dossier
          </span>
          <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
        </div>
      </div>

      {/* 3 Detailed Journey 3D Flip Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {journeys.map((j, index) => (
          <div
            key={j.id}
            data-delay={index * 150}
            className="reveal-on-scroll group [perspective:1200px] h-[670px] cursor-pointer"
          >
            {/* Flip Container */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[20px] shadow-sm hover:shadow-2xl">
              {/* FRONT FACE */}
              <article className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[20px] bg-surface-container-lowest p-6 flex flex-col justify-between border border-surface-container-high/40">
                <div>
                  {/* Visual & Badges */}
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={j.image}
                      alt={j.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/85 backdrop-blur-md text-on-primary font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                        {j.duration}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
                      <RoamIcon name="star" className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        {j.rating.toFixed(2)}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        ({j.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Meta Curator */}
                  <div className="flex items-center justify-between mb-2 text-on-surface-variant">
                    <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-medium">
                      Curator: {j.curator}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">{j.region}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline-md text-headline-md text-primary mb-2 leading-snug">
                    {j.title}
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 font-light line-clamp-2">
                    {j.description}
                  </p>

                  {/* Day-by-Day Highlight Preview */}
                  <div className="bg-surface-container-low rounded-xl p-3.5 mb-2 border border-surface-container-high/30">
                    <div className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2 font-semibold">
                      Itinerary Arc
                    </div>
                    <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                      {j.arc.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs">
                          <span className="font-label-sm text-label-sm text-primary font-bold shrink-0">
                            {item.days}
                          </span>
                          <span className="truncate">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer / Pricing & CTA */}
                <div className="pt-3 flex items-center justify-between border-t border-surface-container-high/40">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block text-[10px]">
                      Investment
                    </span>
                    <div className="font-headline-sm text-headline-sm text-primary font-normal">
                      {j.price}{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        / 2 Guests
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
                    <span>Inspect Dossier</span>
                    <RoamIcon name="sync" className="w-4 h-4 text-secondary shrink-0" />
                  </div>
                </div>
              </article>

              {/* BACK FACE */}
              <article className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-[20px] bg-[#102921] dark:bg-[#0e1a14] text-white dark:text-[#edf3ee] p-7 flex flex-col justify-between border-2 border-secondary/40 shadow-2xl relative overflow-hidden">
                {/* Atmospheric Glow */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-container rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header Strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                        <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                          ATELIER ARCHIVE · {j.region.toUpperCase()}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm border border-white/10">
                        {j.duration}
                      </span>
                    </div>

                    <h3 className="font-headline-md text-headline-md text-on-primary mb-2 leading-snug">
                      {j.title}
                    </h3>

                    <p className="font-body-md text-body-md text-on-primary/80 mb-5 font-light">
                      {j.description}
                    </p>

                    {/* Detailed Arc on Back */}
                    <div className="bg-primary-container/50 rounded-xl p-4 mb-4 border border-white/10 space-y-2">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold block">
                        Detailed Milestones &amp; Protocols
                      </span>
                      <ul className="space-y-2 font-body-sm text-body-sm text-on-primary/90">
                        {j.arc.map((item, index) => (
                          <li key={index} className="flex items-start gap-2.5">
                            <span className="font-label-sm text-label-sm text-secondary-fixed font-bold shrink-0">
                              Day {item.days}:
                            </span>
                            <span className="text-xs leading-relaxed">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusive Inclusions */}
                    <div className="space-y-1.5 mb-2">
                      <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider text-[11px] block">
                        Exclusive Provisions
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {j.exclusiveInclusions.map((inc, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-on-primary"
                          >
                            ✓ {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Back Actions */}
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                    <div>
                      <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider block text-[10px]">
                        Investment All-Inclusive
                      </span>
                      <div className="font-headline-sm text-headline-sm text-secondary-fixed font-semibold">
                        {j.price}
                      </div>
                    </div>

                    <Link
                      href="/plan-a-trip"
                      className="py-3 px-5 rounded-xl bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-md text-label-md transition-colors shadow-lg flex items-center gap-1.5 group/btn"
                    >
                      <span>Commission Journey</span>
                      <RoamIcon name="arrow_forward" className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
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
