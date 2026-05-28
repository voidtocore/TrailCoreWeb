"use client";

import { ParallaxText, DriftTypography } from "../Animations";

const pillars = [
  {
    num: "01",
    title: "Intimate Scale",
    desc: "Groups limited to 8–12. More connection, less crowd. Every seat is intentional.",
  },
  {
    num: "02",
    title: "Deliberate Pacing",
    desc: "Routes designed to breathe. Acclimatized itineraries with dedicated rest days built in.",
  },
  {
    num: "03",
    title: "Local Depth",
    desc: "Led by local mountain drivers and guides. Stays in handpicked family homestays.",
  },
  {
    num: "04",
    title: "Absolute Safety",
    desc: "Emergency oxygen support, high-altitude protocols, and 24/7 mountain assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative section-editorial px-6 bg-background overflow-hidden">
      {/* Background kinetic text */}
      <div className="absolute top-[30%] left-0 w-full z-0 opacity-[0.02] pointer-events-none">
        <DriftTypography 
          text="I N T E N T" 
          speed={0.65} 
          direction={1} 
          className="text-[12vw] font-bold text-snow tracking-[0.2em] uppercase select-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Spacious Header */}
          <div className="lg:col-span-5">
            <ParallaxText speed={0.1} direction={1}>
              <span className="inline-block text-[0.625rem] font-medium uppercase tracking-[0.25em] text-forest-glow mb-5">
                Why Trail Core
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5.5xl font-medium text-snow leading-[1.0] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Expeditions
                <br />
                designed with intent.
              </h2>
              <p className="text-xs sm:text-[0.875rem] text-parchment/60 leading-relaxed mt-6 max-w-sm font-light">
                We design journeys that respect the speed of the mountains — unhurried, safe, and authentic.
              </p>
            </ParallaxText>
          </div>

          {/* Right Column: Architectural Typographic List (Moment of Stillness, drifts slightly opposite) */}
          <div className="lg:col-span-7 border-t border-white/[0.04] divide-y divide-white/[0.04]">
            <ParallaxText speed={0.08} direction={-1}>
              {pillars.map((p) => (
                <div key={p.num} className="grid grid-cols-12 py-6 gap-4 items-start group">
                  {/* Monospace Indicator */}
                  <div className="col-span-2 text-[0.6875rem] font-medium text-stone mono-number pt-1">
                    {p.num}
                  </div>
                  {/* Text Content */}
                  <div className="col-span-10">
                    <h3
                      className="text-sm font-medium text-snow mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-[0.8125rem] text-parchment/65 leading-relaxed font-light max-w-lg">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ParallaxText>
          </div>
        </div>
      </div>
    </section>
  );
}
