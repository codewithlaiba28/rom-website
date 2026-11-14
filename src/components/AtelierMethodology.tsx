import RoamIcon from "@/components/RoamIcon";

interface Pillar {
  number: string;
  icon: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  progressPercent: number;
  barColor: "primary" | "secondary";
}

const pillars: Pillar[] = [
  {
    number: "Pillar I",
    icon: "schedule",
    title: "Intelligent Timeline Architecture",
    description:
      "A dynamic day planner that synchronizes table reservations, private transfers, and golden-hour lighting windows. Never feel rushed or stranded between moments.",
    metricLabel: "Circadian Pacing Score",
    metricValue: "98.4% Optimal",
    progressPercent: 94,
    barColor: "primary",
  },
  {
    number: "Pillar II",
    icon: "key",
    title: "Private Access Directory",
    description:
      "Secret vintage cellars, closed-door museum viewings, and handshakes with multigenerational artisans unreachable through conventional luxury travel agents.",
    metricLabel: "Unlisted Private Estates",
    metricValue: "420+ Global Keys",
    progressPercent: 88,
    barColor: "secondary",
  },
  {
    number: "Pillar III",
    icon: "cloud_sync",
    title: "Seamless Offline Dossier",
    description:
      "A bespoke digital and print dossier containing biometric boarding gates, private chauffeur phone channels, and vector-rendered offline topological maps.",
    metricLabel: "Offline Vector Readiness",
    metricValue: "100% Zero-Latency",
    progressPercent: 100,
    barColor: "primary",
  },
];

export default function AtelierMethodology() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-surface-container-low py-20">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="reveal-on-scroll text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              The Atelier Methodology
            </span>
            <span className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-normal mb-4">
            Travel Engineering for the Unhurried Mind
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            We strip away operational friction, replacing mass travel logistics with bespoke chronological harmony.
          </p>
        </div>

        {/* 3-Column Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              data-delay={index * 140}
              className="reveal-on-scroll hover-float bg-surface-container-lowest rounded-[20px] p-8 shadow-sm flex flex-col justify-between border border-surface-container-high/40"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-8 text-primary">
                  <RoamIcon name={pillar.icon} className="w-7 h-7 text-primary shrink-0" />
                </div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold block mb-2">
                  {pillar.number}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Decorative Architectural Sparkline */}
              <div className="pt-6 bg-surface-container-low rounded-xl p-4 border border-surface-container-high/30">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-2">
                  <span>{pillar.metricLabel}</span>
                  <span className="text-primary font-semibold">{pillar.metricValue}</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      pillar.barColor === "primary" ? "bg-primary" : "bg-secondary"
                    }`}
                    style={{ width: `${pillar.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
