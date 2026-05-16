"use client";
import SectionHeading from "../SectionHeading";
import { FadeIn } from "../Animations";

const stops = [
  { name: "Shimla", alt: "2,276m", desc: "Colonial charm meets mountain serenity", day: "Day 1" },
  { name: "Narkanda", alt: "2,708m", desc: "Apple orchards & skiing paradise", day: "Day 2" },
  { name: "Sarahan", alt: "2,165m", desc: "Ancient temple & Kinnaur gateway", day: "Day 3" },
  { name: "Kalpa", alt: "2,960m", desc: "Kinner Kailash views & apple country", day: "Day 4-5" },
  { name: "Nako", alt: "3,662m", desc: "Pristine lake & Buddhist heritage", day: "Day 6" },
  { name: "Kaza", alt: "3,650m", desc: "Heart of Spiti — monasteries & moonscapes", day: "Day 7-8" },
  { name: "Manali", alt: "2,050m", desc: "Valley of the gods — final destination", day: "Day 9-10" },
];

export default function PopularRoutes() {
  return (
    <section className="py-24 md:py-32 px-4 bg-mountain-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="The Route" title="Journey Through the Himalayas" description="Follow the legendary Shimla-Spiti-Manali circuit — one of India's most breathtaking road journeys." />
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest via-forest-light to-forest-dark" />
          <div className="space-y-8 md:space-y-12">
            {stops.map((stop, i) => (
              <FadeIn key={stop.name} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-forest-glow border-2 border-mountain-black z-10 mt-6" />
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass rounded-xl p-5 hover:border-forest/30 transition-colors">
                      <span className="text-xs text-forest-glow font-semibold uppercase tracking-wider">{stop.day}</span>
                      <h3 className="text-xl font-bold text-snow mt-1">{stop.name}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{stop.alt} elevation</p>
                      <p className="text-sm text-slate-300 mt-2">{stop.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
