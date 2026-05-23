"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const destinations = [
  { id: "spiti", name: "Spiti Valley", img: "/images/spiti-valley.png", alt: "3,650m", desc: "The cold desert — ancient monasteries, fossil-rich moonscapes, and one of the most remote inhabited regions on Earth. Silence so deep it becomes a sound.", highlights: ["Key Monastery", "Chandratal Lake", "Pin Valley", "Kibber Village"] },
  { id: "kalpa", name: "Kalpa", img: "/images/kalpa.png", alt: "2,960m", desc: "Kinnaur's crown — apple orchards with Kinner Kailash as the backdrop. A place where time slows to the rhythm of mountain winds.", highlights: ["Kinner Kailash Views", "Apple Orchards", "Reckong Peo", "Ancient Temples"] },
  { id: "kaza", name: "Kaza", img: "/images/kaza.png", alt: "3,650m", desc: "Heart of Spiti Valley — the highest market town and base for exploring the region's ancient Buddhist heritage and moonscape terrain.", highlights: ["Key Gompa", "Hikkim Post Office", "Comic Village", "Langza"] },
  { id: "manali", name: "Manali", img: "/images/manali.png", alt: "2,050m", desc: "Gateway to the high passes — river valleys, ancient temples, and the starting point for some of the Himalaya's greatest road journeys.", highlights: ["Old Manali", "Solang Valley", "Rohtang Pass", "Hadimba Temple"] },
  { id: "shimla", name: "Shimla", img: "/images/shimla.png", alt: "2,276m", desc: "Colonial architecture meets mountain serenity — pine-clad slopes, heritage railways, and panoramic views that set the tone for every Himalayan journey.", highlights: ["Heritage Walk", "Jakhu Temple", "Kufri", "Toy Train"] },
  { id: "narkanda", name: "Narkanda", img: "/images/road-trip.png", alt: "2,708m", desc: "A hidden gem on the Hindustan-Tibet Highway — skiing slopes in winter, apple blossoms in spring, and Hatu Peak year-round.", highlights: ["Hatu Peak", "Apple Orchards", "Tannu Jubbar Lake", "Skiing"] },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Destinations" title="Where We Journey" description="The landscapes, villages, and mountain passes that define our expeditions across the Indian Himalayas." />
        </div>
      </section>

      {/* Destinations */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {destinations.map((dest, i) => (
            <FadeIn key={dest.id} delay={0.1}>
              <div id={dest.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={`relative rounded-xl overflow-hidden aspect-[4/3] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={dest.img} alt={dest.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full text-[11px] text-parchment/60 font-medium tracking-wide">
                    {dest.alt}
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-semibold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>{dest.name}</h2>
                  <p className="text-stone/45 mt-5 leading-relaxed font-light">{dest.desc}</p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {dest.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-stone/40 font-light">
                        <div className="w-1 h-1 rounded-full bg-forest-glow/40" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest/80 hover:bg-forest-light/80 text-white/90 text-sm font-medium tracking-wide rounded-full transition-all duration-500 border border-forest-light/20">
                    Inquire about {dest.name}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
