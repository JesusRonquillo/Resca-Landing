import { Check, Heart, Sprout } from "lucide-react";
import { tiers } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { clsx } from "@/lib/clsx";
import { site } from "@/lib/site";

export function Donate() {
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
                  <Sprout size={16} /> Your gift plants resilience
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight">
                  Fund the next reward ceremony
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-lg text-white/85">
                  Every contribution goes into seeds, monitoring and community-chosen
                  rewards that keep endangered varieties growing season after season.
                </p>
              </Reveal>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
              {tiers.map((tier, i) => (
                <Reveal key={tier.title} delay={0.12 + i * 0.08}>
                  <div
                    className={clsx(
                      "relative flex h-full flex-col rounded-3xl p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1.5",
                      tier.featured
                        ? "bg-white text-[#26101c] shadow-2xl ring-2 ring-white"
                        : "bg-white/10 text-white ring-1 ring-white/25"
                    )}
                  >
                    {tier.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#26101c]">
                        Most loved
                      </span>
                    )}
                    <p className="font-display text-4xl font-extrabold">
                      {site.currency}
                      {tier.amount}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold">{tier.title}</p>
                    <p
                      className={clsx(
                        "mt-2 flex-1 text-sm leading-relaxed",
                        tier.featured ? "text-[#715864]" : "text-white/80"
                      )}
                    >
                      {tier.body}
                    </p>
                    <a
                      href={`${site.donateUrl}?amount=${tier.amount}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        "btn-shine mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5",
                        tier.featured
                          ? "bg-primary text-primary-contrast"
                          : "bg-white text-[#26101c]"
                      )}
                    >
                      <Heart size={16} className="fill-current" /> Give {site.currency}
                      {tier.amount}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85">
                {[
                  "Transparent, verified fieldwork",
                  "100% community-chosen rewards",
                  "Every dollar keeps a variety alive",
                ].map((f) => (
                  <li key={f} className="inline-flex items-center gap-2">
                    <Check size={16} className="text-[var(--lime)]" /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-white/70">
                Donations are processed securely by{" "}
                <a
                  href={site.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline underline-offset-2 hover:text-[var(--lime)]"
                >
                  GivingWorks
                </a>{" "}
                (UK Charity No. 1078770), under the Farmer AgroEcoServices
                charitable fund.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
