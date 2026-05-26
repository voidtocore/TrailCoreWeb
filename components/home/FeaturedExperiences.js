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
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="section-editorial px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Featured Expeditions"
          title="Journeys Worth Taking"
          description="Each expedition is designed for depth over speed — curated routes, acclimatized pacing, and authentic Himalayan immersion."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {expeditions.map((exp) => (
            <StaggerItem key={exp.title}>
              <Link
                href={exp.href}
                className="group block h-full"
              >
                <div className="editorial-card flex flex-col h-full">
                  {/* Image container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    {/* Category Label */}
                    <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-forest-glow/70 mb-2">
                      {exp.badge}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-base md:text-lg font-semibold text-snow/95 mb-2 leading-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[0.8125rem] text-parchment/60 leading-relaxed mb-5 font-light">
                      {exp.desc}
                    </p>

                    {/* Metadata Row */}
                    <div className="mt-auto pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.6875rem] text-parchment-dim/80 tracking-wide">
                      <span className="flex items-center gap-1.5 mono-number">
                        <svg className="w-3.5 h-3.5 text-stone/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 mono-number">
                        <svg className="w-3.5 h-3.5 text-stone/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                        </svg>
                        {exp.season}
                      </span>
                      <span className="flex items-center gap-1.5 mono-number">
                        <svg className="w-3.5 h-3.5 text-stone/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {exp.difficulty}
                      </span>
                    </div>

                    {/* Action link */}
                    <div className="mt-4 flex items-center gap-1.5 text-[0.6875rem] text-forest-glow/70 font-medium group-hover:text-forest-glow transition-colors duration-300">
                      <span>View expedition</span>
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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
