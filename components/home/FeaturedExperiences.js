"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const expeditions = [
  {
    title: "Spiti Circuit Expedition",
    desc: "A 10-day journey through the cold desert — ancient monasteries, moonscape valleys, and the silence of high altitude.",
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
    desc: "A curated road journey through apple orchards, ancient temples, and Kinner Kailash — Kinnaur at its most authentic.",
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
    desc: "High-altitude trails, riverside camps, and summit views — for those who seek the mountains on foot.",
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
    desc: "Experience the frozen beauty of Spiti in winter — snow-covered monasteries, frozen rivers, and absolute stillness.",
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
    <section className="section-cinematic px-4">
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
                className="expedition-card group block relative rounded-xl overflow-hidden aspect-[16/10] md:aspect-[16/9]"
              >
                <Image
                  src={exp.img}
                  alt={exp.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 transition-all duration-500" />

                {/* Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] bg-white/[0.08] backdrop-blur-md text-parchment/80 rounded-full border border-white/[0.06]">
                    {exp.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-snow/95 mb-2"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-sm text-parchment/55 leading-relaxed mb-4 max-w-md font-light">
                    {exp.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-parchment/50 tracking-wide">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                      </svg>
                      {exp.season}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {exp.difficulty}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-forest-glow/70 font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    View expedition
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
