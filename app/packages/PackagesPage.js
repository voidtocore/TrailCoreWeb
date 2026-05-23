"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const expeditions = [
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
    title: "Shimla Heritage Retreat",
    duration: "3 Days / 2 Nights",
    price: "From ₹5,999",
    priceNote: "per person",
    img: "/images/shimla.png",
    badge: "Weekend",
    route: "Shimla → Kufri → Mashobra → Naldehra",
    season: "Year-round",
    difficulty: "Easy",
    groupSize: "8–14",
    includes: ["Transport", "Heritage Stay", "Breakfast", "Guided Walks"],
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expeditions.map((exp) => (
              <StaggerItem key={exp.title}>
                <div className="expedition-card h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-900 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] bg-white/[0.08] backdrop-blur-md text-parchment/80 rounded-full border border-white/[0.06]">
                      {exp.badge}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[11px] text-parchment/40 tracking-wide">{exp.duration}</p>
                      <h3 className="text-lg font-semibold text-snow/95 mt-1" style={{ fontFamily: "var(--font-outfit)" }}>
                        {exp.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[11px] text-stone/35 mb-3 tracking-wide">{exp.route}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-stone/40 mb-4">
                      <span>{exp.season}</span>
                      <span>{exp.difficulty}</span>
                      <span>{exp.groupSize} travelers</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {exp.includes.map((inc) => (
                        <span key={inc} className="px-2 py-0.5 text-[10px] bg-white/[0.03] text-stone/35 rounded border border-white/[0.04]">
                          {inc}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/[0.04] flex items-end justify-between">
                      <div>
                        <span className="text-xl font-semibold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>
                          {exp.price}
                        </span>
                        <span className="text-[11px] text-stone/30 ml-1.5">/{exp.priceNote}</span>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-forest/80 hover:bg-forest-light/80 text-white/90 text-[11px] font-medium tracking-wide rounded-full transition-all duration-500 border border-forest-light/20"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-[11px] text-stone/25 mt-10 tracking-wide">
            All expeditions are customizable. Pricing varies by season, group size, and preferences.
          </p>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
