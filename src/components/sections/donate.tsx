"use client";

import { Check, Heart, Sprout, ExternalLink } from "lucide-react";
import { tiers } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { site } from "@/lib/site";
import { useI18n } from "@/components/language-provider";

export function Donate() {
  const { t } = useI18n();
  return (
    <section id="donate" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <ResponsiveImage
              name="hero-field"
              alt=""
              sizes="100vw"
              widths={[480, 960]}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--magenta)]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/50" />
            <div className="grain absolute inset-0 opacity-10" />
          </div>

          <div className="px-6 py-16 sm:px-12 sm:py-20">
            <div className="mx-auto max-w-2xl text-center text-white">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  <Sprout size={16} /> {t.donate.badge}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight">
                  {t.donate.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-lg text-white/85">{t.donate.subtitle}</p>
              </Reveal>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tiers.map((tier, i) => {
                const info = t.donate.tiers[i];
                return (
                  <Reveal key={info.title} delay={0.12 + i * 0.08}>
                    <div className="relative flex h-full flex-col rounded-3xl bg-white/10 p-6 text-white ring-1 ring-white/25 backdrop-blur transition-transform duration-300 hover:-translate-y-1.5">
                      <p className="font-display text-4xl font-extrabold">
                        {site.currency}
                        {tier.amount}
                      </p>
                      <p className="mt-1 font-display text-lg font-bold">{info.title}</p>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">
                        {info.body}
                      </p>
                      <a
                        href={`${site.donateUrl}?amount=${tier.amount}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shine mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[#26101c] transition-transform hover:-translate-y-0.5"
                      >
                        <Heart size={16} className="fill-current" /> {t.donate.give}{" "}
                        {site.currency}
                        {tier.amount}
                      </a>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.16}>
              <p className="mt-6 text-center">
                <a
                  href="https://www.xe.com/currencyconverter/convert/?Amount=100&From=GBP&To=USD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 underline underline-offset-2 transition-colors hover:text-[var(--lime)]"
                >
                  {t.donate.convert}
                  <ExternalLink size={14} />
                </a>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85">
                {t.donate.checklist.map((f) => (
                  <li key={f} className="inline-flex items-center gap-2">
                    <Check size={16} className="text-[var(--lime)]" /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-white/70">
                {t.donate.secure.pre}{" "}
                <a
                  href={site.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline underline-offset-2 hover:text-[var(--lime)]"
                >
                  GivingWorks
                </a>{" "}
                {t.donate.secure.post}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
