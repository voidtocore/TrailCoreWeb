import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import DestinationDetail from "./DestinationDetail";

// Pre-render pages at build time (highly optimal for SEO and performance)
export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

// Generate dynamic head metadata tags
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    return {
      title: "Destination Not Found — Trail Core",
      description: "Himalayan destinations catalog",
    };
  }

  return {
    title: `${dest.name} Travel Guide — Slow & Offgrid | Trail Core`,
    description: dest.summary,
    openGraph: {
      title: `${dest.name} Travel Guide | Trail Core`,
      description: dest.summary,
      images: [{ url: dest.img }],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  return <DestinationDetail dest={dest} />;
}
