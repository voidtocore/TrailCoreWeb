"use client";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Curated Routes" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "3+", label: "Years Experience" },
];

const values = [
  { title: "Authenticity", desc: "We share only places we've personally explored and experiences we genuinely love." },
  { title: "Personalization", desc: "No two trips are the same. Every itinerary is handcrafted to match your style." },
  { title: "Sustainability", desc: "We partner with local communities and promote responsible mountain tourism." },
  { title: "Trust", desc: "Transparent pricing, honest recommendations, and 24/7 on-trip support." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="About Us" title="Born in the Mountains, Built for Travelers" description="We're a team of Himachal locals and mountain enthusiasts who believe every traveler deserves a journey as unique as the mountains themselves." />
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/images/camping.png" alt="CoreTrail team" fill className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-snow" style={{ fontFamily: "var(--font-playfair)" }}>Our Story</h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              CoreTrail was born from a simple frustration — generic travel packages that miss the soul of Himachal Pradesh. As locals who grew up in these mountains, we knew there was a better way to experience them.
            </p>
            <p className="text-slate-400 mt-3 leading-relaxed">
              We started by taking friends on off-beat road trips through hidden valleys and secret viewpoints. Word spread, and soon we were crafting custom itineraries for travelers from across India and beyond.
            </p>
            <p className="text-slate-400 mt-3 leading-relaxed">
              Today, we combine deep local knowledge with modern travel design to create experiences that are authentic, comfortable, and unforgettable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-mountain-900/50">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-forest-glow">{s.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Our Values" title="What Guides Us" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass rounded-2xl p-6 h-full hover:border-forest/30 transition-all">
                  <h3 className="text-lg font-bold text-snow mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
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
