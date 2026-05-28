"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const treks = [
  { 
    name: "Hampta Pass Trek", 
    duration: "5 Days", 
    difficulty: "Moderate", 
    altitude: "4,270m", 
    img: "/images/adventure-trek.png", 
    desc: "Cross from lush Kullu Valley to barren Lahaul through one of the Himalaya's most dramatic alpine passes.",
    alignOffset: ""
  },
  { 
    name: "Pin Parvati Pass", 
    duration: "11 Days", 
    difficulty: "Challenging", 
    altitude: "5,319m", 
    img: "/images/hero-mountains.png", 
    desc: "The ultimate Himalayan challenge — connecting Parvati Valley to Pin Valley through a high-altitude glacier crossing.",
    alignOffset: "md:mt-24"
  },
  { 
    name: "Chandrakhani Pass", 
    duration: "4 Days", 
    difficulty: "Easy–Moderate", 
    altitude: "3,660m", 
    img: "/images/camping.png", 
    desc: "Dense forests, alpine meadows, and sweeping views of the Pir Panjal range — perfect for a first Himalayan trek.",
    alignOffset: ""
  },
  { 
    name: "Bhrigu Lake Trek", 
    duration: "3 Days", 
    difficulty: "Moderate", 
    altitude: "4,300m", 
    img: "/images/manali.png", 
    desc: "Trek to one of the highest lakes in Himachal — where mythological significance meets breathtaking alpine scenery.",
    alignOffset: "md:mt-24"
  },
];

const activities = [
  { name: "River Exploration", desc: "Beas River rapids from Grade I to III" },
  { name: "Paragliding", desc: "Soar over Solang and Bir Billing valleys" },
  { name: "Mountain Biking", desc: "Trails from Manali along the Leh highway" },
  { name: "Alpine Camping", desc: "Under the stars at 10,000+ feet" },
];

export default function AdventuresPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d110e]/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            label="Adventures" 
            title="Into the Himalayas" 
            description="From first-time trails to expert-level expeditions — find the mountain challenge that matches your spirit." 
          />
        </div>
      </section>

      {/* Treks */}
      <section className="pb-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-0">
            {treks.map((trek) => (
              <StaggerItem 
                key={trek.name}
                className={`${trek.alignOffset} mb-16 md:mb-32`}
              >
                <div className="group block">
                  <div className="flex flex-col">
                    {/* Image container - Borderless, clean photographic frame */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-mountain-900 rounded-[4px] border border-white/[0.03]">
                      <Image
                        src={trek.img}
                        alt={trek.name}
                        fill
                        className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Content Area - Stacked cleanly below image */}
                    <div className="pt-6 flex flex-col items-start">
                      {/* Alt/Duration Label */}
                      <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-forest-glow mb-2.5 mono-number">
                        ALTITUDE: {trek.altitude}
                      </span>

                      {/* Title */}
                      <h3
                        className="text-base sm:text-lg font-medium text-snow mb-2.5 tracking-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {trek.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed mb-4 max-w-md font-light">
                        {trek.desc}
                      </p>

                      {/* Metadata Row */}
                      <div className="flex items-center gap-x-4 text-[0.6875rem] text-parchment-dim font-light tracking-wide mono-number mb-6">
                        <span>
                          {trek.duration}
                        </span>
                        <span className="text-white/10">|</span>
                        <span className="text-stone">
                          {trek.difficulty}
                        </span>
                      </div>

                      {/* Inquiry Action */}
                      <Link href="/contact" className="btn-outline text-[10px] py-2 px-6">
                        Inquire About This Trek
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-6 border-t border-white/[0.03] bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-forest-glow mb-3 block">
                Activities
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-snow mb-4 tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                More Ways to Explore
              </h2>
              <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed font-light max-w-sm">
                Beyond trekking — discover the full range of curated mountain experiences designed to immerse you deeply in the Himalayan terrain.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {activities.map((a, idx) => (
                <div key={a.name} className="border-t border-white/[0.05] pt-6 group">
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-mono text-forest-glow/60 mono-number pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-medium text-snow mb-2 tracking-tight">
                        {a.name}
                      </h3>
                      <p className="text-xs text-parchment-dim font-light leading-relaxed">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
