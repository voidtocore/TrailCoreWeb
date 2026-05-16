"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const honeymoonPackages = [
  { title: "Manali Romance Package", duration: "5 Days / 4 Nights", price: "₹15,999", img: "/images/manali.png", highlights: ["Private cottage stay", "Solang Valley adventure", "Café hopping in Old Manali", "Bonfire night", "Riverside breakfast"] },
  { title: "Shimla-Manali Classic", duration: "7 Days / 6 Nights", price: "₹22,999", img: "/images/shimla.png", highlights: ["Heritage hotel in Shimla", "Kufri snow point", "Scenic train ride", "Rohtang excursion", "Candlelight dinner"] },
  { title: "Spiti Intimate Explorer", duration: "9 Days / 8 Nights", price: "₹27,999", img: "/images/spiti-valley.png", highlights: ["Stargazing in Kaza", "Monastery visits", "Mountain cottage stays", "Chandratal camping", "Private vehicle"] },
];

const experiences = [
  { name: "Cozy Mountain Stays", desc: "Handpicked cottages, boutique hotels, and luxury camps with fireplace and mountain views.", icon: "🏡" },
  { name: "Snow Experiences", desc: "Private snow walks, snowfall camps, and frozen lake visits during winter months.", icon: "❄️" },
  { name: "Scenic Cafes", desc: "Curated list of the most romantic cafés overlooking valleys and rivers.", icon: "☕" },
  { name: "Private Retreats", desc: "Secluded stays away from tourist crowds — just you, your partner, and the mountains.", icon: "🌄" },
];

export default function HoneymoonPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-warm/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Honeymoon" title="Romance Meets the Himalayas" description="Let us craft an intimate mountain getaway that you and your partner will remember forever." />
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {honeymoonPackages.map((pkg) => (
              <StaggerItem key={pkg.title}>
                <div className="glass rounded-2xl overflow-hidden group h-full flex flex-col hover:border-accent-warm/20 transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={pkg.img} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-accent-warm">{pkg.duration}</p>
                    <h3 className="text-xl font-bold text-snow mt-1">{pkg.title}</h3>
                    <ul className="mt-4 space-y-2 flex-1">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-warm" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-snow">{pkg.price}</span>
                        <span className="text-xs text-slate-400 ml-1">/couple</span>
                      </div>
                      <Link href="/contact" className="px-4 py-2 bg-accent-warm/20 hover:bg-accent-warm/30 text-accent-warm border border-accent-warm/30 text-xs font-medium rounded-full transition-all">
                        Enquire
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
      <section className="py-20 px-4 bg-mountain-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Romantic Experiences" title="Moments Made for Two" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {experiences.map((e) => (
              <StaggerItem key={e.name}>
                <div className="glass rounded-2xl p-6 text-center hover:border-accent-warm/20 transition-all">
                  <span className="text-3xl">{e.icon}</span>
                  <h3 className="text-base font-bold text-snow mt-3 mb-2">{e.name}</h3>
                  <p className="text-sm text-slate-400">{e.desc}</p>
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
