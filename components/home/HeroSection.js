"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden py-24">
      <Image
        src="/images/hero-mountains.png"
        alt="Himachal Pradesh mountains"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="hero-overlay absolute inset-0 z-10" />
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-forest-glow mb-6"
        >
          Premium Himachal Experiences
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold text-snow mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Where Mountains{" "}
          <span className="text-gradient-green">Meet Memories</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed px-1"
        >
          Curated road trips, Spiti Valley circuits, adventure treks, and
          honeymoon escapes — handcrafted by local experts who call these
          mountains home.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="/packages"
            className="w-full sm:w-auto justify-center px-8 py-3.5 bg-forest hover:bg-forest-light text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest/25 flex items-center gap-2"
          >
            Explore Packages
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/custom-trip"
            className="w-full sm:w-auto justify-center px-8 py-3.5 border border-white/20 hover:bg-white/10 text-snow font-medium rounded-full transition-all duration-300 backdrop-blur-sm flex items-center"
          >
            Plan Custom Trip
          </Link>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
