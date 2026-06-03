"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";
import { expeditions } from "@/data/expeditions";

const difficultyOptions = [
  { id: "ALL", name: "All Difficulties" },
  { id: "EASY", name: "Easy" },
  { id: "MODERATE", name: "Moderate" },
  { id: "CHALLENGING", name: "Challenging" }
];

const durationOptions = [
  { id: "ALL", name: "All Durations" },
  { id: "SHORT", name: "Short (<5 Days)" },
  { id: "STANDARD", name: "Standard (5-9 Days)" },
  { id: "EXTENDED", name: "Extended (10+ Days)" }
];

const seasonOptions = [
  { id: "ALL", name: "All Seasons" },
  { id: "SUMMER", name: "Summer" },
  { id: "WINTER", name: "Winter" },
  { id: "AUTUMN_SPRING", name: "Autumn/Spring" }
];

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [selectedDuration, setSelectedDuration] = useState("ALL");
  const [selectedSeason, setSelectedSeason] = useState("ALL");

  const getDurationDays = (durationStr) => {
    const match = durationStr.match(/^(\d+)\s*Days?/i);
    return match ? parseInt(match[1], 10) : 0;
  };

  const filteredExpeditions = expeditions.filter((exp) => {
    const matchesSearch = 
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.includes.some(inc => inc.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDifficulty = 
      selectedDifficulty === "ALL" || 
      exp.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

    const days = getDurationDays(exp.duration);
    const matchesDuration = 
      selectedDuration === "ALL" ||
      (selectedDuration === "SHORT" && days < 5) ||
      (selectedDuration === "STANDARD" && days >= 5 && days <= 9) ||
      (selectedDuration === "EXTENDED" && days >= 10);

    const seasonLower = exp.season.toLowerCase();
    const matchesSeason = 
      selectedSeason === "ALL" ||
      seasonLower.includes("year-round") ||
      (selectedSeason === "SUMMER" && (seasonLower.includes("jun") || seasonLower.includes("jul") || seasonLower.includes("aug") || seasonLower.includes("summer"))) ||
      (selectedSeason === "WINTER" && (seasonLower.includes("dec") || seasonLower.includes("jan") || seasonLower.includes("feb") || seasonLower.includes("winter"))) ||
      (selectedSeason === "AUTUMN_SPRING" && (seasonLower.includes("apr") || seasonLower.includes("may") || seasonLower.includes("sep") || seasonLower.includes("oct") || seasonLower.includes("nov") || seasonLower.includes("autumn") || seasonLower.includes("spring")));

    return matchesSearch && matchesDifficulty && matchesDuration && matchesSeason;
  });

  return (
    <>
      <section className="relative pt-36 pb-12 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            label="Expeditions"
            title="Curated Himalayan Journeys"
            description="Each expedition is designed with intentional pacing, acclimatized routes, and authentic mountain immersion."
          />
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="pb-12 px-6 bg-background border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Search bar */}
          <div className="lg:col-span-3 space-y-1.5">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Search Journeys</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, route, or inclusions..."
              className="w-full bg-mountain-900 border border-white/[0.08] focus:border-accent-warm focus:outline-none transition-all duration-300 rounded-[2px] px-4 py-2 text-snow text-xs placeholder:text-stone-dark"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="lg:col-span-3 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Difficulty</span>
            <div className="flex flex-wrap gap-1">
              {difficultyOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDifficulty(opt.id)}
                  className={`text-[9px] font-mono px-2.5 py-1 rounded-[2px] border cursor-pointer transition-all ${
                    selectedDifficulty === opt.id
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.01] border-white/[0.03] text-stone hover:text-snow"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div className="lg:col-span-3 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Duration</span>
            <div className="flex flex-wrap gap-1">
              {durationOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDuration(opt.id)}
                  className={`text-[9px] font-mono px-2.5 py-1 rounded-[2px] border cursor-pointer transition-all ${
                    selectedDuration === opt.id
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.01] border-white/[0.03] text-stone hover:text-snow"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>

          {/* Season Filter */}
          <div className="lg:col-span-3 space-y-2">
            <span className="block text-[8px] font-mono tracking-widest text-stone-light/40 uppercase">Season</span>
            <div className="flex flex-wrap gap-1">
              {seasonOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedSeason(opt.id)}
                  className={`text-[9px] font-mono px-2.5 py-1 rounded-[2px] border cursor-pointer transition-all ${
                    selectedSeason === opt.id
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

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {filteredExpeditions.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-0">
              {filteredExpeditions.map((exp) => (
                <StaggerItem 
                  key={exp.title}
                  className={`${exp.alignOffset} mb-16 md:mb-32`}
                >
                  <div className="flex flex-col group">
                    {/* Image Area - Borderless frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-mountain-900 rounded-[4px] border border-white/[0.03]">
                      <Image
                        src={exp.img}
                        alt={exp.title}
                        fill
                        className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                    </div>

                    {/* Content Area - Stacked underneath */}
                    <div className="pt-6 flex flex-col">
                      {/* Badge & Duration */}
                      <div className="flex items-center justify-between mb-3 text-[0.6875rem] text-parchment-dim font-light tracking-wide mono-number">
                        <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-forest-glow">
                          {exp.badge}
                        </span>
                        <span>{exp.duration}</span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-base sm:text-lg font-medium text-snow mb-2.5 leading-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {exp.title}
                      </h3>

                      {/* Route */}
                      <p className="text-xs text-stone mb-4 font-light leading-relaxed">{exp.route}</p>

                      {/* Metadata (Season, Difficulty, Group) */}
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-stone mb-4 font-light mono-number">
                        <span>{exp.season}</span>
                        <span>·</span>
                        <span>{exp.difficulty}</span>
                        <span>·</span>
                        <span>{exp.groupSize} travelers</span>
                      </div>

                      {/* Includes Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {exp.includes.map((inc) => (
                          <span key={inc} className="px-2.5 py-0.5 text-[10px] bg-white/[0.02] text-stone-light/50 rounded-[2px] border border-white/[0.02] font-light">
                            {inc}
                          </span>
                        ))}
                      </div>

                      {/* Footer Row */}
                      <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                        <div>
                          <span className="text-base sm:text-lg font-medium text-snow mono-number">
                            {exp.price}
                          </span>
                          <span className="text-[10px] text-stone ml-1.5 font-light">/{exp.priceNote}</span>
                        </div>
                        <Link
                          href={exp.slug ? `/packages/${exp.slug}` : "/contact"}
                          className="btn-outline text-[10px] tracking-widest py-1.5 px-4"
                        >
                          {exp.slug ? "View Journey" : "Inquire"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-20 border border-white/[0.02] bg-mountain-900/10 p-10 rounded-[2px] space-y-4 max-w-xl mx-auto">
              <span className="text-[10px] font-mono text-accent-warm tracking-widest uppercase block">No expeditions found</span>
              <h3 className="text-base font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                No expeditions match your criteria.
              </h3>
              <p className="text-xs text-parchment-dim leading-relaxed font-light">
                Let our Himalayan expedition designers construct a custom route tailored to your exact pacing, difficulty preferences, and season choice.
              </p>
              <Link 
                href="/custom-trip"
                className="btn-outline inline-block py-2.5 px-6 text-[9px] tracking-widest uppercase mt-4"
              >
                Design Custom Trip
              </Link>
            </div>
          )}
          <p className="text-center text-[10px] text-stone tracking-widest uppercase mt-12 font-light">
            All expeditions are customizable based on season and preferences.
          </p>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
