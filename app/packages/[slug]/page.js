import { notFound } from "next/navigation";
import { expeditions } from "@/data/expeditions";
import JourneyDetail from "./JourneyDetail";

// Pre-render pages at build time
export async function generateStaticParams() {
  return expeditions
    .filter((exp) => exp.slug)
    .map((exp) => ({
      slug: exp.slug,
    }));
}

// Generate metadata tags
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const exp = expeditions.find((e) => e.slug === slug);

  if (!exp) {
    return {
      title: "Journey Not Found — Trail Core",
      description: "Curated Himalayan road trips & treks",
    };
  }

  return {
    title: `${exp.title} — ${exp.duration} | Trail Core`,
    description: exp.summary,
    openGraph: {
      title: `${exp.title} | Trail Core`,
      description: exp.summary,
      images: [{ url: exp.img }],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const exp = expeditions.find((e) => e.slug === slug);

  if (!exp) {
    notFound();
  }

  return <JourneyDetail journey={exp} />;
}
