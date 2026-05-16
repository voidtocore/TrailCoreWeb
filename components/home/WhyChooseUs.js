"use client";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const reasons = [
  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", title: "Local Expertise", desc: "Born and raised in Himachal — we know every hidden trail and secret viewpoint." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Verified Stays", desc: "Every hotel, homestay, and campsite personally vetted for quality and safety." },
  { icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", title: "Personalized Planning", desc: "No cookie-cutter packages. Every itinerary tailored to your pace and preferences." },
  { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "On-Call Support", desc: "24/7 assistance during your trip. One call away, even in remote Spiti villages." },
  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Flexible Itineraries", desc: "Plans that adapt. Change routes, extend stays, or add experiences on the go." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Why CoreTrail" title="Your Mountains, Our Passion" description="We don't just plan trips — we craft experiences that stay with you long after you leave the mountains." />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="glass rounded-2xl p-6 h-full hover:border-forest/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-forest/15 flex items-center justify-center mb-4 group-hover:bg-forest/25 transition-colors">
                  <svg className="w-6 h-6 text-forest-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-snow mb-2">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
