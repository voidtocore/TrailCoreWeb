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
    window.open(`https://wa.me/917560065963?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-36 pb-20 px-6 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d110e]/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            label="Contact" 
            title="Begin Your Expedition" 
            description="Reach out through any channel — we typically respond within 30 minutes during business hours." 
          />
        </div>
      </section>

      <section className="pb-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Methods */}
          <FadeIn direction="right" className="lg:col-span-2 space-y-4">
            <a 
              href="https://wa.me/917560065963" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="editorial-surface p-6 flex items-start gap-4 hover:border-[#25D366]/30 transition-all duration-500 group block"
            >
              <div className="w-10 h-10 rounded-[4px] bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/15 transition-colors duration-500">
                <svg className="w-4 h-4 text-[#25D366]/70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </div>
              <div>
                <h3 className="text-snow font-medium text-xs tracking-wide uppercase">WhatsApp</h3>
                <p className="text-[11px] text-parchment-dim mt-1.5 font-light leading-relaxed">Fastest way to reach us</p>
                <p className="text-[11px] text-[#25D366]/70 mt-1 mono-number font-medium">+91 75600 65963</p>
              </div>
            </a>

            <a 
              href="tel:+917560065963" 
              className="editorial-surface p-6 flex items-start gap-4 hover:border-white/[0.08] transition-all duration-500 group block"
            >
              <div className="w-10 h-10 rounded-[4px] bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:bg-white/[0.06] transition-colors duration-500">
                <svg className="w-4 h-4 text-accent-warm/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-snow font-medium text-xs tracking-wide uppercase">Phone</h3>
                <p className="text-[11px] text-parchment-dim mt-1.5 font-light leading-relaxed">Talk to our expedition specialist</p>
                <p className="text-[11px] text-forest-glow/80 mt-1 mono-number font-medium">+91 75600 65963</p>
              </div>
            </a>

            <div className="editorial-surface p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-[4px] bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-accent-warm/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-snow font-medium text-xs tracking-wide uppercase">Email</h3>
                <p className="text-[11px] text-parchment-dim mt-1.5 font-light leading-relaxed">For detailed inquiries</p>
                <p className="text-[11px] text-forest-glow/80 mt-1 font-medium">hello@trailcore.in</p>
              </div>
            </div>

            <div className="editorial-surface p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-[4px] bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-accent-warm/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-snow font-medium text-xs tracking-wide uppercase">Base</h3>
                <p className="text-[11px] text-parchment-dim mt-1.5 font-light leading-relaxed">Shimla, Himachal Pradesh, India</p>
              </div>
            </div>
          </FadeIn>

          {/* Inquiry Form */}
          <FadeIn direction="left" className="lg:col-span-3">
            <div className="editorial-surface p-8 sm:p-10">
              <h3 className="text-base font-semibold text-snow mb-8 uppercase tracking-wider" style={{ fontFamily: "var(--font-outfit)" }}>
                Send an Inquiry
              </h3>
              
              {submitted ? (
                <div className="text-center py-16">
                  <h4 className="text-lg font-medium text-snow mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    Inquiry Transmitted
                  </h4>
                  <p className="text-xs text-parchment-dim max-w-xs mx-auto font-light leading-relaxed mb-8">
                    Our expedition specialist will connect with you shortly to begin designing your itinerary.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="btn-outline text-[10px] py-2 px-6"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark" 
                        placeholder="Your name" 
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Email *</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark" 
                        placeholder="you@email.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Phone</label>
                      <input 
                        type="tel" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark" 
                        placeholder="+91 75600 65963" 
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">No. of Travelers</label>
                      <input 
                        type="number" 
                        min="1" 
                        value={formData.travelers} 
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} 
                        className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark mono-number" 
                        placeholder="2" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[9px] text-forest-glow/70 mb-1.5 tracking-widest uppercase font-medium">Preferred Expedition</label>
                    <div className="relative">
                      <select 
                        value={formData.destination} 
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })} 
                        className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-mountain-900">Select expedition</option>
                        {["Spiti Circuit Expedition", "Kinnaur Odyssey", "Winter Spiti Expedition", "Himalayan Escape", "Grand Traverse", "Custom / Not Sure"].map((d) => (
                          <option key={d} value={d} className="bg-mountain-900">{d}</option>
                        ))}
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[9px] text-forest-glow/70 mb-1 tracking-widest uppercase font-medium">Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-accent-warm focus:outline-none transition-colors duration-500 rounded-none px-0 py-2 text-snow text-sm placeholder:text-stone-dark resize-none" 
                      placeholder="Tell us about your expedition plans..." 
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full btn-outline text-[10px] tracking-widest py-3.5"
                    >
                      Send Inquiry via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
