import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Trail Core — Premium Himalayan Expeditions",
  description:
    "Curated slow-travel expeditions across Spiti Valley, Kinnaur, and the Indian Himalayas. Small group journeys designed for meaningful mountain experiences.",
  keywords:
    "Himalayan expeditions, Spiti Valley expedition, Kinnaur journey, premium mountain travel, slow travel India, curated Himalayan experiences, Trail Core",
  openGraph: {
    title: "Trail Core — Premium Himalayan Expeditions",
    description:
      "Slow travel experiences across Spiti, Kinnaur, and the Indian Himalayas. Curated expeditions for meaningful exploration.",
    type: "website",
    siteName: "Trail Core",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${outfit.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-mountain-black text-foreground overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
