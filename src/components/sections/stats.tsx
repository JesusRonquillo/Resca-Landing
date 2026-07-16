"use client";

import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/content";
import { useI18n } from "@/components/language-provider";

export function Stats() {
  const { t } = useI18n();
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {t.statsHeading.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-text">
              {t.statsHeading.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm text-muted">{t.statsHeading.note}</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={t.stats[i].label}
              delay={i * 0.08}
              className="card-surface rounded-4xl p-6 text-center sm:p-8"
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                <Counter
                  value={s.value}
                  prefix={"prefix" in s ? s.prefix : undefined}
                  suffix={"suffix" in s ? s.suffix : undefined}
                />
              </p>
              <p className="mt-2 font-semibold text-text">{t.stats[i].label}</p>
              <p className="mt-1 text-sm text-muted">{t.stats[i].hint}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
