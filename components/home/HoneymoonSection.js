"use client";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";

const experiences = [
  {
    title: "Authentic Homestays",
    desc: "Sleep where the mountains live — traditional homes, warm blankets, and stories by the fireplace.",
    img: "/images/honeymoon-cabin.png",
  },
  {
    title: "Himalayan Meals",
    desc: "Dal, rice, thukpa, momos — local kitchens serve food that warms the soul at 12,000 feet.",
    img: "/images/shimla.png",
  },
  {
    title: "Bonfire Evenings",
    desc: "Under a canopy of stars, around a fire — the kind of evening that makes you forget the world exists.",
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
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-stone/40 mb-6">
                Food & Stay Experience
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-snow/90 leading-[1.15] mb-6"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Where comfort meets
                <br />
                <span className="text-stone/40">the mountains.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-stone/45 text-base leading-relaxed font-light max-w-md mb-8">
                Every stay is handpicked for warmth, every meal for authenticity.
                We believe comfort in the mountains means local character, not
                luxury chains — real fires, real food, real people.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-3">
                {["Curated homestays & heritage stays", "Traditional Himalayan cuisine", "Mountain café mornings", "Bonfire nights under the stars", "Slow evenings with chai"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-stone/40 font-light">
                    <div className="w-1 h-1 rounded-full bg-forest-glow/40" />
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
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] group">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3
                        className="text-sm font-semibold text-snow/90 mb-1"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-[11px] text-parchment/35 leading-relaxed font-light">
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
