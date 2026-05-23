"use client";
import Image from "next/image";
import { FadeIn } from "../Animations";

export default function ExpeditionPhilosophy() {
  return (
    <section className="relative py-24 md:py-40 px-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/road-trip.png"
          alt="Himalayan mountain road at altitude"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-black via-mountain-black/80 to-mountain-black" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-stone-light/50 mb-6">
                Our Philosophy
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-snow/90 leading-[1.15] mb-8"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Experience over speed.
                <br />
                <span className="text-stone-light/45">Connection over convenience.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-parchment/50 text-base md:text-lg leading-relaxed font-light max-w-xl mb-6">
                Trail Core designs journeys that prioritize depth over distance.
                Every expedition is crafted for meaningful exploration, comfort,
                safety, and authentic Himalayan connection.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-stone-light/40 text-sm leading-relaxed font-light max-w-xl">
                We believe the best journeys leave room for the unplanned —
                a conversation with a monastery monk, an extra hour at a
                mountain pass watching clouds roll through valleys, a bonfire
                that stretches into the night under infinite stars.
              </p>
            </FadeIn>

            {/* Philosophy pillars */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { num: "8–12", label: "Travelers per expedition" },
                  { num: "2–3", label: "Rest days built into every route" },
                  { num: "100%", label: "Local drivers & guides" },
                  { num: "Zero", label: "Rushed itineraries" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-2xl md:text-3xl font-semibold text-forest-glow/70"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {stat.num}
                    </p>
                    <p className="text-[11px] text-stone-light/40 mt-1 tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/camping.png"
                  alt="Mountain campsite under stars"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-black/60 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
