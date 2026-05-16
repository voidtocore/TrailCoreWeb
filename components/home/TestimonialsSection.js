"use client";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const testimonials = [
  { name: "Priya Sharma", trip: "Spiti Valley Circuit", text: "CoreTrail made our Spiti dream come true. Every detail was perfect — from the cozy stays in Kalpa to the monasteries in Kaza. They handled everything so we could just soak in the beauty.", rating: 5 },
  { name: "Rahul & Meena", trip: "Honeymoon Trip", text: "Our honeymoon in Himachal was magical. The private cottage in Manali, the surprise café visits, the snowfall experience — CoreTrail created memories we'll cherish forever.", rating: 5 },
  { name: "Arjun Verma", trip: "Budget Road Trip", text: "Best budget trip I've ever taken! The team planned an incredible route through Shimla, Narkanda, and Sarahan. Quality stays at amazing prices. Highly recommend!", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Testimonials" title="Stories From Fellow Travelers" description="Don't take our word for it — hear from the explorers who trusted us with their mountain dreams." />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="glass rounded-2xl p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-snow font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-forest-glow">{t.trip}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
