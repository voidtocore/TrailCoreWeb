"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/Animations";

const tripTypes = ["Road Trip", "Spiti Circuit", "Adventure Trek", "Honeymoon", "Family Trip", "Solo Backpacking"];
const budgetRanges = ["Budget (Under ₹10K)", "Mid-Range (₹10K-₹20K)", "Premium (₹20K-₹40K)", "Luxury (₹40K+)"];
const interests = ["Trekking", "Camping", "Photography", "Monasteries", "Snow Activities", "Cafes & Food", "Wildlife", "Local Culture"];

export default function CustomTripPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", tripType: "", duration: "", budget: "", interests: [], startDate: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (i) => {
    setForm((f) => ({ ...f, interests: f.interests.includes(i) ? f.interests.filter((x) => x !== i) : [...f.interests, i] }));
  };

  const handleSubmit = () => {
    const msg = `Hi CoreTrail! I want to plan a custom trip.\n\nName: ${form.name}\nPhone: ${form.phone}\nTrip Type: ${form.tripType}\nDuration: ${form.duration} days\nBudget: ${form.budget}\nInterests: ${form.interests.join(", ")}\nStart Date: ${form.startDate}\nNotes: ${form.notes}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-10 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Custom Trip" title="Design Your Perfect Journey" description="Tell us what you dream of and we'll craft a personalized Himachal itinerary just for you." />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <FadeIn>
              <div className="glass rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-snow">Your Trip Request is Sent!</h3>
                <p className="text-slate-400 mt-3">Our travel expert will reach out within 30 minutes to start planning your custom Himachal journey.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-7 py-3 bg-[#25D366] text-white font-medium rounded-full">Chat on WhatsApp Now</a>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="glass rounded-2xl p-8">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1 flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-forest text-white" : "bg-white/5 text-slate-500"}`}>{s}</div>
                      {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? "bg-forest" : "bg-white/10"}`} />}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-snow">About You</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-300 mb-1.5">Your Name *</label>
                        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors" placeholder="Full name" />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">Trip Type</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {tripTypes.map((t) => (
                          <button key={t} type="button" onClick={() => setForm({ ...form, tripType: t })} className={`px-4 py-2.5 rounded-xl text-sm transition-all ${form.tripType === t ? "bg-forest text-white border-forest" : "bg-white/5 text-slate-300 border border-white/10 hover:border-forest/30"}`}>{t}</button>
                        ))}
                      </div>
                    </div>
                    <button onClick={() => setStep(2)} disabled={!form.name || !form.phone} className="w-full py-3 bg-forest hover:bg-forest-light text-white font-medium rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed">Next: Trip Details</button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-snow">Trip Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-300 mb-1.5">Duration (days)</label>
                        <input type="number" min="2" max="30" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm focus:outline-none focus:border-forest/50 transition-colors" placeholder="e.g. 7" />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-300 mb-1.5">Start Date</label>
                        <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm focus:outline-none focus:border-forest/50 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">Budget (per person)</label>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetRanges.map((b) => (
                          <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })} className={`px-4 py-2.5 rounded-xl text-sm transition-all ${form.budget === b ? "bg-forest text-white" : "bg-white/5 text-slate-300 border border-white/10 hover:border-forest/30"}`}>{b}</button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(1)} className="flex-1 py-3 border border-white/10 text-slate-300 font-medium rounded-xl transition-all hover:bg-white/5">Back</button>
                      <button onClick={() => setStep(3)} className="flex-1 py-3 bg-forest hover:bg-forest-light text-white font-medium rounded-xl transition-all">Next: Interests</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-snow">Your Interests</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {interests.map((i) => (
                        <button key={i} type="button" onClick={() => toggleInterest(i)} className={`px-4 py-2.5 rounded-xl text-sm transition-all ${form.interests.includes(i) ? "bg-forest text-white" : "bg-white/5 text-slate-300 border border-white/10 hover:border-forest/30"}`}>{i}</button>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1.5">Anything else?</label>
                      <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors resize-none" placeholder="Special requests, dietary needs, accessibility requirements..." />
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(2)} className="flex-1 py-3 border border-white/10 text-slate-300 font-medium rounded-xl transition-all hover:bg-white/5">Back</button>
                      <button onClick={handleSubmit} className="flex-1 py-3 bg-forest hover:bg-forest-light text-white font-medium rounded-xl transition-all">Send via WhatsApp</button>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
