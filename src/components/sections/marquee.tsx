const words = [
  "Kañihua",
  "Pasankalla",
  "Real Blanca",
  "Wariponcho",
  "Ayrampito",
  "Chullpi",
  "Negra Collana",
  "Rosada de Juli",
  "Kcoito",
  "Witulla",
  "Amarilla de Marangani",
  "Salcedo INIA",
];

export function MarqueeBand() {
  return (
    <div className="relative border-y border-border bg-surface-2/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {[...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-lg font-semibold text-muted">{w}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8" aria-hidden>
          {[...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-lg font-semibold text-muted">{w}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
