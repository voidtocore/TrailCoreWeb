"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLoading } from "./LoadingOrchestrator";

const EASE = [0.65, 0.05, 0, 1];

export default function HeroSection() {
  const { isLoaded } = useLoading();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0d0c]">
      {/* Layered dark gradients with subtle alpine radial glow */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.07 } : { opacity: 0 }}
          transition={{ duration: 2.2, delay: 0.6, ease: EASE }}
          className="alpine-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0d0c]/70 to-[#0c0d0c]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={isLoaded ? { opacity: 0.5, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.1, duration: 1.0, ease: EASE }}
          className="inline-block text-[0.625rem] font-medium uppercase tracking-[0.25em] text-stone-light mb-8"
        >
          Curated Himalayan Journeys
        </motion.span>

        {/* Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ 
              opacity: 0, 
              y: 48, 
              letterSpacing: "-0.01em",
              filter: "blur(8px)" 
            }}
            animate={isLoaded ? { 
              opacity: 1, 
              y: 0, 
              letterSpacing: "-0.04em",
              filter: "blur(0px)" 
            } : {}}
            transition={{ 
              delay: 0.25, 
              duration: 1.3, 
              ease: EASE 
            }}
            className="text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.95] font-semibold text-snow"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Premium Himalayan
            <br />
            <span className="text-gradient-green">Journeys</span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={isLoaded ? { opacity: 0.8, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.5, duration: 1.1, ease: EASE }}
          className="text-[0.9375rem] sm:text-base text-parchment max-w-lg mx-auto mb-12 leading-relaxed font-light"
        >
          Slow Himalayan journeys designed for meaningful exploration.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          <Link
            href="/packages"
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            Explore Expeditions
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/adventures"
            className="btn-outline w-full sm:w-auto"
          >
            Upcoming Departures
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
