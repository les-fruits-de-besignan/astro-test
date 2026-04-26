export type Price = {
  prefix?: string;
  amount: number;
  unit: string;
};

export type Product = {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  prices: Price[];
  seasonItems?: string[];
};

export type ProductCategory = {
  name: string;
  emoji: string;
  products: Product[];
};

export const productCatalog: ProductCategory[] = [
  {
    name: "Fruits & Conserves",
    emoji: "🍒",
    products: [
      {
        name: "Fruits de saison",
        description: "Récoltés à maturité optimale dans nos vergers ensoleillés. Fruits de table ou pour la confiture.",
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751127326/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.13.26_vsisvn.png",
        imageAlt: "Fruits de saison",
        prices: [],
        seasonItems: [
          "Cerises — juin",
          "Abricots — juin / juillet",
          "Poires — septembre",
          "Coings — octobre",
        ],
      },
      {
        name: "Confitures & Sirops",
        description: "Sirops : Cerise, Abricot, Coing ou Menthe.<br/>Confitures : Cerises, Abricot, Abricots-lavande, Poire-vanille-cannelle, Poires, Prunes ou Coings.",
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751127326/sirop.png",
        imageAlt: "Confitures et Sirops",
        prices: [
          { prefix: "Sirops", amount: 4.10, unit: "bouteille 50cl" },
          { prefix: "Confitures", amount: 3.20, unit: "pot 200g" },
          { prefix: "[Grand format] coing", amount: 6.00, unit: "pot 330g" },
        ],
      },
      {
        name: "Jus & Nectars",
        description: "Abricot, Pêche-Abricot, Pomme-Coings, Poires, Pommes-Poires et Cerises.",
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751128075/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.14.13_zzh1yc.png",
        imageAlt: "Jus et nectars",
        prices: [
          { amount: 3.50, unit: "la bouteille" },
          { amount: 20.00, unit: "le carton de 6 bouteilles" },
        ],
      },
    ],
  },
  {
    name: "Amandes & Aromates",
    emoji: "🌿",
    products: [
      {
        name: "Amandes & Amandons",
        description: "En coques ou en sachet d'amandons.",
        imageUrl: "https://res.cloudinary.com/duksfvujv/image/upload/v1696661771/almonds_o2ulpu.jpg",
        imageAlt: "Amandes et Amandons",
        prices: [
          { prefix: "Coques", amount: 6.00, unit: "kg" },
          { prefix: "Amandons", amount: 4.50, unit: "sachet 200g" },
          { prefix: "Amandons", amount: 11.00, unit: "sachet 500g" },
        ],
      },
      {
        name: "Moutardes & Pesto",
        description: "Moutarde aux amandes et pesto rouge aux amandes.",
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751128075/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.14.13_zzh1yc.png",
        imageAlt: "Moutardes et pesto",
        prices: [
          { prefix: "Moutarde", amount: 4.20, unit: "pot 180g" },
          { prefix: "Pesto", amount: 3.50, unit: "pot 90g" },
        ],
      },
      {
        name: "Herbes Aromatiques",
        description: "Mélange de thym, romarin, sarriette, sauge, origan (bio) issus de nos parcelles ou de la cueillette sauvage.",
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751128073/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.14.03_kmotvp.png",
        imageAlt: "Herbes aromatiques",
        prices: [
          { amount: 5.00, unit: "sachet 40g" },
        ],
      },
    ],
  },
];
