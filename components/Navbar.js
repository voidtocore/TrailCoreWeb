"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        className="group/item flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] transition-all duration-300"
      >
        <span className="text-xs font-light text-parchment/65 group-hover/item:text-snow group-hover/item:pl-1 transition-all duration-300 lowercase">
          {item.label}
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
      className="relative flex items-center justify-between p-3 rounded-lg cursor-not-allowed group/item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-light text-parchment/30 lowercase">
          {item.label}
        </span>
        {/* Pulse Dot Indicator */}
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone/20 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-stone/35"></span>
        </span>
      </div>

      {/* Under Construction Tooltip */}
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

const menuVariants = {
  open: {
    opacity: 1,
    pointerEvents: "auto",
    visibility: "visible",
    transition: {
      duration: 0.12,
      ease: "linear"
    }
  },
  closed: {
    opacity: 0,
    pointerEvents: "none",
    transitionEnd: {
      visibility: "hidden"
    },
    transition: {
      duration: 0.1,
      ease: "linear"
    }
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navContainerRef}
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed top-0 left-0 right-0 transition-opacity duration-300 ${mobileOpen ? "z-[1000]" : "z-50"
          } ${scrolled || activeMenu
            ? "bg-mountain-black/85 backdrop-blur-xl border-b border-white/[0.04] py-2 sm:py-3"
            : "bg-transparent py-4 sm:py-6"
          }`}
      >
        <div className="h-12 px-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-[1000]">
            {/* Desktop Wordmark */}
            <div className="hidden lg:block">
              <Image
                src="/images/logo-tc.png"
                alt="TrailCore"
                width={128}
                height={42}
                priority
                className="h-8 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* Mobile Monogram Icon Crop */}
            <div className="lg:hidden">
              <Image
                src="/images/logo-tc.png"
                alt="TrailCore"
                width={56}
                height={56}
                priority
                className="w-14 h-14 object-contain opacity-95"
              />
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.keys(menuData).map((key) => {
              const menu = menuData[key];
              return (
                <div
                  key={key}
                  className="static"
                  onMouseEnter={() => setActiveMenu(key)}
                >
                  <span className="relative z-10 px-4 py-3 text-[11px] font-medium tracking-[0.05em] text-parchment hover:text-snow cursor-pointer transition-colors duration-300 block uppercase">
                    {menu.label}
                    {activeMenu === key && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[1px] bg-forest-glow"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Reserve / CTA Action */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20your%20Himalayan%20expeditions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs tracking-widest"
            >
              reserve via whatsapp
            </a>
          </div>

          {/* Mobile Hamburger menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg z-[1000] text-snow"
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
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute top-full left-0 right-0 mt-0 w-full bg-mountain-900/98 backdrop-blur-3xl border border-white/[0.05] rounded-b-xl p-8 shadow-2xl z-40"
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
      </nav>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        initial="closed"
        animate={mobileOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 z-[999] lg:hidden bg-black flex flex-col pt-20 px-8 pb-10 overflow-y-auto"
      >
        {/* Scroll Container */}
        <div className="w-full flex flex-col space-y-0 pt-6">
          {Object.keys(menuData).map((key) => {
            const isExpanded = expandedSection === key;
            return (
              <div key={key} className="border-b border-white/[0.02] py-4 last:border-0">
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : key)}
                  className="w-full flex justify-between items-center text-[20px] font-light tracking-wide text-snow/90 leading-relaxed lowercase"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span className="hover:text-snow transition-colors duration-200">{menuData[key].label}</span>
                  <span className={`text-stone/40 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
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
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="overflow-hidden mt-3 pl-1 grid grid-cols-2 gap-x-4 gap-y-2.5"
                    >
                      {menuData[key].items.map((item) => {
                        if (item.href) {
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-1 text-xs text-parchment/60 active:text-snow hover:text-snow transition-colors lowercase font-light"
                            >
                              {item.label}
                            </Link>
                          );
                        }
                        return (
                          <div key={item.label} className="py-1 flex items-center gap-1.5 opacity-30 select-none">
                            <span className="text-xs text-parchment/50 lowercase font-light">{item.label}</span>
                            <span className="text-[8px] tracking-[0.1em] text-parchment/40 bg-white/[0.02] px-1.5 py-0.5 rounded border border-white/[0.01] font-light">
                              soon
                            </span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions & Contact */}
        <div className="mt-10 pt-8 border-t border-white/[0.02] max-w-md mx-auto w-full space-y-6">
          <a
            href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20to%20know%20more%20about%20your%20Himalayan%20expeditions."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full py-3.5 bg-white/[0.03] hover:bg-white/[0.06] text-white text-xs font-medium tracking-widest rounded-full border border-white/[0.05] transition-all duration-300 uppercase"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            reserve via whatsapp
          </a>
          <div className="flex justify-between text-[11px] tracking-wider font-light text-parchment-dim">
            <a href="mailto:hello@trailcore.in" className="hover:text-snow transition-colors">hello@trailcore.in</a>
            <a href="tel:+917560065963" className="hover:text-snow transition-colors">+91 75600 65963</a>
          </div>
        </div>
      </motion.div>
    </>
  );
}