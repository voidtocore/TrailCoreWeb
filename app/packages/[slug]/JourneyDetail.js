"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { stays } from "@/data/stays";
import { destinations } from "@/data/destinations";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

export default function JourneyDetail({ journey }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeDay, setActiveDay] = useState(1);
  const [selectedGuests, setSelectedGuests] = useState(6);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const overviewRef = useRef(null);
  const routeRef = useRef(null);
  const itineraryRef = useRef(null);
  const staysRef = useRef(null);
  const inclusionsRef = useRef(null);

  // Set default guest pricing selector if available
  useEffect(() => {
    if (journey.pricingOptions) {
      const keys = Object.keys(journey.pricingOptions);
      if (keys.length > 0) {
        setSelectedGuests(Number(keys[keys.length - 1])); // Set default to the last option (usually best value)
      }
    }
  }, [journey.pricingOptions]);

  // Simple scroll spy to set active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (inclusionsRef.current && scrollPosition >= inclusionsRef.current.offsetTop) {
        setActiveTab("inclusions");
      } else if (staysRef.current && scrollPosition >= staysRef.current.offsetTop) {
        setActiveTab("stays");
      } else if (itineraryRef.current && scrollPosition >= itineraryRef.current.offsetTop) {
        setActiveTab("itinerary");
      } else if (routeRef.current && scrollPosition >= routeRef.current.offsetTop) {
        setActiveTab("route");
      } else {
        setActiveTab("overview");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (elementRef, tabName) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveTab(tabName);
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Relational Lookups
  const localStays = stays.filter(s => journey.overnight_stay_ids && journey.overnight_stay_ids.includes(s.id));
  const routeDestinations = destinations.filter(d => journey.destination_ids && journey.destination_ids.includes(d.id));

  // Pricing values helper
  const activePricing = journey.pricingOptions && journey.pricingOptions[selectedGuests] 
    ? journey.pricingOptions[selectedGuests] 
    : { price: journey.price.replace("From ", ""), perPerson: "person" };

  return (
    <>
      {/* 1. Hero Block */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-background pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={journey.img}
            alt={journey.title}
            fill
            className="object-cover cinematic-image scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center md:text-left">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center justify-center md:justify-start gap-2 text-[10px] font-mono tracking-widest text-parchment/40 uppercase">
            <Link href="/" className="hover:text-forest-glow transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-forest-glow transition-colors">JOURNEYS</Link>
            <span>/</span>
            <span className="text-snow">{journey.title}</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 justify-center md:justify-start mb-4">
            <h1 
              className="text-3xl sm:text-4xl md:text-6xl font-medium text-snow leading-none tracking-tighter"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {journey.title}
            </h1>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-forest-glow bg-forest-glow/10 border border-forest-glow/20 px-2.5 py-1 rounded-[2px] self-center md:self-baseline">
              {journey.badge}
            </span>
          </div>

          {/* Route path */}
          <p className="text-xs sm:text-sm text-parchment/65 font-light tracking-wide max-w-2xl mx-auto md:mx-0">
            Route: {journey.route}
          </p>

          {/* Core Stats Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-snow bg-white/[0.02] border border-white/[0.04] px-3.5 py-1.5 rounded-[2px] mono-number">
              {journey.duration}
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-forest-glow bg-white/[0.02] border border-white/[0.04] px-3.5 py-1.5 rounded-[2px] mono-number">
              {journey.price}
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation Bar */}
      <div className="sticky top-[71px] z-[900] bg-background/80 backdrop-blur-xl border-t border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between overflow-x-auto gap-8 text-[10px] font-medium tracking-[0.2em] uppercase">
          <div className="flex items-center gap-6 sm:gap-10 shrink-0">
            <button
              onClick={() => scrollToSection(overviewRef, "overview")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "overview" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              OVERVIEW
            </button>
            <button
              onClick={() => scrollToSection(routeRef, "route")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "route" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              ROUTE MAP
            </button>
            <button
              onClick={() => scrollToSection(itineraryRef, "itinerary")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "itinerary" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              ITINERARY
            </button>
            {localStays.length > 0 && (
              <button
                onClick={() => scrollToSection(staysRef, "stays")}
                className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "stays" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
              >
                STAYS
              </button>
            )}
            <button
              onClick={() => scrollToSection(inclusionsRef, "inclusions")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "inclusions" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              INCLUSIONS
            </button>
          </div>
          
          <a
            href={`https://wa.me/917560065963?text=Hi%20Trail%20Core%2C%20I%20am%20interested%20in%20inquiring%20about%20the%20${encodeURIComponent(journey.title)}%20expedition.%20Is%20there%20availability%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-1.5 px-4 text-[9px] tracking-widest uppercase shrink-0"
          >
            INQUIRE VIA WHATSAPP
          </a>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column (Sticky Sidebar Registry) */}
          <aside className="lg:col-span-4 space-y-10 self-start lg:sticky lg:top-40">
            
            {/* Meta Specifications */}
            <div className="border border-white/[0.03] bg-mountain-900/60 p-6 rounded-[2px] space-y-6">
              <h3 className="text-[10px] font-mono text-stone-light/40 tracking-[0.25em] uppercase border-b border-white/[0.03] pb-3">
                EXPEDITION REGISTRY
              </h3>
              
              <div className="grid grid-cols-2 gap-y-5 text-xs font-light">
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Duration</span>
                  <span className="text-snow font-medium uppercase text-[11px] tracking-wide">{journey.duration}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Difficulty</span>
                  <span className="text-snow font-medium uppercase text-[11px] tracking-wide">
                    {journey.difficulty}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Best Season</span>
                  <span className="text-forest-glow font-medium uppercase text-[11px] tracking-wide">
                    {journey.season}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Group Size</span>
                  <span className="text-snow font-medium text-[11px] tracking-wide">{journey.groupSize} travelers</span>
                </div>
              </div>

              {/* Dynamic Pricing Selector */}
              {journey.pricingOptions && (
                <div className="pt-4 border-t border-white/[0.03] space-y-3">
                  <span className="block text-[9px] text-stone tracking-wider uppercase">Select Group Size Price</span>
                  <div className="flex gap-2">
                    {Object.keys(journey.pricingOptions).map((guestCount) => (
                      <button
                        key={guestCount}
                        onClick={() => setSelectedGuests(Number(guestCount))}
                        className={`flex-1 text-[10px] font-mono py-1 rounded-sm border cursor-pointer transition-all ${
                          selectedGuests === Number(guestCount)
                            ? "bg-forest-glow text-white border-forest-glow"
                            : "bg-white/[0.01] border-white/[0.08] text-stone-light/60 hover:border-white/[0.2]"
                        }`}
                      >
                        {journey.pricingOptions[guestCount].label}
                      </button>
                    ))}
                  </div>
                  <div className="text-xs pt-1 flex items-baseline justify-between font-light">
                    <span className="text-stone">Calculated Price:</span>
                    <span className="text-snow font-semibold text-sm mono-number">
                      ₹{activePricing.price} <span className="text-[10px] text-stone">/{activePricing.perPerson}</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Pinned Booking Form Card */}
            <div className="border border-white/[0.03] bg-mountain-900 p-6 rounded-[2px]">
              <h3 className="text-[10px] font-mono text-stone-light/40 tracking-[0.25em] uppercase border-b border-white/[0.03] pb-3 mb-5">
                REQUEST EXPEDITION SPOT
              </h3>
              
              {formSubmitted ? (
                <div className="text-center py-6">
                  <span className="text-forest-glow font-medium text-xs tracking-wider uppercase block mb-2">Request Lodged</span>
                  <p className="text-[11px] text-parchment/60 font-light">We will contact you via WhatsApp to coordinate customization and departure slots.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-stone">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs placeholder:text-stone-dark" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-stone">WhatsApp / Phone</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Include country code"
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs placeholder:text-stone-dark mono-number" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-stone">Month of Travel</label>
                    <select 
                      className="w-full bg-mountain-900 border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs"
                    >
                      <option value="june">June 2026</option>
                      <option value="july">July 2026</option>
                      <option value="august">August 2026</option>
                      <option value="september">September 2026</option>
                      <option value="other">Winter departures</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-outline w-full py-2.5 text-[9px] tracking-widest uppercase mt-4 cursor-pointer"
                  >
                    Request custom itinerary
                  </button>
                </form>
              )}
            </div>

          </aside>

          {/* Right Column (Scrollable Narrative Content) */}
          <main className="lg:col-span-8 space-y-24">
            
            {/* Overview Section */}
            <div ref={overviewRef} className="space-y-6">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                01 / OVERVIEW
              </span>
              <h2 
                className="text-2xl sm:text-3.5xl font-medium text-snow leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Expedition Philosophy.
              </h2>
              <div className="text-xs sm:text-[0.875rem] text-parchment leading-relaxed font-light space-y-6">
                <p>{journey.summary}</p>
                <p>
                  Trail Core designs journeys that prioritize pacing and local connection. We reject commercial tourist schedules, opting instead to stay in traditional wooden homestays, explore remote valleys on foot, and travel at a speed that allows proper acclimatization.
                </p>
              </div>
            </div>

            {/* Route Map Section */}
            <div ref={routeRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                02 / TRANSIT LOG & PATHWAY
              </span>
              
              <h2 className="text-xl font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                The Route Path
              </h2>

              <div className="border border-white/[0.03] bg-mountain-900/10 p-6 rounded-[2px] space-y-6">
                {/* Visual Linear Route profile */}
                <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-mono font-medium text-parchment tracking-wider uppercase">
                  {journey.route.split("→").map((stop, idx, arr) => (
                    <span key={idx} className="flex items-center gap-2.5">
                      <span className="bg-white/[0.02] border border-white/[0.08] px-2.5 py-1 rounded-sm">
                        {stop.trim()}
                      </span>
                      {idx < arr.length - 1 && <span className="text-forest-glow">→</span>}
                    </span>
                  ))}
                </div>
                
                {routeDestinations.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <span className="block text-[8px] font-mono text-stone-light/30 uppercase tracking-widest">Crossed Guides</span>
                    <div className="flex flex-wrap gap-2">
                      {routeDestinations.map((d) => (
                        <Link
                          key={d.id}
                          href={`/explore/${d.slug}`}
                          className="text-[9px] font-mono text-forest-glow bg-white/[0.01] border border-white/[0.04] hover:border-forest-glow/30 px-2 py-1 rounded-sm uppercase transition-colors"
                        >
                          {d.nav_label} Guide
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Daily Itinerary Section */}
            <div ref={itineraryRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                03 / DAY-BY-DAY TRANSIT LOG
              </span>
              
              <h2 className="text-xl font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                Detailed Itinerary
              </h2>

              {/* Day selection tabs */}
              <div className="flex flex-wrap gap-1.5 border-b border-white/[0.03] pb-4">
                {journey.itineraryDays.map((dayObj) => (
                  <button
                    key={dayObj.day}
                    onClick={() => setActiveDay(dayObj.day)}
                    className={`px-3 py-1.5 text-[10px] font-mono rounded-sm cursor-pointer transition-all border ${
                      activeDay === dayObj.day
                        ? "bg-white text-black border-white"
                        : "bg-white/[0.01] border-white/[0.03] text-stone hover:text-snow"
                    }`}
                  >
                    DAY 0{dayObj.day}
                  </button>
                ))}
              </div>

              {/* Active Day Details */}
              {journey.itineraryDays.map((dayObj) => {
                if (dayObj.day !== activeDay) return null;
                
                // Relational lookup for overnight stay
                const matchedStay = stays.find(s => s.id === dayObj.stay_id);
                
                return (
                  <div key={dayObj.day} className="space-y-6 pt-2 animate-fadeIn">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <h3 className="text-lg font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                        Day {dayObj.day}: {dayObj.title}
                      </h3>
                      <span className="text-[9px] font-mono text-stone uppercase tracking-wider bg-white/[0.02] border border-white/[0.03] px-2 py-0.5 rounded-sm">
                        {dayObj.transit}
                      </span>
                    </div>
                    
                    <p className="text-xs text-parchment-dim leading-relaxed font-light font-mono italic">
                      {dayObj.shortDesc}
                    </p>
                    
                    <ul className="space-y-3.5 text-xs text-parchment font-light leading-relaxed pl-4 list-disc marker:text-forest-glow">
                      {dayObj.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 border-t border-white/[0.03] grid grid-cols-2 gap-4 text-[10px] font-mono">
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-stone-light/30 mb-0.5">Meal Plan</span>
                        <span className="text-snow uppercase">{dayObj.meals}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-stone-light/30 mb-0.5">Overnight Stay</span>
                        {matchedStay ? (
                          <Link
                            href={`/stays/${matchedStay.slug}`}
                            className="text-forest-glow hover:underline font-medium uppercase"
                          >
                            {dayObj.stay_name} (View Cabin)
                          </Link>
                        ) : (
                          <span className="text-snow uppercase">{dayObj.stay_name || "Camp / Guest House"}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Curated Stays Section */}
            {localStays.length > 0 && (
              <div ref={staysRef} className="space-y-8 border-t border-white/[0.04] pt-16">
                <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                  04 / CURATED DWELLINGS
                </span>
                <h2 
                  className="text-2xl sm:text-3.5xl font-medium text-snow leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Dwellings Utilized
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {localStays.map((stay) => (
                    <div key={stay.id} className="border border-white/[0.02] bg-white/[0.01] rounded-[2px] p-4 space-y-4 hover:border-white/[0.06] transition-all duration-300">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mountain-900 rounded-sm">
                        <Image
                          src={stay.img}
                          alt={stay.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-xs font-semibold text-snow">{stay.name}</h4>
                          <span className="text-[9px] font-mono text-forest-glow">{stay.type}</span>
                        </div>
                        <p className="text-[10px] text-stone font-light leading-relaxed">{stay.summary}</p>
                      </div>
                      <Link
                        href={`/stays/${stay.slug}`}
                        className="btn-outline w-full text-center block py-1.5 text-[8px] tracking-widest uppercase rounded-[2px]"
                      >
                        View Stay Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included & Excluded */}
            <div ref={inclusionsRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                05 / EXCLUSIVITY & GUIDELINES
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-light">
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-stone-light/40 tracking-wider uppercase border-b border-white/[0.03] pb-2">What is Included</h3>
                  <ul className="space-y-2 pl-4 list-disc marker:text-forest-glow text-parchment/85 leading-relaxed">
                    {journey.includes.map((inc) => (
                      <li key={inc}>{inc}</li>
                    ))}
                  </ul>
                </div>
                
                {journey.pricingOptions && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono text-stone-light/40 tracking-wider uppercase border-b border-white/[0.03] pb-2">Excluded Logs</h3>
                    <ul className="space-y-2 pl-4 list-disc marker:text-accent-warm text-parchment/65 leading-relaxed">
                      <li>Onward travel flights/trains to starting destination</li>
                      <li>Lunches along route stops</li>
                      <li>Personal expenses, beverages and tips</li>
                      <li>Monastery entrance and camera logs</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Safety & Altitude Notice */}
              {journey.safety_notes && (
                <div className="p-5 bg-white/[0.01] border border-white/[0.03] rounded-[2px] flex gap-4 items-start mt-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-warm mt-1.5 shrink-0 animate-pulse" />
                  <p className="text-[11px] text-parchment/65 leading-relaxed font-light">
                    <span className="text-accent-warm font-semibold">Safety Log:</span> {journey.safety_notes} Consult our guide on Himalayan acclimatization (AMS) before departure.
                  </p>
                </div>
              )}
            </div>

            {/* Photo Essay Section */}
            {journey.galleryImages && (
              <div className="border-t border-white/[0.04] pt-16 space-y-8">
                <span className="text-[9px] font-mono text-stone-light/40 tracking-[0.25em] uppercase block">
                  JOURNEY ESSAY
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {journey.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-[2px] border border-white/[0.03] overflow-hidden group">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-mountain-900/80 px-2 py-1 text-[8px] text-parchment/65 tracking-wider uppercase rounded-sm">
                        {img.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
