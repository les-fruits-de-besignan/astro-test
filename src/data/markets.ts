import type { LocaleString } from '../locales';

export type SalesChannel = {
  name: LocaleString;
  details: LocaleString[];
  // Channels reached by calling ahead show the farm's phone number (see
  // data/contact.ts) as a dialable link under their details.
  showPhone?: boolean;
};

// The one place the market calendar lives, now that "Où nous trouver" is the only
// section listing it. Longest season first — that is what a customer can act on today.
export const salesChannels: SalesChannel[] = [
  {
    name: { fr: "À la ferme", en: "At the farm" },
    details: [
      { fr: "Contactez-nous si possible avant, nous ne sommes jamais très loin", en: "Please contact us beforehand if possible, we're never far" },
      // Must match `opens`/`closes` in data/contact.ts, which feeds the structured data.
      { fr: "Ouvert toute l'année, tous les jours de 8h à 19h", en: "Open year-round, every day from 8am to 7pm" },
    ],
    showPhone: true,
  },
  {
    name: { fr: "Marchés", en: "Markets" },
    details: [
      { fr: "Serres (05) — du 21 mars à fin décembre", en: "Serres (05) — 21 March to end of December" },
      { fr: "Séderon (26) — de juin à août", en: "Séderon (26) — June to August" },
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
