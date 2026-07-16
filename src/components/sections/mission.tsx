"use client";

import { Award, Leaf, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { TiltCard } from "@/components/ui/tilt-card";
import { useI18n } from "@/components/language-provider";

const icons = [Leaf, Users, ShieldCheck, Award];

export function Mission() {
  const { t } = useI18n();
  return (
    <section id="mission" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {t.mission.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-text">
              {t.mission.titlePre}{" "}
              <span className="text-gradient">{t.mission.titleHighlight}</span>
              {t.mission.titlePost}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {t.mission.body}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.mission.features.map((f, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={f.title} delay={0.15 + i * 0.07}>
                  <div className="card-surface group h-full rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1">
                    <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-contrast">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-text">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1} className="perspective">
          <TiltCard className="relative">
            <div className="card-surface overflow-hidden rounded-[2rem] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <ResponsiveImage
                  name="quinoa-close"
                  alt={t.mission.imageAlt}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
