"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import InquiryCTA from "@/components/home/InquiryCTA";

const packages = [
  { title: "Spiti Valley Complete Circuit", duration: "10 Days / 9 Nights", price: "₹18,999", priceNote: "per person", img: "/images/spiti-valley.png", tag: "Best Seller", route: "Shimla → Narkanda → Sarahan → Kalpa → Nako → Kaza → Manali", includes: ["Transport", "Accommodation", "Meals", "Local Guide", "Permits"] },
  { title: "Budget Himachal Road Trip", duration: "6 Days / 5 Nights", price: "₹9,999", priceNote: "per person", img: "/images/road-trip.png", tag: "Best Value", route: "Shimla → Kufri → Narkanda → Manali → Solang", includes: ["Transport", "Accommodation", "Breakfast", "Sightseeing"] },
  { title: "Kinnaur Valley Explorer", duration: "7 Days / 6 Nights", price: "₹14,999", priceNote: "per person", img: "/images/kalpa.png", tag: "Scenic", route: "Shimla → Narkanda → Sarahan → Sangla → Kalpa → Chitkul", includes: ["Transport", "Accommodation", "Meals", "Guide", "Permits"] },
  { title: "Manali Adventure Special", duration: "5 Days / 4 Nights", price: "₹11,999", priceNote: "per person", img: "/images/manali.png", tag: "Adventure", route: "Manali → Solang → Rohtang → Old Manali → Naggar", includes: ["Transport", "Accommodation", "2 Activities", "Breakfast"] },
  { title: "Complete Himachal Grand Tour", duration: "14 Days / 13 Nights", price: "₹29,999", priceNote: "per person", img: "/images/hero-mountains.png", tag: "Premium", route: "Shimla → Sarahan → Kalpa → Kaza → Manali → Dharamshala → Dalhousie", includes: ["Transport", "Premium Stays", "All Meals", "Guide", "Activities"] },
  { title: "Weekend Shimla Getaway", duration: "3 Days / 2 Nights", price: "₹5,999", priceNote: "per person", img: "/images/shimla.png", tag: "Quick Trip", route: "Shimla → Kufri → Mashobra → Naldehra", includes: ["Transport", "Hotel", "Breakfast", "Sightseeing"] },
];

export default function PackagesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading label="Packages" title="Curated Mountain Journeys" description="Hand-picked itineraries designed by local experts. Every package is customizable to your preferences." />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.title}>
                <div className="glass rounded-2xl overflow-hidden group h-full flex flex-col hover:border-forest/30 transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={pkg.img} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-900 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-forest/80 backdrop-blur-sm text-white rounded-full">{pkg.tag}</span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-slate-300">{pkg.duration}</p>
                      <h3 className="text-lg font-bold text-snow mt-1">{pkg.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-slate-400 mb-3">{pkg.route}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.includes.map((inc) => (
                        <span key={inc} className="px-2 py-1 text-xs bg-white/5 text-slate-300 rounded">{inc}</span>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-end justify-between">
                      <div>
                        <span className="text-2xl font-bold text-snow">{pkg.price}</span>
                        <span className="text-xs text-slate-400 ml-1">/{pkg.priceNote}</span>
                      </div>
                      <Link href="/contact" className="px-4 py-2 bg-forest hover:bg-forest-light text-white text-xs font-medium rounded-full transition-all">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-sm text-slate-400 mt-8">* All prices are starting prices and may vary based on season, group size, and customization.</p>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
