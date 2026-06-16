export type Lang = 'fr' | 'en';
export type LocaleString = Record<Lang, string>;

type Translations = {
  nav: {
    skipLink: string;
    products: string;
    season: string;
    benefits: string;
    order: string;
    langSwitch: string;
    langSwitchAriaLabel: string;
  };
  layout: {
    title: string;
    description: string;
    ogLocale: string;
    htmlLang: string;
    canonicalPath: string;
  };
  hero: {
    subtitle: string;
    ctaProducts: string;
    ctaOrder: string;
  };
  products: {
    title: string;
    orderCta: string;
  };
  nextDates: { title: string };
  seasonOffer: { title: string };
  benefits: { title: string };
  salesPoints: { title: string };
  contact: {
    sectionTitle: string;
    contactTitle: string;
    address: string;
    instagramAriaLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    deliveryLabel: string;
    deliveryPlaceholder: string;
    deliveryFarm: string;
    deliveryHome: string;
    deliveryMarket: string;
    productsLegend: string;
    freshFruits: string;
    juices: string;
    preserves: string;
    messageLabel: string;
    messagePlaceholder: string;
    rgpd: string;
    submit: string;
    formErrors: {
      name: string;
      phone: string;
      email: string;
      delivery: string;
      message: string;
      consent: string;
      invalid: string;
    };
    formStatus: {
      sending: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      retry: string;
    };
  };
  footer: { rights: string };
};

const locales: Record<Lang, Translations> = {
  fr: {
    nav: {
      skipLink: "Aller au contenu principal",
      products: "Nos Produits",
      season: "En cette Saison",
      benefits: "Avantages",
      order: "Commander",
      langSwitch: "English",
      langSwitchAriaLabel: "Switch to English version",
    },
    layout: {
      title: "Les Fruits de Bésignan | Fruits, confitures et aromates des Baronnies Provençales",
      description: "Producteurs de fruits (cerises, abricots, poires, coings), confitures, sirops, jus, amandes et herbes aromatiques. GAEC du vieux château à Bésignan, Drôme (26). Vente directe à la ferme, sur les marchés et en livraison.",
      ogLocale: "fr_FR",
      htmlLang: "fr-FR",
      canonicalPath: "/",
    },
    hero: {
      subtitle: "Découvrez nos fruits ensoleillés et les plantes aromatiques issus de nos vergers nichés en plein cœur du Parc Naturel des Baronnies Provençales",
      ctaProducts: "Découvrir nos produits",
      ctaOrder: "Commander maintenant",
    },
    products: {
      title: "Nos Produits d'Exception",
      orderCta: "Commander",
    },
    nextDates: { title: "Marchés de producteurs" },
    seasonOffer: { title: "Nos Fruits de Saison" },
    benefits: { title: "Pourquoi Choisir Nos Produits ?" },
    salesPoints: { title: "Nos Points de Ventes" },
    contact: {
      sectionTitle: "Commandez Maintenant",
      contactTitle: "Contactez-nous",
      address: "Bésignan, 26110, Drôme",
      instagramAriaLabel: "Instagram — ouvre dans un nouvel onglet",
      nameLabel: "Votre nom et prénom",
      namePlaceholder: "Marie Dupont",
      phoneLabel: "Votre téléphone",
      phonePlaceholder: "06 12 34 56 78",
      emailLabel: "Votre email",
      emailPlaceholder: "marie@exemple.fr",
      deliveryLabel: "Mode de récupération",
      deliveryPlaceholder: "Choisissez une option…",
      deliveryFarm: "Venir à la ferme",
      deliveryHome: "Livraison à domicile",
      deliveryMarket: "Récupération sur les marchés",
      productsLegend: "Produits souhaités",
      freshFruits: "Fruits frais (à déguster ou confiture)",
      juices: "Jus, nectars et sirops",
      preserves: "Moutarde, pesto, confitures, herbes aromatiques",
      messageLabel: "Votre demande",
      messagePlaceholder: "Décrivez votre commande : produits, quantités, dates souhaitées…",
      rgpd: "J'accepte que mes coordonnées soient utilisées pour être recontacté(e)",
      submit: "Envoyer ma commande",
      formErrors: {
        name: "Merci d'indiquer un nom (80 caractères maximum).",
        phone: "Saisissez un numéro valide (chiffres, espaces et + uniquement).",
        email: "Saisissez une adresse email valide, par exemple marie@exemple.fr.",
        delivery: "Choisissez un mode de récupération.",
        message: "Décrivez votre demande pour qu'on puisse y répondre.",
        consent: "Cochez cette case pour que l'on puisse vous recontacter.",
        invalid: "Veuillez corriger les champs indiqués avant d'envoyer.",
      },
      formStatus: {
        sending: "Envoi en cours…",
        successTitle: "Merci, votre demande est partie !",
        successBody: "On revient vers vous très vite. À bientôt à la ferme ou sur les marchés.",
        errorTitle: "L'envoi a échoué",
        errorBody: "Vérifiez votre connexion et réessayez, ou écrivez-nous directement à gaecduvieuxchateau@gmail.com.",
        retry: "Réessayer",
      },
    },
    footer: { rights: "Tous droits réservés." },
  },
  en: {
    nav: {
      skipLink: "Skip to main content",
      products: "Our Products",
      season: "This Season",
      benefits: "Why Us",
      order: "Order Now",
      langSwitch: "Français",
      langSwitchAriaLabel: "Passer à la version française",
    },
    layout: {
      title: "Les Fruits de Bésignan | Fruits, jams and aromatics from Baronnies Provençales",
      description: "Growers of fruits (cherries, apricots, pears, quinces), jams, syrups, juices, almonds and aromatic herbs. GAEC du vieux château in Bésignan, Drôme, France. Direct sale at the farm, at markets and delivery.",
      ogLocale: "en_US",
      htmlLang: "en",
      canonicalPath: "/en/",
    },
    hero: {
      subtitle: "Discover our sun-ripened fruits and aromatic plants from our orchards nestled in the heart of the Baronnies Provençales Natural Park",
      ctaProducts: "Discover our products",
      ctaOrder: "Order now",
    },
    products: {
      title: "Our Exceptional Products",
      orderCta: "Order",
    },
    nextDates: { title: "Farmers' Markets" },
    seasonOffer: { title: "Our Seasonal Fruits" },
    benefits: { title: "Why Choose Our Products?" },
    salesPoints: { title: "Where to Find Us" },
    contact: {
      sectionTitle: "Order Now",
      contactTitle: "Contact us",
      address: "Bésignan, 26110, Drôme, France",
      instagramAriaLabel: "Instagram — opens in a new tab",
      nameLabel: "Your name",
      namePlaceholder: "Jane Smith",
      phoneLabel: "Your phone",
      phonePlaceholder: "+33 6 12 34 56 78",
      emailLabel: "Your email",
      emailPlaceholder: "jane@example.com",
      deliveryLabel: "Pick-up method",
      deliveryPlaceholder: "Choose an option…",
      deliveryFarm: "Visit the farm",
      deliveryHome: "Home delivery",
      deliveryMarket: "Pick up at a market",
      productsLegend: "Desired products",
      freshFruits: "Fresh fruits (to eat or for jam)",
      juices: "Juices, nectars and syrups",
      preserves: "Mustard, pesto, jams, aromatic herbs",
      messageLabel: "Your request",
      messagePlaceholder: "Describe your order: products, quantities, preferred dates…",
      rgpd: "I agree that my contact details may be used to get back to me",
      submit: "Send my order",
      formErrors: {
        name: "Please enter a name (80 characters maximum).",
        phone: "Enter a valid phone number (digits, spaces and + only).",
        email: "Enter a valid email address, for example jane@example.com.",
        delivery: "Choose a pick-up method.",
        message: "Describe your request so we can reply.",
        consent: "Please tick this box so we can get back to you.",
        invalid: "Please fix the highlighted fields before sending.",
      },
      formStatus: {
        sending: "Sending…",
        successTitle: "Thanks, your request is on its way!",
        successBody: "We'll get back to you very soon. See you at the farm or at the markets.",
        errorTitle: "Sending failed",
        errorBody: "Please check your connection and try again, or email us directly at gaecduvieuxchateau@gmail.com.",
        retry: "Try again",
      },
    },
    footer: { rights: "All rights reserved." },
  },
};

export function t(lang: Lang): Translations {
  return locales[lang];
}
