export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  hint: string;
};

export const stats: Stat[] = [
  { value: 400, prefix: "~", label: "Varieties conserved", hint: "threatened native crops" },
  { value: 10, label: "Key crops", hint: "quinoa, amaranth, potato & Andean tubers" },
  { value: 2600, suffix: "+", label: "Farmers rewarded", hint: "40% of them women" },
  { value: 235, label: "Communities", hint: "across Latin America" },
];

export type Step = {
  n: string;
  when: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  accent: string;
};

export const steps: Step[] = [
  {
    n: "01",
    when: "July",
    title: "Prioritization",
    body: "Threatened crop varieties are identified and prioritized, and community groups are informed about how to participate.",
    image: "step-1",
    alt: "Bowls of red, black and white native quinoa grains",
    accent: "var(--magenta)",
  },
  {
    n: "02",
    when: "August",
    title: "Agreements",
    body: "The best offers from community groups are selected and conservation agreements are signed.",
    image: "step-2",
    alt: "A RESCA representative signing a conservation agreement with a farmer",
    accent: "var(--gold)",
  },
  {
    n: "03",
    when: "September",
    title: "Seed Distribution",
    body: "Seeds of rare varieties are distributed among participating farmers for planting.",
    image: "step-3",
    alt: "Sacks of rare seed varieties ready to be distributed to farmers",
    accent: "var(--leaf)",
  },
  {
    n: "04",
    when: "Growing season",
    title: "Monitoring",
    body: "Frequent verification visits, extension events, and quality seed selection take place throughout the season.",
    image: "step-4",
    alt: "A field technician meeting a farming community during a monitoring visit",
    accent: "var(--sky)",
  },
  {
    n: "05",
    when: "Harvest",
    title: "Reward Ceremony",
    body: "Community-chosen in-kind rewards are delivered at high-visibility award ceremonies.",
    image: "step-5",
    alt: "Farmers celebrating at a RESCA reward ceremony after harvest",
    accent: "var(--magenta-bright)",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  community: string;
  place: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Now that we have realized the virtues of these varieties, we will strive to keep them alive, even if the project does not go on.",
    name: "Santusa de López",
    community: "Community of Aguaquiza",
    place: "Nor Lípez, Potosí — Bolivia",
    image: "t-santusa",
  },
  {
    quote:
      "We are grateful and proud for this opportunity to rescue these quinoa varieties. There should be many more, but their seeds are not easily available nowadays.",
    name: "Carlos Nina Muñoz",
    community: "Community of Jirira",
    place: "Ladislao Cabrera, Oruro — Bolivia",
    image: "t-carlos",
  },
  {
    quote:
      "Neighboring farmers are curious about these varieties and have expressed their intention to buy seeds from my harvest for next season.",
    name: "Marcelino León Ticona",
    community: "Community of Caricari",
    place: "Mañazo, Puno — Perú",
    image: "t-marcelino",
  },
  {
    quote:
      "We are very happy with the results. They flourished beautifully. We intend to save 70% for consumption and 30% for seed.",
    name: "Genaro Miranda Vilca",
    community: "Community of Collana Cruz Pata",
    place: "Cabana, Puno — Perú",
    image: "t-genaro",
  },
  {
    quote:
      "We noticed that these varieties are more resilient to the changing climate, and yield better because their taste in the field does not attract animals like birds and mice.",
    name: "Martín Perca Chambilla",
    community: "Community of Ancoaque",
    place: "Juli, Puno — Perú",
    image: "t-martin",
  },
];

export type Tier = {
  amount: number;
  title: string;
  body: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    amount: 20,
    title: "Seed keeper",
    body: "Provides rare seed of an endangered variety to one family for a full planting season.",
  },
  {
    amount: 50,
    title: "Season guardian",
    body: "Backs monitoring visits and extension events that keep a variety thriving to harvest.",
    featured: true,
  },
  {
    amount: 100,
    title: "Community reward",
    body: "Funds a community-chosen in-kind reward celebrated at a public award ceremony.",
  },
];
