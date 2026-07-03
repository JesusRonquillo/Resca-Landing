"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (d: number) => setState(([i]) => [(i + d + count) % count, d]),
    [count]
  );

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go, reduce]);

  const t = testimonials[index];

  return (
    <section id="voices" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Voices from the fields
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-text">
              The people behind the harvest
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
          <div className="card-surface relative overflow-hidden rounded-[2rem] p-2">
            <div className="grid items-stretch gap-0 md:grid-cols-[minmax(0,0.85fr)_1.15fr]">
              {/* Photo */}
              <div className="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] md:min-h-[30rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.image}
                    initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <ResponsiveImage
                      name={t.image}
                      alt={`${t.name}, ${t.community}`}
                      sizes="(max-width: 768px) 92vw, 40vw"
                      widths={[480, 960]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Quote */}
              <div className="relative flex flex-col justify-center p-7 sm:p-10">
                <Quote className="mb-4 text-primary/40" size={44} />
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={index}
                    initial={reduce ? false : { opacity: 0, x: dir >= 0 ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduce ? undefined : { opacity: 0, x: dir >= 0 ? -30 : 30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="font-display text-xl font-semibold leading-snug text-text sm:text-2xl">
                      “{t.quote}”
                    </p>
                    <footer className="mt-6">
                      <p className="font-display text-lg font-bold text-primary">{t.name}</p>
                      <p className="text-sm text-muted">{t.community}</p>
                      <p className="text-sm text-muted">{t.place}</p>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="ml-2 flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to testimonial ${i + 1}`}
                        onClick={() => setState([i, i > index ? 1 : -1])}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: i === index ? 26 : 8,
                          background: i === index ? "var(--primary)" : "var(--border)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
