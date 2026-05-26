"use client";

import SectionHeading from "../SectionHeading";
import { StaggerContainer, StaggerItem, ParallaxImage, DriftTypography } from "../Animations";

const images = [
  { src: "/images/spiti-valley.png", alt: "Spiti Valley landscape", span: "col-span-2 row-span-2", speed: 0.15 },
  { src: "/images/road-trip.png", alt: "Himalayan mountain road", span: "", speed: 0.25 },
  { src: "/images/camping.png", alt: "Mountain campsite", span: "", speed: 0.35 },
  { src: "/images/kalpa.png", alt: "Kalpa village with Kinner Kailash", span: "", speed: 0.2 },
  { src: "/images/kaza.png", alt: "Kaza monastery at dawn", span: "", speed: 0.3 },
  { src: "/images/river.png", alt: "Himalayan river valley", span: "col-span-2", speed: 0.18 },
  { src: "/images/manali.png", alt: "Manali valley in autumn", span: "", speed: 0.22 },
  { src: "/images/shimla.png", alt: "Heritage architecture in the mountains", span: "", speed: 0.28 },
];

export default function GallerySection() {
  return (
    <section className="relative section-cinematic px-6 bg-[#0c0d0c] overflow-hidden">
      {/* Background kinetic text */}
      <div className="absolute top-[40%] left-0 w-full z-0 opacity-[0.02] pointer-events-none">
        <DriftTypography 
          text="A R C H I V E" 
          speed={0.75} 
          direction={1} 
          className="text-[12vw] font-bold text-snow tracking-[0.2em] uppercase select-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Gallery"
          title="Frames From the Field"
          description="Real moments from expeditions — altitude, silence, and raw Himalayan landscapes."
        />
        
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {images.map((img) => (
            <StaggerItem
              key={img.alt}
              className={`${img.span} relative rounded-[4px] overflow-hidden group border border-white/[0.02]`}
            >
              <div className="relative w-full h-full">
                <ParallaxImage
                  src={img.src}
                  alt={img.alt}
                  speed={img.speed}
                  aspect="aspect-square"
                  className="rounded-[4px] w-full h-full"
                />
                
                {/* Floating caption overlay on hover */}
                <div className="absolute inset-0 bg-[#0c0d0c]/0 group-hover:bg-[#0c0d0c]/50 transition-all duration-[600ms] ease-out flex items-end p-4 z-10">
                  <span className="text-[9px] text-snow/90 font-light tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-[600ms] ease-out">
                    {img.alt}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
