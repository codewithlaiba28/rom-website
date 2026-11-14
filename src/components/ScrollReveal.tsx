"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Safety check for browser environment
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const setupObserver = () => {
      const targets = document.querySelectorAll(
        ".reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right, [data-reveal]"
      );

      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const delay = el.getAttribute("data-delay");
              if (delay) {
                el.style.transitionDelay = `${delay}ms`;
              }
              el.classList.add("is-revealed");
              // Once revealed, we don't need to observe it again
              observer.unobserve(el);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -60px 0px",
          threshold: 0.1,
        }
      );

      targets.forEach((target) => {
        // If already in viewport on mount, reveal immediately
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          (target as HTMLElement).classList.add("is-revealed");
        } else {
          observer.observe(target);
        }
      });

      return () => observer.disconnect();
    };

    // Small timeout to allow DOM to settle after route change
    const timer = setTimeout(setupObserver, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
