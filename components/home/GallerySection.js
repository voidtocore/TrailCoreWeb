"use client";

import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const images = [
  { src: "/images/spiti-valley.png", alt: "Spiti Valley landscape", span: "col-span-2 row-span-2" },
  { src: "/images/road-trip.png", alt: "Himalayan mountain road", span: "" },
  { src: "/images/camping.png", alt: "Mountain campsite", span: "" },
  { src: "/images/kalpa.png", alt: "Kalpa village with Kinner Kailash", span: "" },
  { src: "/images/kaza.png", alt: "Kaza monastery at dawn", span: "" },
  { src: "/images/river.png", alt: "Himalayan river valley", span: "col-span-2" },
  { src: "/images/manali.png", alt: "Manali valley in autumn", span: "" },
  { src: "/images/shimla.png", alt: "Heritage architecture in the mountains", span: "" },
];

export default function GallerySection() {
  return (
    <section className="section-cinematic px-6 bg-[#0c0d0c]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Gallery"
          title="Frames From the Field"
          description="Real moments from expeditions — altitude, silence, and raw Himalayan landscapes."
        />
        
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img) => (
            <StaggerItem
              key={img.alt}
              className={`${img.span} relative rounded-[4px] overflow-hidden group aspect-square border border-white/[0.02]`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover cinematic-image transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#0c0d0c]/0 group-hover:bg-[#0c0d0c]/40 transition-all duration-[600ms] ease-out flex items-end p-4">
                <span className="text-[10px] text-snow/90 font-light tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-[600ms] ease-out">
                  {img.alt}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
