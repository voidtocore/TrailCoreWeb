"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-mountains.png"
        alt="Himalayan mountain landscape at dawn"
        fill
        className="object-cover"
        preload
        quality={90}
      />

      {/* Cinematic Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Grain Texture */}
      <div className="cinematic-grain absolute inset-0 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
        {/* Logo watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <Image
            src="/images/logo-trailcore.png"
            alt="Trail Core"
            width={180}
            height={46}
            className="h-8 sm:h-10 w-auto mx-auto brightness-[10] opacity-50"
          />
        </motion.div>

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-stone/50 mb-6"
        >
          Curated Himalayan Journeys
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-snow/95 mb-6"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Premium Himalayan
          <br />
          <span className="text-gradient-green">Expeditions</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-sm sm:text-base md:text-lg text-stone/50 max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Slow travel experiences across Spiti, Kinnaur, and the Indian
          Himalayas. Designed for meaningful exploration.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md mx-auto"
        >
          <Link
            href="/packages"
            className="w-full sm:w-auto justify-center px-8 py-3.5 bg-forest/80 hover:bg-forest-light/80 text-white/90 font-medium tracking-wide rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-forest/10 flex items-center gap-2 border border-forest-light/20 text-sm"
          >
            Explore Expeditions
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto justify-center px-8 py-3.5 border border-white/10 hover:bg-white/[0.04] text-snow/70 hover:text-snow font-medium tracking-wide rounded-full transition-all duration-500 backdrop-blur-sm flex items-center text-sm"
          >
            Upcoming Departures
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <div className="w-[2px] h-1.5 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
