"use client";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const testimonials = [
  {
    name: "Priya Sharma",
    trip: "Spiti Circuit Expedition",
    text: "Trail Core didn't just take us to Spiti — they made us feel it. The silence of Key Monastery, the homestay in Kibber where the host cooked us rajma-chawal by firelight, the acclimatization day in Kalpa that let us actually breathe. This wasn't tourism. This was something else entirely.",
  },
  {
    name: "Rahul & Meena",
    trip: "Kinnaur Odyssey",
    text: "We've traveled a lot, but Kinnaur with Trail Core was different. The driver knew every turn, every safe stop, every hidden viewpoint. The homestay in Chitkul felt like staying with family. No rush, no crowds — just the mountains and us.",
  },
  {
    name: "Arjun Verma",
    trip: "Himalayan Escape",
    text: "The Hampta Pass crossing was the most meaningful journey I've ever taken. The team ensured we were acclimatized, safe, and comfortable. Waking up at Chandratal under those stars — I understood why they call these the Himalayas.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-cinematic px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Testimonials"
          title="Stories From the Trail"
          description="Voices from travelers who experienced the Himalayas through Trail Core."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="glass rounded-xl p-7 md:p-8 h-full flex flex-col">
                {/* Quote mark */}
                <div className="text-3xl text-forest-glow/20 mb-4 leading-none" style={{ fontFamily: "Georgia, serif" }}>
                  &ldquo;
                </div>
                <p className="text-stone/50 text-sm leading-[1.7] flex-1 font-light">
                  {t.text}
                </p>
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  <p
                    className="text-snow/80 font-medium text-sm"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[11px] text-forest-glow/40 mt-0.5 tracking-wide">
                    {t.trip}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
