import HeroSection from "@/components/home/HeroSection";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExpeditionPhilosophy from "@/components/home/ExpeditionPhilosophy";
import GallerySection from "@/components/home/GallerySection";
import AdventureSection from "@/components/home/AdventureSection";
import HoneymoonSection from "@/components/home/HoneymoonSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InquiryCTA from "@/components/home/InquiryCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <FeaturedExperiences />
      <div className="section-divider" />
      <WhyChooseUs />
      <ExpeditionPhilosophy />
      <div className="section-divider" />
      <GallerySection />
      <div className="section-divider" />
      <AdventureSection />
      <div className="section-divider" />
      <HoneymoonSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <InquiryCTA />
    </>
  );
}
