"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem, ParallaxImage, ParallaxText, DriftTypography } from "../Animations";
import { expeditions } from "@/data/expeditions";

export default function FeaturedExperiences() {
  // Grab the first 4 featured expeditions for the homepage
  const homepageExpeditions = expeditions.slice(0, 4);

  return (
    <section className="relative section-editorial px-6 bg-background overflow-hidden">
      {/* Background kinetic text */}
      <div className="absolute top-[45%] left-0 w-full z-0 opacity-[0.02] pointer-events-none">
        <DriftTypography 
          text="E X P E D I T I O N S" 
          speed={0.8} 
          direction={-1} 
          className="text-[12vw] font-bold text-snow tracking-[0.2em] uppercase select-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Featured Expeditions"
          title="Journeys Worth Taking"
          description="Each route is curated for depth — slow paced, safe, and deeply immersive."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-0 mt-16">
          {homepageExpeditions.map((exp, idx) => {
            const href = exp.slug ? `/packages/${exp.slug}` : "/contact";
            return (
              <StaggerItem 
                key={exp.title} 
                className={`${exp.alignOffset || ""} mb-16 md:mb-32`}
              >
                <Link
                  href={href}
                  className="group block"
                >
                  <div className="flex flex-col">
                    {/* Visual Frame - drifting image using ParallaxImage */}
                    <div className="rounded-[4px] border border-white/[0.03]">
                      <ParallaxImage
                        src={exp.img}
                        alt={exp.title}
                        speed={0.25}
                        aspect="aspect-[16/10]"
                        className="rounded-[4px]"
                      />
                    </div>

                    {/* Content Area - Stacked and drifting separately */}
                    <ParallaxText speed={0.15} direction={idx % 2 === 0 ? 1 : -1}>
                      <div className="pt-8 flex flex-col items-start">
                        {/* Category Label */}
                        <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-forest-glow mb-3">
                          {exp.badge}
                        </span>

                        {/* Title */}
                        <h3
                          className="text-base sm:text-lg font-medium text-snow mb-3 tracking-tight"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {exp.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed mb-5 max-w-md font-light">
                          {exp.summary}
                        </p>

                        {/* Metadata Row */}
                        <div className="flex items-center gap-x-4 text-[0.6875rem] text-parchment-dim font-light tracking-wide mono-number">
                          <span>
                            {exp.duration}
                          </span>
                          <span className="text-white/10">|</span>
                          <span>
                            {exp.route.split("→")[0].trim()} to {exp.route.split("→").pop().trim()}
                          </span>
                          <span className="text-white/10">|</span>
                          <span className="text-stone">
                            {exp.difficulty}
                          </span>
                        </div>
                      </div>
                    </ParallaxText>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

