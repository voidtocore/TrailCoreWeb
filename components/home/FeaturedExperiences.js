"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem, ParallaxImage, ParallaxText, DriftTypography } from "../Animations";

const expeditions = [
  {
    title: "Spiti Circuit Expedition",
    desc: "Cold deserts, ancient monasteries, and high-altitude silence.",
    img: "/images/spiti-valley.png",
    href: "/packages",
    duration: "10 Days",
    route: "Shimla → Kinnaur → Spiti → Manali",
    season: "Jun — Oct",
    difficulty: "Moderate",
    badge: "Signature",
    alignOffset: "", // Default alignment
    parallaxSpeed: 0.25,
  },
  {
    title: "Kinnaur Odyssey",
    desc: "Apple valleys, wooden villages, and slow Himalayan roads.",
    img: "/images/kalpa.png",
    href: "/packages",
    duration: "7 Days",
    route: "Shimla → Sarahan → Sangla → Kalpa → Chitkul",
    season: "Mar — Nov",
    difficulty: "Easy",
    badge: "Scenic",
    alignOffset: "md:mt-32", // Pushed further down for asymmetry
    parallaxSpeed: 0.35,
  },
  {
    title: "Himalayan Escape",
    desc: "High-altitude trails, alpine camps, and silent walking routes.",
    img: "/images/adventure-trek.png",
    href: "/adventures",
    duration: "5 Days",
    route: "Manali → Hampta Pass → Chandratal",
    season: "Jun — Sep",
    difficulty: "Challenging",
    badge: "Adventure",
    alignOffset: "",
    parallaxSpeed: 0.2,
  },
  {
    title: "Winter Spiti Expedition",
    desc: "Frozen rivers, snowbound monasteries, and absolute winter stillness.",
    img: "/images/kaza.png",
    href: "/packages",
    duration: "8 Days",
    route: "Manali → Kaza → Key → Kibber",
    season: "Dec — Mar",
    difficulty: "Moderate",
    badge: "Limited",
    alignOffset: "md:mt-32", // Pushed further down
    parallaxSpeed: 0.3,
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="relative section-editorial px-6 bg-[#0c0d0c] overflow-hidden">
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
          {expeditions.map((exp, idx) => (
            <StaggerItem 
              key={exp.title} 
              className={`${exp.alignOffset} mb-16 md:mb-32`}
            >
              <Link
                href={exp.href}
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
                      <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-accent-warm mb-3">
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
                        {exp.desc}
                      </p>

                      {/* Metadata Row */}
                      <div className="flex items-center gap-x-4 text-[0.6875rem] text-parchment-dim font-light tracking-wide mono-number">
                        <span>
                          {exp.duration}
                        </span>
                        <span className="text-white/10">|</span>
                        <span>
                          {exp.route.split("→")[0]} to {exp.route.split("→").pop()}
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
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
