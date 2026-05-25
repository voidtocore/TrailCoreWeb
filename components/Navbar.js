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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || activeMenu
            ? "bg-mountain-black/85 backdrop-blur-2xl border-b border-white/[0.04] py-2 sm:py-3"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-[1000]">
            <Image
              src="/images/logo-trailcore.svg"
              alt="Trail Core"
              width={218}
              height={48}
              className="h-10 sm:h-12 w-auto opacity-95 group-hover:opacity-100 transition-opacity duration-300"
            />
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
                  <span className="relative z-10 px-4 py-3 text-[13px] font-light tracking-wide text-parchment/70 hover:text-snow cursor-pointer transition-colors duration-300 block lowercase">
                    {menu.label}
                    {activeMenu === key && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-forest-glow"
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
            <Link
              href="/custom-trip"
              className="px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] text-parchment/90 text-xs font-medium tracking-wide rounded-full transition-all duration-500 border border-white/[0.05]"
            >
              reserve plan
            </Link>
          </div>

          {/* Mobile Hamburger menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg z-[1000] text-snow"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] bg-snow/80 transition-all duration-400 ${
                  mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-snow/80 transition-all duration-400 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-snow/80 transition-all duration-400 ${
                  mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
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
                className="absolute top-full left-0 right-0 mt-3 w-full bg-mountain-900/98 backdrop-blur-3xl border border-white/[0.05] rounded-xl p-8 shadow-2xl z-40"
              >
                <div className="max-w-4xl mx-auto grid grid-cols-4 gap-4">
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[999] lg:hidden bg-mountain-black/98 backdrop-blur-3xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            {/* Scroll Container */}
            <div className="flex-1 space-y-1">
              {Object.keys(menuData).map((key) => {
                const isExpanded = expandedSection === key;
                return (
                  <div key={key} className="border-b border-white/[0.04] py-3.5 first:pt-0">
                    <button
                      onClick={() => setExpandedSection(isExpanded ? null : key)}
                      className="w-full flex justify-between items-center text-lg font-light tracking-wide text-snow/90 leading-relaxed uppercase"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      <span className="lowercase">{menuData[key].label}</span>
                      <span className={`text-stone/45 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden mt-3 pl-2 grid grid-cols-2 gap-x-4 gap-y-2"
                        >
                          {menuData[key].items.map((item) => {
                            if (item.href) {
                              return (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="py-1.5 text-xs text-parchment/65 active:text-snow block lowercase hover:text-snow transition-colors"
                                >
                                  {item.label}
                                </Link>
                              );
                            }
                            return (
                              <div key={item.label} className="py-1.5 flex items-center gap-1.5 select-none opacity-40">
                                <span className="text-xs text-parchment/50 lowercase">{item.label}</span>
                                <span className="text-[9px] uppercase tracking-wider bg-white/[0.05] text-stone px-1 rounded font-medium border border-white/[0.03]">
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
            <div className="mt-8 space-y-6 pt-6 border-t border-white/[0.04]">
              <Link
                href="/custom-trip"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-forest/80 hover:bg-forest-light/80 text-white/90 text-xs font-medium tracking-wide rounded-full border border-forest-light/20 transition-all duration-300"
              >
                reserve custom plan
              </Link>
              <div className="flex justify-between text-[11px] text-stone/40">
                <a href="mailto:hello@trailcore.in" className="hover:text-snow">hello@trailcore.in</a>
                <a href="tel:+917560065963" className="hover:text-snow">+91 75600 65963</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}