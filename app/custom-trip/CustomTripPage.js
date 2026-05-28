"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const tripTypes = ["Road Expedition", "Trekking Expedition", "Mountain Retreat", "Photography Journey", "Cultural Exploration"];
const interestOptions = ["Monasteries", "High Passes", "Camping", "Stargazing", "Photography", "Trekking", "Local Cuisine", "River Valleys", "Heritage Sites", "Snowfall"];

export default function CustomTripPage() {
  const [form, setForm] = useState({
    name: "", phone: "", tripType: "", duration: "", budget: "", interests: [], startDate: "", notes: "",
  });

  const toggleInterest = (interest) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Trail Core! I want to plan a custom expedition.\n\nName: ${form.name}\nPhone: ${form.phone}\nTrip Type: ${form.tripType}\nDuration: ${form.duration} days\nBudget: ${form.budget}\nInterests: ${form.interests.join(", ")}\nStart Date: ${form.startDate}\nNotes: ${form.notes}`;
    window.open(`https://wa.me/917560065963?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <section className="relative pt-36 pb-20 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d110e]/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            label="Custom Expedition" 
            title="Design Your Journey" 
            description="Tell us your vision and we'll craft a bespoke Himalayan expedition tailored to your pace, interests, and season." 
          />
        </div>
      </section>

      {/* How it works */}
      <section className="pb-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Share Your Vision", desc: "Tell us your dates, interests, and travel style." },
              { step: "02", title: "We Curate", desc: "Our specialists design a personalized itinerary." },
              { step: "03", title: "You Explore", desc: "Embark on a journey crafted just for you." },
            ].map((s) => (
              <StaggerItem key={s.step}>
                <div className="border-t border-white/[0.05] pt-6">
                  <span className="text-[10px] font-mono text-forest-glow/60 mono-number block mb-4">
                    {s.step}
                  </span>
                  <h3 className="text-sm font-medium text-snow mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs text-parchment-dim font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form */}
      <section className="pb-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="editorial-surface p-8 sm:p-10">
              <h3 className="text-base font-semibold text-snow mb-8 uppercase tracking-wider" style={{ fontFamily: "var(--font-outfit)" }}>
                Expedition Planner
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })} 
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Phone *</label>
                    <input 
                      type="tel" 
                      required 
                      value={form.phone} 
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark mono-number" 
                      placeholder="+91 75600 65963" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] text-forest-glow/70 mb-1.5 tracking-widest uppercase font-medium">Expedition Type</label>
                  <div className="relative">
                    <select 
                      value={form.tripType} 
                      onChange={(e) => setForm({ ...form, tripType: e.target.value })} 
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-mountain-900">Select type</option>
                      {tripTypes.map((t) => <option key={t} value={t} className="bg-mountain-900">{t}</option>)}
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Duration (days)</label>
                    <input 
                      type="number" 
                      min="1" 
                      value={form.duration} 
                      onChange={(e) => setForm({ ...form, duration: e.target.value })} 
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark mono-number" 
                      placeholder="7" 
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-forest-glow/70 mb-1.5 tracking-widest uppercase font-medium">Budget Range</label>
                    <div className="relative">
                      <select 
                        value={form.budget} 
                        onChange={(e) => setForm({ ...form, budget: e.target.value })} 
                        className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-mountain-900">Select budget</option>
                        {["₹10,000 – ₹20,000", "₹20,000 – ₹35,000", "₹35,000 – ₹50,000", "₹50,000+"].map((b) => <option key={b} value={b} className="bg-mountain-900">{b}</option>)}
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Start Date</label>
                    <input 
                      type="date" 
                      value={form.startDate} 
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })} 
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm cursor-pointer mono-number" 
                    />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-[9px] text-forest-glow/70 mb-3 tracking-widest uppercase font-medium">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3.5 py-1.5 rounded-full text-[10px] font-medium tracking-wide border transition-all duration-300 cursor-pointer ${
                          form.interests.includes(interest)
                            ? "bg-accent-warm/15 border-accent-warm/35 text-accent-warm"
                            : "bg-transparent border-white/[0.08] text-parchment-dim hover:border-white/[0.15]"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Additional Notes</label>
                  <textarea 
                    rows={3} 
                    value={form.notes} 
                    onChange={(e) => setForm({ ...form, notes: e.target.value })} 
                    className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark resize-none" 
                    placeholder="Any specific requirements or preferences..." 
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full btn-outline text-[10px] tracking-widest py-3.5"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
