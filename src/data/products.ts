import type { LocaleString } from '../locales';

export type Price = {
  prefix?: LocaleString;
  amount: number;
  unit: LocaleString;
};

export type Product = {
  name: LocaleString;
  description: LocaleString;
  imageUrl: string;
  imageAlt: LocaleString;
  prices: Price[];
  seasonItems?: LocaleString[];
};

export type ProductCategory = {
  name: LocaleString;
  emoji: string;
  products: Product[];
};

export const productCatalog: ProductCategory[] = [
  {
    name: { fr: "Fruits & Conserves", en: "Fruits & Preserves" },
    emoji: "🍒",
    products: [
      {
        name: { fr: "Fruits de saison", en: "Seasonal Fruits" },
        description: {
          fr: "Récoltés à maturité optimale dans nos vergers ensoleillés. Fruits de table ou pour la confiture.",
          en: "Harvested at peak ripeness in our sun-drenched orchards. Perfect for eating fresh or for making jam.",
        },
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751127326/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.13.26_vsisvn.png",
        imageAlt: { fr: "Fruits de saison", en: "Seasonal fruits" },
        prices: [],
        seasonItems: [
          { fr: "Cerises — juin", en: "Cherries — June" },
          { fr: "Abricots — juin / juillet", en: "Apricots — June / July" },
          { fr: "Poires — septembre", en: "Pears — September" },
          { fr: "Coings — octobre", en: "Quinces — October" },
        ],
      },
      {
        name: { fr: "Confitures & Sirops", en: "Jams & Syrups" },
        description: {
          fr: "Sirops : Cerise, Abricot, Coing ou Menthe.<br/>Confitures : Cerises, Abricot, Abricots-lavande, Poire-vanille-cannelle, Poires, Prunes ou Coings.",
          en: "Syrups: Cherry, Apricot, Quince or Mint.<br/>Jams: Cherries, Apricot, Apricot-lavender, Pear-vanilla-cinnamon, Pears, Plums or Quinces.",
        },
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751127326/sirop.png",
        imageAlt: { fr: "Confitures et Sirops", en: "Jams and Syrups" },
        prices: [
          { prefix: { fr: "Sirops", en: "Syrups" }, amount: 4.10, unit: { fr: "bouteille 50cl", en: "50cl bottle" } },
          { prefix: { fr: "Confitures", en: "Jams" }, amount: 3.20, unit: { fr: "pot 200g", en: "200g jar" } },
          { prefix: { fr: "[Grand format] coing", en: "[Large format] quince" }, amount: 6.00, unit: { fr: "pot 330g", en: "330g jar" } },
        ],
      },
      {
        name: { fr: "Jus & Nectars", en: "Juices & Nectars" },
        description: {
          fr: "Abricot, Pêche-Abricot, Pomme-Coings, Poires, Pommes-Poires et Cerises.",
          en: "Apricot, Peach-Apricot, Apple-Quince, Pears, Apple-Pear and Cherries.",
        },
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751128075/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.14.13_zzh1yc.png",
        imageAlt: { fr: "Jus et nectars", en: "Juices and nectars" },
        prices: [
          { amount: 3.50, unit: { fr: "la bouteille", en: "per bottle" } },
          { amount: 20.00, unit: { fr: "le carton de 6 bouteilles", en: "a case of 6 bottles" } },
        ],
      },
    ],
  },
  {
    name: { fr: "Amandes & Aromates", en: "Almonds & Aromatics" },
    emoji: "🌿",
    products: [
      {
        name: { fr: "Amandes & Amandons", en: "Almonds" },
        description: {
          fr: "En coques ou en sachet d'amandons.",
          en: "In shells or as shelled almonds.",
        },
        imageUrl: "https://res.cloudinary.com/duksfvujv/image/upload/v1696661771/almonds_o2ulpu.jpg",
        imageAlt: { fr: "Amandes et Amandons", en: "Almonds" },
        prices: [
          { prefix: { fr: "Coques", en: "In shells" }, amount: 6.00, unit: { fr: "kg", en: "kg" } },
          { prefix: { fr: "Amandons", en: "Shelled" }, amount: 4.50, unit: { fr: "sachet 200g", en: "200g bag" } },
          { prefix: { fr: "Amandons", en: "Shelled" }, amount: 11.00, unit: { fr: "sachet 500g", en: "500g bag" } },
        ],
      },
      {
        name: { fr: "Moutardes & Pesto", en: "Mustards & Pesto" },
        description: {
          fr: "Moutarde aux amandes et pesto rouge aux amandes.",
          en: "Almond mustard and red almond pesto.",
        },
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751128075/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.14.13_zzh1yc.png",
        imageAlt: { fr: "Moutardes et pesto", en: "Mustards and pesto" },
        prices: [
          { prefix: { fr: "Moutarde", en: "Mustard" }, amount: 4.20, unit: { fr: "pot 180g", en: "180g jar" } },
          { prefix: { fr: "Pesto", en: "Pesto" }, amount: 3.50, unit: { fr: "pot 90g", en: "90g jar" } },
        ],
      },
      {
        name: { fr: "Herbes Aromatiques", en: "Aromatic Herbs" },
        description: {
          fr: "Mélange de thym, romarin, sarriette, sauge, origan (bio) issus de nos parcelles ou de la cueillette sauvage.",
          en: "Blend of thyme, rosemary, savory, sage, oregano (organic) from our plots or wild harvesting.",
        },
        imageUrl: "https://res.cloudinary.com/dgkrgabdc/image/upload/v1751128073/Capture_d_e%CC%81cran_2025-06-28_a%CC%80_18.14.03_kmotvp.png",
        imageAlt: { fr: "Herbes aromatiques", en: "Aromatic herbs" },
        prices: [
          { amount: 5.00, unit: { fr: "sachet 40g", en: "40g bag" } },
        ],
      },
    ],
  },
];
