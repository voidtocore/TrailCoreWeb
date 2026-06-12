"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { num: "01", label: "EXPLORE", href: "/explore" },
  { num: "02", label: "JOURNEYS", href: "/packages" },
  { num: "03", label: "SHELTERS", href: "/stays" },
  { num: "04", label: "PLAN TRIP", href: "/custom-trip" },
  { num: "05", label: "CONTACT", href: "/contact" }
];

export default function MenuDemoPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 420, height: 580 });
  const containerRef = useRef(null);

  // Dynamically update open size to fit mobile screens perfectly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWindowSize({
          width: window.innerWidth - 32,
          height: window.innerHeight - 48
        });
      } else {
        setWindowSize({
          width: 420,
          height: 580
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowContent(true);
  };

  const handleClose = () => {
    setShowContent(false);
    // Wait for content fade-out animation to finish before shrinking container
    setTimeout(() => {
      setIsOpen(false);
    }, 280);
  };

  // Click outside to close when menu is open
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Spring animations configs
  const containerVariants = {
    closed: {
      width: "115px",
      height: "46px",
      borderRadius: "999px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 320,
        damping: 30,
        duration: 0.5
      }
    },
    open: {
      width: `${windowSize.width}px`,
      height: `${windowSize.height}px`,
      borderRadius: "32px",
      backgroundColor: "#ffffff",
      boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 20, // Slight overshoot for premium feel
        duration: 0.5
      }
    }
  };

  const textVariants = {
    closed: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.25, ease: "easeOut" }
    },
    open: {
      opacity: 0,
      x: -15,
      filter: "blur(4px)",
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const blackCircleVariants = {
    closed: {
      top: "7px",
      right: "7px",
      width: "32px",
      height: "32px",
      backgroundColor: "#000000",
      transition: {
        type: "spring",
        stiffness: 320,
        damping: 30
      }
    },
    open: {
      top: "24px",
      right: "24px",
      width: "42px",
      height: "42px",
      backgroundColor: "#000000",
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 20
      }
    }
  };

  const closeTextVariants = {
    closed: {
      opacity: 0,
      x: 10,
      filter: "blur(2px)",
      transition: { duration: 0.2, ease: "easeIn" }
    },
    open: {
      opacity: 0.5,
      x: 0,
      filter: "blur(0px)",
      transition: { delay: 0.25, duration: 0.3, ease: "easeOut" }
    }
  };

  const xLine1Variants = {
    closed: { rotate: 0, scale: 0, opacity: 0 },
    open: { rotate: 45, scale: 1, opacity: 1, transition: { delay: 0.2 } }
  };

  const xLine2Variants = {
    closed: { rotate: 0, scale: 0, opacity: 0 },
    open: { rotate: -45, scale: 1, opacity: 1, transition: { delay: 0.2 } }
  };

  const menuDotVariants = {
    closed: { scale: 1, opacity: 1 },
    open: { scale: 0, opacity: 0, transition: { duration: 0.15 } }
  };

  // Content stagger transitions
  const listVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.25, // Staggers when container reaches ~70% open state
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      filter: "blur(3px)",
      transition: { duration: 0.2, ease: "easeIn" }
    },
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 14
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#ede4dd] relative overflow-hidden flex items-center justify-center font-sans">
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-12 gap-0 pointer-events-none opacity-[0.03]">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="h-full border-r border-[#ede4dd] col-span-1 first:border-l" />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03] p-12">
        <div className="w-full border-t border-[#ede4dd]" />
        <div className="w-full border-t border-[#ede4dd]" />
        <div className="w-full border-t border-[#ede4dd]" />
      </div>

      {/* Cinematic Center Frame */}
      <div className="max-w-2xl px-6 text-center select-none z-10 pointer-events-none">
        <div className="relative aspect-[16/10] w-[460px] max-w-full mx-auto mb-8 bg-mountain-900 border border-white/[0.03] overflow-hidden">
          <Image
            src="/images/hero-mountains.png"
            alt="Himalayan Peak"
            fill
            className="object-cover cinematic-image opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
        </div>
        
        <span className="text-[10px] font-mono text-forest-glow tracking-[0.25em] uppercase block mb-3">
          motion design lab // v.01
        </span>
        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-snow leading-[0.95] mb-5 uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
          Morphing Menu
        </h1>
        <p className="text-xs sm:text-sm text-stone max-w-md mx-auto leading-relaxed font-light font-mono">
          Interact with the top-right button to experience the physics-based spring transformation, layout anchors, and staggered content.
        </p>
      </div>

      {/* Brand Corner Decals */}
      <div className="absolute bottom-12 left-12 hidden md:block text-[9px] font-mono tracking-widest text-stone-light/20 uppercase">
        TRAIL CORE · DESIGN STUDIO
      </div>
      <div className="absolute bottom-12 right-12 hidden md:block text-[9px] font-mono tracking-widest text-stone-light/20 uppercase">
        HP · INDIA · 32.2280° N, 78.0780° E
      </div>

      {/* Morphing Container Wrapper */}
      <motion.div
        ref={containerRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className="fixed top-6 right-6 z-50 overflow-hidden cursor-default pointer-events-auto"
      >
        {/* Toggle Trigger Area (active only when closed) */}
        {!isOpen && (
          <button
            onClick={handleOpen}
            className="absolute inset-0 w-full h-full bg-transparent border-none outline-none cursor-pointer flex items-center justify-between pl-5 pr-12 z-20"
            aria-label="Open menu"
          >
            <motion.span
              variants={textVariants}
              className="text-[11px] font-mono font-medium tracking-[0.15em] text-black uppercase"
            >
              menu
            </motion.span>
          </button>
        )}

        {/* Close Text Label */}
        <motion.span
          variants={closeTextVariants}
          animate={showContent ? "open" : "closed"}
          className="absolute top-8 right-20 text-[10px] font-mono font-medium tracking-[0.15em] text-black uppercase pointer-events-none z-10"
        >
          close
        </motion.span>

        {/* Black Circle Button (morphs from dot to close icon) */}
        <motion.button
          onClick={isOpen ? handleClose : handleOpen}
          variants={blackCircleVariants}
          className="absolute z-30 rounded-full flex items-center justify-center outline-none border-none cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* Menu Closed Dot (scales down) */}
          <motion.span
            variants={menuDotVariants}
            className="w-1.5 h-1.5 rounded-full bg-white absolute"
          />

          {/* Cross lines for Open State */}
          <motion.span
            variants={xLine1Variants}
            animate={isOpen ? "open" : "closed"}
            className="w-4 h-[1px] bg-white absolute"
          />
          <motion.span
            variants={xLine2Variants}
            animate={isOpen ? "open" : "closed"}
            className="w-4 h-[1px] bg-white absolute"
          />
        </motion.button>

        {/* Menu Panel Content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={listVariants}
              className="w-full h-full pt-28 pb-12 px-8 flex flex-col justify-between select-none text-black"
            >
              {/* Header metadata */}
              <motion.div variants={itemVariants} className="flex justify-between items-center border-b border-black/[0.06] pb-4">
                <span className="text-[9px] font-mono tracking-widest text-black/40 uppercase">
                  00 // INDEX DIRECTORY
                </span>
                <span className="text-[9px] font-mono tracking-widest text-forest-glow uppercase font-medium">
                  active
                </span>
              </motion.div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-1.5 my-auto">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      opacity: hoveredIndex !== null && hoveredIndex !== idx ? 0.35 : 1,
                      transition: "opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    }}
                    className="relative py-2.5 overflow-hidden group"
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline gap-4 relative z-10 w-full"
                    >
                      <span className="text-xs font-mono text-black/45 pt-1">
                        {item.num}
                      </span>
                      <span
                        className="text-3xl sm:text-4xl font-bold tracking-tight leading-[0.9] text-black transition-transform duration-300 group-hover:translate-x-2"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {item.label}
                      </span>
                    </Link>

                    {/* Underline on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5 transform translate-y-[1px]" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-glow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  </motion.div>
                ))}
              </div>

              {/* Footer contact details */}
              <div className="space-y-6 pt-6 border-t border-black/[0.06]">
                <div className="flex justify-between text-[10px] font-mono">
                  <motion.div variants={itemVariants} className="flex flex-col space-y-1">
                    <span className="text-black/35 uppercase">Studio</span>
                    <a href="mailto:hello@trailcore.in" className="text-black hover:text-forest-glow transition-colors font-medium">
                      hello@trailcore.in
                    </a>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col space-y-1">
                    <span className="text-black/35 uppercase">Follow</span>
                    <div className="flex gap-3">
                      <a href="#" className="text-black hover:text-forest-glow transition-colors font-medium">IG</a>
                      <a href="#" className="text-black hover:text-forest-glow transition-colors font-medium">LN</a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
