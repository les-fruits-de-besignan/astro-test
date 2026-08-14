export type Lang = "fr" | "en";
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
  seasonOffer: { title: string };
  benefits: { title: string };
  farm: {
    title: string;
    since: string;
    sinceLabel: string;
    paragraphs: string[];
  };
  salesPoints: { title: string };
  contact: {
    sectionTitle: string;
    contactTitle: string;
    address: string;
    instagramAriaLabel: string;
    // Prefixes the phone number to build an accessible label. Shared by the
    // contact panel, the "at the farm" sales cell and the footer.
    phoneAriaLabel: string;
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
    messageLabel: string;
    messagePlaceholder: string;
    rgpd: string;
    submit: string;
    optionalHint: string;
    termsTitle: string;
    // Zone, shipping threshold and lead time — the three things a customer needs
    // before they will order. Kept as lines so the panel stays scannable.
    terms: string[];
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
  footer: { signoff: string; rights: string };
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
      title:
        "Les Fruits de Bésignan | Fruits, confitures et aromates des Baronnies Provençales",
      description:
        "Producteurs de fruits (cerises, abricots, poires, coings), confitures, sirops, jus, amandes et herbes aromatiques. GAEC du vieux château à Bésignan, Drôme (26). Vente directe à la ferme, sur les marchés et en livraison.",
      ogLocale: "fr_FR",
      htmlLang: "fr-FR",
      canonicalPath: "/",
    },
    hero: {
      subtitle:
        "Découvrez nos fruits ensoleillés et les plantes aromatiques issus de nos vergers nichés en plein cœur du Parc Naturel des Baronnies Provençales",
      ctaProducts: "Découvrir nos produits",
      ctaOrder: "Commander maintenant",
    },
    products: {
      title: "Nos Produits d'Exception",
      orderCta: "Commander",
    },
    seasonOffer: { title: "Nos Fruits de Saison" },
    benefits: { title: "Pourquoi Choisir Nos Produits ?" },
    farm: {
      title: "Le GAEC du vieux château",
      since: "1815",
      sinceLabel: "dans la famille depuis",
      paragraphs: [
        "La ferme est dans la famille depuis 1815. Aujourd'hui, Alain le père et Aurélien le fils y travaillent côte à côte, sur les mêmes terres et avec la même passion.",
        "Depuis plusieurs années, nous adaptons l'exploitation au changement climatique et à ses aléas. Notre réponse tient en un mot : diversifier. Une vingtaine d'espèces et de variétés poussent aujourd'hui sur nos parcelles, des fruits de table aux plantes aromatiques, pour que la ferme ne dépende jamais d'une seule récolte.",
        "Cette même attention nous a conduits à la démarche HVE sur l'ensemble de l'exploitation, et à la certification bio sur nos aromatiques. Produire au cœur du Parc naturel régional des Baronnies provençales engage à en préserver le paysage — mais aussi l'histoire : nous cultivons des variétés anciennes, emblématiques de la Provence. C'est notre façon de nous y inscrire durablement.",
        "Vous vous demandez peut-être d'où vient « le vieux château » ? Notre ferme comprend les anciennes terres du marquis de Bésignan, aux abords du château.",
      ],
    },
    salesPoints: { title: "Où nous trouver" },
    contact: {
      sectionTitle: "Commandez Maintenant",
      contactTitle: "Contactez-nous",
      address: "Bésignan, 26110, Drôme",
      instagramAriaLabel: "Instagram — ouvre dans un nouvel onglet",
      phoneAriaLabel: "Nous appeler au",
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
      messageLabel: "Votre demande",
      messagePlaceholder:
        "Décrivez votre commande : produits, quantités, dates souhaitées…",
      rgpd: "J'accepte que mes coordonnées soient utilisées pour être recontacté(e)",
      submit: "Envoyer ma commande",
      optionalHint: "(optionnel)",
      termsTitle: "Livraison & retrait",
      // ⚠️ À CONFIRMER avant mise en ligne : rayon, seuil de franco, montant des
      // frais et délai. Les valeurs ci-dessous sont des propositions.
      terms: [
        "Retrait à la ferme ou sur nos marchés : sans frais ni minimum de commande.",
        "Livraison à domicile dans un rayon de 30 km autour de Bésignan (Drôme et Hautes-Alpes).",
        "Frais de livraison : 5 €, offerts à partir de 40 € de commande.",
        "Comptez 3 à 5 jours entre votre commande et la remise de votre panier.",
      ],
      formErrors: {
        name: "Merci d'indiquer un nom (80 caractères maximum).",
        phone:
          "Saisissez un numéro valide (chiffres, espaces et + uniquement).",
        email:
          "Saisissez une adresse email valide, par exemple marie@exemple.fr.",
        delivery: "Choisissez un mode de récupération.",
        message: "Décrivez votre demande pour qu'on puisse y répondre.",
        consent: "Cochez cette case pour que l'on puisse vous recontacter.",
        invalid: "Veuillez corriger les champs indiqués avant d'envoyer.",
      },
      formStatus: {
        sending: "Envoi en cours…",
        successTitle: "Merci, votre demande est partie !",
        successBody:
          "On revient vers vous très vite. À bientôt à la ferme ou sur les marchés.",
        errorTitle: "L'envoi a échoué",
        errorBody:
          "Vérifiez votre connexion et réessayez, ou écrivez-nous directement à gaecduvieuxchateau@gmail.com.",
        retry: "Réessayer",
      },
    },
    footer: {
      signoff: "À bientôt à la ferme ou sur les marchés",
      rights: "Tous droits réservés.",
    },
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
      title:
        "Les Fruits de Bésignan | Fruits, jams and aromatics from Baronnies Provençales",
      description:
        "Growers of fruits (cherries, apricots, pears, quinces), jams, syrups, juices, almonds and aromatic herbs. GAEC du vieux château in Bésignan, Drôme, France. Direct sale at the farm, at markets and delivery.",
      ogLocale: "en_US",
      htmlLang: "en",
      canonicalPath: "/en/",
    },
    hero: {
      subtitle:
        "Discover our sun-ripened fruits and aromatic plants from our orchards nestled in the heart of the Baronnies Provençales Natural Park",
      ctaProducts: "Discover our products",
      ctaOrder: "Order now",
    },
    products: {
      title: "Our Exceptional Products",
      orderCta: "Order",
    },
    seasonOffer: { title: "Our Seasonal Fruits" },
    benefits: { title: "Why Choose Our Products?" },
    farm: {
      title: "GAEC du vieux château",
      since: "1815",
      sinceLabel: "in the family since",
      paragraphs: [
        "The farm has been in the family since 1815. Today Alain, the father, and Aurélien, the son, work it side by side — the same land, the same passion.",
        "For several years now we have been adapting the farm to a changing climate and the uncertainty it brings. Our answer comes down to one word: diversify. Some twenty species and varieties now grow on our plots, from table fruit to aromatic plants, so that the farm never depends on a single harvest.",
        "That same care led us to the HVE certification across the whole farm, and to organic certification on our aromatic herbs. Growing at the heart of the Baronnies Provençales Regional Nature Park means preserving its landscape — and its history too: we grow heritage varieties, emblematic of Provence. This is how we mean to last here.",
        "Wondering where the “vieux château” in our name comes from? Our farm takes in the former lands of the Marquis of Bésignan, right beside the old castle itself.",
      ],
    },
    salesPoints: { title: "Where to Find Us" },
    contact: {
      sectionTitle: "Order Now",
      contactTitle: "Contact us",
      address: "Bésignan, 26110, Drôme, France",
      instagramAriaLabel: "Instagram — opens in a new tab",
      phoneAriaLabel: "Call us at",
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
      messageLabel: "Your request",
      messagePlaceholder:
        "Describe your order: products, quantities, preferred dates…",
      rgpd: "I agree that my contact details may be used to get back to me",
      submit: "Send my order",
      optionalHint: "(optional)",
      termsTitle: "Delivery & pick-up",
      terms: [
        "Pick-up at the farm or at our markets: no fee, no minimum order.",
        "Home delivery within 30 km of Bésignan (Drôme and Hautes-Alpes).",
        "Delivery fee: €5, free on orders over €40.",
        "Allow 3 to 5 days between your order and collection.",
      ],
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
        successBody:
          "We'll get back to you very soon. See you at the farm or at the markets.",
        errorTitle: "Sending failed",
        errorBody:
          "Please check your connection and try again, or email us directly at gaecduvieuxchateau@gmail.com.",
        retry: "Try again",
      },
    },
    footer: {
      signoff: "See you at the farm or at the markets",
      rights: "All rights reserved.",
    },
  },
};

export function t(lang: Lang): Translations {
  return locales[lang];
}
