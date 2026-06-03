"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

export default function DestinationDetail({ dest }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const overviewRef = useRef(null);
  const highlightsRef = useRef(null);
  const reachRef = useRef(null);

  // Simple scroll spy to set active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (reachRef.current && scrollPosition >= reachRef.current.offsetTop) {
        setActiveTab("reach");
      } else if (highlightsRef.current && scrollPosition >= highlightsRef.current.offsetTop) {
        setActiveTab("highlights");
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
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-background pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={dest.img}
            alt={dest.name}
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
            <span className="text-snow">{dest.nav_label}</span>
          </div>

          {/* Heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-medium text-snow leading-none tracking-tighter"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {dest.name}
          </h1>

          {/* High Altitude Badge */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-forest-glow bg-white/[0.02] border border-white/[0.04] px-3.5 py-1.5 rounded-[2px] mono-number">
              {dest.altitude_text} ALTITUDE
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-stone-light/40 bg-white/[0.01] border border-white/[0.02] px-3.5 py-1.5 rounded-[2px]">
              {dest.district.replace("_", " ")} DISTRICT
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
              onClick={() => scrollToSection(highlightsRef, "highlights")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "highlights" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              HIGHLIGHTS
            </button>
            <button
              onClick={() => scrollToSection(reachRef, "reach")}
              className={`py-4 border-b transition-colors cursor-pointer ${activeTab === "reach" ? "border-accent-warm text-snow" : "border-transparent text-parchment/40 hover:text-snow"}`}
            >
              HOW TO REACH
            </button>
          </div>
          
          <a
            href="https://wa.me/917560065963"
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
                REGISTRY SPECIFICATIONS
              </h3>
              
              <div className="grid grid-cols-2 gap-y-5 text-xs font-light">
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Access Status</span>
                  <span className="text-snow font-medium uppercase text-[11px] tracking-wide">{dest.road_access.replace(/_/g, " ")}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Connectivity</span>
                  <span className="text-snow font-medium uppercase text-[11px] tracking-wide">
                    {dest.connectivity.mobile} Mobile {dest.connectivity.wifi ? "/ Wifi" : ""}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Offgrid Rating</span>
                  <span className="text-forest-glow font-medium uppercase text-[11px] tracking-wide">{dest.is_offgrid ? "HIGH / OFFGRID" : "MODERATE"}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-stone tracking-wider uppercase mb-1">Elevation</span>
                  <span className="text-snow font-medium text-[11px] tracking-wide mono-number">{dest.altitude_text}</span>
                </div>
              </div>

              {/* Acclimatization Safety Notice */}
              {dest.altitude_m > 3000 && (
                <div className="pt-4 border-t border-white/[0.03] flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-warm mt-1.5 shrink-0 animate-pulse" />
                  <p className="text-[11px] text-parchment/65 leading-relaxed font-light">
                    <span className="text-accent-warm font-semibold">High Altitude Warning:</span> Acclimatization is mandatory at this elevation. Please review our safety guidelines before planning your journey.
                  </p>
                </div>
              )}
            </div>

            {/* Sticky Inquiry Card */}
            <div className="border border-white/[0.03] bg-mountain-900 p-6 rounded-[2px]">
              <h3 className="text-[10px] font-mono text-stone-light/40 tracking-[0.25em] uppercase border-b border-white/[0.03] pb-3 mb-5">
                EXPEDITION INQUIRY
              </h3>
              
              {formSubmitted ? (
                <div className="text-center py-6">
                  <span className="text-forest-glow font-medium text-xs tracking-wider uppercase block mb-2">Request Received</span>
                  <p className="text-[11px] text-parchment/60 font-light">Our Himalayan travel designers will connect with you via WhatsApp shortly.</p>
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
                      <option value="other">Winter 2026/27</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-outline w-full py-2.5 text-[9px] tracking-widest uppercase mt-4 cursor-pointer"
                  >
                    Inquire about {dest.nav_label}
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
                Slow down to the rhythm of {dest.name}.
              </h2>
              <div className="text-xs sm:text-[0.875rem] text-parchment leading-relaxed font-light space-y-6">
                <p>{dest.desc}</p>
                <p>
                  Trail Core designs itineraries that prioritize gradual ascent, safety, and deep local engagement. 
                  We skip the tourist checkpoints to introduce you to the silent corners of this region — the homestays run by local orchardists, the monastery valleys, and the ancient stone villages.
                </p>
              </div>
            </div>

            {/* Highlights Section */}
            <div ref={highlightsRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                02 / LOCAL EXPERIENCES
              </span>
              <h2 
                className="text-2xl sm:text-3.5xl font-medium text-snow leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Why Visit {dest.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {dest.why_visit.map((item, idx) => (
                  <div key={idx} className="border border-white/[0.03] p-6 rounded-[2px] bg-mountain-900/20 flex gap-4">
                    <span className="text-[10px] font-mono text-forest-glow/60 mono-number mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs text-parchment-dim leading-relaxed font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Reach Section */}
            <div ref={reachRef} className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                03 / TRANSIT & LOGISTICS
              </span>
              <h2 
                className="text-2xl sm:text-3.5xl font-medium text-snow leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                How to Reach
              </h2>

              <div className="space-y-6">
                {dest.how_to_reach.map((route, idx) => (
                  <div key={idx} className="border-l-2 border-forest-glow pl-6 space-y-3">
                    <span className="text-[9px] font-mono text-stone-light/40 tracking-[0.2em] uppercase block">
                      BY {route.mode} · {route.distance_km} KM DISTANCE
                    </span>
                    <p className="text-xs sm:text-[0.8125rem] text-parchment/80 leading-relaxed font-light">
                      {route.instructions}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Essay Gallery */}
            {dest.gallery && dest.gallery.length > 0 && (
              <div className="border-t border-white/[0.04] pt-16 space-y-8">
                <span className="text-[9px] font-mono text-stone-light/40 tracking-[0.25em] uppercase block">
                  GALLERY CHRONICLES
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dest.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-[4px] border border-white/[0.03] overflow-hidden group">
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
            )}

          </main>

        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
