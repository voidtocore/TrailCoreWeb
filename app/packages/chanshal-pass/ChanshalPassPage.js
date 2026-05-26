"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function ChanshalPassPage() {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedGuests, setSelectedGuests] = useState(6);
  const itineraryRef = useRef(null);

  // Pricing details based on guest count
  const pricingOptions = {
    4: { price: "22,999", perPerson: "person", label: "4 Guests" },
    5: { price: "20,999", perPerson: "person", label: "5 Guests" },
    6: { price: "18,999", perPerson: "person", label: "6 Guests", bestValue: true },
  };

  const itineraryDays = [
    {
      day: 1,
      title: "Shimla Arrival & Local Sightseeing",
      shortDesc: "Colonial walks, heritage architecture, and old mountain charm.",
      details: [
        "Arrive in Shimla, the heritage summer capital of British India.",
        "Check into your premium heritage-inspired hotel and freshen up.",
        "In the afternoon, proceed for a guided walking tour of the historical Mall Road, The Ridge, and the neo-gothic Christ Church.",
        "Explore Lakkar Bazaar, famous for wooden crafts, and enjoy leisure evening café hops.",
      ],
      stay: "Hotel Snowcrest Residency, Shimla",
      meals: "Dinner Included",
    },
    {
      day: 2,
      title: "Shimla → Kufri → Kotkhai → Hatkoti → Rohru",
      shortDesc: "Drives through apple orchards, pine forests, and riverside tracks.",
      details: [
        "Depart Shimla early, driving past scenic Kufri viewpoints and dense pine reserves.",
        "Traverse through Theog and Kotkhai, the heart of India's richest apple belts.",
        "Stop at the ancient Hatkoti Temple complex on the banks of the Pabbar River.",
        "Arrive at the riverside retreat in Rohru. Conclude the day with a cozy bonfire by the Pabbar River.",
      ],
      stay: "Pabbar Valley Riverside Retreat, Rohru",
      meals: "Breakfast & Dinner Included",
    },
    {
      day: 3,
      title: "Chanshal Pass Excursion",
      shortDesc: "Summit drive up to 3,750m with panoramic snow peaks.",
      details: [
        "Embark on the highlight drive towards the mighty Chanshal Pass (3,750m).",
        "Drive through offbeat settlements like Chirgaon and the beautiful high wood village of Larot.",
        "Climb up the winding mountain roads to reach the Chanshal summit. Witness breathtaking 360-degree snow-capped Himalayan ranges.",
        "Enjoy packed alpine refreshments on the grasslands of the pass before descending back to Rohru.",
      ],
      stay: "Pabbar Valley Riverside Retreat, Rohru",
      meals: "Breakfast, Packed Lunch & Dinner Included",
    },
    {
      day: 4,
      title: "Rohru → Narkanda → Hatu Peak → Shimla",
      shortDesc: "Panoramic views from Hatu temple and dense spruce woods.",
      details: [
        "Check out from your riverside camp and head towards the alpine town of Narkanda.",
        "Take a scenic high-altitude spur road to Hatu Peak (3,400m) and visit the ancient Hatu Mata Temple.",
        "Marvel at the panoramic vistas of the snow-clad peaks and dense spruce forests.",
        "Drive back down to Shimla for your onward journey, carrying memories of offbeat Pabbar Valley.",
      ],
      stay: "None (Departure)",
      meals: "Breakfast Included",
    },
  ];

  const highlights = [
    { title: "Shimla Local Sightseeing", desc: "Heritage walks across Mall Road, The Ridge, and Christ Church." },
    { title: "Riverside Stay in Rohru", desc: "Premium cabins situated directly on the banks of the Pabbar River." },
    { title: "Chanshal Pass Excursion", desc: "High-altitude drive to the untouched 3,750m Himalayan pass." },
    { title: "Bonfire Evening", desc: "A cozy riverside bonfire gathering under starry mountain skies." },
    { title: "Apple Valley Drives", desc: "Scenic routes tracing through the famous Kotkhai apple orchards." },
    { title: "Narkanda & Hatu Peak", desc: "Panoramic view of Himalayan peaks from a forest-surrounded summit." },
    { title: "Scenic Himalayan Roads", desc: "Drives along offbeat roads, winding rivers, and towering ridges." },
    { title: "Photography Stops", desc: "Curated halts at dramatic viewpoints, bridges, and local hamlets." },
  ];

  const stays = [
    {
      name: "Hotel Snowcrest Residency",
      location: "Shimla",
      img: "/images/shimla.png",
      amenities: ["Mountain View Rooms", "Traditional Cuisine", "Heritage Aesthetic", "Premium Service"],
      description: "Perched gracefully in Shimla, offering panoramic mountain views, heritage-inspired comfort, and cozy modern amenities.",
    },
    {
      name: "Pabbar Valley Riverside Retreat",
      location: "Rohru",
      img: "/images/river.png",
      amenities: ["Riverside Cabins", "Private Bonfire Area", "Organic Meals", "Stargazing Deck"],
      description: "A private eco-luxe hideaway situated right beside the pristine, flowing Pabbar River, offering absolute tranquility.",
    },
  ];

  const galleryImages = [
    { src: "/images/road-trip.png", title: "Himalayan Ridge Drive" },
    { src: "/images/shimla.png", title: "Colonial Shimla Streets" },
    { src: "/images/camping.png", title: "Bonfire Under the Stars" },
    { src: "/images/river.png", title: "Pabbar River Stream" },
    { src: "/images/spiti-valley.png", title: "Chanshal High Pass View" },
    { src: "/images/manali.png", title: "Lush Pine Forests" },
  ];

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0c0d0c] text-foreground overflow-x-hidden min-h-screen">
      {/* 1. HERO SECTION (Typography-first, radial glows, no background image) */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0c0d0c] pt-28 pb-16">
        <div className="alpine-glow animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0d0c]/70 to-[#0c0d0c]" />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
          <FadeIn delay={0.2} direction="up">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-glow bg-forest/35 px-4 py-1.5 rounded-[4px] border border-forest-light/10 mb-7">
              Offbeat Road Expedition
            </span>
          </FadeIn>

          <FadeIn delay={0.35} direction="up">
            <h1
              className="text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] font-semibold text-snow mb-6 tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Chanshal Pass &
              <br />
              <span className="text-gradient-green">Pabbar Valley</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <p className="text-[0.9375rem] sm:text-base md:text-lg text-parchment/65 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Experience hidden Himachal through scenic valleys, pristine riverside stays, pine-scented forests, and high-altitude Himalayan ridges.
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
                { label: "Duration", val: "4 Days / 3 Nights" },
                { label: "Terrain", val: "Offbeat Himachal" },
                { label: "Highlight Stay", val: "Riverside Camp" },
                { label: "Summit altitude", val: "3,750 Meters" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-stone mb-1.5">{stat.label}</p>
                  <p className="text-sm font-semibold text-snow mono-number">{stat.val}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. QUICK PACKAGE INFO STRIP */}
      <section className="relative z-30 px-6">
        <div className="max-w-6xl mx-auto bg-[#121413] border border-white/[0.04] p-6 md:py-8 md:px-10 rounded-[4px] shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { title: "Duration", val: "4D / 3N", sub: "Shimla to Shimla" },
              { title: "Pickup", val: "Shimla", sub: "Railway/Bus Stand" },
              { title: "Best Time", val: "Apr-Jun, Sep-Nov", sub: "Himalayan Autumn" },
              { title: "Group Size", val: "4-6 Guests", sub: "Small Expeditions" },
              { title: "Meals", val: "MAP Plan", sub: "Breakfast & Dinner" },
              { title: "Accommodation", val: "Premium Stays", sub: "Riverside & Hotels" },
            ].map((info, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.15em] text-stone mb-1.5">{info.title}</span>
                <span className="text-[13px] font-medium text-snow leading-tight mono-number">{info.val}</span>
                <span className="text-[10px] text-stone mt-0.5 font-light">{info.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE EXPERIENCE SECTION (Clean layout, no text-on-image) */}
      <section className="py-24 px-6 relative bg-[#0c0d0c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-glow">
                The Expedition Philosophy
              </span>
              <h2
                className="text-2xl md:text-3.5xl font-medium text-snow leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Untouched Valleys & Scenic Ridges
              </h2>
              <p className="text-xs sm:text-[0.8125rem] text-parchment leading-relaxed font-light">
                This offbeat Himalayan road journey takes travelers through the untouched beauty of Pabbar Valley and Chanshal Pass. 
                From the bustling colonial paths of Shimla to riverside wood cabins in Rohru and high-altitude alpine ridges, 
                this road trip blends scenic, slow-paced drives with comfortable stays and deep local culture.
              </p>
              <p className="text-stone text-xs sm:text-sm font-light leading-relaxed">
                Drive alongside the roaring Pabbar River, walk through ancient deodar forests, explore rich apple orchards, and ascend the Chanshal crest to witness towering white horizons away from commercialized tourism tracks.
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
              <div className="border border-white/[0.03] rounded-[4px] overflow-hidden group">
                <div className="relative aspect-video lg:aspect-[4/3] w-full bg-[#121413]">
                  <Image
                    src="/images/river.png"
                    alt="Flowing Pabbar River in Rohru"
                    fill
                    className="object-cover cinematic-image"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 border-t border-white/[0.04] bg-[#121413]/30">
                  <p className="text-[10px] uppercase tracking-widest text-stone mb-1">Stay Experience</p>
                  <p className="text-sm font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>Pabbar Valley Riverside Retreat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHTS SECTION */}
      <section className="py-24 px-6 bg-[#121413]/10 border-t border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Expedition Features"
            title="What Makes This Journey Special"
            description="Handcrafted details woven together to build a true offbeat Himalayan travel experience."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((hl, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#121413] border border-white/[0.04] p-6 rounded-[4px] h-full flex flex-col justify-between group">
                  <div>
                    <span className="text-xs font-semibold text-stone mono-number mb-4 block">0{i + 1}</span>
                    <h3
                      className="text-sm font-medium text-snow mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {hl.title}
                    </h3>
                    <p className="text-xs text-parchment/65 leading-relaxed font-light">{hl.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. COMPLETE ITINERARY TIMELINE */}
      <section ref={itineraryRef} className="py-24 px-6 relative scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Day by Day Itinerary"
            title="The Road Map of Pabbar"
            description="A thoughtful, slow-paced route built to maximize landscape views, acclimatization, and local interactions."
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
                        ? "bg-[#121413] border border-forest-glow text-forest-glow scale-110"
                        : "bg-[#0c0d0c] border border-white/[0.08] text-stone-light/45 hover:border-forest-glow hover:text-snow"
                    }`}
                  >
                    <span className="text-xs font-semibold mono-number">{day.day}</span>
                  </button>

                  {/* Timeline content card */}
                  <div className={`bg-[#121413] border border-white/[0.04] rounded-[4px] overflow-hidden transition-all duration-500 ${
                    isOpen ? "border-forest-glow/30" : "border-white/[0.04]"
                  }`}>
                    {/* Header */}
                    <div
                      onClick={() => setActiveDay(isOpen ? null : day.day)}
                      className="p-5 sm:p-6 flex justify-between items-center cursor-pointer select-none"
                    >
                      <div className="pr-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-warm mono-number">
                          Day 0{day.day}
                        </span>
                        <h3
                          className="text-base sm:text-lg font-medium text-snow mt-0.5 group-hover:text-forest-glow transition-colors"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {day.title}
                        </h3>
                        <p className="text-xs text-stone font-light mt-1.5 max-w-xl">{day.shortDesc}</p>
                      </div>
                      <span className={`text-stone/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
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
                                <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-parchment-dim font-light leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-forest-glow mt-2 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Stay & Meal details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-white/[0.04]">
                              <div className="flex items-center gap-3 bg-white/[0.01] p-3 rounded-[2px] border border-white/[0.02]">
                                <div>
                                  <p className="text-[9px] uppercase tracking-widest text-stone">Accommodation</p>
                                  <p className="text-xs font-medium text-snow mt-0.5" style={{ fontFamily: "var(--font-outfit)" }}>{day.stay}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 bg-white/[0.01] p-3 rounded-[2px] border border-white/[0.02]">
                                <div>
                                  <p className="text-[9px] uppercase tracking-widest text-stone">Meals Included</p>
                                  <p className="text-xs font-medium text-snow mt-0.5" style={{ fontFamily: "var(--font-outfit)" }}>{day.meals}</p>
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
      <section className="py-24 px-6 bg-[#121413]/10 border-t border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Base Camps"
            title="Premium Mountain Stays"
            description="Carefully selected retreats that combine comfort with local charm and stunning scenery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {stays.map((stay, i) => (
              <div key={i} className="flex flex-col h-full group">
                <div className="relative aspect-[16/10] overflow-hidden w-full bg-[#121413] rounded-[4px] border border-white/[0.03]">
                  <Image
                    src={stay.img}
                    alt={stay.name}
                    fill
                    className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="pt-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-base sm:text-lg font-medium text-snow leading-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {stay.name}
                      </h3>
                      <span className="text-[8px] uppercase tracking-[0.2em] text-accent-warm bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]">
                        {stay.location}
                      </span>
                    </div>
                    <p className="text-xs text-parchment/65 font-light leading-relaxed">{stay.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] mt-6">
                    <p className="text-[9px] uppercase tracking-widest text-stone mb-2">Key Amenities</p>
                    <div className="flex flex-wrap gap-1.5">
                      {stay.amenities.map((am, idx) => (
                        <span key={idx} className="text-[10px] px-2.5 py-0.5 bg-white/[0.01] text-parchment-dim border border-white/[0.02] rounded-[2px] font-light">
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
      <section className="py-20 px-6 bg-[#0c0d0c]">
        <div className="max-w-4xl mx-auto bg-[#121413] border border-white/[0.04] rounded-[4px] p-8 md:p-10 text-center relative overflow-hidden">
          <h2 className="text-lg sm:text-xl font-medium text-snow mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
            Mountain Dining & Hydration
          </h2>
          <p className="text-xs sm:text-[0.8125rem] text-parchment/60 font-light leading-relaxed max-w-xl mx-auto mb-8">
            Experience organic mountain food prepared at the retreats. We ensure clean preparation, regional delicacies, and packed refreshments during high-altitude pass explorations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              { title: "Breakfast Included", desc: "Healthy regional & classic spreads served warm at base hotels daily." },
              { title: "Dinner Included", desc: "Cozy local dinners prepared with fresh organic mountain ingredients." },
              { title: "Packed Snacks", desc: "Fresh alpine drinks & packed lunch during Chanshal pass excursions." },
            ].map((meal, i) => (
              <div key={i} className="bg-white/[0.01] p-4 rounded-[2px] border border-white/[0.02] space-y-2">
                <h4 className="text-xs font-semibold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>{meal.title}</h4>
                <p className="text-[11px] text-stone font-light leading-relaxed">{meal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY SECTION (No text on images) */}
      <section className="py-24 px-6 bg-[#121413]/10 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Visual Journey"
            title="Snapshots of the Road"
            description="Explore glimpses of scenic ridges, apple trees, bonfires, and cold river waters along the route."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="flex flex-col h-full group"
              >
                <div className="relative overflow-hidden aspect-[4/3] w-full bg-[#121413] rounded-[4px] border border-white/[0.03]">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover cinematic-image transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-xs font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRICING SECTION */}
      <section className="py-24 px-6 bg-[#0c0d0c] border-t border-b border-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Pricing Breakdown"
            title="Expedition Pricing"
            description="Transparent tiered pricing options based on group size. Selected base vehicle is inclusive of driver charges."
          />

          {/* Minimalist Typographic Pricing Log */}
          <div className="max-w-3xl mx-auto mt-12 border-t border-b border-white/10 divide-y divide-white/[0.06]">
            {[
              { label: "4 Guests", price: "₹22,999", note: "per person" },
              { label: "5 Guests", price: "₹20,999", note: "per person" },
              { label: "6 Guests", price: "₹18,999", note: "per person (best value)" },
            ].map((option, idx) => (
              <div key={idx} className="grid grid-cols-12 py-5 items-center text-xs font-light text-parchment-dim">
                <div className="col-span-2 text-stone mono-number">0{idx + 1}</div>
                <div className="col-span-4 text-snow font-medium" style={{ fontFamily: "var(--font-outfit)" }}>{option.label}</div>
                <div className="col-span-3 text-right text-snow font-medium mono-number">{option.price}</div>
                <div className="col-span-3 text-right text-stone font-light lowercase">{option.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[10px] text-stone tracking-widest uppercase font-light">
            Includes premium mountain lodging, dedicated SUV, and meals daily.
          </div>
        </div>
      </section>

      {/* 10. INCLUSIONS & EXCLUSIONS */}
      <section className="py-24 px-6 bg-[#0c0d0c]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Inclusions */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-snow uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
                What is Included
              </h3>
              <ul className="space-y-4 text-xs text-parchment leading-relaxed font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Accommodation:</strong> 3 Nights in premium mountain hotels and riverside cottages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Transportation:</strong> Dedicated SUV (Innova or equivalent) for 4 days.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Sightseeing:</strong> Guided local tours across Shimla, Chanshal, and Narkanda.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Driver Charges:</strong> daily allowance, stays, food, and high road permits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Permits & Taxes:</strong> Toll taxes, interstate permits, and parking charges.</span>
                </li>
              </ul>
            </div>

            {/* Exclusions */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-snow uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
                What is Excluded
              </h3>
              <ul className="space-y-4 text-xs text-parchment leading-relaxed font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-white/20">✗</span>
                  <span><strong>Lunch:</strong> Meals during transit stops and local restaurant café hopping.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-white/20">✗</span>
                  <span><strong>Entry Tickets:</strong> Ticket fee for museums, monuments, or local guides.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-white/20">✗</span>
                  <span><strong>Personal Expenses:</strong> Laundry, mineral water, tipping, and telephone calls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-white/20">✗</span>
                  <span><strong>Adventure Activities:</strong> Skiing/snow activities in Kufri/Narkanda or horse rides.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION (Radial glow, no background image) */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden border-t border-white/[0.03] bg-[#0c0d0c]">
        {/* Glowing radial accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[30%] left-[20%] right-[20%] w-[60%] h-[40%] opacity-[0.03] bg-radial from-forest-glow to-transparent blur-[120px] rounded-full mx-auto" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-warm">
            Begin the Journey
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-snow leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready to Explore Hidden Himachal?
          </h2>
          <p className="text-xs sm:text-[0.8125rem] text-parchment/65 max-w-xl mx-auto leading-relaxed font-light">
            Inquire today to reserve private vehicle slots, premium riverside cabins, and custom itineraries for Pabbar Valley.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mx-auto pt-6">
            <Link
              href="/contact"
              className="btn-outline w-full sm:w-auto text-xs tracking-widest py-3 px-8"
            >
              Book Your Trip
            </Link>
            <a
              href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20the%20Chanshal%20Pass%20expedition."
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
