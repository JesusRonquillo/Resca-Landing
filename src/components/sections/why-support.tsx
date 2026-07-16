"use client";

import { Landmark, Sprout, HandHeart } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/components/language-provider";

const pointIcons = [Landmark, Sprout];

export function WhySupport() {
  const { t } = useI18n();

  return (
    <section id="why" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="aurora-bg absolute inset-0 -z-10 opacity-30" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {t.whySupport.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-text">
              {t.whySupport.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {t.whySupport.body}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {t.whySupport.points.map((p, i) => {
            const Icon = pointIcons[i] ?? Sprout;
            return (
              <Reveal key={p.title} delay={0.12 + i * 0.08}>
                <div className="card-surface h-full rounded-3xl p-6">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-6 grid max-w-4xl gap-5 sm:grid-cols-2">
          {t.whySupport.impact.map((im, i) => (
            <Reveal key={im.amount} delay={0.16 + i * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-surface-2/50 p-6">
                <span className="font-display text-3xl font-extrabold text-gradient">
                  {im.amount}
                </span>
                <p className="text-sm leading-relaxed text-muted">{im.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 flex max-w-3xl items-start justify-center gap-3 text-center text-base leading-relaxed text-text">
            <HandHeart size={22} className="mt-0.5 shrink-0 text-primary" />
            <span>{t.whySupport.goal}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
