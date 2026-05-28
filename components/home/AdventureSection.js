"use client";

import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { ParallaxText, DriftTypography } from "../Animations";

const departures = [
  {
    destination: "Spiti Circuit Expedition",
    dates: "Jun 15 – Jun 24, 2026",
    duration: "10 Days",
    category: "Signature",
    route: "Shimla → Kinnaur → Spiti → Manali",
  },
  {
    destination: "Kinnaur Odyssey",
    dates: "Jul 05 – Jul 11, 2026",
    duration: "7 Days",
    category: "Scenic",
    route: "Shimla → Sarahan → Sangla → Kalpa → Chitkul",
  },
  {
    destination: "Winter Spiti Expedition",
    dates: "Dec 20 – Dec 27, 2026",
    duration: "8 Days",
    category: "Winter",
    route: "Manali → Kaza → Key → Kibber",
  },
  {
    destination: "Himalayan Escape",
    dates: "Sep 01 – Sep 05, 2026",
    duration: "5 Days",
    category: "Adventure",
    route: "Manali → Hampta Pass → Chandratal",
  },
];

export default function AdventureSection() {
  return (
    <section className="relative section-cinematic px-6 bg-background overflow-hidden">
      {/* Background kinetic text */}
      <div className="absolute top-[40%] left-0 w-full z-0 opacity-[0.02] pointer-events-none">
        <DriftTypography 
          text="R O U T E S" 
          speed={0.7} 
          direction={-1} 
          className="text-[12vw] font-bold text-snow tracking-[0.2em] uppercase select-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Upcoming Departures"
          title="Join an Expedition"
          description="Fixed-date departures with small groups. Every route is curated, every experience is intentional."
        />

        {/* Typographic Log Table - stark editorial composition with drifting layout */}
        <ParallaxText speed={0.08} direction={1} className="mt-12 md:mt-20 overflow-x-auto">
          <div className="min-w-[800px] w-full border-t border-b border-white/10 divide-y divide-white/[0.06]">
            {/* Table Header */}
            <div className="grid grid-cols-12 py-4 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-stone-light/40">
              <div className="col-span-3">Expedition</div>
              <div className="col-span-4">Route</div>
              <div className="col-span-2 text-right">Dates</div>
              <div className="col-span-1 text-right">Duration</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* Table Rows */}
            {departures.map((dep) => (
              <div 
                key={dep.destination + dep.dates} 
                className="grid grid-cols-12 py-6 items-center text-xs font-light text-parchment-dim hover:text-snow hover:bg-white/[0.01] transition-all duration-300 -mx-3 px-3 rounded-[2px]"
              >
                {/* Destination */}
                <div className="col-span-3">
                  <span className="block text-[0.55rem] font-bold uppercase tracking-[0.2em] text-forest-glow mb-1">
                    {dep.category}
                  </span>
                  <h4 
                    className="text-sm font-medium text-snow leading-tight"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {dep.destination}
                  </h4>
                </div>

                {/* Route */}
                <div className="col-span-4 text-stone pr-4">
                  {dep.route}
                </div>

                {/* Dates */}
                <div className="col-span-2 text-right mono-number font-medium">
                  {dep.dates}
                </div>

                {/* Duration */}
                <div className="col-span-1 text-right mono-number text-stone">
                  {dep.duration}
                </div>

                {/* Action */}
                <div className="col-span-2 flex justify-end">
                  <Link
                    href="/contact"
                    className="btn-outline text-[9px] tracking-[0.2em] py-1.5 px-4"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ParallaxText>

        <div className="text-center mt-16">
          <p className="text-[9px] text-stone tracking-[0.25em] uppercase font-light">
            Small Groups · Curated Routes · Meaningful Experiences
          </p>
        </div>
      </div>
    </section>
  );
}
