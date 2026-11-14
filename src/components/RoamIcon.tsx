import React from "react";

interface RoamIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export default function RoamIcon({
  name,
  className = "",
  size,
}: RoamIconProps) {
  const normalized = (name || "").trim().toLowerCase();

  let inferredSize: string | undefined = undefined;
  const pxMatch = className.match(/text-\[(\d+)px\]/);
  if (pxMatch) {
    inferredSize = pxMatch[1] + 'px';
  } else if (/\btext-xs\b/.test(className)) {
    inferredSize = '12px';
  } else if (/\btext-sm\b/.test(className)) {
    inferredSize = '14px';
  } else if (/\btext-base\b/.test(className)) {
    inferredSize = '16px';
  } else if (/\btext-lg\b/.test(className)) {
    inferredSize = '18px';
  } else if (/\btext-xl\b/.test(className)) {
    inferredSize = '20px';
  } else if (/\btext-2xl\b/.test(className)) {
    inferredSize = '24px';
  } else if (/\btext-3xl\b/.test(className)) {
    inferredSize = '30px';
  }

  const hasWidth = /\bw-\S+/.test(className);
  const hasHeight = /\bh-\S+/.test(className);

  const style: React.CSSProperties = {
    ...(size
      ? { width: size, height: size }
      : inferredSize && !hasWidth && !hasHeight
      ? { width: inferredSize, height: inferredSize }
      : !hasWidth && !hasHeight
      ? { width: '1.25em', height: '1.25em' }
      : {}),
  };

  const finalClass = ('inline-block align-middle shrink-0 ' + className).trim();

  switch (normalized) {
    // Globe / Language
    case "language":
    case "globe":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );

    // Currency / Attach Money / Investment
    case "attach_money":
    case "payments":
    case "currency":
    case "dollar":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 9a2.5 2.5 0 0 0-5 0c0 3 5 2 5 5a2.5 2.5 0 0 1-5 0" />
          <line x1="12" y1="5" x2="12" y2="19" />
        </svg>
      );

    // Star / Rating
    case "star":
    case "hotel_class":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );

    // Heart / Wishlist / Favorite
    case "favorite":
    case "heart":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );

    // Search / Magnifying Glass
    case "search":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );

    // Close / X
    case "close":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );

    // Filter / Sliders / Tune
    case "tune":
    case "filter":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <circle cx="4" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="10" r="2" fill="currentColor" />
          <circle cx="20" cy="14" r="2" fill="currentColor" />
        </svg>
      );

    // Check Circle / Verified / Done
    case "check_circle":
    case "task_alt":
    case "done":
    case "download_done":
    case "mark_email_read":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );

    // Verified Badge Shield
    case "verified":
    case "verified_user":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );

    // Lock / Secure Protocol
    case "lock":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );

    // Calendar / Date
    case "calendar_today":
    case "calendar_month":
    case "edit_calendar":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );

    // Clock / Schedule / Duration
    case "schedule":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );

    // Arrow Forward / Next / Chevron
    case "arrow_forward":
    case "chevron_right":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    // Arrow Back
    case "arrow_back":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      );

    // Arrow Downward / Expand More
    case "expand_more":
    case "arrow_downward":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      );

    // North East (External Link)
    case "north_east":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      );

    // Explore / Compass
    case "explore":
    case "near_me":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon
            points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            fill="currentColor"
          />
        </svg>
      );

    // Map / Route
    case "map":
    case "route":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );

    // Grid View
    case "grid_view":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );

    // Sync / Rotate / Flip / Swap Vert
    case "sync":
    case "swap_vert":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l6.73-5.19" />
        </svg>
      );

    // Flight / Aviation / Airlines
    case "flight":
    case "flight_takeoff":
    case "flight_land":
    case "airlines":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.4.8-.2 1.8.5 2.3l6.2 4.2-3 3L4 16.5l-1.5 1.5 3 1.5 1.5 3 1.5-1.5-.7-3 3-3 4.2 6.2c.5.7 1.5.9 2.3.5.8-.4 1.2-1.2 1-2z" />
          <circle cx="18" cy="6" r="1.5" fill="currentColor" />
        </svg>
      );

    // Villa / Cottage / Heritage
    case "cottage":
    case "villa":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );

    // Concierge / Bell / Room Service
    case "concierge":
    case "room_service":
    case "support_agent":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          <circle cx="12" cy="3" r="1.5" fill="currentColor" />
        </svg>
      );

    // Phone / Call
    case "call":
    case "phone":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    // Chat / Message / Send
    case "chat":
    case "chat_bubble_outline":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );

    case "send":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );

    // Audio / Headphones / Soundscape
    case "headphones":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );

    case "play_arrow":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );

    case "pause":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        </svg>
      );

    // Bookmark
    case "bookmark":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      );

    case "bookmark_border":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      );

    // Share
    case "share":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );

    // Photo / Camera
    case "photo_camera":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );

    // Book / Document / Journal / History
    case "description":
    case "auto_stories":
    case "menu_book":
    case "history_edu":
    case "local_library":
    case "edit_note":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" strokeOpacity="0.5" />
          <line x1="8" y1="10" x2="14" y2="10" stroke="currentColor" strokeOpacity="0.5" />
        </svg>
      );

    // Person / Group
    case "person":
    case "person_outline":
    case "group":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );

    // Radio Button Checked
    case "radio_button_checked":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );

    // Add / Plus
    case "add":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );

    // Remove / Minus
    case "remove":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );

    // Sparkle / Auto Awesome / Luxury
    case "auto_awesome":
    case "sparkle":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
        </svg>
      );

    // Spa / Eco / Terroir leaf
    case "spa":
    case "eco":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 12a10 10 0 0 0 10 10c0-6-4-10-10-10z" />
          <path d="M12 22A10 10 0 0 0 22 12c0 6-4 10-10 10z" />
        </svg>
      );

    // Visibility / Eye
    case "visibility":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    // Progress activity (spinner)
    case "progress_activity":
      return (
        <svg
          width="1em" height="1em" className={`animate-spin ${finalClass}`} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
          <path d="M12 2a10 10 0 0 1 10 10" />
        </svg>
      );

    // Weather: Sunny / Solstice Sun
    case "sunny":
    case "wb_sunny":
    case "sun":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.5" />
          <line x1="12" y1="2" x2="12" y2="4.5" />
          <line x1="12" y1="19.5" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4.5" y2="12" />
          <line x1="19.5" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="6.7" y2="6.7" />
          <line x1="17.3" y1="17.3" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="6.7" y2="17.3" />
          <line x1="17.3" y1="6.7" x2="19.07" y2="4.93" />
        </svg>
      );

    // Weather: Air / Wind stream
    case "air":
    case "wind":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 8h11a3 3 0 1 0-3-3" />
          <path d="M2 12h17a3 3 0 1 1-3 3" />
          <path d="M6 16h8a2 2 0 1 0-2-2" />
        </svg>
      );

    // Weather & Alpine: Snowflake / Frost / AC Unit
    case "ac_unit":
    case "snow":
    case "snowflake":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
          <path d="M9 4.5l3 2.5 3-2.5" />
          <path d="M9 19.5l3-2.5 3 2.5" />
          <path d="M4.5 9l2.5 3-2.5 3" />
          <path d="M19.5 9l-2.5 3 2.5 3" />
        </svg>
      );

    // Weather: Nightlight / Moon / Aurora
    case "nightlight":
    case "dark_mode":
    case "moon":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );

    // Key / Private Access Directory
    case "key":
    case "vpn_key":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="7.5" cy="12" r="4.5" />
          <line x1="12" y1="12" x2="21" y2="12" />
          <line x1="17" y1="12" x2="17" y2="16" />
          <line x1="20" y1="12" x2="20" y2="15" />
        </svg>
      );

    // Cloud Sync / Offline Dossier
    case "cloud_sync":
    case "cloud_download":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <polyline points="9 13 12 16 15 13" />
          <line x1="12" y1="9" x2="12" y2="16" />
        </svg>
      );

    // Coastal / Sailing Boat / Yacht
    case "sailing":
    case "boat":
    case "yacht":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 19c3 1.5 8 1.5 10 1.5s7 0 10-1.5l-2-4H4z" />
          <line x1="12" y1="4" x2="12" y2="15" />
          <path d="M12 4L4.5 14h7.5z" />
          <path d="M13.5 6.5l6 7.5h-6z" />
        </svg>
      );

    // Cultural / Shinto & Buddhist Temple / Pagoda
    case "temple_buddhist":
    case "temple":
    case "pagoda":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2v3" />
          <path d="M5 8c2-1 5-1.5 7-1.5s5 .5 7 1.5l-1 2H6z" />
          <path d="M3 15c2.5-1 6-1.5 9-1.5s6.5.5 9 1.5l-1.5 2.5H4.5z" />
          <line x1="7.5" y1="17.5" x2="7.5" y2="21.5" />
          <line x1="16.5" y1="17.5" x2="16.5" y2="21.5" />
          <line x1="3" y1="21.5" x2="21" y2="21.5" />
        </svg>
      );

    // Nordic / Twilight / Aurora Horizon
    case "wb_twilight":
    case "twilight":
    case "horizon":
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="2" y1="18" x2="22" y2="18" />
          <path d="M7 18a5 5 0 0 1 10 0" />
          <line x1="12" y1="5" x2="12" y2="9" />
          <line x1="4.93" y1="10.93" x2="7.76" y2="12.35" />
          <line x1="19.07" y1="10.93" x2="16.24" y2="12.35" />
        </svg>
      );

    // Fallback: A refined slow-luxury diamond astrolabe pip
    default:
      return (
        <svg width="1em" height="1em" className={finalClass} style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
          <polygon points="12 6 15 12 12 18 9 12" fill="currentColor" />
        </svg>
      );
  }
}
