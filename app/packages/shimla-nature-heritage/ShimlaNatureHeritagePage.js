"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function ShimlaNatureHeritagePage() {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedGuests, setSelectedGuests] = useState(6);
  const itineraryRef = useRef(null);

  // Pricing details based on guest count
  const pricingOptions = {
    2: { price: "14,999", perPerson: "person", label: "2 Guests" },
    4: { price: "11,999", perPerson: "person", label: "4 Guests" },
    6: { price: "9,999", perPerson: "person", label: "6 Guests", bestValue: true },
  };

  const itineraryDays = [
    {
      day: 1,
      title: "Shimla Arrival & Heritage Walk",
      shortDesc: "Walk past the summer capital's neo-gothic landmarks and colonial ridges.",
      details: [
        "Arrive in Shimla and check into the premium Hotel Cedar Heights.",
        "Unwind, then begin a guided heritage walk along the historic Ridge and Christ Church.",
        "Stroll through the Mall Road and Scandal Point, learning about Shimla's rich colonial histories.",
        "Conclude the evening hopping across local heritage cafés or enjoying a peaceful sunset from the ridge.",
      ],
      stay: "Hotel Cedar Heights, Shimla",
      meals: "Dinner Included",
    },
    {
      day: 2,
      title: "Nature & Forest Circuit",
      shortDesc: "Drives through deep deodar reserves, waterfalls, and alpine meadows.",
      details: [
        "Drive early through the scenic pine valleys towards Kufri and Naldehra.",
        "Explore the lush deodar canopies of the Shimla Water Catchment Wildlife Sanctuary.",
        "Hike down the forest tracks to Chadwick Falls, hidden inside dense woods.",
        "Return to the stay through a scenic pine forest drive, stopping at a spectacular sunset viewpoint.",
      ],
      stay: "Hotel Cedar Heights, Shimla",
      meals: "Breakfast & Dinner Included",
    },
    {
      day: 3,
      title: "Spiritual & Mountain Experience",
      shortDesc: "High temple viewpoints, panoramic forest walks, and departures.",
      details: [
        "Climb up the ridge to visit the Jakhoo Hill Temple, the highest point in Shimla.",
        "Drive to the serene hilltop Tara Devi Temple, offering views of the entire Shivalik hills.",
        "Gaze at the distant Shali Tibba snow peak from selected vantage stops.",
        "Enjoy local handicraft shopping and departure in the afternoon with rich mountain memories.",
      ],
      stay: "None (Departure)",
      meals: "Breakfast Included",
    },
  ];

  const highlights = [
    { title: "Heritage Walks", desc: "Walk past Christ Church, neo-gothic ridges, and scandal corners.", icon: "🏛️" },
    { title: "Pine Forest Drives", desc: "Breathe the alpine mountain air along winding deodar-sheltered tracks.", icon: "🌲" },
    { title: "Mountain Viewpoints", desc: "Witness panoramic snow-capped Himalayan ridges under clear blue skies.", icon: "🏔️" },
    { title: "Waterfall Experience", desc: "Hike to the roaring waters of Chadwick Falls, cradled by deep woods.", icon: "🌊" },
    { title: "Temple Visits", desc: "Explore hilltop sanctuaries at Jakhoo Hill and serene Tara Devi peaks.", icon: "🕉️" },
    { title: "Nature Trails", desc: "Walk the untouched paths of the local wildlife sanctuary.", icon: "🥾" },
    { title: "Café Exploration", desc: "Taste local blends and artisan food in colonial Shimla coffee houses.", icon: "☕" },
    { title: "Peaceful Himalayan Stay", desc: "Unwind at a cozy retreat away from crowded commercial avenues.", icon: "🏡" },
  ];

  const stays = [
    {
      name: "Hotel Cedar Heights",
      location: "Shimla",
      img: "/images/shimla.png",
      amenities: ["Mountain View Rooms", "Private Balconies", "Lounge / Bonfire Area", "Cozy Log Interiors", "Premium Service"],
      description: "Tucked inside quiet pine buffers, this hotel offers spacious wood-paneled rooms, private balconies, and local culinary options.",
    },
  ];

  const galleryImages = [
    { src: "/images/shimla.png", title: "The Ridge at Sunset" },
    { src: "/images/manali.png", title: "Pine Forests of Kufri" },
    { src: "/images/river.png", title: "Chadwick Falls Stream" },
    { src: "/images/road-trip.png", title: "Himalayan Road Vistas" },
    { src: "/images/camping.png", title: "Cozy Fireside Evenings" },
    { src: "/images/kalpa.png", title: "Shali Tibba Viewpoint" },
  ];

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-mountain-black text-foreground overflow-x-hidden min-h-screen">
      {/* 1. HERO SECTION (Typography-first, radial glows, no background image) */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-mountain-black pt-28 pb-16">
        <div className="alpine-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mountain-black/70 to-mountain-black" />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <FadeIn delay={0.2} direction="up">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-glow bg-forest/20 px-4 py-1.5 rounded-full border border-forest-light/10 mb-7">
              Curated Himalayan Escape
            </span>
          </FadeIn>

          <FadeIn delay={0.35} direction="up">
            <h1
              className="text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] font-semibold text-snow/90 mb-6 tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Shimla Nature &
              <br />
              <span className="text-gradient-green">Heritage Escape</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <p className="text-[0.9375rem] sm:text-base md:text-lg text-parchment/65 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Experience the peaceful side of Shimla through forest drives, scenic viewpoints, heritage walks, waterfalls, temples, cafés, and relaxing Himalayan stays.
            </p>
          </FadeIn>

          <FadeIn delay={0.65} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <Link
                href="/contact"
                className="btn-outline w-full sm:w-auto text-xs tracking-widest py-3 px-8"
              >
                Book Now
              </Link>
              <button
                onClick={scrollToItinerary}
                className="btn-outline w-full sm:w-auto text-xs tracking-widest py-3 px-8"
              >
                View Itinerary
              </button>
            </div>
          </FadeIn>

          {/* Floating Stats */}
          <FadeIn delay={0.8} direction="up" className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/[0.04]">
              {[
                { label: "Duration", val: "3 Days / 2 Nights" },
                { label: "Trails", val: "Nature Circuits" },
                { label: "Culture", val: "Heritage Walks" },
                { label: "Stay Style", val: "Mountain Retreat" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-stone-light/45 mb-1.5">{stat.label}</p>
                  <p className="text-sm font-semibold text-snow/90 mono-number">{stat.val}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. QUICK PACKAGE INFO STRIP */}
      <section className="relative z-30 px-4">
        <div className="max-w-6xl mx-auto editorial-surface p-6 md:py-8 md:px-10 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { title: "Duration", val: "3D / 2N", sub: "Slow-paced Pace", icon: "⏱️" },
              { title: "Pickup", val: "Shimla", sub: "Local Terminal", icon: "📍" },
              { title: "Best Time", val: "All Year", sub: "Himalayan Seasons", icon: "🌤️" },
              { title: "Group Size", val: "2-6 Guests", sub: "Private Expedition", icon: "👥" },
              { title: "Meals", val: "MAP Plan", sub: "Breakfast & Dinner", icon: "🍽️" },
              { title: "Accommodation", val: "Hotel Cedar Heights", sub: "Mountain-View Rooms", icon: "🏨" },
            ].map((info, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-lg mb-2">{info.icon}</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-stone-light/45 mb-1">{info.title}</span>
                <span className="text-[13px] font-semibold text-snow/90 leading-tight mono-number">{info.val}</span>
                <span className="text-[10px] text-stone-light/35 mt-0.5">{info.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE EXPERIENCE SECTION (Clean layout, no text-on-image) */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-glow/70">
                The Heritage Story
              </span>
              <h2
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-snow/90 leading-[0.95] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                The Peaceful Side of Shimla
              </h2>
              <p className="text-parchment/60 font-light leading-relaxed text-sm sm:text-base">
                A slow-paced Shimla experience designed for travelers who want more than crowded tourist stops. 
                Explore pine forests, scenic drives, heritage streets, waterfalls, peaceful temples, cafés, and panoramic Himalayan viewpoints while staying in a comfortable mountain-view property.
              </p>
              <p className="text-stone-light/35 text-xs sm:text-sm font-light leading-relaxed">
                Step into the quiet canopies of the cedar woods, trace the water catchments on foot, discover colonial architecture secrets, and watch mountain shadows stretch from the balcony of your hillside base camp.
              </p>
              <div className="pt-4">
                <button
                  onClick={scrollToItinerary}
                  className="btn-outline text-[11px] tracking-widest py-2 px-5"
                >
                  Explore Itinerary
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="editorial-card overflow-hidden">
                <div className="relative aspect-video lg:aspect-[4/3] w-full">
                  <Image
                    src="/images/manali.png"
                    alt="Scenic pine forest views of Kufri"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 border-t border-white/[0.04] bg-mountain-900/30">
                  <p className="text-[10px] uppercase tracking-widest text-stone-light/45 mb-1">Stay Experience</p>
                  <p className="text-sm font-semibold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>Hotel Cedar Heights, Shimla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHTS SECTION */}
      <section className="py-24 px-4 bg-mountain-900/10 border-t border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Expedition Features"
            title="What Makes This Journey Special"
            description="Handcrafted details woven together to build a true offbeat Himalayan travel experience."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((hl, i) => (
              <StaggerItem key={i}>
                <div className="editorial-surface p-6 h-full flex flex-col justify-between group">
                  <div>
                    <span className="text-2xl mb-4 block">{hl.icon}</span>
                    <h3
                      className="text-base font-semibold text-snow/90 mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {hl.title}
                    </h3>
                    <p className="text-[0.8125rem] text-parchment/45 leading-relaxed font-light">{hl.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. COMPLETE ITINERARY TIMELINE */}
      <section ref={itineraryRef} className="py-24 px-4 relative scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Day by Day Itinerary"
            title="The Heritage Map"
            description="A thoughtful, slow-paced route built to maximize landscape views, forest walks, and colonial architecture stories."
          />

          {/* Vertical Timeline container */}
          <div className="relative mt-16 pl-6 sm:pl-10 border-l border-white/[0.06] space-y-8">
            {itineraryDays.map((day, idx) => {
              const isOpen = activeDay === day.day;
              return (
                <div key={day.day} className="relative group">
                  {/* Timeline Node Marker */}
                  <button
                    onClick={() => setActiveDay(isOpen ? null : day.day)}
                    className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "bg-forest border border-forest-glow/40 text-forest-glow scale-110"
                        : "bg-mountain-900 border border-white/[0.08] text-stone-light/45 hover:border-forest-glow hover:text-snow"
                    }`}
                  >
                    <span className="text-xs font-semibold mono-number">{day.day}</span>
                  </button>

                  {/* Timeline content card */}
                  <div className={`editorial-surface overflow-hidden transition-all duration-500 ${
                    isOpen ? "border-forest-light/40" : "border-white/[0.04]"
                  }`}>
                    {/* Header */}
                    <div
                      onClick={() => setActiveDay(isOpen ? null : day.day)}
                      className="p-5 sm:p-6 flex justify-between items-center cursor-pointer select-none"
                    >
                      <div className="pr-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-forest-glow/80 mono-number">
                          Day 0{day.day}
                        </span>
                        <h3
                          className="text-base sm:text-lg font-semibold text-snow/90 mt-0.5 group-hover:text-forest-glow transition-colors"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {day.title}
                        </h3>
                        <p className="text-xs text-stone-light/45 font-light mt-1.5 max-w-xl">{day.shortDesc}</p>
                      </div>
                      <span className={`text-stone-light/35 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>

                    {/* Accordion Details */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-white/[0.03] space-y-4">
                            <ul className="space-y-3 pt-4">
                              {day.details.map((point, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-parchment-dim/80 font-light leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-forest-glow/65 mt-2 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Stay & Meal details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-white/[0.04]">
                              <div className="flex items-center gap-3 bg-white/[0.01] p-3 rounded-lg border border-white/[0.02]">
                                <span className="text-lg">🏨</span>
                                <div>
                                  <p className="text-[10px] uppercase tracking-wider text-stone-light/45">Accommodation</p>
                                  <p className="text-xs font-medium text-snow/90 mt-0.5" style={{ fontFamily: "var(--font-outfit)" }}>{day.stay}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 bg-white/[0.01] p-3 rounded-lg border border-white/[0.02]">
                                <span className="text-lg">🍽️</span>
                                <div>
                                  <p className="text-[10px] uppercase tracking-wider text-stone-light/45">Meals Included</p>
                                  <p className="text-xs font-medium text-snow/90 mt-0.5" style={{ fontFamily: "var(--font-outfit)" }}>{day.meals}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. STAY SECTION (Clean, typography first, no text-on-image) */}
      <section className="py-24 px-4 bg-mountain-900/10 border-t border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Base Camps"
            title="Premium Mountain Stays"
            description="Carefully selected retreats that combine comfort with local charm and stunning scenery."
          />

          <div className="grid grid-cols-1 gap-6 mt-12 max-w-2xl mx-auto">
            {stays.map((stay, i) => (
              <div key={i} className="editorial-card flex flex-col h-full group">
                <div className="relative aspect-[16/10] overflow-hidden w-full">
                  <Image
                    src={stay.img}
                    alt={stay.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between bg-mountain-900/30">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-base sm:text-lg font-semibold text-snow/90 leading-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {stay.name}
                      </h3>
                      <span className="text-[9px] uppercase tracking-[0.15em] text-forest-glow bg-forest/25 px-2 py-0.5 rounded border border-forest-light/10">
                        {stay.location}
                      </span>
                    </div>
                    <p className="text-[0.8125rem] text-parchment/45 font-light leading-relaxed">{stay.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] mt-6">
                    <p className="text-[10px] uppercase tracking-wider text-stone-light/45 mb-2">Key Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {stay.amenities.map((am, idx) => (
                        <span key={idx} className="text-[10px] px-2.5 py-0.5 bg-white/[0.02] text-parchment-dim/80 border border-white/[0.02] rounded font-light">
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEAL SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto editorial-surface p-8 md:p-10 text-center relative overflow-hidden">
          <span className="text-xl mb-4 block">🍳</span>
          <h2 className="text-lg sm:text-xl font-semibold text-snow/90 mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
            Mountain Dining & Local Coffee
          </h2>
          <p className="text-[0.8125rem] text-parchment/60 font-light leading-relaxed max-w-xl mx-auto mb-8">
            Enjoy traditional breakfasts and dinners at our retreats, and try out our curated list of colonial-era cafés.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              { title: "2 Breakfasts Included", desc: "Warm morning classic spreads served warm at base hotels daily.", icon: "🍳" },
              { title: "2 Dinners Included", desc: "Traditional slow-cooked local dinners prepared with fresh organic ingredients.", icon: "🍲" },
              { title: "Café Curation", desc: "Get custom recommendation logs for Shimla's historic Mall Road cafés.", icon: "☕" },
            ].map((meal, i) => (
              <div key={i} className="bg-white/[0.01] p-4 rounded-xl border border-white/[0.02] space-y-2">
                <span className="text-lg">{meal.icon}</span>
                <h4 className="text-xs font-semibold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>{meal.title}</h4>
                <p className="text-[11px] text-stone-light/45 font-light leading-relaxed">{meal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY SECTION (No text on images) */}
      <section className="py-24 px-4 bg-mountain-900/10 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Visual Journey"
            title="Snapshots of the Escape"
            description="Explore glimpses of colonial rooftops, quiet forest glades, cozy fireplace setups, and towering Himalayan peaks."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="editorial-card group flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-[4/3] w-full">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 border-t border-white/[0.04] bg-mountain-900/30">
                  <p className="text-xs font-medium text-snow/95" style={{ fontFamily: "var(--font-outfit)" }}>
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRICING SECTION */}
      <section className="py-24 px-4 bg-mountain-900/10 border-t border-b border-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Pricing Breakdown"
            title="Expedition Pricing"
            description="Transparent tiered pricing options based on group size. Selected base vehicle is inclusive of driver charges."
          />

          {/* Guests Selector Buttons */}
          <div className="flex justify-center gap-2 mt-8 mb-12">
            {[2, 4, 6].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedGuests(num)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  selectedGuests === num
                    ? "bg-forest border border-forest-light text-snow"
                    : "bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] text-stone-light/50"
                }`}
              >
                {num} Guests
              </button>
            ))}
          </div>

          {/* Interactive Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            {[2, 4, 6].map((num) => {
              const option = pricingOptions[num];
              const isSelected = selectedGuests === num;

              return (
                <div
                  key={num}
                  onClick={() => setSelectedGuests(num)}
                  className={`editorial-surface p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ${
                    isSelected
                      ? "border-forest-glow scale-102"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-widest text-stone-light/45 font-light">Expedition</span>
                      {option.bestValue && (
                        <span className="text-[9px] uppercase tracking-widest bg-forest border border-forest-glow/20 px-2 py-0.5 rounded text-forest-glow font-semibold">
                          Best Value
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>{option.label}</h3>

                    <div className="pt-2">
                      <span className="text-2xl font-bold text-snow/95 mono-number">
                        ₹{option.price}
                      </span>
                      <span className="text-xs text-stone-light/45 font-light"> / {option.perPerson}</span>
                    </div>

                    <ul className="space-y-2.5 pt-4 border-t border-white/[0.04] text-[11px] text-parchment/65 font-light">
                      <li className="flex items-center gap-2">✓ Hotel Cedar Heights Stay</li>
                      <li className="flex items-center gap-2">✓ Dedicated SUV Transport</li>
                      <li className="flex items-center gap-2">✓ MAP Plan (Breakfast & Dinner)</li>
                      <li className="flex items-center gap-2">✓ Guided Nature & Forest Walks</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`w-full block py-2.5 rounded-full text-center text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                        isSelected
                          ? "bg-forest hover:bg-forest-light text-snow border border-forest-light/20"
                          : "bg-white/[0.02] text-stone-light/45 border border-white/[0.04]"
                      }`}
                    >
                      Inquire Trip
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. INCLUSIONS & EXCLUSIONS */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="editorial-surface p-6 space-y-6">
              <h3 className="text-base font-semibold text-snow/90 flex items-center gap-2" style={{ fontFamily: "var(--font-outfit)" }}>
                <span className="text-forest-glow">✓</span> What is Included
              </h3>
              <ul className="space-y-3.5 text-[0.8125rem] text-parchment/60 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Accommodation:</strong> 2 Nights in premium cedar wood rooms at Hotel Cedar Heights.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Transportation:</strong> Dedicated SUV for all drives and local pickups.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Sightseeing:</strong> Guided forest walks, heritage trails, and peak circuits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Meals:</strong> Warm breakfasts and dinners at the hotel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Driver Charges:</strong> Driver daily allowance, toll charges, and hotel parking fees.</span>
                </li>
              </ul>
            </div>

            {/* Exclusions */}
            <div className="editorial-surface p-6 space-y-6">
              <h3 className="text-base font-semibold text-snow/90 flex items-center gap-2" style={{ fontFamily: "var(--font-outfit)" }}>
                <span className="text-stone-light/45">✗</span> What is Excluded
              </h3>
              <ul className="space-y-3.5 text-[0.8125rem] text-parchment/60 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/35">✗</span>
                  <span><strong>Lunch:</strong> Midday cafe stops and town dining expenses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/35">✗</span>
                  <span><strong>Entry Tickets:</strong> Fee for wildlife sanctuaries, monuments, or adventure rides.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/35">✗</span>
                  <span><strong>Personal Expenses:</strong> Tipping, laundry, mineral water, and telephone calls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/35">✗</span>
                  <span><strong>Adventure Activities:</strong> Optional horse riding, skiing, or cable cars.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION (Radial glow, no background image) */}
      <section className="relative py-32 px-4 overflow-hidden border-t border-white/[0.02]">
        <div className="alpine-glow" />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-black via-mountain-black/75 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-glow/70">
            Begin the Journey
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-snow/90 leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Escape Into the Peaceful Side of Shimla
          </h2>
          <p className="text-[0.9375rem] sm:text-base text-parchment/65 max-w-xl mx-auto leading-relaxed font-light">
            Inquire today to reserve vehicle slots, cozy hotel rooms, and custom itineraries for your Himalayan getaway.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mx-auto pt-4">
            <Link
              href="/contact"
              className="btn-outline w-full sm:w-auto text-xs tracking-widest py-3 px-8"
            >
              Book Your Trip
            </Link>
            <a
              href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20the%20Shimla%20Nature%20&%20Heritage%20Escape."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto text-xs tracking-widest py-3 px-8"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
