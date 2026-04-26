import type { LocaleString } from '../locales';

export type Market = {
  location: string;
  period: LocaleString;
  description: LocaleString;
};

export type SalesChannel = {
  name: LocaleString;
  details: LocaleString[];
};

export const farmerMarkets: Market[] = [
  {
    location: "Bésignan",
    period: { fr: "Juillet", en: "July" },
    description: { fr: "Marché de producteurs local", en: "Local farmers' market" },
  },
  {
    location: "Séderon",
    period: { fr: "Juin à août", en: "June to August" },
    description: { fr: "Marché de producteurs local", en: "Local farmers' market" },
  },
  {
    location: "Serres",
    period: { fr: "21 mars – fin décembre", en: "March 21 – end of December" },
    description: { fr: "Marché de producteurs local", en: "Local farmers' market" },
  },
];

export const salesChannels: SalesChannel[] = [
  {
    name: { fr: "À la ferme", en: "At the farm" },
    details: [
      { fr: "Contactez-nous si possible avant, nous sommes jamais très loin", en: "Please contact us beforehand if possible, we're never far" },
      { fr: "Ouvert toute l'année", en: "Open year-round" },
    ],
  },
  {
    name: { fr: "Marchés", en: "Markets" },
    details: [
      { fr: "Serres (05) de mars à décembre", en: "Serres (05) from March to December" },
      { fr: "Séderon (26) de juin à août", en: "Séderon (26) from June to August" },
    ],
  },
  {
    name: { fr: "Foires saisonnières", en: "Seasonal fairs" },
    details: [
      { fr: "Foire de Saoû — novembre", en: "Saoû Fair — November" },
      { fr: "Foire de Montvendre — novembre", en: "Montvendre Fair — November" },
      { fr: "Journée gourmande Bésignan — Dimanche de Pentecôte", en: "Bésignan Gourmet Day — Whit Sunday" },
    ],
  },
];
