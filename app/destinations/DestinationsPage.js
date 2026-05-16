"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const destinations = [
  { id: "shimla", name: "Shimla", img: "/images/shimla.png", alt: "2,276m", desc: "The Queen of Hills — colonial architecture, pine-clad slopes, and panoramic Himalayan views. Perfect starting point for every Himachal journey.", highlights: ["Mall Road", "Jakhu Temple", "Kufri", "Christ Church"] },
  { id: "manali", name: "Manali", img: "/images/manali.png", alt: "2,050m", desc: "Adventure capital of Himachal — river rafting, paragliding, ancient temples, and the gateway to Rohtang and Spiti.", highlights: ["Solang Valley", "Old Manali", "Rohtang Pass", "Hadimba Temple"] },
  { id: "spiti", name: "Spiti Valley", img: "/images/spiti-valley.png", alt: "3,650m", desc: "The cold desert — ancient monasteries, fossil-rich moonscapes, and one of the most remote habitable regions on Earth.", highlights: ["Key Monastery", "Chandratal Lake", "Pin Valley", "Kibber Village"] },
  { id: "kalpa", name: "Kalpa", img: "/images/kalpa.png", alt: "2,960m", desc: "Kinnaur's crown jewel — apple orchards with Kinner Kailash as the backdrop. A photographer's paradise.", highlights: ["Kinner Kailash Views", "Apple Orchards", "Suicide Point", "Reckong Peo"] },
  { id: "kaza", name: "Kaza", img: "/images/kaza.png", alt: "3,650m", desc: "Heart of Spiti Valley — the highest market town and base for exploring the region's ancient Buddhist heritage.", highlights: ["Key Gompa", "Hikkim Post Office", "Comic Village", "Langza"] },
  { id: "narkanda", name: "Narkanda", img: "/images/road-trip.png", alt: "2,708m", desc: "Hidden gem on the Hindustan-Tibet Highway — skiing in winter, apple blossoms in spring, and Hatu Peak year-round.", highlights: ["Hatu Peak", "Skiing Slopes", "Apple Orchards", "Tannu Jubbar Lake"] },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Destinations" title="Discover Himachal Pradesh" description="From snow-capped peaks to ancient monasteries, explore the most stunning corners of the Himalayas." />
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {destinations.map((dest, i) => (
            <FadeIn key={dest.id} delay={0.1}>
              <div id={dest.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={dest.img} alt={dest.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full text-xs text-snow font-medium">
                    {dest.alt}
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-snow" style={{ fontFamily: "var(--font-playfair)" }}>{dest.name}</h2>
                  <p className="text-slate-400 mt-4 leading-relaxed">{dest.desc}</p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {dest.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-forest-glow" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest hover:bg-forest-light text-white text-sm font-medium rounded-full transition-all">
                    Enquire About {dest.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
