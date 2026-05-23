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
    <section className="section-cinematic px-4 bg-mountain-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Gallery"
          title="Frames From the Field"
          description="Real moments from real expeditions — every image a story of altitude, silence, and the raw beauty of the Himalayas."
        />
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img) => (
            <StaggerItem
              key={img.alt}
              className={`${img.span} relative rounded-lg overflow-hidden group aspect-square`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4">
                <span className="text-[11px] text-white/80 font-light tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
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
