"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Awwwards-style inertia scroll initialization
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Recalculate heights if page heights change (e.g. accordion open/closes)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    // Expose global instance for other components (if they need scroll details)
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      window.lenis = null;
    };
  }, []);

  return null;
}
