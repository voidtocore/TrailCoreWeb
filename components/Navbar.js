"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
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

const categoryImages = {
  discover: "/images/spiti-valley.png",
  offgrid: "/images/camping.png",
  stays: "/images/kalpa.png",
  editions: "/images/road-trip.png",
  reserve: "/images/river.png",
  studio: "/images/kaza.png"
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
    transition: {
      duration: 0.55,
      ease: [0.77, 0, 0.175, 1]
    }
  },
  closed: {
    y: 16,
    opacity: 0,
    transition: {
      duration: 0.45,
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
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMobileScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const lastScrollY = useRef(0);
  const menuTimeline = useRef(null);
  const mobileOverlayRef = useRef(null);

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

      // DO NOT lock html scrolling
      document.documentElement.style.overflow = "";

      // Destroy lenis influence temporarily
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (window.lenis) {
        window.lenis.start();
      }
      setHoveredCategory(null);
      setExpandedSection(null);
      setScrollTop(0);
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [mobileOpen]);

  // GSAP Mobile Menu Animation system
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          gsap.set(mobileOverlayRef.current, { clipPath: "none" });
        }
      });

      // Initial setup of overlay
      gsap.set(mobileOverlayRef.current, {
        clipPath: "circle(0% at 90% 5%)",
        visibility: "hidden",
        pointerEvents: "none"
      });

      // Overlay Reveal circle transition
      tl.to(mobileOverlayRef.current, {
        clipPath: "circle(150% at 90% 5%)",
        visibility: "visible",
        pointerEvents: "all",
        duration: 0.85,
        ease: "power4.inOut"
      });

      // Text Stagger of mobile links
      const links = mobileOverlayRef.current.querySelectorAll(".mobile-nav-link");
      if (links.length > 0) {
        tl.fromTo(links,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.08 },
          "-=0.3"
        );
      }

      menuTimeline.current = tl;

      if (mobileOpen) {
        tl.progress(1);
        gsap.set(mobileOverlayRef.current, { clipPath: "none" });
      }

      return () => {
        if (menuTimeline.current) {
          menuTimeline.current.kill();
          menuTimeline.current = null;
        }
      };
    });

    return () => mm.revert();
  }, []);

  // Sync mobileOpen state changes with GSAP timeline
  useEffect(() => {
    if (menuTimeline.current) {
      if (mobileOpen) {
        menuTimeline.current.play();
      } else {
        // First reset clipPath back to circle shape so GSAP can animate the reverse sequence
        gsap.set(mobileOverlayRef.current, { clipPath: "circle(150% at 90% 5%)" });
        menuTimeline.current.reverse();
      }
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        onMouseLeave={() => setActiveMenu(null)}
        initial={{ y: -100, opacity: 0 }}
        animate={isLoaded ? { y: visible || mobileOpen ? 0 : -100, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-colors duration-500 ${scrolled || activeMenu
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
            className={`mobile-menu-toggle ${mobileOpen ? "mobile-menu-close" : ""} lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg z-[1001] cursor-pointer`}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-3 flex items-center justify-center">
              <span
                className={`absolute block h-[1px] w-5 transition-transform duration-300 ease-out ${
                  mobileOpen ? "rotate-45 bg-snow" : "-translate-y-[4px] bg-snow"
                }`}
              />
              <span
                className={`absolute block h-[1px] w-5 transition-transform duration-300 ease-out ${
                  mobileOpen ? "-rotate-45 bg-snow" : "translate-y-[4px] bg-snow"
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
      <div
        ref={mobileOverlayRef}
        onScroll={handleMobileScroll}
        className="mobile-menu-overlay fixed inset-0 z-[990] bg-[#050505]/95 backdrop-blur-xl overflow-y-auto overflow-x-hidden w-full h-[100dvh] flex flex-col lg:hidden overscroll-contain mobile-menu-scroll"
        style={{
          clipPath: "circle(0% at 90% 5%)",
          willChange: "clip-path",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
          visibility: "hidden",
          pointerEvents: "none"
        }}
      >
        {/* Dynamic Image Preview Panel */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {Object.keys(categoryImages).map((key) => {
            const isActive = (expandedSection || hoveredCategory || 'discover') === key;
            const translateY = scrollTop * 0.15;
            return (
              <div
                key={key}
                className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.65,0.05,0,1)]"
                style={{
                  opacity: isActive && mobileOpen ? 0.12 : 0,
                  transform: `translateY(${translateY}px) scale(${isActive ? 1.05 : 1.1})`,
                  transitionProperty: "opacity, transform",
                  willChange: "opacity, transform"
                }}
              >
                <Image
                  src={categoryImages[key]}
                  alt="Destination preview"
                  fill
                  priority
                  className="object-cover filter saturate-50 contrast-125 brightness-75"
                />
              </div>
            );
          })}
          {/* Atmospheric soft overlay gradient for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/98 via-[#050505]/92 to-[#050505]/98" />
        </div>

        {/* Ambient radial background lighting / cinematic glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[20%] w-[80vw] h-[80vw] opacity-[0.03] bg-radial from-forest-glow to-transparent blur-[130px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-10%] w-[70vw] h-[70vw] opacity-[0.02] bg-radial from-accent-warm to-transparent blur-[110px] rounded-full" />
        </div>

        {/* Mobile Menu Layout container */}
        <div className="w-full min-h-full px-6 pt-36 pb-12 relative z-10 flex flex-col justify-between">
          <div className="w-full flex flex-col space-y-4">
            {Object.keys(menuData).map((key, idx) => {
              const isExpanded = expandedSection === key;
              return (
                <div
                  key={key}
                  className="mobile-nav-link menu-link border-b border-white/[0.03] pb-4 last:border-0"
                  style={{ willChange: "transform, opacity" }}
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : key)}
                    onMouseEnter={() => setHoveredCategory(key)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className="w-full flex justify-between items-center py-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-[9px] font-mono text-accent-warm/40 mt-1 select-none tabular-nums">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col items-start text-left">
                        <span className="text-[8px] font-mono tracking-[0.22em] text-accent-warm/50 mb-0.5 uppercase">
                          {menuTaglines[key]?.tag}
                        </span>
                        <span className="text-2xl font-light tracking-[0.06em] text-snow/90 uppercase font-display transition-colors duration-300">
                          {menuData[key].label}
                        </span>
                      </div>
                    </div>
                    <span className={`text-stone/40 text-xs transition-transform duration-500 ${isExpanded ? "rotate-180 text-accent-warm" : ""}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-hidden ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden pl-6">
                      <div className="mt-3 pb-3 flex flex-col space-y-3.5">
                        {menuData[key].items.map((item) => (
                          <div key={item.label}>
                            {item.href ? (
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                tabIndex={isExpanded ? 0 : -1}
                                className="group/mob-link flex items-center gap-3.5 py-1.5 text-[11px] font-medium tracking-[0.12em] text-parchment/60 active:text-snow hover:text-snow transition-all duration-300 uppercase"
                              >
                                <span className="w-1 h-1 rounded-full bg-accent-warm/40 group-hover/mob-link:bg-accent-warm transition-all duration-300 scale-75 group-hover/mob-link:scale-100" />
                                {item.label}
                              </Link>
                            ) : (
                              <div className="py-1.5 flex items-center gap-3.5 opacity-30 select-none">
                                <span className="w-1 h-1 rounded-full bg-white/15" />
                                <span className="text-[11px] font-medium tracking-[0.12em] text-parchment/40 uppercase">{item.label}</span>
                                <span className="text-[7px] tracking-[0.12em] text-stone-light/40 font-mono uppercase">
                                  {item.status || "SOON"}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Actions & Info (Mobile only) */}
          <div className="pt-8 border-t border-white/[0.04] w-full space-y-6 flex-shrink-0 mt-12 relative z-10">
            <a
              href="https://wa.me/917560065963?text=Hi%20Trail%20Core!%20I%27d%20like%20know%20more%20about%20your%20Himalayan%20expeditions."
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
      </div>
    </>
  );
}