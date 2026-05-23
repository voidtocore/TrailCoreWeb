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
      <section className="relative pt-36 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Custom Expedition" title="Design Your Journey" description="Tell us your vision and we'll craft a bespoke Himalayan expedition tailored to your pace, interests, and season." />
        </div>
      </section>

      {/* How it works */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: "01", title: "Share Your Vision", desc: "Tell us your dates, interests, and travel style." },
              { step: "02", title: "We Curate", desc: "Our specialists design a personalized itinerary." },
              { step: "03", title: "You Explore", desc: "Embark on a journey crafted just for you." },
            ].map((s) => (
              <StaggerItem key={s.step}>
                <div className="glass rounded-xl p-7 text-center hover:border-white/[0.08] transition-all duration-500">
                  <span className="text-3xl font-semibold text-forest-glow/20" style={{ fontFamily: "var(--font-outfit)" }}>{s.step}</span>
                  <h3 className="text-base font-semibold text-snow/90 mt-3 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{s.title}</h3>
                  <p className="text-sm text-stone/40 font-light">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="glass rounded-xl p-8 md:p-10">
              <h3 className="text-lg font-semibold text-snow/90 mb-8" style={{ fontFamily: "var(--font-outfit)" }}>Expedition Planner</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Phone *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500" placeholder="+91 75600 65963" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Expedition Type</label>
                  <select value={form.tripType} onChange={(e) => setForm({ ...form, tripType: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm focus:outline-none focus:border-forest/30 transition-colors duration-500">
                    <option value="" className="bg-mountain-900">Select type</option>
                    {tripTypes.map((t) => <option key={t} value={t} className="bg-mountain-900">{t}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Duration (days)</label>
                    <input type="number" min="1" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500" placeholder="7" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Budget Range</label>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm focus:outline-none focus:border-forest/30 transition-colors duration-500">
                      <option value="" className="bg-mountain-900">Select budget</option>
                      {["₹10,000 – ₹20,000", "₹20,000 – ₹35,000", "₹35,000 – ₹50,000", "₹50,000+"].map((b) => <option key={b} value={b} className="bg-mountain-900">{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Start Date</label>
                    <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm focus:outline-none focus:border-forest/30 transition-colors duration-500" />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-[11px] text-stone/40 mb-2.5 tracking-wide uppercase">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide border transition-all duration-300 ${
                          form.interests.includes(interest)
                            ? "bg-forest/20 border-forest/30 text-forest-glow"
                            : "bg-white/[0.03] border-white/[0.06] text-stone/40 hover:border-white/[0.1]"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Additional Notes</label>
                  <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500 resize-none" placeholder="Any specific requirements or preferences..." />
                </div>

                <button type="submit" className="w-full py-3.5 bg-forest/80 hover:bg-forest-light/80 text-white/90 font-medium tracking-wide rounded-lg transition-all duration-500 border border-forest-light/20">
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
