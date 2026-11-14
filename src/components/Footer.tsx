"use client";

import { useState } from "react";
import Link from "next/link";
import RoamLogo from "@/components/RoamLogo";
import RoamIcon from "@/components/RoamIcon";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-surface-container-low mt-space-2xl border-t border-surface-variant/40">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl border-b border-surface-variant/30">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <Link href="/" className="flex items-center group self-start py-1" aria-label="ROAM Homepage">
              <RoamLogo size="md" showSubtitle={true} />
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Slow-luxury bespoke travel atelier. Curating slow journeys, architectural sanctuaries, and timeless itineraries across the world&apos;s quietest enclaves.
            </p>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-space-sm">
              Est. 2025 ROAM Travel Atelier
            </span>
          </div>

          {/* Links Col */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-space-xs font-semibold">
              Curated Sanctuaries
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                "Alpine Retreats",
                "Island Villas",
                "Nordic Sanctuaries",
                "Mediterranean Havens",
              ].map((item) => (
                <li
                  key={item}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  <Link href="/explore">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-primary">The ROAM Dispatch</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Receive an invitation each solstice and equinox featuring unpublished private estate stays and rare itineraries.
            </p>
            {subscribed ? (
              <div className="p-3 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-2">
                <RoamIcon name="check_circle" className="w-5 h-5 text-secondary-fixed shrink-0" />
                Thank you for subscribing to The ROAM Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-space-xs">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your correspondence address"
                  className="px-4 py-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary flex-grow placeholder:text-outline-variant shadow-[0_1px_4px_rgba(0,0,0,0.02)] border border-surface-container-high/40"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-md sm:gap-space-lg">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              © 2025 ROAM Travel Atelier. All rights reserved.
            </span>
            <Link
              href="/sitemap"
              className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Architecture &amp; Sitemap
            </Link>
            <span className="text-outline-variant">•</span>
            <Link
              href="/brand-assets"
              className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Brand &amp; Icons Directory
            </Link>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm cursor-pointer hover:bg-surface-container-high transition-colors border border-surface-container-high/50">
              <RoamIcon name="language" className="w-4 h-4 text-secondary shrink-0" />
              <span>English (US)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm cursor-pointer hover:bg-surface-container-high transition-colors border border-surface-container-high/50">
              <RoamIcon name="attach_money" className="w-4 h-4 text-secondary shrink-0" />
              <span>USD ($)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
