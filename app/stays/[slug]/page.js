import { notFound } from "next/navigation";
import { stays } from "@/data/stays";
import StayDetail from "./StayDetail";

// Pre-render pages at build time
export async function generateStaticParams() {
  return stays.map((stay) => ({
    slug: stay.slug,
  }));
}

// Generate metadata tags
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);

  if (!stay) {
    return {
      title: "Stay Not Found — Trail Core",
      description: "Alpine stays in Himachal Pradesh",
    };
  }

  return {
    title: `${stay.name} — Curated ${stay.type.toLowerCase()} | Trail Core`,
    description: stay.summary,
    openGraph: {
      title: `${stay.name} | Trail Core`,
      description: stay.summary,
      images: [{ url: stay.img }],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);

  if (!stay) {
    notFound();
  }

  return <StayDetail stay={stay} />;
}
