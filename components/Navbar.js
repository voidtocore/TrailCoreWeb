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

function MenuItem({ item }) {
  const [hovered, setHovered] = useState(false);

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="group/item flex items-center justify-between p-3 rounded-[4px] hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] transition-all duration-300"
      >
        <span className="text-xs font-light text-parchment/65 group-hover/item:text-snow group-hover/item:pl-1.5 transition-all duration-300 lowercase relative">
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-warm group-hover/item:w-full transition-all duration-300" />
        </span>
        <svg
          className="w-3 h-3 text-stone/30 group-hover/item:text-forest-glow opacity-0 group-hover/item:opacity-100 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }

  return (
    <div
      className="relative flex items-center justify-between p-3 rounded-[4px] cursor-not-allowed group/item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-light text-parchment/30 lowercase">
          {item.label}
        </span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone/20 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-stone/35"></span>
        </span>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.2 }}
            className="absolute z-[100] left-1/2 -translate-x-1/2 -top-9 px-3 py-1 bg-black/85 backdrop-blur-md border border-white/[0.08] rounded-full shadow-lg shadow-black/50 pointer-events-none whitespace-nowrap"
          >
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-forest-glow animate-pulse" />
              <span className="text-[10px] tracking-wide text-parchment/80 font-light lowercase">
                {item.status}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
  
  const lastScrollY = useRef(0);

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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
                className="absolute top-full left-0 right-0 mt-0 w-full bg-[#121413]/98 backdrop-blur-3xl border border-white/[0.04] rounded-b-xl p-8 shadow-2xl z-40 hidden lg:block"
              >
                <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
                  {menuData[activeMenu].items.map((item) => (
                    <MenuItem key={item.label} item={item} />
                  ))}
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
        style={{ clipPath: "circle(0px at 93% 40px)" }}
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
                  className="border-b border-white/[0.02] pb-3 last:border-0"
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : key)}
                    className="w-full flex justify-between items-baseline text-xl font-light text-snow/90 leading-relaxed lowercase focus:outline-none"
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
                        transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
                        className="overflow-hidden mt-3 pl-6 flex flex-col space-y-2.5"
                      >
                        {menuData[key].items.map((item) => (
                          <div key={item.label}>
                            {item.href ? (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
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
              className="flex items-center justify-center w-full py-3.5 bg-white/[0.02] hover:bg-white/[0.04] text-white text-xs font-medium tracking-widest rounded-full border border-white/[0.05] transition-all duration-300 uppercase"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              reserve via whatsapp
            </a>
            <div className="flex justify-between text-[9px] tracking-[0.18em] font-light text-parchment-dim uppercase">
              <a href="mailto:hello@trailcore.in" className="hover:text-snow transition-colors lowercase tracking-normal text-xs">hello@trailcore.in</a>
              <a href="tel:+917560065963" className="hover:text-snow transition-colors lowercase tracking-normal text-xs">+91 75600 65963</a>
            </div>
          </div>

        </div>
      </motion.div>
    </>
  );
}