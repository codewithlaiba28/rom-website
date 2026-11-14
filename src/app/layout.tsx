import type { Metadata } from "next";
import { Manrope, EB_Garamond } from "next/font/google";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROAM — Luxury Travel Architecture Planner",
  description:
    "Curated private sanctuaries, Michelin itineraries, and intuitive day-by-day travel architecture calibrated for quiet elegance.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
        <Script
          id="ext-sanitizer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (typeof Element !== 'undefined' && Element.prototype && Element.prototype.setAttribute) {
                    var origSet = Element.prototype.setAttribute;
                    Element.prototype.setAttribute = function(name, value) {
                      if (typeof name === 'string' && (name.indexOf('bis_') === 0 || name.indexOf('__processed_') === 0)) {
                        return;
                      }
                      return origSet.apply(this, arguments);
                    };
                  }

                  function stripExtAttrs(el) {
                    if (!el || !el.attributes) return;
                    for (var i = el.attributes.length - 1; i >= 0; i--) {
                      var attr = el.attributes[i].name;
                      if (attr && (attr.indexOf('bis_') === 0 || attr.indexOf('__processed_') === 0)) {
                        el.removeAttribute(attr);
                      }
                    }
                  }

                  if (typeof MutationObserver !== 'undefined') {
                    new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        var m = mutations[i];
                        if (m.type === 'attributes' && m.attributeName) {
                          if (m.attributeName.indexOf('bis_') === 0 || m.attributeName.indexOf('__processed_') === 0) {
                            m.target.removeAttribute(m.attributeName);
                          }
                        } else if (m.type === 'childList') {
                          for (var j = 0; j < m.addedNodes.length; j++) {
                            var node = m.addedNodes[j];
                            if (node.nodeType === 1) {
                              stripExtAttrs(node);
                              var descendants = node.getElementsByTagName ? node.getElementsByTagName('*') : [];
                              for (var d = 0; d < descendants.length; d++) {
                                stripExtAttrs(descendants[d]);
                              }
                            }
                          }
                        }
                      }
                    }).observe(document.documentElement, {
                      attributes: true,
                      childList: true,
                      subtree: true
                    });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('roam-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <ScrollReveal />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
