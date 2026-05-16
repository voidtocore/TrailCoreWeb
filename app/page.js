import HeroSection from "@/components/home/HeroSection";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import PopularRoutes from "@/components/home/PopularRoutes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AdventureSection from "@/components/home/AdventureSection";
import HoneymoonSection from "@/components/home/HoneymoonSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InquiryCTA from "@/components/home/InquiryCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <FeaturedExperiences />
      <PopularRoutes />
      <div className="section-divider" />
      <WhyChooseUs />
      <AdventureSection />
      <div className="section-divider" />
      <HoneymoonSection />
      <GallerySection />
      <div className="section-divider" />
      <TestimonialsSection />
      <InquiryCTA />
    </>
  );
}
