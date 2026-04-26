export type Market = {
  location: string;
  period: string;
  description: string;
};

export type SalesChannel = {
  name: string;
  details: string[];
};

export const farmerMarkets: Market[] = [
  { location: "Bésignan", period: "Juillet", description: "Marché de producteurs local" },
  { location: "Séderon", period: "Juin à août", description: "Marché de producteurs local" },
  { location: "Serres", period: "21 mars – fin décembre", description: "Marché de producteurs local" },
];

export const salesChannels: SalesChannel[] = [
  {
    name: "À la ferme",
    details: [
      "Contactez-nous si possible avant, nous sommes jamais très loin",
      "Ouvert toute l'année",
    ],
  },
  {
    name: "Marchés",
    details: [
      "Serres (05) de mars à décembre",
      "Séderon (26) de juin à août",
    ],
  },
  {
    name: "Foires saisonnières",
    details: [
      "Foire de Saoû — novembre",
      "Foire de Montvendre — novembre",
      "Journée gourmande Bésignan — Dimanche de Pentecôte",
    ],
  },
];
