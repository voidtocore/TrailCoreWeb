"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/Animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", destination: "", travelers: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Trail Core! I'd like to plan an expedition.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDestination: ${formData.destination}\nTravelers: ${formData.travelers}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-36 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Contact" title="Begin Your Expedition" description="Reach out through any channel — we typically respond within 30 minutes during business hours." />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Methods */}
          <FadeIn direction="right" className="lg:col-span-2 space-y-5">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-6 flex items-start gap-4 hover:border-[#25D366]/20 transition-all duration-500 group block">
              <div className="w-11 h-11 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/15 transition-colors duration-500">
                <svg className="w-5 h-5 text-[#25D366]/70" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
              </div>
              <div>
                <h3 className="text-snow/80 font-medium text-sm" style={{ fontFamily: "var(--font-outfit)" }}>WhatsApp</h3>
                <p className="text-[11px] text-stone/35 mt-1">Fastest way to reach us</p>
                <p className="text-[11px] text-[#25D366]/60 mt-1">+91 98765 43210</p>
              </div>
            </a>

            <a href="tel:+919876543210" className="glass rounded-xl p-6 flex items-start gap-4 hover:border-white/[0.08] transition-all duration-500 group block">
              <div className="w-11 h-11 rounded-lg bg-forest/10 flex items-center justify-center shrink-0 group-hover:bg-forest/15 transition-colors duration-500">
                <svg className="w-5 h-5 text-forest-glow/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="text-snow/80 font-medium text-sm" style={{ fontFamily: "var(--font-outfit)" }}>Phone</h3>
                <p className="text-[11px] text-stone/35 mt-1">Talk to our expedition specialist</p>
                <p className="text-[11px] text-forest-glow/50 mt-1">+91 98765 43210</p>
              </div>
            </a>

            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-forest-glow/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="text-snow/80 font-medium text-sm" style={{ fontFamily: "var(--font-outfit)" }}>Email</h3>
                <p className="text-[11px] text-stone/35 mt-1">For detailed inquiries</p>
                <p className="text-[11px] text-forest-glow/50 mt-1">hello@trailcore.in</p>
              </div>
            </div>

            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-forest-glow/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-snow/80 font-medium text-sm" style={{ fontFamily: "var(--font-outfit)" }}>Base</h3>
                <p className="text-[11px] text-stone/35 mt-1">Shimla, Himachal Pradesh, India</p>
              </div>
            </div>
          </FadeIn>

          {/* Inquiry Form */}
          <FadeIn direction="left" className="lg:col-span-3">
            <div className="glass rounded-xl p-8">
              <h3 className="text-lg font-semibold text-snow/90 mb-6" style={{ fontFamily: "var(--font-outfit)" }}>Send an Inquiry</h3>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="text-xl font-semibold text-snow/90" style={{ fontFamily: "var(--font-outfit)" }}>Inquiry Sent</h4>
                  <p className="text-stone/40 mt-2 text-sm font-light">Our expedition specialist will reach out within 30 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 bg-forest/80 hover:bg-forest-light/80 text-white/90 text-sm font-medium rounded-full transition-all duration-500 border border-forest-light/20">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">No. of Travelers</label>
                      <input type="number" min="1" value={formData.travelers} onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500" placeholder="2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Preferred Expedition</label>
                    <select value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm focus:outline-none focus:border-forest/30 transition-colors duration-500">
                      <option value="" className="bg-mountain-900">Select expedition</option>
                      {["Spiti Circuit Expedition", "Kinnaur Odyssey", "Winter Spiti Expedition", "Himalayan Escape", "Grand Traverse", "Custom / Not Sure"].map((d) => (
                        <option key={d} value={d} className="bg-mountain-900">{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone/40 mb-1.5 tracking-wide uppercase">Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-snow/90 text-sm placeholder:text-stone/25 focus:outline-none focus:border-forest/30 transition-colors duration-500 resize-none" placeholder="Tell us about your expedition plans..." />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-forest/80 hover:bg-forest-light/80 text-white/90 font-medium tracking-wide rounded-lg transition-all duration-500 border border-forest-light/20">
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
