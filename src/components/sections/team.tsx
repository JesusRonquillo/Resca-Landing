"use client";

import { Plus } from "lucide-react";
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

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {t.team.members.map((m, i) => (
            <Reveal key={m.name} delay={0.12 + i * 0.08}>
              <article
                tabIndex={0}
                aria-label={`${m.name} — ${m.role}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_18px_40px_-24px_var(--glow)] outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ResponsiveImage
                  name={memberImages[i]}
                  alt={m.name}
                  sizes="(max-width: 640px) 92vw, 40vw"
                  widths={[480, 960]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105"
                />

                {/* Hint icon */}
                <span className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition-transform duration-300 group-hover:rotate-45 group-focus-within:rotate-45">
                  <Plus size={18} />
                </span>

                {/* Base title (fades out on hover) */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-white">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-white/85">{m.role}</p>
                </div>

                {/* Bio overlay (fades in on hover / focus) */}
                <div className="absolute inset-0 flex flex-col justify-end bg-[var(--magenta)]/85 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-white/80">
                    {m.role}
                  </p>
                  <p className="mt-3 max-h-[62%] overflow-y-auto pr-1 text-sm leading-relaxed text-white/90">
                    {m.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
