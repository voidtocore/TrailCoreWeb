"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "./home/LoadingOrchestrator";

const menuData = {
  explore: {
    label: "EXPLORE",
    items: [
      { label: "ALL DESTINATIONS", href: "/explore" },
      { label: "VALLEYS", href: "/explore?type=VALLEY" },
      { label: "VILLAGES", href: "/explore?type=VILLAGE" },
      { label: "FOREST ESCAPES", href: "/explore?type=FOREST_HUB" },
    ]
  },
  journeys: {
    label: "JOURNEYS",
    items: [
      { label: "ALL JOURNEYS", href: "/packages" },
      { label: "TREKS & ADVENTURES", href: "/adventures" },
      { label: "HONEYMOON JOURNEYS", href: "/honeymoon" },
    ]
  },
  stays: {
    label: "STAYS",
    items: [
      { label: "ALL SHELTERS", href: "/stays" },
      { label: "HOMESTAYS", href: "/stays?type=homestay" },
      { label: "CABINS", href: "/stays?type=cabin" },
      { label: "GUESTHOUSES", href: "/stays?type=guesthouse" },
    ]
  },
  plan: {
    label: "PLAN",
    items: [
      { label: "CUSTOM PLANNING", href: "/custom-trip" },
      { label: "PLANNING FAQ", href: "/custom-trip#faq" },
    ]
  },
  studio: {
    label: "STUDIO",
    items: [
      { label: "ABOUT US", href: "/about" },
      { label: "CONTACT", href: "/contact" },
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
  explore: {
    tag: "EXPLORE · PATHWAYS",
    title: "Walk the untamed edges",
    desc: "Discover valleys, village hubs, and trails across Himachal Pradesh."
  },
  journeys: {
    tag: "LIMITED · CURATED",
    title: "Expeditions with intent",
    desc: "Curated road trips, high-altitude treks, and honeymoon journeys designed around acclimatization and depth."
  },
  stays: {
    tag: "SHELTER · COMFORT",
    title: "Alpine dwellings",
    desc: "Handpicked homestays and cabins chosen for local host connection and Himalayan views."
  },
  plan: {
    tag: "BESPOKE · PRIVATE",
    title: "Tailored mountain planning",
    desc: "Collaborate with our team to design custom private expeditions or get answers to key travel queries."
  },
  studio: {
    tag: "PHILOSOPHY · STORY",
    title: "About Trail Core",
    desc: "Our vision for slow travel, local field partners, and how to get in touch with our studio team."
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
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.77, 0, 0.175, 1],
    }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.3,
      ease: [0.77, 0, 0.175, 1],
    }
  }
};

function MobileAccordionSection({ title, items, tag, isExpanded, onToggle, onLinkClick }) {
  return (
    <div className="border-b border-mountain-700 py-3">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-2 text-left cursor-pointer focus:outline-none"
      >
        <div className="flex flex-col">
          {tag && (
            <span className="text-[8px] font-mono tracking-widest text-forest-glow uppercase mb-0.5">
              {tag}
            </span>
          )}
          <span className="text-base font-light tracking-[0.06em] text-snow uppercase font-display">
            {title}
          </span>
        </div>
        <span className={`text-stone-light/50 transition-transform duration-300 ${isExpanded ? "rotate-180 text-forest-glow" : ""}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out overflow-hidden ${
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-2 flex flex-col space-y-2 pb-2">
          {items.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={onLinkClick}
                  className="flex items-center gap-2.5 py-1.5 text-[10px] font-medium tracking-[0.1em] text-parchment/70 active:text-accent-warm hover:text-accent-warm transition-colors duration-200 uppercase"
                >
                  <span className="w-1 h-1 rounded-full bg-forest-glow" />
                  {item.label}
                </Link>
              ) : (
                <div className="flex items-center justify-between py-1.5 opacity-40 select-none">
                  <span className="text-[10px] font-medium tracking-[0.1em] text-parchment/60 uppercase flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-mountain-700" />
                    {item.label}
                  </span>
                  <span className="text-[7px] font-mono bg-mountain-800 px-1.5 py-0.5 tracking-[0.1em] uppercase">
                    {item.status || "SOON"}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { isLoaded } = useLoading();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const lastScrollY = useRef(0);

  // Reset state during render phase when dependent state changes to avoid useEffect cascading renders
  const [prevActiveMenu, setPrevActiveMenu] = useState(null);
  if (activeMenu !== prevActiveMenu) {
    setPrevActiveMenu(activeMenu);
    setHoveredIndex(null);
  }

  if (!mobileOpen && expandedSection !== null) {
    setExpandedSection(null);
  }

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

      // Destroy lenis influence temporarily
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
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
          (scrolled || activeMenu) && !mobileOpen
            ? "bg-background/90 backdrop-blur-xl border-b border-mountain-700 py-3"
            : mobileOpen
            ? "bg-transparent py-3 pointer-events-none"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`flex items-center group relative z-[1001] ${mobileOpen ? 'pointer-events-auto' : ''}`} onClick={() => setMobileOpen(false)}>
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
          <div className="hidden lg:flex items-center gap-6">
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
            className={`mobile-menu-toggle ${mobileOpen ? "mobile-menu-close" : ""} lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg z-[1001] cursor-pointer ${mobileOpen ? 'pointer-events-auto' : ''}`}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-3 flex items-center justify-center">
              <span
                className={`absolute block h-[1px] w-5 transition-transform duration-300 ease-out bg-snow ${
                  mobileOpen ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute block h-[1px] w-5 transition-transform duration-300 ease-out bg-snow ${
                  mobileOpen ? "-rotate-45" : "translate-y-[4px]"
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
                      <span className="text-[9px] font-mono text-forest-glow/80 uppercase tracking-[0.2em] block">
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

      {/* Mobile-only Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileOverlayVariants}
            className="fixed inset-0 z-[990] bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div
              className="absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-md mx-auto flex flex-col min-h-full px-6 pt-28 pb-8">
              {/* Category Accordion List */}
              <div className="py-2 flex-shrink-0">
                {Object.keys(menuData).map((key) => (
                  <MobileAccordionSection
                    key={key}
                    title={menuData[key].label}
                    tag={menuTaglines[key]?.tag}
                    items={menuData[key].items}
                    isExpanded={expandedSection === key}
                    onToggle={() => setExpandedSection(expandedSection === key ? null : key)}
                    onLinkClick={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-mountain-700 mt-auto space-y-6 flex-shrink-0">
                <a
                  href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20your%20Himalayan%20expeditions."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-mountain-900 hover:bg-mountain-800 text-snow text-[10px] font-medium tracking-[0.2em] border border-mountain-700 hover:border-mountain-600 transition-all duration-300 uppercase"
                >
                  RESERVE VIA WHATSAPP
                </a>

                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-mono tracking-wider text-parchment/40 uppercase">
                    SLOW TRAVEL THROUGH THE HIMALAYAS
                  </span>
                  <a href="mailto:hello@trailcore.in" className="hover:text-accent-warm transition-colors tracking-[0.12em] text-parchment/50 font-light uppercase">
                    hello@trailcore.in
                  </a>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}