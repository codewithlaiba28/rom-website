import Image from "next/image";
import RoamIcon from "@/components/RoamIcon";

export default function JournalSection() {
  return (
    <section id="journal" className="w-full min-h-screen flex flex-col justify-center max-w-[1320px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
      <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              The ROAM Dispatch
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-normal">
            Essays on Sanctuary &amp; Place
          </h2>
        </div>
        <a
          href="/journal"
          className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:text-secondary transition-colors group"
        >
          <span>View Full Dispatches</span>
          <RoamIcon name="arrow_forward" className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
        </a>
      </div>

      {/* Editorial Layout: Large Feature + 2 Stacked Stories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Large Hero Journal Feature (7 Cols) */}
        <article className="reveal-left lg:col-span-7 bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group border border-surface-container-high/40 cursor-pointer">
          <div className="relative w-full h-80 sm:h-96 overflow-hidden">
            <Image
              src="/images/roam/dispatch-winter.jpg"
              alt="Monochrome minimalist Japanese snow covered traditional cedar timber house in Shirakawa-go"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-6 left-6">
              <span className="px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-wider uppercase font-semibold border border-white/20">
                Cover Feature
              </span>
            </div>
          </div>
          <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-3">
                <span className="text-secondary font-semibold">Architectural Essay</span>
                <span>·</span>
                <span>7 Min Read</span>
                <span>·</span>
                <span>By Hélène Moreau</span>
              </div>
              <h3 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary mb-4 leading-tight">
                In Search of Silence: Winter Architecture in the Japanese Alps
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-6">
                How remote hot spring sanctuaries in Nagano preserve sacred acoustic quiet through timber acoustics, charred cedar facades, and centuries of water ritual.
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-surface-container-high/40">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Issue No. 14 · Autumn Equinox
              </span>
              <span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary group-hover:text-secondary transition-colors">
                <span>Read Essay</span>
                <RoamIcon name="arrow_forward" className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </span>
            </div>
          </div>
        </article>

        {/* Secondary Stories (5 Cols) */}
        <div className="reveal-right lg:col-span-5 flex flex-col gap-8">
          {/* Story 1 */}
          <article className="hover-float bg-surface-container-lowest rounded-[20px] p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group flex-1 border border-surface-container-high/40 cursor-pointer">
            <div className="flex gap-5 items-start mb-4">
              <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/images/roam/dispatch-provence.jpg"
                  alt="Sunlit stone bastide in Provence surrounded by lavender fields"
                  fill
                  sizes="112px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-1.5">
                  <span className="text-secondary font-semibold">Restoration</span>
                  <span>·</span>
                  <span>4 Min Read</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2 leading-snug">
                  The Revival of Provençal Bastides
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light line-clamp-2">
                  A generation of contemporary interior architects returning to lime-wash plaster, hand-cut stone, and local heirloom orchards.
                </p>
              </div>
            </div>
            <div className="pt-3 flex items-center justify-between border-t border-surface-container-high/40">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Words by Jean-Luc Vallon
              </span>
              <RoamIcon name="arrow_forward" className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </article>

          {/* Story 2 */}
          <article className="bg-surface-container-lowest rounded-[20px] p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group flex-1 border border-surface-container-high/40 cursor-pointer">
            <div className="flex gap-5 items-start mb-4">
              <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/images/roam/dispatch-aeolian.jpg"
                  alt="Wooden luxury sailing yacht anchored at sunset off volcanic rocks"
                  fill
                  sizes="112px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-1.5">
                  <span className="text-secondary font-semibold">Maritime Journal</span>
                  <span>·</span>
                  <span>5 Min Read</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2 leading-snug">
                  Superyacht Protocols in the Aeolian Islands
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light line-clamp-2">
                  Sailing secret volcanic archipelagos, sourcing capers from family vineyards, and night passages beneath active calderas.
                </p>
              </div>
            </div>
            <div className="pt-3 flex items-center justify-between border-t border-surface-container-high/40">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Words by Sophia Calvi
              </span>
              <RoamIcon name="arrow_forward" className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
