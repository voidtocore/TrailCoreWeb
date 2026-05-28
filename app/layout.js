import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingOrchestrator from "@/components/home/LoadingOrchestrator";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-outfit", // Maps --font-outfit to Space Grotesk for backward layout compatibility
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased overflow-x-hidden`}
    >
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            var theme = localStorage.getItem("trailcore-theme") || "light";
            document.documentElement.setAttribute("data-theme", theme);
          })()
        `}} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden relative transition-colors duration-300">
        {/* Procedural Film Grain Noise Layer */}
        <div className="mobile-noise-overlay fixed inset-0 pointer-events-none z-[9998]" />
        
        <SmoothScroll />
        <LoadingOrchestrator>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LoadingOrchestrator>
      </body>
    </html>
  );
}
