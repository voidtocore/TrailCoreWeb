"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const valleyOptions = [
  { id: "spiti", name: "Spiti Valley", desc: "Cold mountain deserts & monasteries" },
  { id: "kinnaur", name: "Kinnaur Valley", desc: "Apple orchards & snow peak backdrops" },
  { id: "tirthan", name: "Tirthan Valley", desc: "Riverside woods & glacial streams" },
  { id: "lahaul", name: "Lahaul Valley", desc: "High passes & remote isolation" },
  { id: "shimla", name: "Shimla & Surrounds", desc: "Colonial walks & cedar catchment areas" }
];

const paceOptions = [
  { id: "slow", name: "Slow Retreat", desc: "Stillness, long stays, minimal transit" },
  { id: "expedition", name: "Road Expedition", desc: "Scenic loops, river crossings, mountain passes" },
  { id: "trekking", name: "High-Altitude Trekking", desc: "Footpaths, alpine lakes, ridge walking" }
];

const dwellingOptions = [
  { id: "homestay", name: "Traditional Homestays", desc: "Family-run mud & timber village homes" },
  { id: "cabin", name: "Isolated Cabins", desc: "Independent glass & pine retreats" },
  { id: "guesthouse", name: "Boutique Guesthouses", desc: "Comfortable local micro-inns" }
];

const connectivityOptions = [
  { id: "offline", name: "Offline Retreat", desc: "Zero network connectivity (Digital detox)" },
  { id: "4g", name: "4G Mobile Signal", desc: "Reliable mobile network coverage" },
  { id: "broadband", name: "Broadband Wifi", desc: "High-speed connection (Workation ready)" }
];

export default function CustomTripPage() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    valleys: [],
    pace: "expedition",
    duration: "Standard (5-8 Days)",
    month: "june",
    travelers: "Couple",
    dwellings: ["homestay"],
    connectivity: "4g",
    name: "",
    phone: "",
    notes: ""
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleValley = (valleyId) => {
    setForm(prev => ({
      ...prev,
      valleys: prev.valleys.includes(valleyId)
        ? prev.valleys.filter(v => v !== valleyId)
        : [...prev.valleys, valleyId]
    }));
  };

  const toggleDwelling = (dwellingId) => {
    setForm(prev => ({
      ...prev,
      dwellings: prev.dwellings.includes(dwellingId)
        ? prev.dwellings.filter(d => d !== dwellingId)
        : [...prev.dwellings, dwellingId]
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }
    
    // Final Submit Action
    const msg = `Hi Trail Core! I want to plan a custom expedition.\n\nName: ${form.name}\nPhone: ${form.phone}\nValleys: ${form.valleys.join(", ") || "Any"}\nPace: ${form.pace}\nDuration: ${form.duration}\nMonth: ${form.month}\nTravelers: ${form.travelers}\nStays: ${form.dwellings.join(", ") || "Any"}\nConnectivity: ${form.connectivity}\nNotes: ${form.notes}`;
    
    window.open(`https://wa.me/917560065963?text=${encodeURIComponent(msg)}`, "_blank");
    setFormSubmitted(true);
  };

  const faqs = [
    { q: "How does the custom planning process work?", a: "Once you submit your preferences, our Himalayan travel designers draft an initial route itinerary based on your pacing and altitude restrictions. We share this with you via WhatsApp, gather your feedback, and adjust details like accommodations and guides before finalizing reservations." },
    { q: "Do we need specific medical clearance for high Spiti routes?", a: "For routes crossing Kunzum Pass or staying in high Spiti villages (above 3,500m), you should be in good physical health. We recommend consulting a physician if you have pre-existing cardiovascular or respiratory issues. Acclimatization days are built into our routes by default." },
    { q: "What is your refund policy on custom bookings?", a: "Since we book local homestays and individual transporters directly, deposits are typically non-refundable within 30 days of travel. However, we allow date rescheduling free of charge up to 14 days before arrival if road blockages occur." }
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-36 pb-12 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            label="Custom Expedition" 
            title="Design Your Journey" 
            description="We design itineraries that respect the speed of the mountains — unhurried, safe, and authentic." 
          />
        </div>
      </section>

      {/* Trust-Building Strip */}
      <section className="border-t border-b border-white/[0.03] bg-mountain-900/40 py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left text-[10px] font-mono tracking-widest uppercase text-stone-light/50">
          <div>
            <span className="text-forest-glow mr-2">·</span> 100% TAILORED PACING
          </div>
          <div>
            <span className="text-forest-glow mr-2">·</span> ALTITUDE-FIRST SAFETY
          </div>
          <div>
            <span className="text-forest-glow mr-2">·</span> VERIFIED LOCAL HOSTS
          </div>
          <div>
            <span className="text-forest-glow mr-2">·</span> 4X4 MOUNTAIN TRANSIT
          </div>
        </div>
      </section>

      {/* Main 12-Column Dossier Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column (Sticky Sidebar Registry) */}
          <aside className="lg:col-span-4 space-y-10 self-start lg:sticky lg:top-40">
            
            {/* Step Progress Tracker */}
            <div className="border border-white/[0.03] bg-mountain-900/60 p-6 rounded-[2px] space-y-6">
              <h3 className="text-[10px] font-mono text-stone-light/40 tracking-[0.25em] uppercase border-b border-white/[0.03] pb-3">
                PLANNING WIZARD
              </h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className={`flex items-center gap-3 transition-colors ${step === 1 ? "text-accent-warm" : "text-stone-light/30"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>01 / STYLE & VALLEYS</span>
                </div>
                <div className={`flex items-center gap-3 transition-colors ${step === 2 ? "text-accent-warm" : "text-stone-light/30"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>02 / LOGISTICS & TIMELINE</span>
                </div>
                <div className={`flex items-center gap-3 transition-colors ${step === 3 ? "text-accent-warm" : "text-stone-light/30"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>03 / DWELLINGS & SPEC</span>
                </div>
                <div className={`flex items-center gap-3 transition-colors ${step === 4 ? "text-accent-warm" : "text-stone-light/30"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>04 / CONTACT DETAILS</span>
                </div>
              </div>

              {/* Trust Guidelines Box */}
              <div className="pt-4 border-t border-white/[0.03] space-y-3 text-[10px] text-parchment/65 leading-relaxed font-light">
                <span className="block text-[8px] font-mono text-stone-light/30 uppercase tracking-widest">Trust Protocols</span>
                <p>No credit card required. Initial custom itineraries are completely free and sent straight to your phone.</p>
              </div>
            </div>

          </aside>

          {/* Right Column (The Form Wizard & Narrative Sections) */}
          <main className="lg:col-span-8 space-y-24">
            
            {/* Form Section */}
            <div className="border border-white/[0.03] bg-mountain-900/20 p-8 rounded-[2px]">
              
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="text-forest-glow font-bold text-sm tracking-wider uppercase block">Expedition Request Lodged</span>
                  <h3 className="text-xl font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                    Check your WhatsApp shortly.
                  </h3>
                  <p className="text-xs text-parchment-dim max-w-md mx-auto leading-relaxed font-light">
                    Our Himalayan itinerary designers are reviewing your preferences and will message you a custom route draft within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setFormSubmitted(false); setStep(1); }} 
                    className="btn-outline px-6 py-2.5 text-[9px] tracking-widest uppercase cursor-pointer mt-6"
                  >
                    Design another route
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* STEP 1: STYLE & VALLEYS */}
                  {step === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-forest-glow tracking-widest uppercase">STEP 01</span>
                        <h3 className="text-lg font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                          Where would you like to explore?
                        </h3>
                      </div>
                      
                      {/* Valleys Checklist */}
                      <div className="space-y-3">
                        {valleyOptions.map((valley) => (
                          <button
                            key={valley.id}
                            type="button"
                            onClick={() => toggleValley(valley.id)}
                            className={`w-full text-left p-4 rounded-[2px] border transition-all cursor-pointer flex justify-between items-center ${
                              form.valleys.includes(valley.id)
                                ? "bg-white/[0.02] border-forest-glow text-snow"
                                : "bg-transparent border-white/[0.04] text-stone hover:border-white/[0.12]"
                            }`}
                          >
                            <div>
                              <span className="block text-xs font-semibold">{valley.name}</span>
                              <span className="text-[10px] text-stone-light/50 font-light mt-0.5 block">{valley.desc}</span>
                            </div>
                            <div className={`w-3.5 h-3.5 border rounded-sm flex items-center justify-center transition-all ${
                              form.valleys.includes(valley.id)
                                ? "border-forest-glow bg-forest-glow text-white"
                                : "border-white/[0.12]"
                            }`}>
                              {form.valleys.includes(valley.id) && (
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Travel Pace */}
                      <div className="space-y-3 pt-4">
                        <span className="block text-[9px] text-stone tracking-wider uppercase font-medium">Preferred Pace & Style</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {paceOptions.map((pace) => (
                            <button
                              key={pace.id}
                              type="button"
                              onClick={() => setForm({ ...form, pace: pace.id })}
                              className={`p-4 rounded-[2px] border text-left cursor-pointer transition-all ${
                                form.pace === pace.id
                                  ? "bg-white/[0.02] border-forest-glow text-snow"
                                  : "bg-transparent border-white/[0.04] text-stone hover:border-white/[0.12]"
                              }`}
                            >
                              <span className="block text-xs font-semibold uppercase tracking-wide">{pace.name}</span>
                              <span className="text-[9px] text-stone-light/40 font-light mt-2 block leading-relaxed">{pace.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: LOGISTICS & TIMELINE */}
                  {step === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-forest-glow tracking-widest uppercase">STEP 02</span>
                        <h3 className="text-lg font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                          Himalayan Logistics
                        </h3>
                      </div>

                      {/* Trip Duration */}
                      <div className="space-y-3">
                        <span className="block text-[9px] text-stone tracking-wider uppercase font-medium">Expedition Duration</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {["Short (3-4 Days)", "Standard (5-8 Days)", "Extended (9+ Days)"].map((dur) => (
                            <button
                              key={dur}
                              type="button; opacity"
                              onClick={() => setForm({ ...form, duration: dur })}
                              className={`p-4 rounded-[2px] border text-center cursor-pointer transition-all ${
                                form.duration === dur
                                  ? "bg-white/[0.02] border-forest-glow text-snow"
                                  : "bg-transparent border-white/[0.04] text-stone hover:border-white/[0.12]"
                              }`}
                            >
                              <span className="text-xs font-medium uppercase tracking-wide">{dur}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Travelers & Month */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase tracking-widest text-stone">Month of Travel</label>
                          <select 
                            value={form.month}
                            onChange={(e) => setForm({ ...form, month: e.target.value })}
                            className="w-full bg-mountain-900 border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-2 text-snow text-xs"
                          >
                            <option value="june">June 2026</option>
                            <option value="july">July 2026</option>
                            <option value="august">August 2026</option>
                            <option value="september">September 2026</option>
                            <option value="winter">Winter departures</option>
                          </select>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase tracking-widest text-stone">Group Size</label>
                          <select 
                            value={form.travelers}
                            onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                            className="w-full bg-mountain-900 border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-2 text-snow text-xs"
                          >
                            <option value="Solo">Solo Traveler</option>
                            <option value="Couple">Couple</option>
                            <option value="Private Group">Private Group (4-8)</option>
                            <option value="Family">Family / Multi-generational</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: DWELLINGS & SPEC */}
                  {step === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-forest-glow tracking-widest uppercase">STEP 03</span>
                        <h3 className="text-lg font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                          Dwellings & Specs
                        </h3>
                      </div>

                      {/* Accommodation style */}
                      <div className="space-y-3">
                        <span className="block text-[9px] text-stone tracking-wider uppercase font-medium">Bespoke Stays</span>
                        <div className="space-y-3">
                          {dwellingOptions.map((dwell) => (
                            <button
                              key={dwell.id}
                              type="button"
                              onClick={() => toggleDwelling(dwell.id)}
                              className={`w-full text-left p-4 rounded-[2px] border transition-all cursor-pointer flex justify-between items-center ${
                                form.dwellings.includes(dwell.id)
                                  ? "bg-white/[0.02] border-forest-glow text-snow"
                                  : "bg-transparent border-white/[0.04] text-stone hover:border-white/[0.12]"
                              }`}
                            >
                              <div>
                                <span className="block text-xs font-semibold">{dwell.name}</span>
                                <span className="text-[10px] text-stone-light/50 font-light mt-0.5 block">{dwell.desc}</span>
                              </div>
                              <div className={`w-3.5 h-3.5 border rounded-sm flex items-center justify-center transition-all ${
                                form.dwellings.includes(dwell.id)
                                  ? "border-forest-glow bg-forest-glow text-white"
                                  : "border-white/[0.12]"
                              }`}>
                                {form.dwellings.includes(dwell.id) && (
                                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Connectivity */}
                      <div className="space-y-3 pt-4">
                        <span className="block text-[9px] text-stone tracking-wider uppercase font-medium">Connectivity Levels</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {connectivityOptions.map((conn) => (
                            <button
                              key={conn.id}
                              type="button"
                              onClick={() => setForm({ ...form, connectivity: conn.id })}
                              className={`p-4 rounded-[2px] border text-left cursor-pointer transition-all ${
                                form.connectivity === conn.id
                                  ? "bg-white/[0.02] border-forest-glow text-snow"
                                  : "bg-transparent border-white/[0.04] text-stone hover:border-white/[0.12]"
                              }`}
                            >
                              <span className="block text-xs font-semibold uppercase tracking-wide">{conn.name}</span>
                              <span className="text-[9px] text-stone-light/40 font-light mt-2 block leading-relaxed">{conn.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: CONTACT DETAILS */}
                  {step === 4 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-forest-glow tracking-widest uppercase">STEP 04</span>
                        <h3 className="text-lg font-medium text-snow" style={{ fontFamily: "var(--font-outfit)" }}>
                          Expedition Contact Details
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="block text-[9px] text-stone tracking-widest uppercase mb-1">Full Name</label>
                          <input 
                            type="text" 
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs placeholder:text-stone-dark" 
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="block text-[9px] text-stone tracking-widest uppercase mb-1">WhatsApp / Phone</label>
                          <input 
                            type="tel" 
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="Include country code"
                            className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs placeholder:text-stone-dark mono-number" 
                          />
                        </div>
                      </div>

                      <div className="space-y-1 pt-4">
                        <label className="block text-[9px] text-stone tracking-widest uppercase mb-1">Additional Notes</label>
                        <textarea 
                          rows={3}
                          value={form.notes}
                          onChange={(e) => setForm({ ...form, notes: e.target.value })}
                          placeholder="Tell us about your fitness levels, dietary requirements, or specific peak view interests..."
                          className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none py-1.5 text-snow text-xs placeholder:text-stone-dark resize-none leading-relaxed font-light" 
                        />
                      </div>
                    </div>
                  )}

                  {/* Actions Row */}
                  <div className="pt-8 border-t border-white/[0.03] flex items-center justify-between">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline px-5 py-2 text-[9px] tracking-widest uppercase cursor-pointer"
                      >
                        ← Back
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      type="submit"
                      className="btn-outline px-6 py-2.5 text-[9px] tracking-widest uppercase bg-forest-glow text-white cursor-pointer"
                    >
                      {step === 4 ? "Send Inquiry via WhatsApp" : "Proceed →"}
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* How it Works timeline */}
            <div className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                THE PLANNING WORKFLOW
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-snow tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                From vision to mountain road
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "Share Your Vision", desc: "Select your valleys, pacing preferences, and accommodation specs via our planning form." },
                  { step: "02", title: "We Customize", desc: "Our specialists draft a detailed itinerary including transit timings and local homestay choices." },
                  { step: "03", title: "You Journey", desc: "We finalize bookings, assign our vetted mountain drivers, and manage all logistics on the ground." }
                ].map((s) => (
                  <div key={s.step} className="border border-white/[0.03] p-6 rounded-[2px] bg-mountain-900/10 space-y-4">
                    <span className="text-[10px] font-mono text-forest-glow/60 mono-number block">
                      {s.step}
                    </span>
                    <h3 className="text-xs font-semibold text-snow uppercase tracking-wide">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-parchment-dim font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Community Trust */}
            <div className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                ON THE GROUND COORDINATION
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-snow tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                Vetted Mountain Caretakers
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-light">
                <div className="p-6 border border-white/[0.03] bg-mountain-900/20 rounded-[2px] space-y-3">
                  <h3 className="text-sm font-semibold text-snow">Tenzin (Kibber Wildlife Guide)</h3>
                  <p className="text-parchment-dim leading-relaxed font-light">
                    "I have tracked wildlife in Spiti for twenty years. When you plan a custom trip to Kibber, I make sure you walk the trails safely and see the mountains through local eyes."
                  </p>
                </div>
                <div className="p-6 border border-white/[0.03] bg-mountain-900/20 rounded-[2px] space-y-3">
                  <h3 className="text-sm font-semibold text-snow">Ramesh (Kalpa Apple Orchardist)</h3>
                  <p className="text-parchment-dim leading-relaxed font-light">
                    "We welcome travelers into our orchards like family. Designing a custom stay with us means having wood-fire cooked Dham meals and waking up to Kinner Kailash views."
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-8 border-t border-white/[0.04] pt-16">
              <span className="text-[9px] font-mono text-forest-glow tracking-[0.25em] uppercase block">
                PLANNING GUIDELINES
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-snow tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-white/[0.03] rounded-[2px] bg-mountain-900/10 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between text-xs font-medium text-snow cursor-pointer hover:bg-white/[0.01]"
                    >
                      <span className="uppercase tracking-wide">{faq.q}</span>
                      <span className="text-forest-glow font-mono font-bold text-sm">
                        {activeFaq === idx ? "−" : "+"}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <div className="p-5 border-t border-white/[0.03] text-xs text-parchment-dim leading-relaxed font-light animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </main>

        </div>
      </section>
    </>
  );
}
