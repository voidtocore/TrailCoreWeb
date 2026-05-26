"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const retreats = [
  { title: "Manali Mountain Retreat", duration: "5 Days / 4 Nights", price: "From ₹15,999", img: "/images/manali.png", highlights: ["Private cottage stay", "Solang Valley expedition", "Old Manali café mornings", "Bonfire night", "Riverside breakfast"] },
  { title: "Shimla–Manali Journey", duration: "7 Days / 6 Nights", price: "From ₹22,999", img: "/images/shimla.png", highlights: ["Heritage hotel in Shimla", "Kufri snow experience", "Scenic mountain roads", "Rohtang excursion", "Candlelight dinner"] },
  { title: "Spiti Intimate Explorer", duration: "9 Days / 8 Nights", price: "From ₹27,999", img: "/images/spiti-valley.png", highlights: ["Stargazing in Kaza", "Monastery visits", "Mountain cottage stays", "Chandratal camping", "Private vehicle"] },
];

const experiences = [
  { name: "Mountain Cottages", desc: "Handpicked stays with fireplace and mountain views — warmth at altitude.", icon: "🏡" },
  { name: "Snow Experiences", desc: "Winter walks, frozen lakes, and snowfall camps during the cold months.", icon: "❄️" },
  { name: "Scenic Cafés", desc: "The most atmospheric mountain cafés — overlooking valleys and rivers.", icon: "☕" },
  { name: "Private Retreats", desc: "Secluded stays away from crowds — just silence and the mountains.", icon: "🌄" },
];

export default function HoneymoonPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-warm/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Mountain Retreats" title="Intimate Himalayan Journeys" description="Curated experiences for couples seeking meaningful time together against the backdrop of the Himalayas." />
        </div>
      </section>

      {/* Retreats */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {retreats.map((r) => (
              <StaggerItem key={r.title}>
                <div className="editorial-card h-full flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden w-full">
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <p className="text-[10px] uppercase tracking-wider text-accent-warm/70 mono-number">{r.duration}</p>
                    <h3 className="text-base md:text-lg font-semibold text-snow/90 mt-1" style={{ fontFamily: "var(--font-outfit)" }}>{r.title}</h3>
                    <ul className="mt-4 space-y-2 flex-1">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-xs sm:text-sm text-parchment-dim/80 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-warm/40" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                      <div>
                        <span className="text-lg font-semibold text-snow/90 mono-number" style={{ fontFamily: "var(--font-outfit)" }}>{r.price}</span>
                        <span className="text-[11px] text-stone-light/45 ml-1.5">/couple</span>
                      </div>
                      <Link href="/contact" className="btn-outline text-[10px] tracking-widest py-2 px-4">
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 px-4 bg-mountain-900/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Curated Experiences" title="Moments Worth Sharing" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {experiences.map((e) => (
              <StaggerItem key={e.name}>
                <div className="editorial-surface p-6 sm:p-7 text-center group">
                  <span className="text-2xl">{e.icon}</span>
                  <h3 className="text-base font-semibold text-snow/90 mt-3 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{e.name}</h3>
                  <p className="text-[0.8125rem] text-parchment/45 leading-relaxed font-light">{e.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
