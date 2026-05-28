"use client";

import { FadeIn, ParallaxImage, ParallaxText, DriftTypography } from "../Animations";

export default function ExpeditionPhilosophy() {
  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden bg-background border-t border-b border-white/[0.03]">
      {/* Soft Green undertone glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] opacity-[0.04] bg-radial from-forest-glow to-transparent blur-[120px] rounded-full" />
      </div>

      {/* Background kinetic text */}
      <div className="absolute top-[10%] left-0 w-full z-0 opacity-[0.02] pointer-events-none">
        <DriftTypography 
          text="P H I L O S O P H Y" 
          speed={0.7} 
          direction={1} 
          className="text-[12vw] font-bold text-snow tracking-[0.2em] uppercase select-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Asymmetric text & stats */}
          <div className="lg:col-span-7 z-10">
            <ParallaxText speed={0.12} direction={-1}>
              <span className="inline-block text-[0.625rem] font-medium uppercase tracking-[0.25em] text-forest-glow mb-6">
                Our Philosophy
              </span>
            </ParallaxText>
            
            <div className="mb-8">
              <h2
                className="text-3xl sm:text-4xl lg:text-5.5xl font-medium text-snow leading-[1.0] tracking-tight mb-8"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Experience over speed.
                <br />
                <span className="text-white/40 pl-[10%] inline-block mt-2">Connection over convenience.</span>
              </h2>
            </div>

            <ParallaxText speed={0.08} direction={1} className="space-y-6">
              <p className="text-xs sm:text-[0.875rem] text-parchment leading-relaxed font-light max-w-xl">
                Trail Core designs journeys that prioritize depth over distance.
                Every expedition is crafted for meaningful exploration, comfort,
                safety, and authentic Himalayan connection.
              </p>
              <p className="text-stone text-xs sm:text-[0.8125rem] leading-relaxed font-light max-w-xl">
                We believe the best journeys leave room for the unplanned —
                a conversation with a monastery monk, an extra hour at a
                mountain pass watching clouds roll through valleys.
              </p>
            </ParallaxText>

            {/* Philosophy pillars - Stark typographic block */}
            <div className="grid grid-cols-2 gap-6 mt-16 max-w-lg border-t border-white/[0.04] pt-8">
              {[
                { num: "8–12", label: "Travelers per expedition" },
                { num: "2–3", label: "Acclimatization rest days" },
                { num: "100%", label: "Local drivers & guides" },
                { num: "Zero", label: "Rushed itineraries" },
              ].map((stat, idx) => (
                <div key={stat.label} className="group">
                  <p className="text-xl md:text-2.5xl font-light text-forest-glow mono-number">
                    {stat.num}
                  </p>
                  <p className="text-[9px] text-stone mt-2 tracking-[0.18em] uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating portrait ParallaxImage */}
          <div className="lg:col-span-5 relative z-10">
            <ParallaxText speed={0.2} direction={1}>
              <div className="rounded-[4px] border border-white/[0.03]">
                <ParallaxImage
                  src="/images/camping.png"
                  alt="Mountain campsite under stars"
                  speed={0.3}
                  aspect="aspect-[3/4]"
                  className="rounded-[4px]"
                />
              </div>
            </ParallaxText>
          </div>
        </div>
      </div>
    </section>
  );
}
