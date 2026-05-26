"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

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
    alignOffset: "md:mt-24", // Subtle offset
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
    alignOffset: "md:mt-24", // Subtle offset
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="section-editorial px-6 bg-[#0c0d0c]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Featured Expeditions"
          title="Journeys Worth Taking"
          description="Each route is curated for depth — slow paced, safe, and deeply immersive."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-0">
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
                  {/* Image container - Borderless, clean photographic frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121413] rounded-[4px] border border-white/[0.03]">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content Area - Stacked cleanly below image */}
                  <div className="pt-6 flex flex-col">
                    {/* Category Label */}
                    <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-accent-warm mb-2.5">
                      {exp.badge}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-base sm:text-lg font-medium text-snow mb-2.5 tracking-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed mb-4 max-w-md font-light">
                      {exp.desc}
                    </p>

                    {/* Metadata Row */}
                    <div className="flex items-center gap-x-4 text-[0.6875rem] text-parchment-dim font-light tracking-wide mono-number">
                      <span className="flex items-center gap-1">
                        {exp.duration}
                      </span>
                      <span className="text-white/10">|</span>
                      <span>
                        {exp.season}
                      </span>
                      <span className="text-white/10">|</span>
                      <span className="text-stone">
                        {exp.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
