"use client";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const departures = [
  {
    destination: "Spiti Circuit Expedition",
    dates: "Jun 15 – Jun 24, 2026",
    duration: "10 Days",
    seats: "3 seats left",
    category: "Signature",
    route: "Shimla → Kinnaur → Spiti → Manali",
  },
  {
    destination: "Kinnaur Odyssey",
    dates: "Jul 5 – Jul 11, 2026",
    duration: "7 Days",
    seats: "5 seats left",
    category: "Scenic",
    route: "Shimla → Sarahan → Sangla → Kalpa → Chitkul",
  },
  {
    destination: "Winter Spiti Expedition",
    dates: "Dec 20 – Dec 27, 2026",
    duration: "8 Days",
    seats: "6 seats left",
    category: "Limited",
    route: "Manali → Kaza → Key → Kibber",
  },
  {
    destination: "Himalayan Escape",
    dates: "Sep 1 – Sep 5, 2026",
    duration: "5 Days",
    seats: "4 seats left",
    category: "Adventure",
    route: "Manali → Hampta Pass → Chandratal",
  },
];

export default function AdventureSection() {
  return (
    <section className="section-cinematic px-4 bg-mountain-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Upcoming Departures"
          title="Join an Expedition"
          description="Fixed-date departures with limited seats. Every group is small, every route is curated, every experience is intentional."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {departures.map((dep) => (
            <StaggerItem key={dep.destination + dep.dates}>
              <div className="glass rounded-xl p-6 md:p-7 hover:border-white/[0.08] transition-all duration-500 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-forest-glow/50">
                      {dep.category}
                    </span>
                    <h3
                      className="text-lg font-semibold text-snow/90 mt-1"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {dep.destination}
                    </h3>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent-warm/60 bg-accent-warm/[0.06] px-2.5 py-1 rounded-full border border-accent-warm/10">
                    {dep.seats}
                  </span>
                </div>

                <p className="text-[11px] text-stone/35 mb-4 tracking-wide">
                  {dep.route}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                  <div className="flex items-center gap-5 text-[12px] text-stone/45">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {dep.dates}
                    </span>
                    <span>{dep.duration}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="text-[11px] font-medium text-forest-glow/50 hover:text-forest-glow transition-colors duration-300 flex items-center gap-1"
                  >
                    Inquire
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-10">
          <p className="text-[11px] text-stone/30 tracking-[0.15em] uppercase">
            Limited seats per departure · Small groups only
          </p>
        </div>
      </div>
    </section>
  );
}
