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
    includes: ["Transport", "Riverside Stay", "Meals", "Chanshal Excursion", "Bonfire"],
  },
  {
    title: "Spiti Circuit Expedition",
    duration: "10 Days / 9 Nights",
    price: "From ₹18,999",
    priceNote: "per person",
    img: "/images/spiti-valley.png",
    badge: "Signature",
    route: "Shimla → Narkanda → Sarahan → Kalpa → Nako → Kaza → Manali",
    season: "Jun — Oct",
    difficulty: "Moderate",
    groupSize: "8–12",
    includes: ["Transport", "Stays", "Meals", "Local Guide", "Permits"],
  },
  {
    title: "Kinnaur Odyssey",
    duration: "7 Days / 6 Nights",
    price: "From ₹14,999",
    priceNote: "per person",
    img: "/images/kalpa.png",
    badge: "Scenic",
    route: "Shimla → Narkanda → Sarahan → Sangla → Kalpa → Chitkul",
    season: "Mar — Nov",
    difficulty: "Easy",
    groupSize: "8–12",
    includes: ["Transport", "Stays", "Meals", "Guide", "Permits"],
  },
  {
    title: "Himalayan Escape",
    duration: "5 Days / 4 Nights",
    price: "From ₹11,999",
    priceNote: "per person",
    img: "/images/manali.png",
    badge: "Adventure",
    route: "Manali → Solang → Rohtang → Old Manali → Naggar",
    season: "May — Oct",
    difficulty: "Moderate",
    groupSize: "8–12",
    includes: ["Transport", "Stays", "2 Activities", "Breakfast"],
  },
  {
    title: "Winter Spiti Expedition",
    duration: "8 Days / 7 Nights",
    price: "From ₹22,999",
    priceNote: "per person",
    img: "/images/kaza.png",
    badge: "Limited",
    route: "Manali → Kaza → Key Monastery → Kibber → Chandratal",
    season: "Dec — Mar",
    difficulty: "Challenging",
    groupSize: "6–10",
    includes: ["Transport", "Heated Stays", "All Meals", "Guide", "Oxygen"],
  },
  {
    title: "Grand Himalayan Traverse",
    duration: "14 Days / 13 Nights",
    price: "From ₹29,999",
    priceNote: "per person",
    img: "/images/hero-mountains.png",
    badge: "Premium",
    route: "Shimla → Sarahan → Kalpa → Kaza → Manali → Dharamshala",
    season: "Jun — Oct",
    difficulty: "Moderate",
    groupSize: "8–12",
    includes: ["Transport", "Premium Stays", "All Meals", "Guide", "Activities"],
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
    includes: ["Transport", "Cedar Heights Stay", "Meals", "Nature Circuits", "Heritage Walk"],
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            label="Expeditions"
            title="Curated Himalayan Journeys"
            description="Each expedition is designed with intentional pacing, acclimatized routes, and authentic mountain immersion. Every journey is customizable."
          />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expeditions.map((exp) => (
              <StaggerItem key={exp.title}>
                <div className="editorial-card h-full flex flex-col hover:border-white/20 transition-all duration-300 group">
                  {/* Image Area */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-102"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Badge & Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] bg-white/[0.04] text-forest-glow rounded border border-white/[0.04]">
                        {exp.badge}
                      </span>
                      <span className="text-[11px] text-parchment-dim font-light tracking-wide">{exp.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2 leading-tight">
                      {exp.title}
                    </h3>

                    {/* Route */}
                    <p className="text-[11px] text-parchment-dim mb-4 tracking-wide font-light">{exp.route}</p>

                    {/* Metadata (Season, Difficulty, Group) */}
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-stone-light/80 mb-4 font-light">
                      <span>{exp.season}</span>
                      <span>·</span>
                      <span>{exp.difficulty}</span>
                      <span>·</span>
                      <span>{exp.groupSize} travelers</span>
                    </div>

                    {/* Includes Badges */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {exp.includes.map((inc) => (
                        <span key={inc} className="px-2 py-0.5 text-[10px] bg-white/[0.02] text-stone-light/70 rounded border border-white/[0.02] font-light">
                          {inc}
                        </span>
                      ))}
                    </div>

                    {/* Footer Row */}
                    <div className="mt-auto pt-4 border-t border-white/[0.04] flex items-center justify-between">
                      <div>
                        <span className="text-lg font-semibold text-[#F5F5F5]">
                          {exp.price}
                        </span>
                        <span className="text-[11px] text-stone-light/60 ml-1.5">/{exp.priceNote}</span>
                      </div>
                      <Link
                        href={exp.slug ? `/packages/${exp.slug}` : "/contact"}
                        className="px-4 py-2 border border-white/15 hover:bg-white/[0.04] text-white hover:border-white/35 text-[10px] font-medium tracking-widest uppercase rounded-full transition-all duration-300 text-center"
                      >
                        {exp.slug ? "View Expedition" : "Inquire"}
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-[11px] text-stone-light/40 mt-10 tracking-wide">
            All expeditions are customizable. Pricing varies by season, group size, and preferences.
          </p>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
