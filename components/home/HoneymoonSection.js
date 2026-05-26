"use client";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";

const experiences = [
  {
    title: "Authentic Homestays",
    desc: "Traditional homes, warm blankets, and stories by the fire.",
    img: "/images/honeymoon-cabin.png",
  },
  {
    title: "Himalayan Meals",
    desc: "Dal, rice, thukpa, momos — soul food served at 12,000 feet.",
    img: "/images/shimla.png",
  },
  {
    title: "Bonfire Evenings",
    desc: "Canopies of stars, slow fires, and absolute mountain stillness.",
    img: "/images/camping.png",
  },
];

export default function HoneymoonSection() {
  return (
    <section className="section-cinematic px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-light/70 mb-6">
                Food & Stay Experience
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F5F5F5] leading-[1.15] mb-6"
              >
                Where comfort meets
                <br />
                <span className="text-[#a09a8e]">the mountains.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-parchment text-base leading-relaxed font-light max-w-md mb-8">
                Every stay is handpicked for warmth, every meal for authenticity.
                We believe comfort in the mountains means local character, not
                luxury chains — real fires, real food, real people.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-3">
                {[
                  "Curated homestays & heritage stays",
                  "Traditional Himalayan cuisine",
                  "Mountain café mornings",
                  "Bonfire nights under the stars",
                  "Slow evenings with chai",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-parchment-dim font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-glow" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Images */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {experiences.map((exp) => (
                <StaggerItem key={exp.title}>
                  <div className="editorial-card group flex flex-col h-full hover:border-white/20 transition-all duration-300">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={exp.img}
                        alt={exp.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-102"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3
                        className="text-sm font-semibold text-[#F5F5F5] mb-2"
                      >
                        {exp.title}
                      </h3>
                      <p className="text-[11px] text-parchment-dim leading-relaxed font-light">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
