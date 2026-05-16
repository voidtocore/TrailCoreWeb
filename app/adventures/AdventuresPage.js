"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const treks = [
  { name: "Hampta Pass Trek", duration: "5 Days", difficulty: "Moderate", altitude: "4,270m", img: "/images/adventure-trek.png", desc: "Cross from lush Kullu Valley to barren Lahaul through one of Himachal's most scenic passes." },
  { name: "Pin Parvati Pass", duration: "11 Days", difficulty: "Difficult", altitude: "5,319m", img: "/images/hero-mountains.png", desc: "The ultimate Himalayan challenge — connecting Parvati Valley to Pin Valley through a high-altitude glacier pass." },
  { name: "Chandrakhani Pass", duration: "4 Days", difficulty: "Easy-Moderate", altitude: "3,660m", img: "/images/camping.png", desc: "A beautiful trek through dense forests and alpine meadows with stunning views of the Pir Panjal range." },
  { name: "Bhrigu Lake Trek", duration: "3 Days", difficulty: "Moderate", altitude: "4,300m", img: "/images/manali.png", desc: "Trek to one of the highest lakes in Himachal — mythological significance meets breathtaking alpine scenery." },
];

const activities = [
  { name: "River Rafting", desc: "Beas River rapids from Grade I to III", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Paragliding", desc: "Soar over Solang and Bir Billing", icon: "M5 3l14 9-14 9V3z" },
  { name: "Mountain Biking", desc: "Trails from Manali to Leh highway", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
  { name: "Camping", desc: "Under the stars at 10,000+ feet", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
];

const difficultyColor = { "Easy-Moderate": "text-green-400", "Moderate": "text-yellow-400", "Difficult": "text-red-400" };

export default function AdventuresPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Adventures" title="Conquer the Himalayas" description="From beginner-friendly trails to expert-level expeditions — find the adventure that matches your spirit." />
        </div>
      </section>

      {/* Treks */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treks.map((trek) => (
              <StaggerItem key={trek.name}>
                <div className="glass rounded-2xl overflow-hidden group hover:border-forest/30 transition-all">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={trek.img} alt={trek.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-900 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-snow">{trek.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-400 mb-4">{trek.desc}</p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="text-slate-300">⏱ {trek.duration}</span>
                      <span className={difficultyColor[trek.difficulty]}>⚡ {trek.difficulty}</span>
                      <span className="text-slate-300">🏔 {trek.altitude}</span>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-forest hover:bg-forest-light text-white text-xs font-medium rounded-full transition-all">
                      Enquire About This Trek
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-4 bg-mountain-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Activities" title="More Ways to Explore" description="Beyond trekking — discover the full range of outdoor adventures Himachal has to offer." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {activities.map((a) => (
              <StaggerItem key={a.name}>
                <div className="glass rounded-2xl p-6 text-center hover:border-forest/30 transition-all group">
                  <div className="w-14 h-14 rounded-full bg-forest/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-forest/25 transition-colors">
                    <svg className="w-6 h-6 text-forest-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={a.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-snow mb-2">{a.name}</h3>
                  <p className="text-sm text-slate-400">{a.desc}</p>
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
