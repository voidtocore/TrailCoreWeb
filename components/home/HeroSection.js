"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.65, 0.05, 0, 1];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered dark gradients with subtle alpine radial glow */}
      <div className="absolute inset-0 bg-[#080808]">
        <div className="alpine-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/70 to-[#080808]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.75, ease: EASE }}
          className="inline-block text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-stone/50 mb-7"
        >
          Curated Himalayan Journeys
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.85, ease: EASE }}
          className="text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] font-bold tracking-[-0.04em] text-snow mb-6"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Premium Himalayan
          <br />
          <span className="text-gradient-green">Journeys</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.75, ease: EASE }}
          className="text-[0.9375rem] sm:text-base md:text-lg text-parchment/80 max-w-lg mx-auto mb-10 leading-relaxed font-light"
        >
          Slow Himalayan journeys designed for meaningful exploration.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.75, ease: EASE }}
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
