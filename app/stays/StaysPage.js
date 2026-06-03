"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";
import { stays } from "@/data/stays";

const typeOptions = [
  { id: "ALL", name: "All Shelters" },
  { id: "HOMESTAY", name: "Homestays" },
  { id: "CABIN", name: "Cabins" },
  { id: "GUESTHOUSE", name: "Guesthouses" }
];

const connectivityOptions = [
  { id: "ALL", name: "All Speeds" },
  { id: "WORKATION", name: "Workation Friendly" },
  { id: "OFFGRID", name: "Offgrid Quiet" }
];

const priceOptions = [
  { id: "ALL", name: "All Budgets" },
  { id: "BUDGET", name: "Budget (<₹2.5k)" },
  { id: "MID_RANGE", name: "Mid-Range" },
  { id: "PREMIUM_COZY", name: "Premium Cozy" }
];

export default function StaysPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedConnectivity, setSelectedConnectivity] = useState("ALL");
  const [selectedPrice, setSelectedPrice] = useState("ALL");

  // Read query parameters on mount to support incoming links (e.g. from navbar)
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
    }
  }, []);

  const filteredStays = stays.filter((stay) => {
    const matchesSearch = 
      stay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.vibe_tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === "ALL" || stay.type === selectedType;

    const isWorkation = stay.connectivity.broadband || stay.connectivity.wifi;
    const matchesConnectivity = 
      selectedConnectivity === "ALL" ||
      (selectedConnectivity === "WORKATION" && isWorkation) ||
      (selectedConnectivity === "OFFGRID" && !isWorkation);

    const matchesPrice = 
      selectedPrice === "ALL" ||
      (selectedPrice === "BUDGET" && stay.base_price_per_night < 2500) ||
      (selectedPrice === "MID_RANGE" && stay.base_price_per_night >= 2500 && stay.base_price_per_night <= 6000) ||
      (selectedPrice === "PREMIUM_COZY" && stay.base_price_per_night > 6000);

    return matchesSearch && matchesType && matchesConnectivity && matchesPrice;
  });

  return (
    <>
      <section className="relative pt-36 pb-12 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            label="Shelters"
            title="Alpine Dwellings"
            description="Handpicked mud homestays, remote A-frame cabins, and quiet forest lodges chosen for community connection and mountain views."
          />
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="pb-12 px-6 bg-background border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Search bar */}
          <div className="lg:col-span-3 space-y-1.5">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Search Stays</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by host, vibe, or description..."
              className="w-full bg-mountain-900 border border-white/[0.08] focus:border-accent-warm focus:outline-none transition-all duration-300 rounded-[2px] px-4 py-2 text-snow text-xs placeholder:text-stone-dark"
            />
          </div>

          {/* Stay Type Filter */}
          <div className="lg:col-span-3 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Stay Type</span>
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

          {/* Connectivity Filter */}
          <div className="lg:col-span-3 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Connectivity</span>
            <div className="flex flex-wrap gap-1">
              {connectivityOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedConnectivity(opt.id)}
                  className={`text-[9px] font-mono px-2.5 py-1 rounded-[2px] border cursor-pointer transition-all ${
                    selectedConnectivity === opt.id
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.01] border-white/[0.03] text-stone hover:text-snow"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="lg:col-span-3 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Nightly Rate</span>
            <div className="flex flex-wrap gap-1">
              {priceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedPrice(opt.id)}
                  className={`text-[9px] font-mono px-2.5 py-1 rounded-[2px] border cursor-pointer transition-all ${
                    selectedPrice === opt.id
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

      {/* Stays Listing */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {filteredStays.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStays.map((stay, index) => {
                const isWorkation = stay.connectivity.broadband || stay.connectivity.wifi;
                return (
                  <StaggerItem 
                    key={stay.id}
                    className="mb-8"
                  >
                    <div className="flex flex-col group h-full justify-between">
                      <div>
                        {/* Image Area - Borderless frame */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-mountain-900 rounded-[4px] border border-white/[0.03]">
                          <Image
                            src={stay.img}
                            alt={stay.name}
                            fill
                            className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                          />
                          <div className="absolute top-3 right-3 bg-mountain-900/90 border border-white/[0.04] px-2.5 py-1 rounded-[2px] text-[8px] text-snow/90 font-mono tracking-widest uppercase shadow-md">
                            {stay.type}
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="pt-5 flex flex-col">
                          {/* Vibe and Host */}
                          <div className="flex items-center justify-between mb-2 text-[0.625rem] text-parchment-dim font-light tracking-wide">
                            <span className="font-mono text-forest-glow uppercase tracking-[0.1em]">
                              {stay.vibe_tags[0].replace("-", " ")}
                            </span>
                            <span className="font-light">Host: {stay.host.name}</span>
                          </div>

                          {/* Title */}
                          <h3
                            className="text-base font-medium text-snow mb-2 hover:text-forest-glow transition-colors"
                            style={{ fontFamily: "var(--font-outfit)" }}
                          >
                            <Link href={`/stays/${stay.slug}`}>
                              {stay.name}
                            </Link>
                          </h3>

                          {/* Summary */}
                          <p className="text-xs text-stone mb-4 font-light leading-relaxed h-12 overflow-hidden line-clamp-2">
                            {stay.summary}
                          </p>

                          {/* Technical attributes */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            <span className="px-2 py-0.5 text-[9px] bg-white/[0.02] text-stone-light/50 rounded-[2px] border border-white/[0.02] font-mono uppercase">
                              {stay.heating_type.replace("_", " ")}
                            </span>
                            <span className="px-2 py-0.5 text-[9px] bg-white/[0.02] text-stone-light/50 rounded-[2px] border border-white/[0.02] font-mono uppercase">
                              {isWorkation ? "Wifi / 4G" : "Offgrid"}
                            </span>
                            <span className="px-2 py-0.5 text-[9px] bg-white/[0.02] text-stone-light/50 rounded-[2px] border border-white/[0.02] font-mono uppercase">
                              Max {stay.guest_capacity} guests
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Footer Row */}
                      <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between mt-auto">
                        <div>
                          <span className="text-base font-medium text-snow mono-number">
                            ₹{stay.base_price_per_night.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] text-stone ml-1 font-light">/night</span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={`/stays/${stay.slug}`}
                            className="btn-outline text-[9px] tracking-wider py-1.5 px-3 uppercase"
                          >
                            Details
                          </Link>
                          <a
                            href={`https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20inquire%20about%20staying%20at%20${encodeURIComponent(stay.name)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline text-[9px] tracking-wider py-1.5 px-3 bg-forest-glow/10 hover:bg-forest-glow/20 uppercase"
                          >
                            Inquire
                          </a>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <div className="text-center py-20 border border-white/[0.02] bg-mountain-900/10 p-10 rounded-[2px] space-y-4 max-w-xl mx-auto">
              <span className="text-[10px] font-mono text-accent-warm tracking-widest uppercase block">No shelters found</span>
              <h3 className="text-base font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                No stays match your criteria.
              </h3>
              <p className="text-xs text-parchment-dim leading-relaxed font-light">
                Let our Himalayan team suggest a private cabin or homestay based on your preferred connectivity level and altitude comfort.
              </p>
              <Link 
                href="/custom-trip"
                className="btn-outline inline-block py-2.5 px-6 text-[9px] tracking-widest uppercase mt-4"
              >
                Plan Custom Route
              </Link>
            </div>
          )}
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
