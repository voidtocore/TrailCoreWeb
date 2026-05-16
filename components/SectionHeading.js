"use client";

import { FadeIn } from "./Animations";

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {label && (
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-forest-glow mb-4">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
            light ? "text-snow" : "text-gradient"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
