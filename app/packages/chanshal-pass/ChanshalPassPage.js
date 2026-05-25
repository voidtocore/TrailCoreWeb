"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Animations";

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
    { title: "Shimla Local Sightseeing", desc: "Heritage walks across Mall Road, The Ridge, and Christ Church.", icon: "🏛️" },
    { title: "Riverside Stay in Rohru", desc: "Premium cabins situated directly on the banks of the Pabbar River.", icon: "🌊" },
    { title: "Chanshal Pass Excursion", desc: "High-altitude drive to the untouched 3,750m Himalayan pass.", icon: "🏔️" },
    { title: "Bonfire Evening", desc: "A cozy riverside bonfire gathering under starry mountain skies.", icon: "🔥" },
    { title: "Apple Valley Drives", desc: "Scenic routes tracing through the famous Kotkhai apple orchards.", icon: "🍎" },
    { title: "Narkanda & Hatu Peak", desc: "Panoramic view of Himalayan peaks from a forest-surrounded summit.", icon: "🌲" },
    { title: "Scenic Himalayan Roads", desc: "Drives along offbeat roads, winding rivers, and towering ridges.", icon: "🚗" },
    { title: "Photography Stops", desc: "Curated halts at dramatic viewpoints, bridges, and local hamlets.", icon: "📷" },
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
    { src: "/images/road-trip.png", title: "Himalayan Ridge Drive", size: "md:col-span-2 md:row-span-1" },
    { src: "/images/shimla.png", title: "Colonial Shimla Streets", size: "md:col-span-1 md:row-span-1" },
    { src: "/images/camping.png", title: "Bonfire Under the Stars", size: "md:col-span-1 md:row-span-2" },
    { src: "/images/river.png", title: "Pabbar River Stream", size: "md:col-span-2 md:row-span-1" },
    { src: "/images/spiti-valley.png", title: "Chanshal High Pass View", size: "md:col-span-1 md:row-span-1" },
    { src: "/images/manali.png", title: "Lush Pine Forests", size: "md:col-span-2 md:row-span-1" },
  ];

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-mountain-black text-foreground overflow-x-hidden min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/road-trip.png"
          alt="Scenic Himalayan road through pine forests"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Cinematic Overlay */}
        <div className="hero-overlay absolute inset-0 z-10" />
        <div className="cinematic-grain absolute inset-0 z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <FadeIn delay={0.2} direction="up">
            <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-forest-glow mb-6 bg-forest/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-forest-light/30">
              Offbeat Road Expedition
            </span>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <h1
              className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Chanshal Pass &
              <br />
              <span className="text-gradient-green">Pabbar Valley</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <p className="text-sm sm:text-base md:text-lg text-parchment/65 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Experience hidden Himachal through scenic valleys, pristine riverside stays, pine-scented forests, and high-altitude Himalayan ridges.
            </p>
          </FadeIn>

          <FadeIn delay={0.8} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-forest/80 hover:bg-forest-light/80 text-white/90 font-medium tracking-wide rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-forest/10 border border-forest-light/20 text-sm text-center"
              >
                Book Now
              </Link>
              <button
                onClick={scrollToItinerary}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-parchment/80 font-medium tracking-wide rounded-full transition-all duration-500 border border-white/[0.06] text-sm text-center"
              >
                View Itinerary
              </button>
            </div>
          </FadeIn>

          {/* Floating Stats */}
          <FadeIn delay={1} direction="up" className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/[0.05]">
              {[
                { label: "Duration", val: "4 Days / 3 Nights" },
                { label: "Terrain", val: "Offbeat Himachal" },
                { label: "Highlight Stay", val: "Riverside Camp" },
                { label: "Summit altitude", val: "3,750 Meters" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone/45 mb-1">{stat.label}</p>
                  <p className="text-sm font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>{stat.val}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. QUICK PACKAGE INFO STRIP */}
      <section className="relative z-30 -mt-10 px-4">
        <div className="max-w-6xl mx-auto glass rounded-2xl p-6 md:py-8 md:px-10 shadow-2xl shadow-black/40">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 divide-x-0 md:divide-x divide-white/[0.04]">
            {[
              { title: "Duration", val: "4D / 3N", sub: "Shimla to Shimla", icon: "⏱️" },
              { title: "Pickup", val: "Shimla", sub: "Railway/Bus Stand", icon: "📍" },
              { title: "Best Time", val: "Apr-Jun, Sep-Nov", sub: "Himalayan Autumn", icon: "🌤️" },
              { title: "Group Size", val: "4-6 Guests", sub: "Small Expeditions", icon: "👥" },
              { title: "Meals", val: "MAP Plan", sub: "Breakfast & Dinner", icon: "🍽️" },
              { title: "Accommodation", val: "Premium Stays", sub: "Riverside & Hotels", icon: "🏨" },
            ].map((info, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left px-3 first:pl-0">
                <span className="text-lg mb-2">{info.icon}</span>
                <span className="text-[10px] uppercase tracking-widest text-stone/45 mb-1">{info.title}</span>
                <span className="text-[13px] font-semibold text-snow leading-tight">{info.val}</span>
                <span className="text-[10px] text-stone/30 mt-0.5">{info.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE EXPERIENCE SECTION */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-glow">
                The Expedition Philosophy
              </span>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-snow leading-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Untouched Valleys & Scenic Ridges
              </h2>
              <p className="text-parchment/60 font-light leading-relaxed text-sm sm:text-base">
                This offbeat Himalayan road journey takes travelers through the untouched beauty of Pabbar Valley and Chanshal Pass. 
                From the bustling colonial paths of Shimla to riverside wood cabins in Rohru and high-altitude alpine ridges, 
                this road trip blends scenic, slow-paced drives with comfortable stays and deep local culture.
              </p>
              <p className="text-stone/45 text-sm font-light leading-relaxed">
                Drive alongside the roaring Pabbar River, walk through ancient deodar forests, explore rich apple orchards, and ascend the Chanshal crest to witness towering white horizons away from commercialized tourism tracks.
              </p>
              <div className="pt-4 flex gap-4">
                <button
                  onClick={scrollToItinerary}
                  className="px-6 py-2.5 bg-forest/20 hover:bg-forest/40 border border-forest-light/20 text-forest-glow rounded-full text-xs font-medium tracking-wider transition-all duration-300"
                >
                  Explore Itinerary
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/river.png"
                alt="Flowing Pabbar River in Rohru"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mountain-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 glass rounded-xl p-4 border border-white/[0.08]">
                <p className="text-[10px] uppercase tracking-widest text-stone/40 mb-0.5">Stay Experience</p>
                <p className="text-xs font-medium text-snow">Pabbar Valley Riverside Retreat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHTS SECTION */}
      <section className="py-24 px-4 bg-mountain-900/40 border-t border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Expedition Features"
            title="What Makes This Journey Special"
            description="Handcrafted details woven together to build a true offbeat Himalayan travel experience."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {highlights.map((hl, i) => (
              <StaggerItem key={i}>
                <div className="glass-light p-6 rounded-xl hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between border border-white/[0.03]">
                  <div>
                    <span className="text-2xl mb-4 block">{hl.icon}</span>
                    <h3
                      className="text-base font-semibold text-snow mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {hl.title}
                    </h3>
                    <p className="text-xs text-stone/45 leading-relaxed font-light">{hl.desc}</p>
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
                        ? "bg-forest border-2 border-forest-glow text-forest-glow scale-110 shadow-lg shadow-forest/20"
                        : "bg-mountain-900 border border-white/[0.08] text-stone/40 hover:border-forest-glow hover:text-snow"
                    }`}
                  >
                    <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>{day.day}</span>
                  </button>

                  {/* Timeline content card */}
                  <div className={`glass rounded-xl overflow-hidden transition-all duration-500 border ${
                    isOpen ? "border-forest-light/40 shadow-xl shadow-black/30" : "border-white/[0.04] hover:border-white/[0.08]"
                  }`}>
                    {/* Header */}
                    <div
                      onClick={() => setActiveDay(isOpen ? null : day.day)}
                      className="p-5 sm:p-6 flex justify-between items-center cursor-pointer select-none"
                    >
                      <div className="pr-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-forest-glow">
                          Day 0{day.day}
                        </span>
                        <h3
                          className="text-base sm:text-lg font-semibold text-snow mt-0.5 group-hover:text-forest-glow transition-colors"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {day.title}
                        </h3>
                        <p className="text-xs text-stone/45 font-light mt-1 max-w-xl">{day.shortDesc}</p>
                      </div>
                      <span className={`text-stone/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-white/[0.03] space-y-4">
                            <ul className="space-y-3 pt-4">
                              {day.details.map((point, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-parchment/60 font-light leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-forest-glow/65 mt-2 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Stay & Meal details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-white/[0.04]">
                              <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/[0.03]">
                                <span className="text-lg">🏨</span>
                                <div>
                                  <p className="text-[10px] uppercase tracking-wider text-stone/45">Accommodation</p>
                                  <p className="text-xs font-medium text-snow mt-0.5">{day.stay}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/[0.03]">
                                <span className="text-lg">🍽️</span>
                                <div>
                                  <p className="text-[10px] uppercase tracking-wider text-stone/45">Meals Included</p>
                                  <p className="text-xs font-medium text-snow mt-0.5">{day.meals}</p>
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

      {/* 6. STAY SECTION */}
      <section className="py-24 px-4 bg-mountain-900/30 border-t border-b border-white/[0.02] relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Base Camps"
            title="Premium Mountain Stays"
            description="Carefully selected retreats that combine comfort with local charm and stunning scenery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {stays.map((stay, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border border-white/[0.04] flex flex-col h-full group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={stay.img}
                    alt={stay.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mountain-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] uppercase tracking-widest text-forest-glow bg-forest/40 backdrop-blur-md px-2.5 py-1 rounded border border-forest-light/20">
                      {stay.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3
                      className="text-lg sm:text-xl font-semibold text-snow leading-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {stay.name}
                    </h3>
                    <p className="text-xs text-stone/45 font-light leading-relaxed">{stay.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04]">
                    <p className="text-[10px] uppercase tracking-wider text-stone/40 mb-2">Key Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {stay.amenities.map((am, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-1 bg-white/[0.03] text-parchment/65 border border-white/[0.04] rounded-md font-light">
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
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-10 border border-white/[0.04] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-forest-glow/5 rounded-full filter blur-xl" />
          <span className="text-xl mb-4 block">🍳</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-snow mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
            Mountain Dining & Hydration
          </h2>
          <p className="text-xs sm:text-sm text-parchment/60 font-light leading-relaxed max-w-xl mx-auto mb-8">
            Experience organic mountain food prepared at the retreats. We ensure clean preparation, regional delicacies, and packed refreshments during high-altitude pass explorations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              { title: "Breakfast Included", desc: "Healthy regional & classic spreads served warm at base hotels daily.", icon: "🥛" },
              { title: "Dinner Included", desc: "Cozy local dinners prepared with fresh organic mountain ingredients.", icon: "🍲" },
              { title: "Packed Snacks", desc: "Fresh alpine drinks & packed lunch during Chanshal pass excursions.", icon: "🎒" },
            ].map((meal, i) => (
              <div key={i} className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.03] space-y-2">
                <span className="text-lg">{meal.icon}</span>
                <h4 className="text-xs font-semibold text-snow" style={{ fontFamily: "var(--font-outfit)" }}>{meal.title}</h4>
                <p className="text-[10px] text-stone/40 font-light leading-relaxed">{meal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY SECTION */}
      <section className="py-24 px-4 bg-mountain-900/20 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Visual Journey"
            title="Snapshots of the Road"
            description="Explore glimpses of scenic ridges, apple trees, bonfires, and cold river waters along the route."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl aspect-[4/3] group shadow-lg ${img.size}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-xs font-medium text-snow tracking-wide" style={{ fontFamily: "var(--font-outfit)" }}>
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRICING SECTION */}
      <section className="py-24 px-4 bg-mountain-900/40 border-t border-b border-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Pricing Breakdown"
            title="Expedition Pricing"
            description="Transparent tiered pricing options based on group size. Selected base vehicle is inclusive of driver charges."
          />

          {/* Guests Selector Buttons */}
          <div className="flex justify-center gap-2 mt-8 mb-12">
            {[4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedGuests(num)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  selectedGuests === num
                    ? "bg-forest border border-forest-light text-snow"
                    : "bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] text-stone/50"
                }`}
              >
                {num} Guests
              </button>
            ))}
          </div>

          {/* Interactive Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            {[4, 5, 6].map((num) => {
              const option = pricingOptions[num];
              const isSelected = selectedGuests === num;

              return (
                <div
                  key={num}
                  onClick={() => setSelectedGuests(num)}
                  className={`glass rounded-2xl p-6 border flex flex-col justify-between cursor-pointer transition-all duration-500 ${
                    isSelected
                      ? "border-forest-glow scale-105 shadow-xl shadow-forest/5"
                      : "border-white/[0.04] opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs uppercase tracking-widest text-stone/40 font-light">Expedition</span>
                      {option.bestValue && (
                        <span className="text-[9px] uppercase tracking-widest bg-forest border border-forest-glow/20 px-2 py-0.5 rounded text-forest-glow font-semibold">
                          Best Value
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-snow" style={{ fontFamily: "var(--font-outfit)" }}>{option.label}</h3>

                    <div className="pt-2">
                      <span className="text-3xl font-bold text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                        ₹{option.price}
                      </span>
                      <span className="text-xs text-stone/30 font-light"> / {option.perPerson}</span>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-white/[0.04] text-[11px] text-parchment/65 font-light">
                      <li className="flex items-center gap-2">✓ Premium Mountain Lodging</li>
                      <li className="flex items-center gap-2">✓ Dedicated SUV (Innova/similar)</li>
                      <li className="flex items-center gap-2">✓ MAP Plan (Breakfast & Dinner)</li>
                      <li className="flex items-center gap-2">✓ Excursions & Local Permit Fee</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`w-full block py-2.5 rounded-lg text-center text-xs font-semibold tracking-wider transition-all duration-300 ${
                        isSelected
                          ? "bg-forest hover:bg-forest-light text-snow"
                          : "bg-white/[0.03] text-stone/40 border border-white/[0.04]"
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
            <div className="glass p-6 rounded-2xl border border-white/[0.04] space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-snow flex items-center gap-2" style={{ fontFamily: "var(--font-outfit)" }}>
                <span className="text-forest-glow">✓</span> What is Included
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-parchment/60 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Accommodation:</strong> 3 Nights in premium mountain hotels and riverside cottages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Transportation:</strong> Dedicated SUV (Innova or equivalent) for 4 days covering all drives.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Sightseeing:</strong> Guided local tours across Shimla, Chanshal Pass, and Narkanda peak.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Driver Charges:</strong> Driver daily allowance, stays, food, and high road charges included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Permits & Taxes:</strong> Toll taxes, interstate permits, and hotel parking charges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-forest-glow">✓</span>
                  <span><strong>Meals:</strong> Breakfast and Dinner at the accommodations. Packed snacks during the pass excursion.</span>
                </li>
              </ul>
            </div>

            {/* Exclusions */}
            <div className="glass p-6 rounded-2xl border border-white/[0.04] space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-snow flex items-center gap-2" style={{ fontFamily: "var(--font-outfit)" }}>
                <span className="text-stone-light/50">✗</span> What is Excluded
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-parchment/60 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/40">✗</span>
                  <span><strong>Lunch:</strong> Meals during transit stops and local restaurant café hopping.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/40">✗</span>
                  <span><strong>Entry Tickets:</strong> Ticket fee for museums, heritage monuments, or local guides.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/40">✗</span>
                  <span><strong>Personal Expenses:</strong> Laundry, mineral water, tipping, and telephone calls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-light/40">✗</span>
                  <span><strong>Adventure Activities:</strong> Skiing/snow activities in Kufri/Narkanda or horse rides.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="relative py-32 px-4 overflow-hidden border-t border-white/[0.02]">
        <Image
          src="/images/hero-mountains.png"
          alt="Panoramic view of snow-capped mountains"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-black via-mountain-black/75 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-glow">
            Begin the Journey
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready to Explore Hidden Himachal?
          </h2>
          <p className="text-sm sm:text-base text-parchment/65 max-w-xl mx-auto leading-relaxed font-light">
            Inquire today to reserve private vehicle slots, premium riverside cabins, and custom itineraries for Pabbar Valley.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mx-auto pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-forest hover:bg-forest-light text-white font-medium tracking-wide rounded-full transition-all duration-500 border border-forest-light/20 text-xs text-center"
            >
              Book Your Trip
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] text-parchment/80 font-medium tracking-wide rounded-full transition-all duration-500 border border-white/[0.05] text-xs text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
