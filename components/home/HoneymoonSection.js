"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../Animations";

export default function HoneymoonSection() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-warm">Romance in the Mountains</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-snow mt-3 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Begin Your Story in Paradise
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Intimate mountain retreats, cozy fireside evenings, scenic café mornings, and private snow experiences — your honeymoon, reimagined against the backdrop of the Himalayas.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {["Cozy Mountain Stays", "Snow Experiences", "Scenic Cafes", "Private Retreats"].map((a) => (
                <div key={a} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-accent-warm" />
                  {a}
                </div>
              ))}
            </div>
            <Link href="/honeymoon" className="inline-flex items-center gap-2 mt-8 px-7 py-3 bg-accent-warm/20 hover:bg-accent-warm/30 text-accent-warm border border-accent-warm/30 font-medium rounded-full transition-all duration-300">
              View Honeymoon Trips
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/images/honeymoon-cabin.png" alt="Honeymoon cabin" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
