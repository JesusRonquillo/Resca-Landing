"use client";

import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/components/language-provider";

// Structural: profile photos paired with i18n members by index.
const memberImages = ["team-kleny", "team-adam"];

export function Team() {
  const { t } = useI18n();

  return (
    <section id="team" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
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
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {t.team.members.map((m, i) => (
            <Reveal key={m.name} delay={0.12 + i * 0.08}>
              <article className="card-surface flex h-full flex-col overflow-hidden rounded-[1.75rem] p-2 sm:flex-row">
                <div className="relative w-full shrink-0 overflow-hidden rounded-[1.4rem] sm:w-40 md:w-44">
                  <div className="relative aspect-[4/5] sm:h-full">
                    <ResponsiveImage
                      name={memberImages[i]}
                      alt={m.name}
                      sizes="(max-width: 640px) 92vw, 180px"
                      widths={[480, 960]}
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-text">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
