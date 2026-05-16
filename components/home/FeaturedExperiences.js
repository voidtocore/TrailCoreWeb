"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const experiences = [
  { title: "Spiti Valley Circuit", desc: "10-day expedition through the cold desert", img: "/images/spiti-valley.png", href: "/packages", tag: "Most Popular" },
  { title: "Budget Road Trip", desc: "Affordable Himachal adventures for groups", img: "/images/road-trip.png", href: "/packages", tag: "Best Value" },
  { title: "Adventure Treks", desc: "Challenging trails & mountain expeditions", img: "/images/adventure-trek.png", href: "/adventures", tag: "Thrilling" },
  { title: "Honeymoon Escapes", desc: "Romantic getaways in the Himalayas", img: "/images/honeymoon-cabin.png", href: "/honeymoon", tag: "Romantic" },
];

export default function FeaturedExperiences() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Experiences" title="Crafted For Every Explorer" description="Whether you're chasing adrenaline on mountain trails or seeking serenity in snow-covered valleys, we have the perfect Himachal experience for you." />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <StaggerItem key={exp.title}>
              <Link href={exp.href} className="group block relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src={exp.img} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-forest/80 backdrop-blur-sm text-white rounded-full">{exp.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold text-snow mb-1">{exp.title}</h3>
                  <p className="text-sm text-slate-300">{exp.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-forest-glow font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
