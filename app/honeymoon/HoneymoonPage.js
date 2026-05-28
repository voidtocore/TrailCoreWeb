"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const retreats = [
  { 
    title: "Manali Mountain Retreat", 
    duration: "5 Days / 4 Nights", 
    price: "From ₹15,999", 
    img: "/images/manali.png", 
    highlights: ["Private cottage stay", "Solang Valley expedition", "Old Manali café mornings", "Bonfire night", "Riverside breakfast"],
    alignOffset: "" 
  },
  { 
    title: "Shimla–Manali Journey", 
    duration: "7 Days / 6 Nights", 
    price: "From ₹22,999", 
    img: "/images/shimla.png", 
    highlights: ["Heritage hotel in Shimla", "Kufri snow experience", "Scenic mountain roads", "Rohtang excursion", "Candlelight dinner"],
    alignOffset: "md:mt-16" 
  },
  { 
    title: "Spiti Intimate Explorer", 
    duration: "9 Days / 8 Nights", 
    price: "From ₹27,999", 
    img: "/images/spiti-valley.png", 
    highlights: ["Stargazing in Kaza", "Monastery visits", "Mountain cottage stays", "Chandratal camping", "Private vehicle"],
    alignOffset: "md:mt-8" 
  },
];

const experiences = [
  { name: "Mountain Cottages", desc: "Handpicked stays with fireplace and mountain views — warmth at altitude." },
  { name: "Snow Experiences", desc: "Winter walks, frozen lakes, and snowfall camps during the cold months." },
  { name: "Scenic Cafés", desc: "The most atmospheric mountain cafés — overlooking valleys and rivers." },
  { name: "Private Retreats", desc: "Secluded stays away from crowds — just silence and the mountains." },
];

export default function HoneymoonPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-warm/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            label="Mountain Retreats" 
            title="Intimate Himalayan Journeys" 
            description="Curated experiences for couples seeking meaningful time together against the backdrop of the Himalayas." 
          />
        </div>
      </section>

      {/* Retreats */}
      <section className="pb-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 md:gap-y-0">
            {retreats.map((r) => (
              <StaggerItem 
                key={r.title} 
                className={`${r.alignOffset} mb-16 md:mb-0`}
              >
                <div className="group block">
                  <div className="flex flex-col">
                    {/* Image container - Portrait editorial ratio */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-mountain-900 rounded-[4px] border border-white/[0.03]">
                      <Image
                        src={r.img}
                        alt={r.title}
                        fill
                        className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Content Area - Stacked cleanly below image */}
                    <div className="pt-6 flex flex-col items-start">
                      {/* Duration */}
                      <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-forest-glow mb-2.5 mono-number">
                        {r.duration}
                      </span>

                      {/* Title */}
                      <h3
                        className="text-base sm:text-lg font-medium text-snow mb-4 tracking-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {r.title}
                      </h3>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {r.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2.5 text-xs text-parchment-dim font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-forest-glow/40" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Price & Action */}
                      <div className="w-full pt-4 border-t border-white/[0.04] flex items-center justify-between">
                        <div>
                          <span className="text-sm font-semibold text-snow/90 mono-number">{r.price}</span>
                          <span className="text-[10px] text-stone-dark ml-1.5">/couple</span>
                        </div>
                        <Link href="/contact" className="btn-outline text-[10px] py-1.5 px-4">
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 px-6 border-t border-white/[0.03] bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-forest-glow mb-3 block">
              Curated Stays
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-snow tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Moments Worth Sharing
            </h2>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {experiences.map((e, idx) => (
              <StaggerItem key={e.name}>
                <div className="border-t border-white/[0.05] pt-6">
                  <span className="text-[10px] font-mono text-forest-glow/60 mono-number block mb-4">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-medium text-snow mb-2 tracking-tight">
                    {e.name}
                  </h3>
                  <p className="text-xs text-parchment-dim font-light leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
