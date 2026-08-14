import type { LocaleString } from '../locales';

export type Benefit = {
  emoji: string;
  title: LocaleString;
  description: LocaleString;
};

export const benefits: Benefit[] = [
  {
    emoji: "🌱",
    title: { fr: "100% HVE et origan Bio", en: "100% HVE & Organic Oregano" },
    description: {
      fr: "IGP Abricot des Baronnies. Cultivés dans le respect de l'environnement, avec plus d'une 20aine d'espèces et de variétés.",
      en: "IGP Baronnies Apricot. Grown with respect for the environment, with over 20 species and varieties.",
    },
  },
  {
    emoji: "🌞",
    title: { fr: "Ensoleillés", en: "Sun-Kissed" },
    description: {
      fr: "Bénéficiant du climat méditerranéen de la Drôme provençale.",
      en: "Benefiting from the Mediterranean climate of Provençal Drôme.",
    },
  },
  {
    emoji: "🚚",
    // Pick-up leads: it is what applies to every visitor. Home delivery is a
    // trade-only channel (see the `terms` list in locales/index.ts).
    title: { fr: "Retrait ou Livraison", en: "Pick-up or Delivery" },
    description: {
      fr: "Retrait à la ferme ou sur nos points de vente. Livraison à domicile pour les professionnels.",
      en: "Pick-up at the farm or at our sales points. Home delivery for trade customers.",
    },
  },
  {
    emoji: "👨‍🌾",
    title: { fr: "Producteurs Locaux", en: "Local Producers" },
    description: {
      fr: "Issus de notre propre ferme familiale, garantissant fraîcheur et traçabilité.",
      en: "From our own family farm, guaranteeing freshness and traceability.",
    },
  },
];
