"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const expeditions = [
  {
    title: "Chanshal Pass & Pabbar Valley Road Trip",
    slug: "chanshal-pass",
    duration: "4 Days / 3 Nights",
    price: "From ₹18,999",
    priceNote: "per person",
    img: "/images/road-trip.png",
    badge: "Offbeat",
    route: "Shimla → Rohru → Chanshal → Narkanda → Shimla",
    season: "Apr — Jun, Sep — Nov",
    difficulty: "Moderate",
    groupSize: "4–6",
    includes: ["Transport", "Riverside Stay", "Meals", "Chanshal Excursion"],
    alignOffset: "",
  },
  {
    title: "Spiti Circuit Expedition",
    slug: "",
    duration: "10 Days / 9 Nights",
    price: "From ₹18,999",
    priceNote: "per person",
    img: "/images/spiti-valley.png",
    badge: "Signature",
    route: "Shimla → Narkanda → Sarahan → Kalpa → Nako → Kaza → Manali",
    season: "Jun — Oct",
    difficulty: "Moderate",
    groupSize: "8–12",
    includes: ["Transport", "Stays", "Meals", "Local Guide"],
    alignOffset: "md:mt-20",
  },
  {
    title: "Kinnaur Odyssey",
    slug: "",
    duration: "7 Days / 6 Nights",
    price: "From ₹14,999",
    priceNote: "per person",
    img: "/images/kalpa.png",
    badge: "Scenic",
    route: "Shimla → Narkanda → Sarahan → Sangla → Kalpa → Chitkul",
    season: "Mar — Nov",
    difficulty: "Easy",
    groupSize: "8–12",
    includes: ["Transport", "Stays", "Meals", "Guide"],
    alignOffset: "",
  },
  {
    title: "Winter Spiti Expedition",
    slug: "",
    duration: "8 Days / 7 Nights",
    price: "From ₹22,999",
    priceNote: "per person",
    img: "/images/kaza.png",
    badge: "Limited",
    route: "Manali → Kaza → Key Monastery → Kibber → Chandratal",
    season: "Dec — Mar",
    difficulty: "Challenging",
    groupSize: "6–10",
    includes: ["Transport", "Heated Stays", "All Meals", "Oxygen Support"],
    alignOffset: "md:mt-20",
  },
  {
    title: "Himalayan Escape",
    slug: "",
    duration: "5 Days / 4 Nights",
    price: "From ₹11,999",
    priceNote: "per person",
    img: "/images/manali.png",
    badge: "Adventure",
    route: "Manali → Solang → Rohtang → Old Manali → Naggar",
    season: "May — Oct",
    difficulty: "Moderate",
    groupSize: "8–12",
    includes: ["Transport", "Stays", "Activities", "Breakfast"],
    alignOffset: "",
  },
  {
    title: "Grand Himalayan Traverse",
    slug: "",
    duration: "14 Days / 13 Nights",
    price: "From ₹29,999",
    priceNote: "per person",
    img: "/images/hero-mountains.png",
    badge: "Premium",
    route: "Shimla → Sarahan → Kalpa → Kaza → Manali → Dharamshala",
    season: "Jun — Oct",
    difficulty: "Moderate",
    groupSize: "8–12",
    includes: ["Transport", "Premium Stays", "All Meals", "Guide"],
    alignOffset: "md:mt-20",
  },
  {
    title: "Shimla Nature & Heritage Escape",
    slug: "shimla-nature-heritage",
    duration: "3 Days / 2 Nights",
    price: "From ₹9,999",
    priceNote: "per person",
    img: "/images/shimla.png",
    badge: "Escapes",
    route: "Shimla → Kufri → Naldehra → Tara Devi → Shimla",
    season: "Year-round",
    difficulty: "Easy",
    groupSize: "2–6",
    includes: ["Transport", "Cedar Heights Stay", "Meals", "Heritage Walk"],
    alignOffset: "",
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-6 bg-[#0c0d0c]">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            label="Expeditions"
            title="Curated Himalayan Journeys"
            description="Each expedition is designed with intentional pacing, acclimatized routes, and authentic mountain immersion."
          />
        </div>
      </section>

      <section className="pb-24 px-6 bg-[#0c0d0c]">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-0">
            {expeditions.map((exp) => (
              <StaggerItem 
                key={exp.title}
                className={`${exp.alignOffset} mb-16 md:mb-32`}
              >
                <div className="flex flex-col group">
                  {/* Image Area - Borderless frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#121413] rounded-[4px] border border-white/[0.03]">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>

                  {/* Content Area - Stacked underneath */}
                  <div className="pt-6 flex flex-col">
                    {/* Badge & Duration */}
                    <div className="flex items-center justify-between mb-3 text-[0.6875rem] text-parchment-dim font-light tracking-wide mono-number">
                      <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-accent-warm">
                        {exp.badge}
                      </span>
                      <span>{exp.duration}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base sm:text-lg font-medium text-snow mb-2.5 leading-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {exp.title}
                    </h3>

                    {/* Route */}
                    <p className="text-xs text-stone mb-4 font-light leading-relaxed">{exp.route}</p>

                    {/* Metadata (Season, Difficulty, Group) */}
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-stone mb-4 font-light mono-number">
                      <span>{exp.season}</span>
                      <span>·</span>
                      <span>{exp.difficulty}</span>
                      <span>·</span>
                      <span>{exp.groupSize} travelers</span>
                    </div>

                    {/* Includes Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {exp.includes.map((inc) => (
                        <span key={inc} className="px-2.5 py-0.5 text-[10px] bg-white/[0.02] text-stone-light/50 rounded-[2px] border border-white/[0.02] font-light">
                          {inc}
                        </span>
                      ))}
                    </div>

                    {/* Footer Row */}
                    <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                      <div>
                        <span className="text-base sm:text-lg font-medium text-snow mono-number">
                          {exp.price}
                        </span>
                        <span className="text-[10px] text-stone ml-1.5 font-light">/{exp.priceNote}</span>
                      </div>
                      <Link
                        href={exp.slug ? `/packages/${exp.slug}` : "/contact"}
                        className="btn-outline text-[10px] tracking-widest py-1.5 px-4"
                      >
                        {exp.slug ? "View Journey" : "Inquire"}
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-[10px] text-stone tracking-widest uppercase mt-12 font-light">
            All expeditions are customizable based on season and preferences.
          </p>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
