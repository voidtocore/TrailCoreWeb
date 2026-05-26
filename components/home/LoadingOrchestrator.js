"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingContext = createContext({ isLoaded: false });

export function useLoading() {
  return useContext(LoadingContext);
}

export default function LoadingOrchestrator({ children }) {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Stage 1: Load complete at 2.2s (trigger child entrance triggers)
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);

    // Stage 2: Preloader unmounts at 3.0s
    const unmountTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(unmountTimer);
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
            transition={{ duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0c0d0c]"
          >
            <div className="relative overflow-hidden py-4 px-8 text-center">
              {/* Quiet, tracked-out text reveal */}
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.2em", filter: "blur(4px)" }}
                animate={{ opacity: 1, letterSpacing: "0.3em", filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{
                  duration: 1.6,
                  ease: [0.65, 0.05, 0, 1],
                }}
                className="text-[0.625rem] font-medium uppercase tracking-[0.3em] text-parchment/90"
              >
                trail core
              </motion.span>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 1.4, ease: [0.65, 0.05, 0, 1] }}
                className="h-[1px] w-12 bg-forest-glow/30 mx-auto mt-4 origin-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}
