"use client";

import { FadeIn } from "./Animations";

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-16 md:mb-20`}>
      {label && (
        <FadeIn>
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-stone-light/60 mb-5">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] text-gradient"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-5 text-stone-light/55 text-base md:text-lg leading-relaxed font-light">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
