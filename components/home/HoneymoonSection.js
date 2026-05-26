"use client";

import Image from "next/image";
import { FadeIn } from "../Animations";

export default function HoneymoonSection() {
  return (
    <section className="section-cinematic px-6 bg-[#0c0d0c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <FadeIn>
              <span className="inline-block text-[0.625rem] font-medium uppercase tracking-[0.25em] text-accent-warm mb-5">
                Food & Stay Experience
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-snow leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Where comfort meets
                <br />
                <span className="text-white/40">the mountains.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed font-light max-w-md mb-8">
                Every stay is handpicked for warmth, every meal for authenticity.
                We believe comfort in the mountains means local character, not
                luxury chains — real fires, real food, real people.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-4">
                {[
                  "Curated homestays & heritage stays",
                  "Traditional Himalayan cuisine",
                  "Bonfire nights under the stars",
                  "Slow evenings with chai",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs text-parchment-dim font-light">
                    <div className="w-1 h-1 rounded-full bg-forest-glow" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
 
          {/* Right Column: Restrained Asymmetrical Image Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            {/* Block 1: Tall Vertical Frame */}
            <div className="flex flex-col">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#121413] rounded-[4px] border border-white/[0.03] group">
                <Image
                  src="/images/honeymoon-cabin.png"
                  alt="Traditional Himalayan Cabin"
                  fill
                  className="object-cover cinematic-image"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="pt-4">
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-stone">Stay</span>
                <h3 className="text-sm font-medium text-snow mt-1 mb-1.5" style={{ fontFamily: "var(--font-outfit)" }}>Authentic Stays</h3>
                <p className="text-xs text-parchment/60 font-light leading-relaxed">
                  Traditional wooden homes, warm blankets, and stories by the fire.
                </p>
              </div>
            </div>

            {/* Block 2: Landscape Frame, Vertically Offset */}
            <div className="flex flex-col sm:mt-16">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121413] rounded-[4px] border border-white/[0.03] group">
                <Image
                  src="/images/camping.png"
                  alt="Campsite bonfire under stars"
                  fill
                  className="object-cover cinematic-image"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="pt-4">
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-stone">Evening</span>
                <h3 className="text-sm font-medium text-snow mt-1 mb-1.5" style={{ fontFamily: "var(--font-outfit)" }}>Bonfire Evenings</h3>
                <p className="text-xs text-parchment/60 font-light leading-relaxed">
                  Canopies of stars, slow fires, and absolute winter stillness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
