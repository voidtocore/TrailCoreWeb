"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem } from "../Animations";

const images = [
  { src: "/images/spiti-valley.png", alt: "Spiti Valley", span: "col-span-2 row-span-2" },
  { src: "/images/shimla.png", alt: "Shimla", span: "" },
  { src: "/images/camping.png", alt: "Mountain camping", span: "" },
  { src: "/images/kalpa.png", alt: "Kalpa village", span: "" },
  { src: "/images/river.png", alt: "Mountain river", span: "" },
  { src: "/images/manali.png", alt: "Manali valley", span: "col-span-2" },
  { src: "/images/kaza.png", alt: "Kaza monastery", span: "" },
  { src: "/images/road-trip.png", alt: "Mountain road", span: "" },
];

export default function GallerySection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-mountain-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Gallery" title="Moments From the Mountains" description="Real captures from real journeys — every frame tells a story of adventure, wonder, and the raw beauty of Himachal." />
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12">
          {images.map((img) => (
            <StaggerItem key={img.alt} className={`${img.span} relative rounded-xl overflow-hidden group aspect-square`}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <span className="text-sm text-white font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{img.alt}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
