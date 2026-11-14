"use client";

import { useSyncExternalStore } from "react";
import RoamIcon from "@/components/RoamIcon";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (
        m.type === "attributes" &&
        (m.attributeName === "class" || m.attributeName === "data-theme")
      ) {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
  });

  return () => {
    window.removeEventListener("storage", callback);
    observer.disconnect();
  };
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): boolean {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("roam-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("roam-theme", "light");
    }
  };

  return (
    <aside
      aria-label="Theme Controller"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 pointer-events-auto"
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          isDark
            ? "Switch to Daylight Theme"
            : "Switch to Nightfall Theme"
        }
        title={
          isDark
            ? "Switch to Daylight Theme"
            : "Switch to Nightfall Theme"
        }
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-surface-container-lowest/90 dark:bg-surface-container-high/90 backdrop-blur-xl border border-secondary/35 dark:border-secondary/40 shadow-[0_8px_24px_rgba(16,41,33,0.14)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-secondary hover:shadow-[0_10px_28px_rgba(197,167,122,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none"
      >
        {/* Animated Icon Container */}
        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
          {/* Solstice Sun Icon (Visible in Dark mode) */}
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
              isDark
                ? "rotate-0 scale-100 opacity-100 text-secondary-fixed"
                : "-rotate-90 scale-0 opacity-0 text-secondary"
            }`}
          >
            <RoamIcon name="sunny" className="w-5 h-5 shrink-0" />
          </span>

          {/* Nightlight Moon Icon (Visible in Light mode) */}
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
              isDark
                ? "rotate-90 scale-0 opacity-0 text-secondary-fixed"
                : "rotate-0 scale-100 opacity-100 text-secondary"
            }`}
          >
            <RoamIcon name="nightlight" className="w-4.5 h-4.5 shrink-0" />
          </span>
        </div>

        {/* Text Label */}
        <span className="font-label-sm text-[11px] uppercase tracking-widest font-semibold text-on-surface select-none hidden sm:inline-block">
          {isDark ? "Daylight" : "Nightfall"}
        </span>

        {/* Ambient indicator jewel */}
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            isDark
              ? "bg-secondary-fixed animate-pulse shadow-[0_0_8px_#ffdead]"
              : "bg-secondary group-hover:bg-secondary-fixed"
          }`}
        />
      </button>
    </aside>
  );
}
