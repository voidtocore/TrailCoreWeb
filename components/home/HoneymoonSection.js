"use client";

import { ParallaxImage, ParallaxText, DriftTypography } from "../Animations";

export default function HoneymoonSection() {
  return (
    <section className="relative section-cinematic px-6 bg-background overflow-hidden">
      {/* Background kinetic text */}
      <div className="absolute top-[35%] left-0 w-full z-0 opacity-[0.02] pointer-events-none">
        <DriftTypography 
          text="S T A Y S" 
          speed={0.9} 
          direction={-1} 
          className="text-[12vw] font-bold text-snow tracking-[0.2em] uppercase select-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Floating sticky title */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 z-10">
            <ParallaxText speed={0.1} direction={1}>
              <span className="inline-block text-[0.625rem] font-medium uppercase tracking-[0.25em] text-forest-glow mb-5">
                Food & Stay Experience
              </span>
            </ParallaxText>
            
            <div className="mb-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5.5xl font-medium text-snow leading-[1.0] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Where comfort meets
                <br />
                <span className="text-white/40 pl-[10%] inline-block mt-2">the mountains.</span>
              </h2>
            </div>

            <ParallaxText speed={0.05} direction={-1}>
              <p className="text-xs sm:text-[0.875rem] text-parchment leading-relaxed font-light max-w-md mb-8">
                Every stay is handpicked for warmth, every meal for authenticity.
                We believe comfort in the mountains means local character, not
                luxury chains — real fires, real food, real people.
              </p>

              <div className="space-y-4 border-t border-white/[0.04] pt-6 max-w-sm">
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
            </ParallaxText>
          </div>
 
          {/* Right Column: Dynamic Drifting Image Composites */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 items-start z-10">
            {/* Block 1: Tall Vertical Frame */}
            <div className="flex flex-col">
              <div className="rounded-[4px] border border-white/[0.03]">
                <ParallaxImage
                  src="/images/honeymoon-cabin.png"
                  alt="Traditional Himalayan Cabin"
                  speed={0.2}
                  aspect="aspect-[3/4]"
                  className="rounded-[4px]"
                />
              </div>
              <ParallaxText speed={0.08} direction={1} className="pt-6">
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-stone">Stay</span>
                <h3 className="text-sm font-medium text-snow mt-1 mb-1.5" style={{ fontFamily: "var(--font-outfit)" }}>Authentic Stays</h3>
                <p className="text-xs text-parchment/60 font-light leading-relaxed">
                  Traditional wooden homes, warm blankets, and stories by the fire.
                </p>
              </ParallaxText>
            </div>

            {/* Block 2: Landscape Frame, Vertically Offset and faster drift */}
            <div className="flex flex-col sm:mt-24">
              <div className="rounded-[4px] border border-white/[0.03]">
                <ParallaxImage
                  src="/images/camping.png"
                  alt="Campsite bonfire under stars"
                  speed={0.35}
                  aspect="aspect-[4/3]"
                  className="rounded-[4px]"
                />
              </div>
              <ParallaxText speed={0.12} direction={-1} className="pt-6">
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-stone">Evening</span>
                <h3 className="text-sm font-medium text-snow mt-1 mb-1.5" style={{ fontFamily: "var(--font-outfit)" }}>Bonfire Evenings</h3>
                <p className="text-xs text-parchment/60 font-light leading-relaxed">
                  Canopies of stars, slow fires, and absolute winter stillness.
                </p>
              </ParallaxText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
