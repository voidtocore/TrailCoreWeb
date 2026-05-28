"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LoadingContext = createContext({ isLoaded: false });

export function useLoading() {
  return useContext(LoadingContext);
}

export default function LoadingOrchestrator({ children }) {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scrolling initially
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    // Stage 1: Trigger child entrance animations (deliberate delay)
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1800);

    // Stage 2: Preloader unmounts and scrolling is restored
    const unmountTimer = setTimeout(() => {
      setLoading(false);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    }, 2800);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(unmountTimer);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoaded }}>
      {children}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          >
            <div className="relative overflow-hidden py-4 px-8 text-center flex flex-col items-center">
              {/* Premium Logo fade-in & slow scale */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.04, y: -16, filter: "blur(8px)" }}
                transition={{
                  duration: 1.6,
                  ease: [0.77, 0, 0.175, 1],
                }}
                className="relative w-44 h-14"
              >
                <Image
                  src="/images/logo-tc.png"
                  alt="TrailCore"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
              
              {/* Cinematic minimalist progress line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
                className="h-[1px] w-12 bg-forest-glow/30 mx-auto mt-6 origin-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}
