import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="card-surface rounded-4xl p-6 text-center sm:p-8"
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-semibold text-text">{s.label}</p>
              <p className="mt-1 text-sm text-muted">{s.hint}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
