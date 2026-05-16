"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/Animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", destination: "", travelers: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi CoreTrail! I'd like to plan a trip.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDestination: ${formData.destination}\nTravelers: ${formData.travelers}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Contact" title="Let's Plan Your Trip" description="Reach out to us through any channel — we typically respond within 30 minutes during business hours." />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Methods */}
          <FadeIn direction="right" className="lg:col-span-2 space-y-6">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-[#25D366]/30 transition-all group block">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
              </div>
              <div>
                <h3 className="text-snow font-semibold">WhatsApp</h3>
                <p className="text-sm text-slate-400 mt-1">Fastest way to reach us</p>
                <p className="text-sm text-[#25D366] mt-1">+91 98765 43210</p>
              </div>
            </a>

            <a href="tel:+919876543210" className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-forest/30 transition-all group block">
              <div className="w-12 h-12 rounded-xl bg-forest/15 flex items-center justify-center shrink-0 group-hover:bg-forest/25 transition-colors">
                <svg className="w-6 h-6 text-forest-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="text-snow font-semibold">Phone</h3>
                <p className="text-sm text-slate-400 mt-1">Talk to our travel expert</p>
                <p className="text-sm text-forest-glow mt-1">+91 98765 43210</p>
              </div>
            </a>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-forest/15 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-forest-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="text-snow font-semibold">Email</h3>
                <p className="text-sm text-slate-400 mt-1">For detailed inquiries</p>
                <p className="text-sm text-forest-glow mt-1">hello@coretrail.in</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-forest/15 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-forest-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-snow font-semibold">Office</h3>
                <p className="text-sm text-slate-400 mt-1">Shimla, Himachal Pradesh, India</p>
              </div>
            </div>
          </FadeIn>

          {/* Inquiry Form */}
          <FadeIn direction="left" className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-snow mb-6">Send an Inquiry</h3>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="text-xl font-bold text-snow">Inquiry Sent!</h4>
                  <p className="text-slate-400 mt-2">We&apos;ll get back to you within 30 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2 bg-forest hover:bg-forest-light text-white text-sm rounded-full transition-all">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-slate-300 mb-1.5">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1.5">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-slate-300 mb-1.5">Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1.5">No. of Travelers</label>
                      <input type="number" min="1" value={formData.travelers} onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors" placeholder="2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">Preferred Destination</label>
                    <select value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm focus:outline-none focus:border-forest/50 transition-colors">
                      <option value="" className="bg-mountain-900">Select destination</option>
                      {["Spiti Valley", "Manali", "Shimla", "Kalpa & Kinnaur", "Kaza", "Custom / Not Sure"].map((d) => (
                        <option key={d} value={d} className="bg-mountain-900">{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-snow text-sm placeholder:text-slate-500 focus:outline-none focus:border-forest/50 transition-colors resize-none" placeholder="Tell us about your dream trip..." />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-forest hover:bg-forest-light text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-forest/20">
                    Send Inquiry via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
