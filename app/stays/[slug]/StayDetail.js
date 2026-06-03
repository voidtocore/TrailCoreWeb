"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";
import { destinations } from "@/data/destinations";
import { expeditions } from "@/data/expeditions";
import { stays } from "@/data/stays";

export default function StayDetail({ stay }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const overviewRef = useRef(null);
  const hostRef = useRef(null);
  const galleryRef = useRef(null);
  const specsRef = useRef(null);
  const experiencesRef = useRef(null);

  // Relational lookups
  const parentDestination = destinations.find(d => d.id === stay.destination_id);
  const localJourneys = expeditions.filter(exp => exp.destination_ids && exp.destination_ids.includes(stay.destination_id));
  const nearbyStays = stays.filter(s => s.destination_id === stay.destination_id && s.id !== stay.id).slice(0, 2);

  // Simple scroll spy to set active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (experiencesRef.current && scrollPosition >= experiencesRef.current.offsetTop) {
        setActiveTab("experiences");
      } else if (specsRef.current && scrollPosition >= specsRef.current.offsetTop) {
        setActiveTab("specs");
      } else if (galleryRef.current && scrollPosition >= galleryRef.current.offsetTop) {
        setActiveTab("gallery");
      } else if (hostRef.current && scrollPosition >= hostRef.current.offsetTop) {
        setActiveTab("host");
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

  return (
    <>
      {/* 1. Hero Block */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-background pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={stay.img}
            alt={stay.name}
            fill
            className="object-cover cinematic-image scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center md:text-left">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center md:justify-start gap-2 text-[10px] font-mono tracking-widest text-parchment/40 uppercase">
            <Link href="/" className="hover:text-forest-glow transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/explore" className="hover:text-forest-glow transition-colors">EXPLORE</Link>
            <span>/</span>
            {parentDestination && (
              <>
                <Link href={`/explore/${parentDestination.slug}`} className="hover:text-forest-glow transition-colors">
                  {parentDestination.nav_label}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-snow">{stay.name}</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 justify-center md:justify-start mb-4">
            <h1 
              className="text-3xl sm:text-4xl md:text-6xl font-medium text-snow leading-none tracking-tighter"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {stay.name}
            </h1>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-forest-glow bg-forest-glow/10 border border-forest-glow/20 px-2.5 py-1 rounded-[2px] self-center md:self-baseline">
              {stay.type}
            </span>
          </div>

          {/* Core Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
            {parentDestination && (
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-light/40 bg-white/[0.01] border border-white/[0.02] px-3.5 py-1.5 rounded-[2px] mono-number">
                {parentDestination.altitude_text} ALTITUDE
              </span>
            )}
            <span className="text-[10px] font-mono tracking-widest uppercase text-forest-glow bg-white/[0.02] border border-white/[0.04] px-3.5 py-1.5 rounded-[2px] mono-number">
              ₹{stay.base_price_per_night} / NIGHT
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
              onClick={() => scrollToSection(hostRef, "host")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "host" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              HOST STORY
            </button>
            <button
              onClick={() => scrollToSection(galleryRef, "gallery")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "gallery" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection(specsRef, "specs")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "specs" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              SPECS & HEATING
            </button>
            <button
              onClick={() => scrollToSection(experiencesRef, "experiences")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "experiences" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              EXPERIENCES
            </button>
          </div>
          
          <a
            href={`https://wa.me/917560065963?text=Hi%20Trail%20Core%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(stay.name)}%20for%20a%20stay.%20Is%20this%20available%3F`}
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
                STAY REGISTRY
              </h3>
              
              <div className="grid grid-cols-2 gap-y-5 text-xs font-light">
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Stay Category</span>
                  <span className="text-snow font-medium uppercase text-[11px] tracking-wide">{stay.type}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Capacity</span>
                  <span className="text-snow font-medium uppercase text-[11px] tracking-wide mono-number">
                    {stay.guest_capacity} Guests max
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Winter Status</span>
                  <span className="text-forest-glow font-medium uppercase text-[11px] tracking-wide">
                    {stay.is_winter_ready ? "WINTER READY" : "SEASONAL CLOSURE"}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Base Price</span>
                  <span className="text-snow font-medium text-[11px] tracking-wide mono-number">₹{stay.base_price_per_night} / night</span>
                </div>
              </div>

              {/* Acclimatization Safety Notice */}
              {parentDestination && parentDestination.altitude_m > 3000 && (
                <div className="pt-4 border-t border-white/[0.03] flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-warm mt-1.5 shrink-0 animate-pulse" />
                  <p className="text-[11px] text-parchment/65 leading-relaxed font-light">
                    <span className="text-accent-warm font-semibold">High Altitude:</span> At {parentDestination.altitude_text}, acclimatization is essential. We recommend a minimum of 2 days at lower heights before arrival.
                  </p>
                </div>
              )}
            </div>

            {/* Pinned Booking Form Card */}
            <div className="border border-white/[0.03] bg-mountain-900 p-6 rounded-[2px]">
              <h3 className="text-[10px] font-mono text-stone-light/40 tracking-[0.25em] uppercase border-b border-white/[0.03] pb-3 mb-5">
                REQUEST BOOKING DATES
              </h3>
              
              {formSubmitted ? (
                <div className="text-center py-6">
                  <span className="text-forest-glow font-medium text-xs tracking-wider uppercase block mb-2">Request Lodged</span>
                  <p className="text-[11px] text-parchment/60 font-light">Our bookings team will reach out via WhatsApp shortly to coordinate availability.</p>
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-stone">Check-In</label>
                      <input 
                        type="date"
                        required
                        className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs mono-number"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-stone">Guests</label>
                      <select 
                        className="w-full bg-mountain-900 border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs"
                      >
                        {[...Array(stay.guest_capacity)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? "Guest" : "Guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-outline w-full py-2.5 text-[9px] tracking-widest uppercase mt-4 cursor-pointer"
                  >
                    Send Stay Request
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
                Alpine Solitude.
              </h2>
              <div className="text-xs sm:text-[0.875rem] text-parchment leading-relaxed font-light space-y-6">
                <p className="whitespace-pre-line">{stay.description}</p>
              </div>
            </div>

            {/* Host Profile Section */}
            <div ref={hostRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                02 / THE HOST STORY
              </span>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 rounded-full border border-white/[0.08] overflow-hidden shrink-0 relative">
                  <div className="absolute inset-0 bg-mountain-900 flex items-center justify-center text-forest-glow font-bold text-2xl font-mono">
                    {stay.host.name[0]}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                    Hosted by {stay.host.name}
                  </h3>
                  <p className="text-xs sm:text-[0.8125rem] text-parchment-dim leading-relaxed font-light">
                    {stay.host.story_summary}
                  </p>
                  {stay.traditional_meals.offered && (
                    <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-[2px] text-xs font-light text-parchment">
                      <span className="text-forest-glow font-semibold block text-[10px] uppercase tracking-wider mb-1">
                        MEAL SERVICE: {stay.traditional_meals.pricing.replace(/_/g, " ")}
                      </span>
                      {stay.traditional_meals.cuisine_description}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Photo Essay Section */}
            <div ref={galleryRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-stone-light/40 tracking-[0.25em] uppercase block">
                03 / PHOTO ESSAY
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stay.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-[2px] border border-white/[0.03] overflow-hidden group">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-[1000ms] group-hover:scale-102"
                    />
                    <div className="absolute bottom-3 left-3 bg-mountain-900/80 px-2 py-1 text-[8px] text-parchment/65 tracking-wider uppercase rounded-sm">
                      {img.credit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs & Winter Readiness */}
            <div ref={specsRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                04 / DETAILS & AMENITIES
              </span>
              
              <h2 className="text-xl font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                Infrastructure Specs
              </h2>

              <div className="border border-white/[0.03] rounded-[2px] overflow-hidden text-xs font-light">
                <div className="grid grid-cols-2 border-b border-white/[0.03] p-4 bg-mountain-900/10">
                  <span className="text-stone">Heating Setup</span>
                  <span className="text-snow font-medium uppercase">{stay.heating_type}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/[0.03] p-4">
                  <span className="text-stone">Winter Availability</span>
                  <span className="text-snow font-medium uppercase">{stay.is_winter_ready ? "Available Year-Round" : "Closed in Winter"}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/[0.03] p-4 bg-mountain-900/10">
                  <span className="text-stone">Wifi Broadband</span>
                  <span className="text-snow font-medium uppercase">
                    {stay.connectivity.wifi ? `${stay.connectivity.speed_mbps} Mbps Broadband` : "Offline retreat"}
                  </span>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <span className="text-stone">Mobile Network Signal</span>
                  <span className="text-snow font-medium uppercase">{stay.connectivity.mobile} Coverage</span>
                </div>
              </div>
            </div>

            {/* Experiences & Activities */}
            <div ref={experiencesRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                05 / LOCAL EXPERIENCES
              </span>
              
              <h2 className="text-xl font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                Experiential Vibe Tags
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stay.vibe_tags.map((vibe, idx) => (
                  <div key={vibe} className="border border-white/[0.03] p-4 bg-mountain-900/20 rounded-[2px] space-y-2">
                    <span className="text-[10px] font-mono text-forest-glow font-semibold tracking-wider block">
                      0{idx + 1}
                    </span>
                    <span className="text-xs text-snow font-medium uppercase block">
                      {vibe.replace(/-/g, " ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Context & Passing Journeys */}
            {parentDestination && (
              <div className="space-y-8 border-t border-white/[0.04] pt-16">
                <span className="text-[9px] font-mono text-stone-light/40 tracking-[0.25em] uppercase block">
                  REGIONAL INTEGRATION
                </span>
                
                <div className="border border-white/[0.03] bg-mountain-900/20 p-6 rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                      Located in {parentDestination.name}
                    </h3>
                    <p className="text-xs text-parchment-dim font-light leading-relaxed">
                      {parentDestination.desc}
                    </p>
                  </div>
                  <Link
                    href={`/explore/${parentDestination.slug}`}
                    className="btn-outline px-4 py-2 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all shrink-0 rounded-[2px]"
                  >
                    Explore Guide
                  </Link>
                </div>

                {localJourneys.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h4 className="text-xs font-mono text-stone-light/40 tracking-wider uppercase">
                      Featured overnight stop in:
                    </h4>
                    
                    <div className="space-y-3">
                      {localJourneys.map(journey => (
                        <div key={journey.title} className="border border-white/[0.02] bg-white/[0.01] p-4 rounded-[2px] flex items-center justify-between gap-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-medium text-snow">{journey.title}</span>
                            <span className="block text-[8px] font-mono text-stone">{journey.duration} · {journey.difficulty}</span>
                          </div>
                          <Link
                            href={journey.slug ? `/packages/${journey.slug}` : "/contact"}
                            className="btn-outline px-3 py-1.5 text-[8px] tracking-widest uppercase hover:bg-forest-glow transition-all rounded-[2px]"
                          >
                            View Trip
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Related Stays */}
            {nearbyStays.length > 0 && (
              <div className="space-y-8 border-t border-white/[0.04] pt-16">
                <span className="text-[9px] font-mono text-stone-light/40 tracking-[0.25em] uppercase block">
                  OTHER QUIET ESCAPES
                </span>
                <h3 className="text-lg font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                  Alternative solitudes in this valley
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nearbyStays.map(nst => (
                    <div key={nst.id} className="border border-white/[0.02] bg-white/[0.01] rounded-[2px] p-4 space-y-4 hover:border-white/[0.06] transition-all duration-300">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mountain-900 rounded-sm">
                        <Image
                          src={nst.img}
                          alt={nst.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-xs font-semibold text-snow">{nst.name}</h4>
                          <span className="text-[9px] font-mono text-forest-glow">₹{nst.base_price_per_night}</span>
                        </div>
                        <p className="text-[10px] text-stone font-light leading-relaxed">{nst.summary}</p>
                      </div>
                      <Link
                        href={`/stays/${nst.slug}`}
                        className="btn-outline w-full text-center block py-1.5 text-[8px] tracking-widest uppercase rounded-[2px]"
                      >
                        View Details
                      </Link>
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
