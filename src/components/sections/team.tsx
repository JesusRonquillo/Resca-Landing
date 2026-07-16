"use client";

import { Compass, Sprout, LineChart, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/components/language-provider";

const roleIcons = [Compass, Sprout, LineChart];

export function Team() {
  const { t } = useI18n();

  return (
    <section id="team" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {t.team.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-text">
                {t.team.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-muted">{t.team.body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-6 space-y-2.5">
                {t.team.experience.map((e) => (
                  <li key={e} className="flex items-start gap-2.5 text-sm text-text">
                    <Check size={18} className="mt-0.5 shrink-0 text-[var(--leaf)]" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {t.team.roles.map((r, i) => {
              const Icon = roleIcons[i] ?? Sprout;
              return (
                <Reveal key={r.title} delay={0.12 + i * 0.08}>
                  <div className="card-surface group flex items-start gap-4 rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-contrast">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-text">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{r.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.36}>
              <p className="mt-1 text-xs italic leading-relaxed text-muted">{t.team.note}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
