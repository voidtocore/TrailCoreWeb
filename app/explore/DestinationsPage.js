"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";
import { destinations } from "@/data/destinations";

const districtOptions = [
  { id: "ALL", name: "All Districts" },
  { id: "LAHAUL_SPITI", name: "Lahaul & Spiti" },
  { id: "KINNAUR", name: "Kinnaur" },
  { id: "KULLU", name: "Kullu" },
  { id: "SHIMLA", name: "Shimla" }
];

const typeOptions = [
  { id: "ALL", name: "All Types" },
  { id: "VALLEY", name: "Valleys" },
  { id: "VILLAGE", name: "Villages" },
  { id: "FOREST_HUB", name: "Forest Hubs" }
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const typeParam = params.get("type");
      if (typeParam) {
        const found = typeOptions.find(opt => opt.id.toLowerCase() === typeParam.toLowerCase());
        if (found) {
          setSelectedType(found.id);
        }
      }
      const districtParam = params.get("district");
      if (districtParam) {
        const found = districtOptions.find(opt => opt.id.toLowerCase() === districtParam.toLowerCase());
        if (found) {
          setSelectedDistrict(found.id);
        }
      }
    }
  }, []);

  // Filtering Logic
  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDistrict = selectedDistrict === "ALL" || dest.district === selectedDistrict;
    const matchesType = selectedType === "ALL" || dest.type === selectedType;

    return matchesSearch && matchesDistrict && matchesType;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-12 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Destinations" title="Where We Journey" description="The landscapes, villages, and mountain passes that define our expeditions across the Indian Himalayas." />
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="pb-12 px-6 bg-background border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Search bar */}
          <div className="lg:col-span-4 space-y-1.5">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Search Directory</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search valleys, villages, or activities..."
              className="w-full bg-mountain-900 border border-white/[0.08] focus:border-accent-warm focus:outline-none transition-all duration-300 rounded-[2px] px-4 py-2 text-snow text-xs placeholder:text-stone-dark"
            />
          </div>

          {/* District Buttons */}
          <div className="lg:col-span-4 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Filter District</span>
            <div className="flex flex-wrap gap-1">
              {districtOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDistrict(opt.id)}
                  className={`text-[9px] font-mono px-2.5 py-1 rounded-[2px] border cursor-pointer transition-all ${
                    selectedDistrict === opt.id
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.01] border-white/[0.03] text-stone hover:text-snow"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>

          {/* Geography Type Buttons */}
          <div className="lg:col-span-4 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Filter Type</span>
            <div className="flex flex-wrap gap-1">
              {typeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedType(opt.id)}
                  className={`text-[9px] font-mono px-2.5 py-1 rounded-[2px] border cursor-pointer transition-all ${
                    selectedType === opt.id
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.01] border-white/[0.03] text-stone hover:text-snow"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Destinations Listing */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {filteredDestinations.length > 0 ? (
            <div className="space-y-32">
              {filteredDestinations.map((dest, i) => (
                <FadeIn key={dest.id} delay={0.1}>
                  <div id={dest.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Image Block */}
                    <Link 
                      href={`/explore/${dest.slug}`}
                      className={`relative rounded-[4px] overflow-hidden aspect-[4/3] lg:col-span-6 border border-white/[0.03] group ${i % 2 === 1 ? "lg:order-2" : ""}`}
                    >
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
                    </Link>

                    {/* Text Block */}
                    <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[9px] font-mono text-forest-glow uppercase tracking-widest bg-forest-glow/10 px-2 py-0.5 rounded-[2px] border border-forest-glow/20">
                          {dest.type}
                        </span>
                        <span className="text-[9px] font-mono text-stone uppercase tracking-widest">
                          {dest.district.replace("_", " ")}
                        </span>
                      </div>
                      <Link href={`/explore/${dest.slug}`}>
                        <h2 
                          className="text-2xl md:text-3.5xl font-medium text-snow hover:text-forest-glow transition-colors" 
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {dest.name}
                        </h2>
                      </Link>
                      <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed mt-5 font-light">
                        {dest.desc}
                      </p>
                      
                      {/* Highlights Grid */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-8">
                        {dest.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2.5 text-xs text-parchment-dim font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-forest-glow" />
                            {h}
                          </div>
                        ))}
                      </div>

                      <Link 
                        href={`/explore/${dest.slug}`} 
                        className="btn-outline gap-2 mt-10 text-[10px] tracking-widest uppercase group"
                      >
                        Discover {dest.name}
                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-white/[0.02] bg-mountain-900/10 p-10 rounded-[2px] space-y-4 max-w-xl mx-auto">
              <span className="text-[10px] font-mono text-accent-warm tracking-widest uppercase block">No solitudes found</span>
              <h3 className="text-base font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                Nothing found in the high passes.
              </h3>
              <p className="text-xs text-parchment-dim leading-relaxed font-light">
                Let our Himalayan expedition designers build a custom route tailored to your specific pace and interests.
              </p>
              <Link 
                href="/custom-trip"
                className="btn-outline inline-block py-2.5 px-6 text-[9px] tracking-widest uppercase mt-4"
              >
                Design Custom Trip
              </Link>
            </div>
          )}
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
