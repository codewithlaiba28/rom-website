import Link from "next/link";
import RoamIcon from "@/components/RoamIcon";

export default function InvitationCta() {
  return (
    <section id="plan-trip" className="w-full min-h-screen flex flex-col justify-center items-center max-w-[1320px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
      <div className="reveal-scale relative rounded-[24px] bg-[#102921] dark:bg-[#0e1a14] text-white dark:text-[#edf3ee] overflow-hidden p-10 sm:p-16 lg:p-20 shadow-2xl w-full border border-secondary/20 dark:border-secondary/35 transition-colors duration-500">
        {/* Ambient Background Accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#1b3229] dark:bg-primary-container/40 blur-3xl pointer-events-none" />

        {/* Subtle Decorative Filigree Pattern SVG Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg
            fill="none"
            height="100%"
            viewBox="0 0 1000 400"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="500"
              cy="200"
              r="180"
              stroke="currentColor"
              strokeDasharray="4 6"
              strokeWidth="0.75"
            />
            <circle cx="500" cy="200" r="260" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="500" cy="200" r="340" stroke="currentColor" strokeWidth="0.25" />
            <path d="M500 0V400M0 200H1000" stroke="currentColor" strokeWidth="0.25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Atelier Crest Icon */}
          <div className="w-16 h-16 rounded-full bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center mb-8 text-secondary-fixed border border-white/10 shadow-inner">
            <RoamIcon name="auto_awesome" className="w-8 h-8 text-secondary-fixed shrink-0" />
          </div>

          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface font-normal mb-6 leading-tight">
            Ready to Orchestrate Your Next Chapter?
          </h2>

          <p className="font-body-lg text-body-lg text-surface-variant font-light mb-10 leading-relaxed max-w-xl">
            Tell us your travel dream, and our bespoke planning algorithm along with our atelier concierge will design your master day-by-day dossier.
          </p>

          {/* Action Pair */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/plan-a-trip"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary-fixed-dim transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Start Planning a Trip</span>
              <RoamIcon name="north_east" className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/explore"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md text-surface hover:bg-surface-container-lowest/20 font-label-md text-label-md transition-all text-center border border-white/10 active:scale-95"
            >
              Browse Private Atlas
            </Link>
          </div>

          {/* Reassurance Note */}
          <div className="mt-8 text-surface-variant/70 font-label-sm text-label-sm tracking-wider uppercase">
            Strictly limited to 12 bespoke commissions per calendar month
          </div>
        </div>
      </div>
    </section>
  );
}
