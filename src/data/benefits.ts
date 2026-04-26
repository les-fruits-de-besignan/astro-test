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
    title: { fr: "Livraison ou Retrait", en: "Delivery or Pick-up" },
    description: {
      fr: "Livraison à domicile sur demande ou retrait à la ferme ou sur nos points de vente.",
      en: "Home delivery on request or pick-up at the farm or at our sales points.",
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
