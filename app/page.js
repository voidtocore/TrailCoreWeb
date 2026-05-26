import HeroSection from "@/components/home/HeroSection";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExpeditionPhilosophy from "@/components/home/ExpeditionPhilosophy";
import GallerySection from "@/components/home/GallerySection";
import AdventureSection from "@/components/home/AdventureSection";
import HoneymoonSection from "@/components/home/HoneymoonSection";
import InquiryCTA from "@/components/home/InquiryCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="editorial-divider" />
      <FeaturedExperiences />
      <hr className="editorial-divider" />
      <WhyChooseUs />
      <ExpeditionPhilosophy />
      <hr className="editorial-divider" />
      <GallerySection />
      <hr className="editorial-divider" />
      <AdventureSection />
      <hr className="editorial-divider" />
      <HoneymoonSection />
      <InquiryCTA />
    </>
  );
}
