"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLoading } from "./LoadingOrchestrator";
import { ParallaxText, ParallaxImage, DriftTypography } from "../Animations";

const EASE = [0.77, 0, 0.175, 1];

export default function HeroSection() {
  const { isLoaded } = useLoading();

  return (
    <section className="relative min-h-[110vh] flex items-center bg-background overflow-hidden px-6 md:px-16 pt-28 pb-16">
      {/* Alpine radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.07 } : { opacity: 0 }}
          transition={{ duration: 2.2, delay: 0.6, ease: EASE }}
          className="alpine-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
      </div>

      {/* Giant background typography layer (Kinetic architecture) */}
      <div className="absolute top-[28%] left-0 w-full z-0 opacity-[0.03]">
        <DriftTypography 
          text="H I M A L A Y A S" 
          speed={1.1} 
          direction={1} 
          className="text-[12vw] font-bold text-snow tracking-[0.2em] uppercase select-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Foreground: Asymmetric Typographic Plane */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
          {/* Drifting Coordinates / Metadata */}
          <ParallaxText speed={0.2} direction={-1} className="mb-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isLoaded ? { opacity: 0.5, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 1.2, ease: EASE }}
              className="text-[0.625rem] font-mono uppercase tracking-[0.3em] text-forest-glow flex items-center gap-4 mono-number"
            >
              <span>32.2396° N, 77.1887° E</span>
              <span className="text-white/20">//</span>
              <span>ALTITUDE 2,276M</span>
            </motion.div>
          </ParallaxText>

          {/* Kinetic Asymmetrical Heading */}
          <div className="overflow-hidden mb-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 64, filter: "blur(8px)" }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.3, duration: 1.6, ease: EASE }}
              className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] font-medium text-snow tracking-tighter flex flex-col"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span className="block">THE SILENT</span>
              {/* Offset plane */}
              <span className="block text-gradient-green pl-[12%] md:pl-[20%] mt-1">
                HIGH PASSES
              </span>
              <span className="block text-right pr-[8%] opacity-40 font-light mt-1 text-[0.8em]">
                OF THE NORTH
              </span>
            </motion.h1>
          </div>

          {/* Drifting description block */}
          <ParallaxText speed={0.1} direction={1} className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isLoaded ? { opacity: 0.8, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1.3, ease: EASE }}
              className="text-xs sm:text-[0.875rem] text-parchment max-w-md mb-12 leading-relaxed font-light"
            >
              A Himalayan travel studio designing slow, spatial expeditions through Spiti Valley, Kinnaur, and high alpine passes.
            </motion.p>
          </ParallaxText>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 1.1, ease: EASE }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/packages"
              className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 group text-[10px]"
            >
              Explore Expeditions
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/adventures"
              className="btn-outline w-full sm:w-auto text-[10px]"
            >
              Upcoming Departures
            </Link>
          </motion.div>
        </div>

        {/* Right Foreground: Floating parallax visual frame */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96, filter: "blur(10px)" }}
            animate={isLoaded ? { opacity: 0.65, y: 0, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.5, duration: 1.8, ease: EASE }}
          >
            <ParallaxImage 
              src="/images/hero-mountains.png" 
              alt="High Himalayan snow-capped passes" 
              speed={0.3} 
              aspect="aspect-[3/4]" 
              className="rounded-[4px] border border-white/[0.04]"
            />
          </motion.div>
          
          {/* Floating altitude details tag */}
          <div className="absolute -bottom-6 -left-6 bg-mountain-900 border border-white/[0.05] p-4 rounded-[2px] shadow-2xl hidden md:block">
            <span className="text-[9px] uppercase tracking-widest text-forest-glow block mb-1">Pass Elevation</span>
            <span className="text-xs font-semibold text-snow mono-number">4,270M — 5,319M</span>
          </div>
        </div>
      </div>
    </section>
  );
}
