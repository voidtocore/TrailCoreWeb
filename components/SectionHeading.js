"use client";

import { FadeIn } from "./Animations";

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-14 md:mb-20`}>
      {label && (
        <FadeIn>
          <span className="inline-block text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-stone/60 mb-5">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.08}>
        <h2
          className="text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[1.05] text-gradient tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.16}>
          <p className="mt-5 text-stone-light/50 text-[0.9375rem] md:text-base leading-relaxed font-light">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
