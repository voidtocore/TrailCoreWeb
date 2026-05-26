"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "./home/LoadingOrchestrator";

const menuData = {
  discover: {
    label: "discover",
    items: [
      { label: "mountains", href: "/destinations" },
      { label: "forests", status: "coming soon" },
      { label: "coastal", status: "launching soon" },
      { label: "heritage", status: "currently crafting" },
      { label: "snow", status: "coming soon" },
      { label: "weekend escapes", status: "launching soon" },
      { label: "hidden towns", status: "currently crafting" },
      { label: "international", status: "coming soon" },
    ]
  },
  offgrid: {
    label: "offgrid",
    items: [
      { label: "hidden escapes", href: "/packages" },
      { label: "remote stays", status: "launching soon" },
      { label: "cabin retreats", status: "coming soon" },
      { label: "slow travel", status: "currently crafting" },
      { label: "scenic routes", status: "coming soon" },
      { label: "untouched places", status: "launching soon" },
      { label: "digital detox", status: "coming soon" },
      { label: "private escapes", status: "currently crafting" },
    ]
  },
  stays: {
    label: "stays",
    items: [
      { label: "boutique hotels", status: "coming soon" },
      { label: "luxury cabins", status: "launching soon" },
      { label: "villas", status: "currently crafting" },
      { label: "mountain retreats", href: "/honeymoon" },
      { label: "glass houses", status: "coming soon" },
      { label: "homestays", status: "currently crafting" },
      { label: "wellness stays", status: "launching soon" },
      { label: "curated stays", status: "coming soon" },
    ]
  },
  editions: {
    label: "editions",
    items: [
      { label: "summer edition", status: "launching soon" },
      { label: "snowfall edition", status: "coming soon" },
      { label: "honeymoon edition", href: "/honeymoon" },
      { label: "workation edition", status: "currently crafting" },
      { label: "48 hour escapes", status: "coming soon" },
      { label: "luxury roadtrips", href: "/packages" },
      { label: "café trails", status: "launching soon" },
      { label: "wellness escapes", status: "currently crafting" },
    ]
  },
  reserve: {
    label: "reserve",
    items: [
      { label: "custom planning", href: "/custom-trip" },
      { label: "private bookings", status: "coming soon" },
      { label: "group journeys", status: "launching soon" },
      { label: "transport", status: "currently crafting" },
      { label: "concierge", status: "coming soon" },
      { label: "exclusive access", status: "launching soon" },
    ]
  },
  studio: {
    label: "studio",
    items: [
      { label: "philosophy", href: "/about" },
      { label: "partnerships", status: "launching soon" },
      { label: "careers", status: "currently crafting" },
      { label: "contact", href: "/contact" },
      { label: "press", status: "coming soon" },
    ]
  }
};

const overlayVariants = {
  open: {
    clipPath: "circle(150% at 93% 40px)",
    opacity: 1,
    visibility: "visible",
    transition: {
      duration: 0.95,
      ease: [0.77, 0, 0.175, 1],
    }
  },
  closed: {
    clipPath: "circle(0px at 93% 40px)",
    opacity: 0,
    transitionEnd: {
      visibility: "hidden"
    },
    transition: {
      duration: 0.85,
      ease: [0.77, 0, 0.175, 1],
      delay: 0.05
    }
  }
};

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.77, 0, 0.175, 1]
    }
  },
  closed: {
    y: 32,
    opacity: 0,
    transition: {
      duration: 0.65,
      ease: [0.77, 0, 0.175, 1]
    }
  }
};

export default function Navbar() {
  const { isLoaded } = useLoading();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("discover");
  const [expandedSection, setExpandedSection] = useState(null);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);
      
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current) {
          setVisible(false); // hide on scroll down
        } else {
          setVisible(true); // show on scroll up
        }
      } else {
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling when fullscreen menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [menuOpen]);

  const handleNavClick = (key) => {
    if (menuOpen && activeCategory === key) {
      setMenuOpen(false);
    } else {
      setActiveCategory(key);
      setMenuOpen(true);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={isLoaded ? { y: visible || menuOpen ? 0 : -100, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-colors duration-500 ${
          scrolled || menuOpen
            ? "bg-[#0c0d0c]/90 backdrop-blur-xl border-b border-white/[0.04] py-3"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-[1001]" onClick={() => setMenuOpen(false)}>
            {/* Desktop Wordmark */}
            <div className="hidden lg:block">
              <Image
                src="/images/logo-tc.png"
                alt="TrailCore"
                width={120}
                height={32}
                priority
                className="h-7 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* Mobile Monogram */}
            <div className="lg:hidden">
              <Image
                src="/images/logo-tc.png"
                alt="TrailCore"
                width={48}
                height={48}
                priority
                className="w-12 h-12 object-contain opacity-95"
              />
            </div>
          </Link>

          {/* Desktop Direct Menu Category Triggers */}
          <div className="hidden lg:flex items-center gap-1 relative z-[1001]">
            {Object.keys(menuData).map((key) => {
              const menu = menuData[key];
              const isActive = menuOpen && activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => handleNavClick(key)}
                  className="relative px-4 py-2.5 text-[11px] font-medium tracking-[0.08em] text-parchment hover:text-snow cursor-pointer transition-colors duration-300 block uppercase"
                >
                  {menu.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent-warm"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Trigger and Menu Button */}
          <div className="flex items-center gap-6 relative z-[1001]">
            {/* WhatsApp CTA (Desktop only) */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20your%20Himalayan%20expeditions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-[10px] tracking-widest py-2 px-5"
              >
                reserve via whatsapp
              </a>
            </div>

            {/* Premium Fullscreen Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 text-snow cursor-pointer group py-2"
              aria-label="Toggle menu"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase font-light text-parchment group-hover:text-snow transition-colors duration-300">
                {menuOpen ? "close" : "menu"}
              </span>
              <div className="relative w-5 h-2 flex flex-col justify-between items-end overflow-hidden">
                <span
                  className={`block h-[1px] bg-snow transition-all duration-500 ease-[0.77,0,0.175,1] ${
                    menuOpen ? "w-5 rotate-45 translate-y-[3.5px]" : "w-5"
                  }`}
                />
                <span
                  className={`block h-[1px] bg-snow transition-all duration-500 ease-[0.77,0,0.175,1] ${
                    menuOpen ? "w-5 -rotate-45 -translate-y-[3.5px]" : "w-3 group-hover:w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Fullscreen Menu Overlay */}
      <motion.div
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={overlayVariants}
        className="fixed inset-0 z-[990] bg-[#0c0d0c]/98 backdrop-blur-2xl flex flex-col justify-between pt-36 px-6 md:px-16 pb-12 overflow-hidden"
        style={{ clipPath: "circle(0px at 93% 40px)" }}
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[30%] right-[30%] w-[40%] h-[40%] opacity-[0.03] bg-radial from-forest-glow to-transparent blur-[120px] rounded-full mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Bold main links (staggered animations) */}
          <motion.div 
            variants={containerVariants}
            className="lg:col-span-5 flex flex-col space-y-3 sm:space-y-4 items-start"
          >
            {Object.keys(menuData).map((key, idx) => {
              const isActive = activeCategory === key;
              return (
                <div key={key} className="overflow-hidden">
                  <motion.button
                    variants={itemVariants}
                    onClick={() => setActiveCategory(key)}
                    className="flex items-baseline gap-4 group/cat text-left w-full cursor-pointer focus:outline-none"
                  >
                    <span className="text-[10px] font-mono text-accent-warm/50 mono-number">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-[2.25rem] sm:text-[4vw] tracking-tighter leading-none lowercase transition-all duration-500 ${
                      isActive ? "text-snow font-medium pl-2" : "text-white/20 hover:text-white/60 font-light"
                    }`}>
                      {menuData[key].label}
                    </span>
                  </motion.button>
                </div>
              );
            })}
          </motion.div>

          {/* Center Column: Vertical Divider Line */}
          <div className="col-span-1 justify-center hidden lg:flex">
            <div className="w-[1px] h-[55vh] bg-white/[0.03]" />
          </div>

          {/* Right Column: Active Category Submenu (framer-motion layout transitions) */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <div className="hidden lg:block mb-8">
              <span className="text-[10px] tracking-[0.25em] text-accent-warm uppercase font-mono">
                [ {activeCategory} ]
              </span>
            </div>

            {/* Desktop Layout grid */}
            <div className="hidden lg:block min-h-[35vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                  className="grid grid-cols-2 gap-x-12 gap-y-6"
                >
                  {menuData[activeCategory].items.map((item) => (
                    <div key={item.label} className="group/sub">
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1 text-sm font-light text-parchment/65 hover:text-snow group-hover/sub:pl-1.5 transition-all duration-300 lowercase"
                        >
                          <span className="relative inline-block">
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-warm group-hover/sub:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      ) : (
                        <div className="py-1 flex items-baseline gap-2.5 opacity-35 select-none">
                          <span className="text-sm font-light text-parchment/50 lowercase">{item.label}</span>
                          <span className="text-[8px] tracking-[0.1em] text-accent-warm/75 bg-accent-warm/5 px-2 py-0.5 rounded border border-accent-warm/10 font-mono font-medium lowercase">
                            {item.status}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Layout stack (expand accordions inline) */}
            <div className="lg:hidden flex flex-col space-y-4 overflow-y-auto max-h-[50vh] pr-2">
              {Object.keys(menuData).map((key, idx) => {
                const isExpanded = expandedSection === key;
                return (
                  <div 
                    key={key} 
                    className="border-b border-white/[0.02] pb-3 last:border-0"
                  >
                    <button
                      onClick={() => setExpandedSection(isExpanded ? null : key)}
                      className="w-full flex justify-between items-baseline text-xl font-light text-snow/90 leading-relaxed lowercase"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-[10px] font-mono text-accent-warm/50">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="hover:text-snow transition-colors duration-200">{menuData[key].label}</span>
                      </div>
                      <span className={`text-stone/40 text-xs transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
                          className="overflow-hidden mt-3 pl-6 flex flex-col space-y-3"
                        >
                          {menuData[key].items.map((item) => (
                            <div key={item.label}>
                              {item.href ? (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-1 text-sm text-parchment/60 active:text-snow hover:text-snow transition-colors lowercase font-light"
                                >
                                  {item.label}
                                </Link>
                              ) : (
                                <div key={item.label} className="py-1 flex items-baseline gap-2 opacity-35 select-none">
                                  <span className="text-sm text-parchment/50 lowercase font-light">{item.label}</span>
                                  <span className="text-[7px] tracking-[0.1em] text-accent-warm/80 bg-accent-warm/5 px-1.5 py-0.5 rounded border border-accent-warm/15 font-mono lowercase">
                                    soon
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Fullscreen Overlay Footer Metadata */}
        <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.03] grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px] tracking-[0.2em] font-light text-parchment-dim uppercase relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-accent-warm font-mono">//</span>
            <span>32.2396° N, 77.1887° E</span>
          </div>
          <div className="flex md:justify-center items-center gap-4">
            <a href="mailto:hello@trailcore.in" className="hover:text-snow transition-colors lowercase tracking-normal">hello@trailcore.in</a>
            <span className="opacity-20">|</span>
            <a href="tel:+917560065963" className="hover:text-snow transition-colors lowercase tracking-normal">+91 75600 65963</a>
          </div>
          <div className="flex md:justify-end items-center gap-2">
            <span>© {new Date().getFullYear()} trail core</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}