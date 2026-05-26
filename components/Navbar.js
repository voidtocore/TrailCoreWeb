"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "./home/LoadingOrchestrator";

const menuData = {
  discover: {
    label: "DISCOVER",
    items: [
      { label: "MOUNTAINS", href: "/destinations" },
      { label: "FORESTS", status: "COMING SOON" },
      { label: "COASTAL", status: "LAUNCHING SOON" },
      { label: "HERITAGE", status: "CRAFTING" },
      { label: "SNOW", status: "COMING SOON" },
      { label: "WEEKEND ESCAPES", status: "LAUNCHING SOON" },
      { label: "HIDDEN TOWNS", status: "CRAFTING" },
      { label: "INTERNATIONAL", status: "COMING SOON" },
    ]
  },
  offgrid: {
    label: "OFFGRID",
    items: [
      { label: "HIDDEN ESCAPES", href: "/packages" },
      { label: "REMOTE STAYS", status: "LAUNCHING SOON" },
      { label: "CABIN RETREATS", status: "COMING SOON" },
      { label: "SLOW TRAVEL", status: "CRAFTING" },
      { label: "SCENIC ROUTES", status: "COMING SOON" },
      { label: "UNTOUCHED PLACES", status: "LAUNCHING SOON" },
      { label: "DIGITAL DETOX", status: "COMING SOON" },
      { label: "PRIVATE ESCAPES", status: "CRAFTING" },
    ]
  },
  stays: {
    label: "STAYS",
    items: [
      { label: "BOUTIQUE HOTELS", status: "COMING SOON" },
      { label: "LUXURY CABINS", status: "LAUNCHING SOON" },
      { label: "VILLAS", status: "CRAFTING" },
      { label: "MOUNTAIN RETREATS", href: "/honeymoon" },
      { label: "GLASS HOUSES", status: "COMING SOON" },
      { label: "HOMESTAYS", status: "CRAFTING" },
      { label: "WELLNESS STAYS", status: "LAUNCHING SOON" },
      { label: "CURATED STAYS", status: "COMING SOON" },
    ]
  },
  editions: {
    label: "EDITIONS",
    items: [
      { label: "SUMMER EDITION", status: "LAUNCHING SOON" },
      { label: "SNOWFALL EDITION", status: "COMING SOON" },
      { label: "HONEYMOON EDITION", href: "/honeymoon" },
      { label: "WORKATION EDITION", status: "CRAFTING" },
      { label: "48 HOUR ESCAPES", status: "COMING SOON" },
      { label: "LUXURY ROADTRIPS", href: "/packages" },
      { label: "CAFÉ TRAILS", status: "LAUNCHING SOON" },
      { label: "WELLNESS ESCAPES", status: "CRAFTING" },
    ]
  },
  reserve: {
    label: "RESERVE",
    items: [
      { label: "CUSTOM PLANNING", href: "/custom-trip" },
      { label: "PRIVATE BOOKINGS", status: "COMING SOON" },
      { label: "GROUP JOURNEYS", status: "LAUNCHING SOON" },
      { label: "TRANSPORT", status: "CRAFTING" },
      { label: "CONCIERGE", status: "COMING SOON" },
      { label: "EXCLUSIVE ACCESS", status: "LAUNCHING SOON" },
    ]
  },
  studio: {
    label: "STUDIO",
    items: [
      { label: "PHILOSOPHY", href: "/about" },
      { label: "PARTNERSHIPS", status: "LAUNCHING SOON" },
      { label: "CAREERS", status: "CRAFTING" },
      { label: "CONTACT", href: "/contact" },
      { label: "PRESS", status: "COMING SOON" },
    ]
  }
};

function MenuItem({ item }) {
  if (item.href) {
    return (
      <Link
        href={item.href}
        className="group/item flex items-center justify-between py-4 border-b border-white/[0.02] hover:border-white/[0.06] transition-all duration-500"
      >
        <span className="text-[11px] font-medium tracking-[0.12em] text-parchment/60 group-hover/item:text-snow group-hover/item:translate-x-2 transition-all duration-500 uppercase relative flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-accent-warm opacity-0 group-hover/item:opacity-100 transition-all duration-500 scale-50 group-hover/item:scale-100" />
          {item.label}
        </span>
        <span className="text-[9px] text-accent-warm/50 font-mono tracking-[0.2em] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 uppercase">
          VIEW
        </span>
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-between py-4 border-b border-white/[0.015] cursor-not-allowed select-none">
      <span className="text-[11px] font-medium tracking-[0.12em] text-parchment/25 uppercase flex items-center gap-3">
        <span className="w-1 h-1 rounded-full bg-white/8" />
        {item.label}
      </span>
      <span className="text-[8px] font-mono text-stone-light/30 bg-white/[0.02] px-2 py-0.5 rounded-sm border border-white/[0.04] tracking-[0.15em] uppercase">
        {item.status || "SOON"}
      </span>
    </div>
  );
}

const menuTaglines = {
  discover: {
    tag: "EXPLORE · PATHWAYS",
    title: "Walk the untamed edges",
    desc: "Slow journeys through high-altitude Spiti, deep pine valleys, and raw Himalayan terrain — curated for deliberate travellers."
  },
  offgrid: {
    tag: "SILENCE · ISOLATION",
    title: "Dwellings of complete quiet",
    desc: "Remote mountain retreats designed for digital detox, reflection, and stillness in places far beyond the signal line."
  },
  stays: {
    tag: "SHELTER · LUXURY",
    title: "Alpine sanctuaries",
    desc: "Boutique cabins, glass houses, and mountain retreats — each chosen for architectural character and Himalayan setting."
  },
  editions: {
    tag: "LIMITED · CURATED",
    title: "Seasonal travel editions",
    desc: "Time-specific journeys crafted around snowfall, bloom, and altitude — Trail Core's curated travel calendar."
  },
  reserve: {
    tag: "BESPOKE · PRIVATE",
    title: "Private expedition design",
    desc: "Tailored itineraries built around your pace, group, and terrain preferences. Nothing template-made."
  },
  studio: {
    tag: "PHILOSOPHY · CRAFT",
    title: "About Trail Core",
    desc: "Our approach to slow travel, our network of field partners, and how to get in touch with the team."
  }
};

const desktopDropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -12,
    transition: {
      duration: 0.4,
      ease: [0.77, 0, 0.175, 1],
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.77, 0, 0.175, 1],
      staggerChildren: 0.03,
      delayChildren: 0.05,
    }
  }
};

const dropdownItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 10,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.77, 0, 0.175, 1]
    }
  }
};

const mobileOverlayVariants = {
  open: {
    clipPath: "circle(150% at 93% 40px)",
    opacity: 1,
    visibility: "visible",
    transition: {
      duration: 0.9,
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
      duration: 0.8,
      ease: [0.77, 0, 0.175, 1],
    }
  }
};

const mobileContainerVariants = {
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

const mobileItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.175, 1]
    }
  },
  closed: {
    y: 24,
    opacity: 0,
    filter: "blur(4px)",
    transition: {
      duration: 0.6,
      ease: [0.77, 0, 0.175, 1]
    }
  }
};

export default function Navbar() {
  const { isLoaded } = useLoading();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    setHoveredIndex(null);
  }, [activeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);
      
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resize handler to automatically close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keydown handler to close menu / active mega menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scrolling when mobile fullscreen menu is active
  useEffect(() => {
    if (mobileOpen) {
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
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        onMouseLeave={() => setActiveMenu(null)}
        initial={{ y: -100, opacity: 0 }}
        animate={isLoaded ? { y: visible || mobileOpen ? 0 : -100, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-colors duration-500 ${
          scrolled || activeMenu
            ? "bg-[#0c0d0c]/90 backdrop-blur-xl border-b border-white/[0.04] py-3"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-[1001]" onClick={() => setMobileOpen(false)}>
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

          {/* Desktop Horizontal Navigation Items */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.keys(menuData).map((key) => {
              const menu = menuData[key];
              return (
                <div
                  key={key}
                  className="static"
                  onMouseEnter={() => setActiveMenu(key)}
                >
                  <span className="relative z-10 px-4 py-3 text-[11px] font-medium tracking-[0.08em] text-parchment hover:text-snow cursor-pointer transition-colors duration-300 block uppercase">
                    {menu.label}
                    {activeMenu === key && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent-warm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA / WhatsApp */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20your%20Himalayan%20expeditions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-[10px] tracking-widest py-2 px-5"
            >
              reserve via whatsapp
            </a>
          </div>

          {/* Mobile Hamburger menu - visible ONLY below lg breakpoint */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg z-[1001] text-snow cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-3 flex items-center justify-center">
              <span
                className={`absolute block h-[1px] w-5 bg-snow transition-transform duration-300 ease-out ${mobileOpen ? "rotate-45" : "-translate-y-[4px]"
                  }`}
              />
              <span
                className={`absolute block h-[1px] w-5 bg-snow transition-transform duration-300 ease-out ${mobileOpen ? "-rotate-45" : "translate-y-[4px]"
                  }`}
              />
            </div>
          </button>

          {/* Desktop Dropdown Mega Menus */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={desktopDropdownVariants}
                className="absolute top-full left-0 right-0 mt-0 w-full bg-[#0c0d0c]/98 backdrop-blur-3xl border-b border-white/[0.04] py-16 px-12 z-40 hidden lg:block overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)]"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Ambient Radial Background Glow */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-[20%] right-[10%] w-[50vw] h-[50vw] opacity-[0.03] bg-radial from-forest-glow to-transparent blur-[150px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-16 relative z-10">
                  {/* Left Column: Editorial Tagline & Info */}
                  <motion.div 
                    variants={dropdownItemVariants}
                    className="col-span-4 flex flex-col justify-between border-r border-white/[0.03] pr-12"
                  >
                    <div className="space-y-4">
                      <span className="text-[9px] font-mono text-accent-warm/80 uppercase tracking-[0.2em] block">
                        {menuTaglines[activeMenu]?.tag}
                      </span>
                      <h3 className="font-display font-light text-2xl text-snow/90 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                        {menuTaglines[activeMenu]?.title}
                      </h3>
                      <p className="text-xs text-parchment/45 font-light leading-relaxed max-w-xs">
                        {menuTaglines[activeMenu]?.desc}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-white/[0.03]">
                      <span className="text-[9px] text-stone-light/20 font-mono uppercase tracking-[0.2em]">
                        SLOW TRAVEL THROUGH THE HIMALAYAS
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Columns: Asymmetric Menu Links */}
                  <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-1">
                    {menuData[activeMenu].items.map((item, idx) => (
                      <motion.div
                        key={item.label}
                        variants={dropdownItemVariants}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          opacity: hoveredIndex !== null && hoveredIndex !== idx ? 0.35 : 1,
                          transition: "opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1)",
                          willChange: "opacity"
                        }}
                      >
                        <MenuItem item={item} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile-only Fullscreen Circular Overlay Menu */}
      <motion.div
        initial="closed"
        animate={mobileOpen ? "open" : "closed"}
        variants={mobileOverlayVariants}
        className="fixed inset-0 z-[990] bg-[#0c0d0c]/98 backdrop-blur-2xl flex flex-col justify-between pt-32 px-6 pb-8 overflow-y-auto lg:hidden"
        style={{ clipPath: "circle(0px at 93% 40px)", willChange: "clip-path, opacity" }}
      >
        {/* Ambient radial background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[30%] right-[30%] w-[40%] h-[40%] opacity-[0.03] bg-radial from-forest-glow to-transparent blur-[120px] rounded-full mx-auto" />
        </div>

        {/* Scrollable Mobile Menu container */}
        <div className="w-full flex-1 flex flex-col justify-between pt-6 relative z-10">
          
          <motion.div 
            variants={mobileContainerVariants}
            className="w-full flex flex-col space-y-4"
          >
            {Object.keys(menuData).map((key, idx) => {
              const isExpanded = expandedSection === key;
              return (
                <motion.div 
                  key={key} 
                  variants={mobileItemVariants}
                  className="border-b border-white/[0.02] pb-3.5 last:border-0"
                  style={{ willChange: "transform, opacity" }}
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : key)}
                    className="w-full flex justify-between items-center text-xl font-medium tracking-[0.06em] text-snow/85 uppercase py-3 focus:outline-none font-display cursor-pointer hover:text-snow transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-mono text-accent-warm/40 select-none tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                      <span>{menuData[key].label}</span>
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
                        transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
                        className="overflow-hidden mt-3 pl-6 flex flex-col space-y-3"
                      >
                        {menuData[key].items.map((item) => (
                          <div key={item.label}>
                            {item.href ? (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="group/mob-link flex items-center gap-3 py-2.5 text-[11px] font-medium tracking-[0.1em] text-parchment/55 active:text-snow hover:text-snow transition-all duration-300 uppercase"
                              >
                                <span className="w-1 h-1 rounded-full bg-accent-warm/50 group-hover/mob-link:bg-accent-warm transition-all duration-300" />
                                {item.label}
                              </Link>
                            ) : (
                              <div key={item.label} className="py-2.5 flex items-center gap-3 opacity-30 select-none">
                                <span className="w-1 h-1 rounded-full bg-white/15" />
                                <span className="text-[11px] font-medium tracking-[0.1em] text-parchment/40 uppercase">{item.label}</span>
                                <span className="text-[7px] tracking-[0.12em] text-stone-light/40 font-mono uppercase">
                                  {item.status || "SOON"}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Actions & Info (Mobile only) */}
          <div className="mt-8 pt-6 border-t border-white/[0.03] w-full space-y-6">
            <a
              href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20your%20Himalayan%20expeditions."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-3.5 bg-white/[0.02] hover:bg-white/[0.05] text-snow text-[10px] font-medium tracking-[0.2em] rounded-full border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 uppercase"
            >
              RESERVE VIA WHATSAPP
            </a>
            <div className="flex justify-between">
              <a href="mailto:hello@trailcore.in" className="hover:text-snow transition-colors text-[10px] tracking-[0.12em] text-parchment/35 font-light uppercase">HELLO@TRAILCORE.IN</a>
              <a href="tel:+917560065963" className="hover:text-snow transition-colors text-[10px] tracking-[0.12em] text-parchment/35 font-light uppercase">+91 75600 65963</a>
            </div>
          </div>

        </div>
      </motion.div>
    </>
  );
}