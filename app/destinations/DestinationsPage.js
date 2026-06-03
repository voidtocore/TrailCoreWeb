"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Destinations" title="Where We Journey" description="The landscapes, villages, and mountain passes that define our expeditions across the Indian Himalayas." />
        </div>
      </section>

      {/* Destinations */}
      <section className="pb-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-32">
          {destinations.map((dest, i) => (
            <FadeIn key={dest.id} delay={0.1}>
              <div id={dest.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Image Block */}
                <div className={`relative rounded-[4px] overflow-hidden aspect-[4/3] lg:col-span-6 border border-white/[0.03] group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image 
                    src={dest.img} 
                    alt={dest.name} 
                    fill 
                    className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                  />
                  <div className="absolute top-4 right-4 bg-mountain-900/90 border border-white/[0.04] px-3.5 py-1.5 rounded-[2px] text-[10px] text-snow/90 font-medium tracking-widest uppercase mono-number shadow-lg shadow-black/20">
                    {dest.altitude_text}
                  </div>
                </div>

                {/* Text Block */}
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 
                    className="text-2xl md:text-3.5xl font-medium text-snow" 
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {dest.name}
                  </h2>
                  <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed mt-5 font-light">
                    {dest.desc}
                  </p>
                  
                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-8">
                    {dest.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-xs text-parchment-dim font-light">
                        <div className="w-1 h-1 rounded-full bg-forest-glow" />
                        {h}
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/contact" 
                    className="btn-outline gap-2 mt-10 text-[10px] tracking-widest uppercase"
                  >
                    Inquire about {dest.name}
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
