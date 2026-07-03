import { Award, Leaf, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { TiltCard } from "@/components/ui/tilt-card";

const features = [
  {
    icon: Leaf,
    title: "Living gene banks",
    body: "Rare landraces stay in the soil and in the diet, not frozen in a distant vault.",
  },
  {
    icon: Users,
    title: "Community-led",
    body: "Groups compete with their best conservation offers and choose their own rewards.",
  },
  {
    icon: ShieldCheck,
    title: "Verified impact",
    body: "Frequent field visits confirm that prioritized varieties are truly being grown.",
  },
  {
    icon: Award,
    title: "Dignity, not charity",
    body: "Farmers are paid for a service to humanity: safeguarding our shared food future.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Why it matters
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-text">
              Thousands of crop varieties are quietly{" "}
              <span className="text-gradient">disappearing</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              As markets reward a handful of commercial seeds, the thousands of
              native quinoa, potato and Andean crop varieties that fed the region
              for millennia are vanishing from fields. Yet keeping that diversity
              alive is the world&apos;s insurance policy against climate change,
              emerging pests and future food crises. RESCA flips the incentive: we
              reward the farmers who safeguard it, so it survives where it belongs —
              in living, working farms.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.15 + i * 0.07}>
                <div className="card-surface group h-full rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-contrast">
                    <f.icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-text">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="perspective">
          <TiltCard className="relative">
            <div className="card-surface overflow-hidden rounded-[2rem] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <ResponsiveImage
                  name="quinoa-close"
                  alt="Close-up of ripe quinoa panicles glowing in the field"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
            <div className="glass absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl p-4 shadow-xl sm:-left-8">
              <p className="font-display text-2xl font-extrabold text-gradient">Puno · Potosí · Oruro</p>
              <p className="mt-1 text-sm text-muted">
                Highland communities where planting begins with the September rains.
              </p>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
