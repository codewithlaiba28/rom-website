import React from "react";

interface RoamLogoProps {
  /** Size variant: "sm" (26px), "md" (30px), "lg" (38px) */
  size?: "sm" | "md" | "lg";
  /** Whether to show the "TRAVEL ATELIER" subtitle underneath ROAM */
  showSubtitle?: boolean;
  className?: string;
}

export default function RoamLogo({
  size = "md",
  showSubtitle = true,
  className = "",
}: RoamLogoProps) {
  // Dimensions based on size
  const emblemDim = size === "sm" ? 24 : size === "md" ? 28 : 36;
  const textSize = size === "sm" ? "text-[18px]" : size === "md" ? "text-[21px]" : "text-[26px]";
  const subSize = size === "sm" ? "text-[7px]" : size === "md" ? "text-[8px]" : "text-[9.5px]";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Astrolabe / Compass Star Luxury Emblem Logo */}
      <svg
        width={emblemDim}
        height={emblemDim}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 group-hover:rotate-45"
        aria-hidden="true"
      >
        {/* Outer delicate concentric ring */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="#263F36"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          className="dark:stroke-[#edf3ee] dark:stroke-opacity-30 transition-colors"
        />
        {/* Inner champagne gold ring */}
        <circle cx="24" cy="24" r="18" stroke="#C5A77A" strokeWidth="1.5" />

        {/* Compass directional pips */}
        <line
          x1="24"
          y1="2"
          x2="24"
          y2="7"
          stroke="#263F36"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="dark:stroke-[#C5A77A] transition-colors"
        />
        <line
          x1="24"
          y1="41"
          x2="24"
          y2="46"
          stroke="#263F36"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="dark:stroke-[#C5A77A] transition-colors"
        />
        <line
          x1="2"
          y1="24"
          x2="7"
          y2="24"
          stroke="#263F36"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="dark:stroke-[#C5A77A] transition-colors"
        />
        <line
          x1="41"
          y1="24"
          x2="46"
          y2="24"
          stroke="#263F36"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="dark:stroke-[#C5A77A] transition-colors"
        />

        {/* 4-point forest star inside */}
        <path
          d="M24 10 L26.5 21.5 L38 24 L26.5 26.5 L24 38 L21.5 26.5 L10 24 L21.5 21.5 Z"
          fill="#263F36"
          className="dark:fill-[#edf3ee] transition-colors"
        />
        {/* Champagne gold center jewel */}
        <circle cx="24" cy="24" r="2.5" fill="#C5A77A" />
      </svg>

      {/* Main ROAM Wordmark & Atelier Subtitle */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-headline-sm ${textSize} text-primary dark:text-[#edf3ee] tracking-[0.16em] font-normal leading-none transition-colors`}
        >
          ROAM
        </span>
        {showSubtitle && (
          <span
            className={`font-label-sm ${subSize} uppercase tracking-[0.22em] text-secondary font-medium mt-1 leading-none`}
          >
            Travel Atelier
          </span>
        )}
      </div>
    </div>
  );
}
