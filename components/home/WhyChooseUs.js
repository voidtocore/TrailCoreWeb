"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../Animations";

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
    <section className="section-editorial px-6 bg-[#0c0d0c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Spacious Header */}
          <div className="lg:col-span-5">
            <span className="inline-block text-[0.625rem] font-medium uppercase tracking-[0.25em] text-accent-warm mb-5">
              Why Trail Core
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-snow leading-[1.05]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Expeditions
              <br />
              designed with intent.
            </h2>
            <p className="text-xs sm:text-[0.8125rem] text-parchment/60 leading-relaxed mt-6 max-w-sm font-light">
              We design journeys that respect the speed of the mountains — unhurried, safe, and authentic.
            </p>
          </div>

          {/* Right Column: Architectural Typographic List (Moment of Stillness) */}
          <div className="lg:col-span-7 border-t border-white/[0.04] divide-y divide-white/[0.04]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
