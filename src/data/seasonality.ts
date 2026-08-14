import type { LocaleString } from "../locales";

export type SeasonalItem = {
  name: LocaleString;
  details: LocaleString;
};

export const seasonalItems: SeasonalItem[] = [
  {
    name: { fr: "Cerises", en: "Cherries" },
    details: { fr: "Juin", en: "June" },
  },
  {
    name: { fr: "Abricots", en: "Apricots" },
    details: { fr: "Juin – juillet", en: "June – July" },
  },
  {
    name: { fr: "Prunes reine-claude", en: "Reine-claude plums" },
    details: { fr: "Août – septembre", en: "August – September" },
  },
  {
    name: { fr: "Poires", en: "Pears" },
    details: { fr: "Septembre", en: "September" },
  },
  {
    name: { fr: "Coings", en: "Quinces" },
    details: { fr: "Septembre", en: "September" },
  },
  {
    name: { fr: "Amandes", en: "Almonds" },
    details: { fr: "Récolte en septembre", en: "Harvested in September" },
  },
  // {
  //   name: { fr: "Confitures, nougat, moutardes", en: "Jams, nougat, mustards" },
  //   details: {
  //     fr: "Découvrez toute notre gamme de confitures, nougats et moutardes",
  //     en: "Discover our full range of jams, nougats and mustards",
  //   },
  // },
];
