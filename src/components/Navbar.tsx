"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RoamLogo from "@/components/RoamLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "explore", label: "Explore", href: "/explore" },
    { id: "journal", label: "Journal", href: "/journal" },
    { id: "plan-a-trip", label: "Plan a Trip", href: "/plan-a-trip" },
    { id: "my-trips", label: "My Trips", href: "/my-trips" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/explore") {
      return pathname === "/explore";
    }
    if (href === "/journal") {
      return pathname === "/journal";
    }
    if (href === "/plan-a-trip") {
      return pathname === "/plan-a-trip" || pathname === "/plan-trip";
    }
    if (href === "/my-trips") {
      return pathname === "/my-trips";
    }
    if (href === "/contact") {
      return pathname === "/contact";
    }
    if (href === "/") {
      return pathname === "/";
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(37,41,37,0.03)] border-b border-surface-variant/30 transition-transform duration-300 ease-in-out ${
        isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-lg">
          <Link href="/" className="flex items-center group py-1" aria-label="ROAM Homepage">
            <RoamLogo size="md" showSubtitle={true} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-md">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`px-space-md py-space-sm transition-all duration-200 font-label-md text-label-md rounded-lg ${
                  active
                    ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-md">
          {/* Concierge Status Indicator */}
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low shadow-[0_1px_4px_rgba(37,41,37,0.04)] border border-surface-container-high/50 hover:bg-surface-container transition-colors cursor-pointer"
            title="Open Atelier Concierge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">
              Concierge
            </span>
          </Link>

          {/* Plan Journey Button */}
          <Link
            href="/plan-a-trip"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-[0_4px_16px_rgba(16,41,33,0.15)] hover:bg-primary-container hover:shadow-md transition-all active:scale-[0.98]"
          >
            Plan Journey
          </Link>

          {/* Account Icon */}
          <Link
            href="/my-trips"
            aria-label="My Trips & Account"
            title="My Trips & Account"
            className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md border border-secondary/30 hover:scale-105 transition-transform">
              <svg
                className="w-4 h-4 text-on-primary fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-primary dark:text-on-surface hover:bg-surface-container-low"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-surface-variant/40 px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-label-md text-label-md transition-colors ${
                  isLinkActive(link.href)
                    ? "bg-primary-container text-on-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/my-trips"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low"
            >
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-on-primary fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span>My Trips &amp; Account</span>
            </Link>
            <div className="pt-2">
              <Link
                href="/plan-a-trip"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md"
              >
                Plan Journey
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
