"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../Animations";

export default function AdventureSection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-mountain-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/images/adventure-trek.png" alt="Adventure trekking" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-glow">Adventure Awaits</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-snow mt-3 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Push Your Limits in the Himalayas
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              From high-altitude treks to riverside camping, mountain biking through remote villages to snow experiences — discover adventures that test your spirit and reward your soul.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {["Trekking", "Camping", "Mountain Biking", "Snow Treks"].map((a) => (
                <div key={a} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-forest-glow" />
                  {a}
                </div>
              ))}
            </div>
            <Link href="/adventures" className="inline-flex items-center gap-2 mt-8 px-7 py-3 bg-forest hover:bg-forest-light text-white font-medium rounded-full transition-all duration-300">
              Explore Adventures
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
