"use client";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const stats = [
  { value: "500+", label: "Expedition travelers" },
  { value: "50+", label: "Curated routes" },
  { value: "4.9", label: "Avg. rating (out of 5)" },
  { value: "3+", label: "Years in the mountains" },
];

const values = [
  { title: "Authenticity", desc: "We share only places we've personally explored and experiences we genuinely believe in." },
  { title: "Intentional Design", desc: "Every itinerary is handcrafted with deliberate pacing, acclimatization, and local immersion." },
  { title: "Sustainability", desc: "We partner with local communities and promote responsible, low-impact mountain exploration." },
  { title: "Trust", desc: "Transparent communication, honest recommendations, and on-expedition support at every stage." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d110e]/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            label="About Trail Core" 
            title="Born in the Mountains" 
            description="A team of Himalayan specialists who believe every traveler deserves a journey as meaningful as the mountains themselves." 
          />
        </div>
      </section>

      {/* Story */}
      <section className="pb-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-[4px] border border-white/[0.03] bg-mountain-900 overflow-hidden aspect-[4/3] w-full">
              <Image 
                src="/images/camping.png" 
                alt="Trail Core expedition camp" 
                fill 
                className="object-cover cinematic-image" 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-medium text-snow mb-6 tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Our Story
            </h2>
            <p className="text-sm text-parchment leading-relaxed font-light mb-4">
              Trail Core was born from a simple conviction — that the Himalayas deserve better than rushed itineraries and overcrowded buses. As people who grew up in these mountains, we knew there was a deeper way to experience them.
            </p>
            <p className="text-sm text-parchment leading-relaxed font-light mb-4">
              We started by taking friends on off-beat expeditions through hidden valleys and forgotten villages. Word spread, and soon we were crafting curated journeys for travelers seeking authenticity over convenience.
            </p>
            <p className="text-sm text-parchment leading-relaxed font-light">
              Today, Trail Core combines deep local knowledge with intentional travel design — creating expeditions that are slow, safe, and genuinely unforgettable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-t border-b border-white/[0.03] bg-mountain-900">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-light text-forest-glow tracking-tight mono-number">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-parchment-dim mt-3 uppercase tracking-[0.2em] font-medium">
                    {s.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-forest-glow mb-3 block">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-snow tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              What Guides Every Expedition
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {values.map((v, idx) => (
              <StaggerItem key={v.title}>
                <div className="border-t border-white/[0.05] pt-6">
                  <span className="text-[10px] font-mono text-forest-glow/60 mono-number block mb-4">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-medium text-snow mb-2 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-xs text-parchment-dim font-light leading-relaxed">
                    {v.desc}
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
