"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem, ParallaxImage } from "../Animations";
import { stays } from "@/data/stays";

export default function StaysSpotlight() {
  // Grab up to 3 featured stays
  const featuredStays = stays.slice(0, 3);

  return (
    <section className="relative section-editorial px-6 bg-background overflow-hidden border-t border-white/[0.03] pt-24 pb-32">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Alpine Shelter"
          title="Curated Solitudes"
          description="Handpicked homestays, remote forest cabins, and boutique guesthouses run by local mountain families."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {featuredStays.map((stay) => (
            <StaggerItem key={stay.id}>
              <div className="flex flex-col group border border-white/[0.03] bg-mountain-900/20 rounded-[2px] overflow-hidden">
                {/* Visual Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-mountain-900">
                  <Image
                    src={stay.img}
                    alt={stay.name}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 px-2.5 py-0.5 text-[8px] font-mono text-forest-glow tracking-widest uppercase rounded-[2px] border border-white/[0.04]">
                    {stay.type}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Link href={`/stays/${stay.slug}`} className="hover:text-forest-glow transition-colors">
                        <h3
                          className="text-sm font-medium text-snow leading-tight tracking-tight"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {stay.name}
                        </h3>
                      </Link>
                      <span className="text-[10px] font-mono text-forest-glow/85 font-medium whitespace-nowrap mono-number">
                        ₹{stay.base_price_per_night} <span className="text-[8px] text-stone">/ night</span>
                      </span>
                    </div>

                    <p className="text-xs text-parchment-dim leading-relaxed font-light mb-4">
                      {stay.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {stay.vibe_tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] font-mono tracking-wider uppercase text-stone bg-white/[0.02] border border-white/[0.03] px-2 py-0.5 rounded-[2px]"
                        >
                          {tag.replace(/-/g, " ")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-stone">
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-stone-light/30 mb-0.5">Host</span>
                      <span className="text-snow">{stay.host.name}</span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/stays/${stay.slug}`}
                        className="btn-outline px-3 py-1.5 text-[8px] tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-[2px]"
                      >
                        Details
                      </Link>
                      <a
                        href={`https://wa.me/917560065963?text=Hi%20Trail%20Core%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(stay.name)}.%20Is%20this%20available%3F`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline px-3 py-1.5 text-[8px] tracking-widest uppercase hover:bg-forest-glow hover:text-white transition-all duration-300 rounded-[2px]"
                      >
                        Inquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
