"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const treks = [
  { name: "Hampta Pass Trek", duration: "5 Days", difficulty: "Moderate", altitude: "4,270m", img: "/images/adventure-trek.png", desc: "Cross from lush Kullu Valley to barren Lahaul through one of the Himalaya's most dramatic alpine passes." },
  { name: "Pin Parvati Pass", duration: "11 Days", difficulty: "Challenging", altitude: "5,319m", img: "/images/hero-mountains.png", desc: "The ultimate Himalayan challenge — connecting Parvati Valley to Pin Valley through a high-altitude glacier crossing." },
  { name: "Chandrakhani Pass", duration: "4 Days", difficulty: "Easy–Moderate", altitude: "3,660m", img: "/images/camping.png", desc: "Dense forests, alpine meadows, and sweeping views of the Pir Panjal range — perfect for a first Himalayan trek." },
  { name: "Bhrigu Lake Trek", duration: "3 Days", difficulty: "Moderate", altitude: "4,300m", img: "/images/manali.png", desc: "Trek to one of the highest lakes in Himachal — where mythological significance meets breathtaking alpine scenery." },
];

const activities = [
  { name: "River Exploration", desc: "Beas River rapids from Grade I to III", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Paragliding", desc: "Soar over Solang and Bir Billing valleys", icon: "M5 3l14 9-14 9V3z" },
  { name: "Mountain Biking", desc: "Trails from Manali along the Leh highway", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
  { name: "Alpine Camping", desc: "Under the stars at 10,000+ feet", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
];

const difficultyColor = { "Easy–Moderate": "text-forest-glow/60", "Moderate": "text-accent-warm/60", "Challenging": "text-red-400/60" };

export default function AdventuresPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Adventures" title="Into the Himalayas" description="From first-time trails to expert-level expeditions — find the mountain challenge that matches your spirit." />
        </div>
      </section>

      {/* Treks */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treks.map((trek) => (
              <StaggerItem key={trek.name}>
                <div className="expedition-card group">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={trek.img} alt={trek.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-900 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-snow/95" style={{ fontFamily: "var(--font-outfit)" }}>{trek.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-stone/40 mb-4 font-light leading-relaxed">{trek.desc}</p>
                    <div className="flex flex-wrap gap-4 text-[11px] text-stone/40 tracking-wide">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {trek.duration}
                      </span>
                      <span className={difficultyColor[trek.difficulty]}>⚡ {trek.difficulty}</span>
                      <span>🏔 {trek.altitude}</span>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 mt-5 px-5 py-2 bg-forest/80 hover:bg-forest-light/80 text-white/90 text-[11px] font-medium tracking-wide rounded-full transition-all duration-500 border border-forest-light/20">
                      Inquire About This Trek
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-4 bg-mountain-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Activities" title="More Ways to Explore" description="Beyond trekking — discover the full range of mountain experiences the Himalayas have to offer." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {activities.map((a) => (
              <StaggerItem key={a.name}>
                <div className="glass rounded-xl p-7 text-center hover:border-white/[0.08] transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-forest/15 transition-colors duration-500">
                    <svg className="w-5 h-5 text-forest-glow/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={a.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-snow/90 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{a.name}</h3>
                  <p className="text-sm text-stone/40 font-light">{a.desc}</p>
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
