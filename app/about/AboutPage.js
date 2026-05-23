"use client";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const stats = [
  { value: "500+", label: "Expedition travelers" },
  { value: "50+", label: "Curated routes" },
  { value: "4.9★", label: "Avg. rating" },
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
      <section className="relative pt-36 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="About Trail Core" title="Born in the Mountains" description="A team of Himalayan specialists who believe every traveler deserves a journey as meaningful as the mountains themselves." />
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image src="/images/camping.png" alt="Trail Core expedition camp" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-semibold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>Our Story</h2>
            <p className="text-stone/45 mt-5 leading-relaxed font-light">
              Trail Core was born from a simple conviction — that the Himalayas deserve better than rushed itineraries and overcrowded buses. As people who grew up in these mountains, we knew there was a deeper way to experience them.
            </p>
            <p className="text-stone/45 mt-4 leading-relaxed font-light">
              We started by taking friends on off-beat expeditions through hidden valleys and forgotten villages. Word spread, and soon we were crafting curated journeys for travelers seeking authenticity over convenience.
            </p>
            <p className="text-stone/45 mt-4 leading-relaxed font-light">
              Today, Trail Core combines deep local knowledge with intentional travel design — creating expeditions that are slow, safe, and genuinely unforgettable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-mountain-900/30">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-semibold text-forest-glow/50" style={{ fontFamily: "var(--font-outfit)" }}>{s.value}</p>
                  <p className="text-[11px] text-stone/35 mt-2 uppercase tracking-[0.12em]">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Our Values" title="What Guides Every Expedition" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass rounded-xl p-7 h-full hover:border-white/[0.08] transition-all duration-500">
                  <h3 className="text-base font-semibold text-snow/90 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>{v.title}</h3>
                  <p className="text-sm text-stone/40 leading-relaxed font-light">{v.desc}</p>
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
