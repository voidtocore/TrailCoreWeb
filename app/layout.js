import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "CoreTrail — Premium Himachal Mountain Experiences",
  description:
    "Curated mountain experiences in Himachal Pradesh. Spiti Valley circuits, budget road trips, adventure treks, and custom honeymoon trips crafted by local experts.",
  keywords:
    "Himachal Pradesh travel, Spiti Valley tour, Manali trip, Shimla tour, adventure trekking Himachal, honeymoon Himachal, road trip Himachal",
  openGraph: {
    title: "CoreTrail — Premium Himachal Mountain Experiences",
    description:
      "Curated mountain experiences in Himachal Pradesh. From Spiti circuits to custom honeymoons.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-mountain-black text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
