export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export function detectLocale(input?: string): Locale {
  const lang = (input || "").toLowerCase();
  return lang.startsWith("es") ? "es" : "en";
}

type Messages = {
  logoSubtitle: string;
  nav: {
    home: string;
    mission: string;
    cycle: string;
    voices: string;
    team: string;
    donate: string;
    donateCta: string;
    donateNow: string;
  };
  langToggle: string;
  hero: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    subtitle: string;
    donate: string;
    learn: string;
    farmersLabel: string;
    inKindLabel: string;
    countriesValue: string;
    highlandLabel: string;
  };
  statsHeading: { eyebrow: string; title: string; note: string };
  stats: { label: string; hint: string }[];
  mission: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    body: string;
    features: { title: string; body: string }[];
    imageAlt: string;
  };
  cycle: {
    eyebrow: string;
    title: string;
    intro: string;
    stepLabel: string;
    steps: { when: string; title: string; body: string; alt: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    prev: string;
    next: string;
    goto: string;
    pause: string;
    play: string;
    items: { quote: string; name: string; community: string; place: string }[];
  };
  whySupport: {
    eyebrow: string;
    title: string;
    body: string;
    points: { title: string; body: string }[];
    impact: { amount: string; body: string }[];
    goal: string;
  };
  team: {
    eyebrow: string;
    title: string;
    body: string;
    members: { name: string; role: string; bio: string }[];
  };
  video: {
    eyebrow: string;
    title: string;
    subtitle: string;
    watch: string;
  };
  donate: {
    badge: string;
    title: string;
    subtitle: string;
    most: string;
    give: string;
    convert: string;
    checklist: string[];
    secure: { pre: string; post: string };
    tiers: { title: string; body: string }[];
  };
  footer: {
    tagline: string;
    support: string;
    explore: string;
    getInTouch: string;
    working: string;
    rights: string;
    madePre: string;
    madePost: string;
    imageCredit: string;
  };
  cookies: {
    title: string;
    body: string;
    accept: string;
    decline: string;
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    logoSubtitle: "Crop Diversity",
    nav: {
      home: "Home",
      mission: "Mission",
      cycle: "The cycle",
      voices: "Voices",
      team: "Team",
      donate: "Donate",
      donateCta: "Donate",
      donateNow: "Donate now",
    },
    langToggle: "Cambiar a español",
    hero: {
      badge: "Safeguarding Andean crop diversity",
      titlePre: "Reward the farmers who keep our",
      titleHighlight: "rarest seeds",
      titlePost: " alive.",
      subtitle:
        "RESCA pays Andean families for conserving endangered quinoa varieties — turning biodiversity into dignity, resilience and living heritage in the Peruvian Andes.",
      donate: "Donate now",
      learn: "See how it works",
      farmersLabel: "Farmers rewarded",
      inKindLabel: "Community-chosen rewards",
      countriesValue: "Peru",
      highlandLabel: "This season's focus",
    },
    statsHeading: {
      eyebrow: "Our impact",
      title: "A decade of rewarding conservation",
      note: "Figures reflect RESCA's work across four Latin American countries since 2010. This season we are focusing on Peru.",
    },
    stats: [
      { label: "Varieties conserved", hint: "threatened native crops" },
      { label: "Key crops", hint: "quinoa, amaranth, potato & Andean tubers" },
      { label: "Farmers rewarded", hint: "40% of them women, since 2010" },
      { label: "Communities", hint: "across four Latin American countries" },
    ],
    mission: {
      eyebrow: "Why it matters",
      titlePre: "Thousands of crop varieties are quietly",
      titleHighlight: "disappearing",
      titlePost: ".",
      body: "As markets reward a handful of commercial seeds, the thousands of native quinoa, potato and Andean crop varieties that fed the region for millennia are vanishing from fields. Yet keeping that diversity alive is the world's insurance policy against climate change, emerging pests and future food crises. RESCA flips the incentive: we reward the farmers who safeguard it, so it survives where it belongs — in living, working farms.",
      features: [
        {
          title: "Living gene banks",
          body: "Rare landraces stay in the soil and in the diet, not frozen in a distant vault.",
        },
        {
          title: "Community-led",
          body: "Groups compete with their best conservation offers and choose their own rewards.",
        },
        {
          title: "Verified impact",
          body: "Frequent field visits confirm that prioritized varieties are truly being grown.",
        },
        {
          title: "Dignity, not charity",
          body: "Farmers are paid for a service to humanity: safeguarding our shared food future.",
        },
      ],
      imageAlt: "Close-up of colourful native Andean quinoa",
    },
    cycle: {
      eyebrow: "The cycle of a RESCA intervention",
      title: "One season, five steps, alongside the community",
      intro:
        "In Puno, the quinoa planting season begins in September or October, depending on the rains. Each campaign follows these steps.",
      stepLabel: "Step",
      steps: [
        {
          when: "July – August",
          title: "Prioritization",
          body: "Threatened crop varieties are identified and prioritized, and community groups are informed about how to participate.",
          alt: "Bowls of red, black and white native quinoa grains",
        },
        {
          when: "August – September",
          title: "Agreements",
          body: "The best offers from community groups are selected and conservation agreements are signed.",
          alt: "A RESCA representative handing a conservation agreement to a farmer",
        },
        {
          when: "September – October",
          title: "Seed Distribution",
          body: "Seeds of rare varieties are distributed among participating farmers for planting.",
          alt: "Rare seed varieties on Andean textiles, ready to be distributed",
        },
        {
          when: "Growing season",
          title: "Monitoring",
          body: "Frequent verification visits, extension events, and quality seed selection take place throughout the season.",
          alt: "A field technician meeting a farming community during a monitoring visit",
        },
        {
          when: "May – June",
          title: "Reward Ceremony",
          body: "Community-chosen in-kind rewards are delivered at high-visibility award ceremonies.",
          alt: "Farmers celebrating at a RESCA reward ceremony after harvest",
        },
      ],
    },
    testimonials: {
      eyebrow: "Voices from the fields",
      title: "The people behind the harvest",
      prev: "Previous testimonial",
      next: "Next testimonial",
      goto: "Go to testimonial",
      pause: "Pause",
      play: "Play",
      items: [
        {
          quote:
            "Now that we have realized the virtues of these varieties, we will strive to keep them alive, even if the project does not go on.",
          name: "Santusa de López",
          community: "Community of Aguaquiza",
          place: "Nor Lípez, Potosí — Bolivia",
        },
        {
          quote:
            "We are grateful and proud for this opportunity to rescue these quinoa varieties. There should be many more, but their seeds are not easily available nowadays.",
          name: "Carlos Nina Muñoz",
          community: "Community of Jirira",
          place: "Ladislao Cabrera, Oruro — Bolivia",
        },
        {
          quote:
            "Neighboring farmers are curious about these varieties and have expressed their intention to buy seeds from my harvest for next season.",
          name: "Marcelino León Ticona",
          community: "Community of Caricari",
          place: "Mañazo, Puno — Perú",
        },
        {
          quote:
            "We are very happy with the results. They flourished beautifully. We intend to save 70% for consumption and 30% for seed.",
          name: "Genaro Miranda Vilca",
          community: "Community of Collana Cruz Pata",
          place: "Cabana, Puno — Perú",
        },
        {
          quote:
            "We noticed that these varieties are more resilient to the changing climate, and yield better because their taste in the field does not attract animals like birds and mice.",
          name: "Martín Perca Chambilla",
          community: "Community of Ancoaque",
          place: "Juli, Puno — Perú",
        },
      ],
    },
    whySupport: {
      eyebrow: "Why your support matters",
      title: "Conservation can't depend on governments alone",
      body: "Public funding for crop conservation is limited and rises and falls with political cycles. Your donation makes the program steady and independent — so communities can keep endangered varieties alive season after season, not just when a government decides to fund it.",
      points: [
        {
          title: "Beyond the public purse",
          body: "Government support is valuable but uncertain. Individual and private giving keeps conservation going through every political cycle.",
        },
        {
          title: "Directly into the field",
          body: "Your gift funds seeds, verification visits and community-chosen rewards — the concrete actions that keep varieties growing.",
        },
      ],
      impact: [
        {
          amount: "£100",
          body: "On average, enables one producer and their family to take part in RESCA and conserve a variety.",
        },
        {
          amount: "£1,000–5,000",
          body: "Conserves a variety for at least five years.",
        },
      ],
      goal: "Every pound goes further because rewards are chosen by the communities themselves. Sustained public support is what lets us reach more families and safeguard more varieties each season.",
    },
    team: {
      eyebrow: "Who we are",
      title: "The team behind RESCA",
      body: "RESCA's team is made up of national and international experts with more than 15 years developing and delivering the initiative alongside Andean communities.",
      members: [
        {
          name: "Kleny Arpazi",
          role: "Field coordinator · Peru",
          bio: "A Peruvian citizen and expert in quinoa cultivation and agricultural extension, Kleny has worked with RESCA for 15 years and is linked to the regional government's agrarian sector. She leads implementation in the field: promoting and supporting the organized participation of farmer groups in RESCA, seed diffusion, frequent verification and monitoring visits, extension events (field days and exchanges of experience, quality seed selection techniques, participation in local fairs) and the reward ceremony, with the participation of local, regional and national authorities.",
        },
        {
          name: "Dr. Adam G. Drucker",
          role: "International RESCA expert · Director, GivingWorks “Farmer AgroEcoServices”",
          bio: "An ecological economist and international RESCA expert, Adam directs the GivingWorks charitable foundation “Farmer AgroEcoServices”, under which this RESCA initiative is carried out. He has been deeply involved in developing and testing RESCA (also known as PACS) for more than 15 years.",
        },
      ],
    },
    video: {
      eyebrow: "In video",
      title: "See RESCA in action",
      subtitle:
        "Watch how conservation agreements turn biodiversity into dignity and living heritage across the Andes.",
      watch: "Play video",
    },
    donate: {
      badge: "Your gift plants resilience",
      title: "Fund the next reward ceremony",
      subtitle:
        "Every contribution goes into seeds, monitoring and community-chosen rewards that keep endangered varieties growing season after season.",
      most: "Most loved",
      give: "Give",
      convert: "Not in £? Convert to your currency",
      checklist: [
        "Transparent, verified fieldwork",
        "100% community-chosen rewards",
        "Every gift helps keep a variety alive",
      ],
      secure: {
        pre: "Donations are processed securely by",
        post: "(UK Charity No. 1078770), under the Farmer AgroEcoServices charitable fund.",
      },
      tiers: [
        {
          title: "Seed keeper",
          body: "Provides rare seed of an endangered variety to a family for a full planting season.",
        },
        {
          title: "Season guardian",
          body: "Backs monitoring visits and extension events during the growing season.",
        },
        {
          title: "Back a producer",
          body: "On average, funds one producer's participation and their community-chosen in-kind reward, presented at a public ceremony.",
        },
        {
          title: "Variety guardian",
          body: "Funds monitoring visits and extension events that carry more than one variety through to harvest.",
        },
        {
          title: "Small community",
          body: "Funds the participation of a group of producers in a small community.",
        },
        {
          title: "Large community",
          body: "Funds the participation of a group of producers in a large community.",
        },
      ],
    },
    footer: {
      tagline: "Rewarding Farmers Conserving Crop Diversity.",
      support: "Support a farmer",
      explore: "Explore",
      getInTouch: "Get in touch",
      working: "Working with highland communities in the Peruvian Andes.",
      rights: "All rights reserved.",
      madePre: "Made with",
      madePost: "for crop diversity.",
      imageCredit:
        "Some images are courtesy of Bioversity International, used under their public, non-commercial access terms.",
    },
    cookies: {
      title: "We value your privacy",
      body: "We use cookies to remember your preferences — like language and theme — and to help pages and images load faster on your next visit.",
      accept: "Accept",
      decline: "Decline",
    },
  },
  es: {
    logoSubtitle: "Diversidad de Cultivos",
    nav: {
      home: "Inicio",
      mission: "Misión",
      cycle: "El ciclo",
      voices: "Voces",
      team: "Equipo",
      donate: "Donar",
      donateCta: "Donar",
      donateNow: "Donar ahora",
    },
    langToggle: "Switch to English",
    hero: {
      badge: "Protegiendo la diversidad de cultivos andinos",
      titlePre: "Recompensa a los agricultores que conservan nuestras",
      titleHighlight: "semillas más raras",
      titlePost: ".",
      subtitle:
        "RESCA recompensa a las familias andinas por conservar variedades de quinua amenazadas, convirtiendo la biodiversidad en dignidad, resiliencia y patrimonio vivo en los Andes del Perú.",
      donate: "Donar ahora",
      learn: "Cómo funciona",
      farmersLabel: "Agricultores recompensados",
      inKindLabel: "Recompensas elegidas por la comunidad",
      countriesValue: "Perú",
      highlandLabel: "Enfoque de esta campaña",
    },
    statsHeading: {
      eyebrow: "Nuestro impacto",
      title: "Una década recompensando la conservación",
      note: "Las cifras reflejan el trabajo de RESCA en cuatro países de América Latina desde 2010. Esta campaña nos enfocamos en el Perú.",
    },
    stats: [
      { label: "Variedades conservadas", hint: "cultivos nativos amenazados" },
      { label: "Cultivos clave", hint: "quinua, amaranto, papa y tubérculos andinos" },
      { label: "Agricultores recompensados", hint: "40% de ellas mujeres, desde 2010" },
      { label: "Comunidades", hint: "en cuatro países de América Latina" },
    ],
    mission: {
      eyebrow: "Por qué importa",
      titlePre: "Miles de variedades de cultivos desaparecen",
      titleHighlight: "en silencio",
      titlePost: ".",
      body: "A medida que el mercado premia un puñado de semillas comerciales, las miles de variedades nativas de quinua, papa y otros cultivos andinos que alimentaron a la región por milenios están desapareciendo de las chacras. Pero mantener viva esa diversidad es la póliza de seguro mundial frente al cambio climático, las plagas emergentes y las futuras crisis alimentarias. RESCA invierte el incentivo: recompensamos a quienes la protegen, para que sobreviva donde pertenece: en chacras vivas y productivas.",
      features: [
        {
          title: "Bancos de genes vivos",
          body: "Las variedades raras permanecen en la tierra y en la dieta, no congeladas en una bóveda lejana.",
        },
        {
          title: "Liderado por la comunidad",
          body: "Los grupos compiten con sus mejores ofertas de conservación y eligen sus propias recompensas.",
        },
        {
          title: "Impacto verificado",
          body: "Visitas de campo frecuentes confirman que las variedades priorizadas realmente se cultivan.",
        },
        {
          title: "Dignidad, no caridad",
          body: "Se paga a los agricultores por un servicio a la humanidad: cuidar nuestro futuro alimentario común.",
        },
      ],
      imageAlt: "Primer plano de quinua nativa andina de colores",
    },
    cycle: {
      eyebrow: "El ciclo de una intervención RESCA",
      title: "Una campaña, cinco pasos, junto a la comunidad",
      intro:
        "En Puno, la campaña de siembra de quinua empieza en septiembre u octubre, según las lluvias. Cada campaña sigue estos pasos.",
      stepLabel: "Paso",
      steps: [
        {
          when: "Julio – Agosto",
          title: "Priorización",
          body: "Se identifican y priorizan las variedades amenazadas, y se informa a los grupos comunitarios sobre cómo participar.",
          alt: "Cuencos con granos de quinua nativa roja, negra y blanca",
        },
        {
          when: "Agosto – Septiembre",
          title: "Acuerdos",
          body: "Se seleccionan las mejores ofertas de los grupos comunitarios y se firman los acuerdos de conservación.",
          alt: "Un representante de RESCA entregando un acuerdo de conservación a una agricultora",
        },
        {
          when: "Septiembre – Octubre",
          title: "Entrega de semillas",
          body: "Se distribuyen semillas de variedades raras entre los agricultores participantes para la siembra.",
          alt: "Variedades de semilla rara sobre textiles andinos, listas para distribuir",
        },
        {
          when: "Temporada de cultivo",
          title: "Monitoreo",
          body: "Visitas frecuentes de verificación, eventos de extensión y selección de semilla de calidad durante toda la campaña.",
          alt: "Una técnica de campo reunida con una comunidad durante una visita de monitoreo",
        },
        {
          when: "Mayo – Junio",
          title: "Ceremonia de recompensas",
          body: "Se entregan recompensas en especie elegidas por la comunidad en ceremonias públicas de alta visibilidad.",
          alt: "Agricultoras celebrando en una ceremonia de recompensas de RESCA tras la cosecha",
        },
      ],
    },
    testimonials: {
      eyebrow: "Voces desde el campo",
      title: "Las personas detrás de la cosecha",
      prev: "Testimonio anterior",
      next: "Siguiente testimonio",
      goto: "Ir al testimonio",
      pause: "Pausar",
      play: "Reproducir",
      items: [
        {
          quote:
            "Ahora que hemos comprendido las virtudes de estas variedades, nos esforzaremos por mantenerlas vivas, aunque el proyecto no continúe.",
          name: "Santusa de López",
          community: "Comunidad de Aguaquiza",
          place: "Nor Lípez, Potosí — Bolivia",
        },
        {
          quote:
            "Estamos agradecidos y orgullosos por esta oportunidad de rescatar estas variedades de quinua. Debería haber muchas más, pero hoy sus semillas no se consiguen fácilmente.",
          name: "Carlos Nina Muñoz",
          community: "Comunidad de Jirira",
          place: "Ladislao Cabrera, Oruro — Bolivia",
        },
        {
          quote:
            "Los agricultores vecinos están interesados en estas variedades y me han dicho que quieren comprar semilla de mi cosecha para la próxima campaña.",
          name: "Marcelino León Ticona",
          community: "Comunidad de Caricari",
          place: "Mañazo, Puno — Perú",
        },
        {
          quote:
            "Estamos muy contentos con los resultados. Crecieron hermosas. Pensamos guardar el 70% para consumo y el 30% para semilla.",
          name: "Genaro Miranda Vilca",
          community: "Comunidad de Collana Cruz Pata",
          place: "Cabana, Puno — Perú",
        },
        {
          quote:
            "Notamos que estas variedades resisten mejor el cambio del clima y rinden más, porque su sabor en el campo no atrae a animales como pájaros y ratones.",
          name: "Martín Perca Chambilla",
          community: "Comunidad de Ancoaque",
          place: "Juli, Puno — Perú",
        },
      ],
    },
    whySupport: {
      eyebrow: "Por qué tu apoyo importa",
      title: "La conservación no puede depender solo del gobierno",
      body: "El financiamiento público para conservar cultivos es limitado y sube o baja con los ciclos políticos. Tu donación hace que el programa sea estable e independiente, para que las comunidades mantengan vivas las variedades amenazadas campaña tras campaña, y no solo cuando un gobierno decide financiarlo.",
      points: [
        {
          title: "Más allá del presupuesto público",
          body: "El apoyo del gobierno es valioso pero incierto. El aporte de personas y del sector privado sostiene la conservación a través de cada ciclo político.",
        },
        {
          title: "Directo al campo",
          body: "Tu aporte financia semillas, visitas de verificación y recompensas elegidas por la comunidad: las acciones concretas que mantienen las variedades vivas.",
        },
      ],
      impact: [
        {
          amount: "£100",
          body: "En promedio, permite que un productor y su familia participen en RESCA y conserven una variedad.",
        },
        {
          amount: "£1,000–5,000",
          body: "Conserva una variedad durante al menos cinco años.",
        },
      ],
      goal: "Cada libra rinde más porque las recompensas las eligen las propias comunidades. El apoyo público sostenido es lo que nos permite llegar a más familias y proteger más variedades cada campaña.",
    },
    team: {
      eyebrow: "Quiénes somos",
      title: "El equipo detrás de RESCA",
      body: "El equipo de RESCA está formado por expertos nacionales e internacionales con más de 15 años desarrollando y ejecutando la iniciativa junto a las comunidades andinas.",
      members: [
        {
          name: "Kleny Arpazi",
          role: "Coordinadora de trabajo de campo · Perú",
          bio: "Ciudadana peruana, experta en cultivo de quinua y extensión agrícola, Kleny lleva 15 años trabajando con RESCA y está vinculada al sector agrario del gobierno regional. Se encarga de la implementación en campo: promueve y apoya la participación organizada de los grupos de agricultores en la iniciativa RESCA, la difusión de semillas, visitas frecuentes de verificación, evaluación y seguimiento, así como la organización de eventos de extensión (días de campo o intercambio de experiencias, técnicas de selección de semillas de calidad, participación en ferias locales) y la ceremonia de entrega de recompensas con la participación de autoridades locales, regionales y nacionales.",
        },
        {
          name: "Dr. Adam G. Drucker",
          role: "Experto internacional RESCA · Director, GivingWorks “Farmer AgroEcoServices”",
          bio: "Economista ecológico y experto internacional en RESCA, dirige la Fundación Benéfica GivingWorks “Farmer AgroEcoServices”, bajo la cual se lleva a cabo esta iniciativa RESCA. Ha estado muy involucrado en el desarrollo y las pruebas de RESCA (también conocido como PACS, en inglés) durante más de 15 años.",
        },
      ],
    },
    video: {
      eyebrow: "En video",
      title: "Mira RESCA en acción",
      subtitle:
        "Descubre cómo los acuerdos de conservación convierten la biodiversidad en dignidad y patrimonio vivo en los Andes.",
      watch: "Reproducir video",
    },
    donate: {
      badge: "Tu donación siembra resiliencia",
      title: "Financia la próxima ceremonia de recompensas",
      subtitle:
        "Cada aporte se destina a semillas, monitoreo y recompensas elegidas por la comunidad que mantienen vivas las variedades amenazadas campaña tras campaña.",
      most: "El más elegido",
      give: "Dona",
      convert: "¿No usas £? Convierte a tu moneda",
      checklist: [
        "Trabajo de campo transparente y verificado",
        "Recompensas 100% elegidas por la comunidad",
        "Cada aporte ayuda a mantener viva una variedad",
      ],
      secure: {
        pre: "Las donaciones se procesan de forma segura a través de",
        post: "(organización benéfica del Reino Unido N.º 1078770), bajo el fondo benéfico Farmer AgroEcoServices.",
      },
      tiers: [
        {
          title: "Guardián de semillas",
          body: "Entrega semilla rara de una variedad amenazada a una familia por toda una campaña.",
        },
        {
          title: "Guardián de la campaña",
          body: "Apoya visitas de monitoreo y eventos de extensión durante la temporada de cultivo.",
        },
        {
          title: "Impulsa a un productor",
          body: "Financia en promedio la participación de un productor y su recompensa elegida en especie, entregada en una ceremonia pública.",
        },
        {
          title: "Guardián de variedades",
          body: "Financia visitas de monitoreo y eventos de extensión que llevan más de una variedad hasta la cosecha.",
        },
        {
          title: "Comunidad pequeña",
          body: "Financia la participación de un grupo de productores en una comunidad pequeña.",
        },
        {
          title: "Comunidad grande",
          body: "Financia la participación de un grupo de productores en una comunidad grande.",
        },
      ],
    },
    footer: {
      tagline: "Recompensando a los Agricultores que Conservan la Diversidad de Cultivos.",
      support: "Apoya a un agricultor",
      explore: "Explorar",
      getInTouch: "Contáctanos",
      working: "Trabajamos con comunidades altoandinas en los Andes del Perú.",
      rights: "Todos los derechos reservados.",
      madePre: "Hecho con",
      madePost: "por la diversidad de cultivos.",
      imageCredit:
        "Algunas imágenes son cortesía de Bioversity International, usadas bajo sus términos de acceso público y no comercial.",
    },
    cookies: {
      title: "Valoramos tu privacidad",
      body: "Usamos cookies para recordar tus preferencias —como el idioma y el tema— y para que las páginas e imágenes carguen más rápido en tu próxima visita.",
      accept: "Aceptar",
      decline: "Rechazar",
    },
  },
};
