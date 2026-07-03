// Structural (non-translatable) data for each section. All display text lives
// in the i18n dictionary (src/lib/i18n.ts) and is combined by index.

export const stats = [
  { value: 400, prefix: "~" },
  { value: 10 },
  { value: 2600, suffix: "+" },
  { value: 235 },
] as const;

export const steps = [
  { n: "01", image: "step-1", accent: "var(--magenta)" },
  { n: "02", image: "step-2", accent: "var(--gold)" },
  { n: "03", image: "step-3", accent: "var(--leaf)" },
  { n: "04", image: "step-4", accent: "var(--sky)" },
  { n: "05", image: "step-5", accent: "var(--magenta-bright)" },
] as const;

export const testimonials = [
  { image: "t-santusa" },
  { image: "t-carlos" },
  { image: "t-marcelino" },
  { image: "t-genaro" },
  { image: "t-martin" },
] as const;

export const tiers = [
  { amount: 20 },
  { amount: 50, featured: true },
  { amount: 100 },
] as const;
