const words = [
  "Kañihua",
  "Misa quinua",
  "Real Blanca",
  "Kellowitulla",
  "Wariponcho",
  "Ayrampito",
  "Chullpi",
  "Cuchiwilla",
  "Rosada de Juli",
  "Ccoito",
  "Witulla",
  "Choclito",
];

function Word({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-8 whitespace-nowrap">
      <span
        className={
          name === "Ccoito"
            ? "font-display text-lg font-semibold tracking-[0.18em] text-muted [font-variant-ligatures:none]"
            : "font-display text-lg font-semibold tracking-[0.04em] text-muted [font-variant-ligatures:none]"
        }
      >
        {name}
      </span>
      <span className="text-primary">✦</span>
    </span>
  );
}

export function MarqueeBand() {
  const loop = [...words, ...words];
  return (
    <div className="relative border-y border-border bg-surface-2/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-16" />
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {loop.map((w, i) => (
            <Word key={`a-${i}`} name={w} />
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8" aria-hidden>
          {loop.map((w, i) => (
            <Word key={`b-${i}`} name={w} />
          ))}
        </div>
      </div>
    </div>
  );
}
