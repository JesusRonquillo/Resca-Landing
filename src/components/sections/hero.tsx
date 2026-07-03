"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart, Sprout, MapPin } from "lucide-react";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { EASE } from "@/lib/motion";
import { site } from "@/lib/site";
import { useI18n } from "@/components/language-provider";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const floatY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Parallax background photo */}
      <motion.div
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <ResponsiveImage
          name="hero-field"
          alt="Andean farmers standing among rows of colourful native quinoa"
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </motion.div>

      {/* Aurora + grain */}
      <div className="aurora-bg absolute inset-0 -z-10 opacity-80" />
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" />

      {/* Floating illustration accents */}
      {!reduce && (
        <motion.div style={{ y: floatY }} className="pointer-events-none absolute inset-0 -z-10">
          <img
            src="/images/logo-mark-320.webp"
            alt=""
            aria-hidden
            className="animate-float-slow absolute right-[3%] top-[4%] hidden w-32 opacity-85 drop-shadow-2xl md:block md:w-36 lg:w-40"
          />
          <div className="animate-float absolute left-[4%] top-[30%] h-24 w-24 rounded-full bg-[var(--gold)]/25 blur-2xl" />
          <div className="animate-float-slow absolute bottom-[14%] right-[24%] h-28 w-28 rounded-full bg-[var(--leaf)]/25 blur-2xl" />
        </motion.div>
      )}

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="container-x"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-text"
          >
            <Sprout size={16} className="text-[var(--leaf)]" />
            {t.hero.badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold leading-[0.98] tracking-tight text-text"
          >
            {t.hero.titlePre}{" "}
            <span className="text-gradient-quinoa">{t.hero.titleHighlight}</span>
            {t.hero.titlePost}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-contrast shadow-[0_18px_40px_-14px_var(--glow)] transition-transform hover:-translate-y-0.5"
            >
              <Heart size={18} className="fill-current" />
              {t.hero.donate}
            </a>
            <a
              href="#cycle"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-3.5 font-semibold text-text backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              {t.hero.learn}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
          >
            <div>
              <dt className="font-display text-3xl font-extrabold text-text">2,600+</dt>
              <dd className="text-sm text-muted">{t.hero.farmersLabel}</dd>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div>
              <dt className="font-display text-3xl font-extrabold text-text">100%</dt>
              <dd className="text-sm text-muted">{t.hero.inKindLabel}</dd>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div>
              <dt className="flex items-center gap-1 font-display text-3xl font-extrabold text-text">
                <MapPin size={22} className="text-primary" /> {t.hero.countriesValue}
              </dt>
              <dd className="text-sm text-muted">{t.hero.highlandLabel}</dd>
            </div>
          </motion.dl>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-muted/50 p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
