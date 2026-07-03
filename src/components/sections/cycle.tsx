"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { steps } from "@/lib/content";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Reveal } from "@/components/ui/reveal";
import { clsx } from "@/lib/clsx";

export function Cycle() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="cycle" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="aurora-bg absolute inset-0 -z-10 opacity-40" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              The cycle of a RESCA intervention
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-text">
              One season, five steps, alongside the community
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-muted">
              In Puno, the quinoa planting season begins in September or October,
              depending on the rains. Each campaign follows these steps.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
          {/* Center rail (desktop) */}
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={reduce ? undefined : { scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-[var(--magenta)] via-[var(--gold)] to-[var(--leaf)]"
            />
          </div>

          <ol className="space-y-12 md:space-y-24">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.n} className="relative">
                  {/* Node */}
                  <span className="absolute left-6 top-6 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                    <span className="h-4 w-4 rounded-full bg-primary ring-4 ring-bg" />
                  </span>

                  <div
                    className={clsx(
                      "grid gap-6 pl-14 md:grid-cols-2 md:items-center md:gap-12 md:pl-0",
                      left ? "" : "md:[direction:rtl]"
                    )}
                  >
                    {/* Image */}
                    <Reveal
                      y={40}
                      className={clsx("md:[direction:ltr]", left ? "md:pr-10" : "md:pl-10")}
                    >
                      <div className="card-surface overflow-hidden rounded-[1.75rem] p-1.5">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                          <ResponsiveImage
                            name={s.image}
                            alt={s.alt}
                            sizes="(max-width: 768px) 90vw, 42vw"
                          />
                          <span
                            className="absolute left-3 top-3 rounded-full px-3 py-1 font-display text-sm font-bold text-white shadow-lg"
                            style={{ backgroundColor: s.accent }}
                          >
                            Step {s.n}
                          </span>
                        </div>
                      </div>
                    </Reveal>

                    {/* Text */}
                    <Reveal
                      delay={0.08}
                      y={40}
                      className={clsx("md:[direction:ltr]", left ? "md:pl-10" : "md:pr-10")}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                        style={{ color: s.accent, backgroundColor: `color-mix(in srgb, ${s.accent} 14%, transparent)` }}
                      >
                        <CalendarDays size={13} /> {s.when}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
                        {s.body}
                      </p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
