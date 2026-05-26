"use client";

import Image from "next/image";
import { FadeIn } from "../Animations";

export default function ExpeditionPhilosophy() {
  return (
    <section className="relative py-24 md:py-36 px-6 overflow-hidden bg-[#0c0d0c] border-t border-b border-white/[0.03]">
      {/* Soft Green undertone glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] opacity-[0.04] bg-radial from-forest-glow to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="inline-block text-[0.625rem] font-medium uppercase tracking-[0.25em] text-accent-warm mb-6">
                Our Philosophy
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-snow leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Experience over speed.
                <br />
                <span className="text-white/40">Connection over convenience.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed font-light max-w-xl mb-6">
                Trail Core designs journeys that prioritize depth over distance.
                Every expedition is crafted for meaningful exploration, comfort,
                safety, and authentic Himalayan connection.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xs sm:text-[0.8125rem] text-parchment/60 leading-relaxed font-light max-w-xl">
                We believe the best journeys leave room for the unplanned —
                a conversation with a monastery monk, an extra hour at a
                mountain pass watching clouds roll through valleys.
              </p>
            </FadeIn>

            {/* Philosophy pillars */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 gap-6 mt-12 max-w-lg">
                {[
                  { num: "8–12", label: "Travelers per expedition" },
                  { num: "2–3", label: "Acclimatization rest days" },
                  { num: "100%", label: "Local drivers & guides" },
                  { num: "Zero", label: "Rushed itineraries" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-xl md:text-2xl font-medium text-forest-glow mono-number"
                    >
                      {stat.num}
                    </p>
                    <p className="text-[9px] text-stone mt-1.5 tracking-[0.15em] uppercase font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image Block */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-[4px] overflow-hidden aspect-[3/4] border border-white/[0.03] group">
                <Image
                  src="/images/camping.png"
                  alt="Mountain campsite under stars"
                  fill
                  className="object-cover cinematic-image"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-black/30 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
