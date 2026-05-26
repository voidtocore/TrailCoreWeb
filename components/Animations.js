"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Editorial easing — smooth cinematic feel (Lando Norris / Terminal Industries inspired)
const EDITORIAL_EASE = [0.65, 0.05, 0, 1];
const SMOOTH_EASE = [0.25, 0.46, 0.45, 0.94];

export function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const directions = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { y: 0, x: 32 },
    right: { y: 0, x: -32 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      transition={{
        duration: 0.75,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.08 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: EDITORIAL_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.95 }
      }
      transition={{
        duration: 0.65,
        delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = typeof children === "string" ? children.split(" ") : [];

  if (words.length === 0) return <span className={className}>{children}</span>;

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          }
        }
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-[0.05em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { 
                y: "110%", 
                opacity: 0,
                filter: "blur(4px)",
              },
              visible: { 
                y: 0, 
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  ease: EDITORIAL_EASE
                }
              }
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function EditorialReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 36,
        scale: 0.99,
        filter: "blur(4px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)"
      } : { 
        opacity: 0, 
        y: 36,
        scale: 0.99,
        filter: "blur(4px)"
      }}
      transition={{
        duration: 0.85,
        delay,
        ease: EDITORIAL_EASE
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
