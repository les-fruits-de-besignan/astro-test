---
name: Les fruits de Bésignan
description: Site vitrine d'une ferme fruitière des Baronnies Provençales — vert verger, chaleur du soleil, sincérité artisanale
colors:
  verger: "#007C76"
  verger-profond: "#0a5955"
  verger-voile: "#e6f7f6"
  verger-brume: "#f2fbfa"
  ocre-soleil: "#A85D0E"
  blanc: "#ffffff"
  encre: "#111827"
  ardoise: "#4b5563"
  brouillard: "#e5e7eb"
typography:
  display:
    fontFamily: "Dancing Script, cursive"
    fontSize: "clamp(2.5rem, 6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Noto Sans, Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Noto Sans, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Noto Sans, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Noto Sans, Arial, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "3rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.verger}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.verger-profond}"
    textColor: "{colors.blanc}"
  button-secondary:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.verger}"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  button-accent:
    backgroundColor: "{colors.ocre-soleil}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  card:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.encre}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  input:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.encre}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
---

# Design System: Les fruits de Bésignan

## 1. Overview

**Creative North Star: "Le Verger en été"**

Tout part d'un verger des Baronnies Provençales en plein été : le vert profond du feuillage, la lumière franche, les fruits gorgés de soleil. Le système traduit cette scène en interface — un **vert verger** (`#007C76`) comme couleur d'identité non négociable, réchauffé par une touche d'**ocre soleil** (`#A85D0E`) là où l'on veut donner faim ou inviter à l'action. La photographie des fruits et du paysage porte l'appétit ; la couleur et la typographie l'encadrent sans jamais voler la vedette au produit.

La densité est aérée et la voix est celle d'un producteur qui parle franchement : *artisanal, sincère, généreux*. « Net & soigné » plutôt que tape-à-l'œil — l'artisanat au sens « bien fait ». La typographie joue un seul contraste fort : un **Dancing Script** manuscrit pour la signature et les titres héros, un **Noto Sans** sobre et lisible pour tout le reste.

Ce système **rejette** explicitement deux registres nommés dans PRODUCT.md : l'esthétique **supermarché / grande distribution** (froid, promo agressive, industriel) et le **surchargé / kitsch** (couleurs criardes, clipart, folklore provençal décoratif, animations partout). La générosité passe par la clarté et la lumière, pas par l'accumulation.

**Key Characteristics:**
- Vert verger dominant, ocre soleil en accent chaleureux — jamais l'inverse.
- La photographie est le héros ; la couleur l'encadre.
- Un seul contraste typographique fort : script manuscrit + sans lisible.
- Net & soigné : arrondis maîtrisés, ombres douces teintées vert, zéro surcharge.
- Lisible par tous (cible WCAG AA).

## 2. Colors

Une palette ancrée sur un vert profond de feuillage, réchauffée par un ocre de soleil, posée sur du blanc lumineux et une encre sombre neutre.

### Primary
- **Vert verger** (`#007C76`) : la couleur d'identité. Logo, titres de section, liens, bouton primaire, ombres teintées. Posée en texte sur blanc, elle atteint 5.07:1 — conforme AA. C'est l'ADN visuel ; elle ne se remplace pas.
- **Vert profond** (`#0a5955`) : la version foncée pour les survols et pour tout texte vert de petite taille exigeant une marge de contraste confortable (8.16:1 sur blanc).
- **Voile de verger** (`#e6f7f6`) et **Brume de verger** (`#f2fbfa`) : teintes vert très pâles pour les fonds de section et accents discrets, en remplacement des dégradés teal omniprésents.

### Secondary
- **Ocre soleil** (`#A85D0E`) : l'accent chaud, à dose homéopathique. Réchauffe les moments froids du parcours — CTA secondaire « gourmand », section des prochaines dates, pied de page, bande de clôture. Texte blanc dessus = 4.96:1, et en texte sur blanc = 4.96:1 : utilisable dans les deux sens en AA.

### Neutral
- **Encre** (`#111827`) : texte principal sur fond clair.
- **Ardoise** (`#4b5563`) : texte secondaire, méta, prix (7.56:1 sur blanc).
- **Blanc** (`#ffffff`) : fond primaire, surfaces de cartes, texte sur le vert et l'ocre.
- **Brouillard** (`#e5e7eb`) : bordures et filets de séparation.

**The Vert-d'abord Rule.** Le vert verger reste la couleur dominante de toute surface. L'ocre soleil est un accent : il n'occupe jamais plus que les CTA, une section ponctuelle et le pied de page. Si l'ocre commence à porter une surface entière, on a basculé hors-marque.

**The Salmon-banni Rule.** L'ancien corail/saumon `#ff8389` est **retiré** : sur le vert il tombe à 2.14:1 (échec AA). Toute date ou étiquette qui l'utilisait passe en blanc 700 ou en ocre soleil.

## 3. Typography

**Display Font:** Dancing Script (cursive)
**Body Font:** Noto Sans (Arial, sans-serif en repli)

**Character:** Un seul contraste, fort et assumé : une écriture manuscrite chaleureuse pour la signature de la marque et les titres héros, face à un sans-serif humaniste neutre et très lisible pour tout le contenu. Le script porte la sincérité artisanale ; le Noto Sans garantit que tout reste lisible, y compris pour un public âgé.

### Hierarchy
- **Display** (Dancing Script, 700, `clamp(2.5rem, 6vw, 3.5rem)`, 1.1) : logo et titre héros uniquement. Réservé à la signature de marque.
- **Headline** (Noto Sans, 600, `2.5rem`, 1.2, `-0.01em`) : titres de section (`h2`), en vert verger, centrés.
- **Title** (Noto Sans, 600, `1.5rem`, 1.2) : titres de carte (`h3`), noms de produits.
- **Body** (Noto Sans, 400, `1.125rem`, 1.6) : texte courant. Limiter les blocs de prose à 65–75 caractères par ligne.
- **Label** (Noto Sans, 400, `0.9rem`) : méta, prix, mentions secondaires, en ardoise.

**The Un-seul-script Rule.** Dancing Script ne sert qu'au logo et aux titres héros. Jamais en corps de texte, jamais en bouton, jamais en bloc long — il devient illisible et perd sa valeur de signature.

**The Pas-d'eyebrow Rule.** Pas de petites étiquettes en majuscules tracées au-dessus de chaque titre de section. Si un intertitre est nécessaire, il s'écrit en casse normale (l'actuel `.category-title` en majuscules tracé est à revoir).

## 4. Elevation

Système d'élévation **doux et ambiant**. Les surfaces ne sont pas plates : cartes et boutons portent une ombre diffuse **teintée de vert** (et non un gris neutre), et s'élèvent légèrement au survol. L'ombre verte est le détail signature — elle relie chaque élément flottant au vert d'identité plutôt que de poser une ombre grise générique.

### Shadow Vocabulary
- **Ambiante légère** (`box-shadow: 0 4px 20px rgba(0,124,118,0.07)`) : repos des cartes produit, prix, témoignages.
- **Ambiante moyenne** (`box-shadow: 0 4px 15px rgba(0,124,118,0.1)`) : boutons primaires au repos.
- **Élevée** (`box-shadow: 0 8px 30px rgba(0,124,118,0.18)`) : état survolé des cartes et boutons, combiné à un `translateY`.

**The Soulèvement-cohérent Rule.** Un seul incrément de soulèvement au survol : `translateY(-4px)`. Les valeurs actuelles vont de -2px à -8px selon la section — à uniformiser. Toute carte interactive monte de la même hauteur.

## 5. Components

### Buttons
- **Shape:** coins arrondis maîtrisés (`8px`, token `rounded.md`). Net, pas de pilule.
- **Primary:** fond vert verger (`#007C76`), texte blanc, padding `1rem 2rem`. La forme par défaut de l'action principale.
- **Accent (gourmand):** fond ocre soleil (`#A85D0E`), texte blanc — pour le CTA chaleureux ponctuel (commander, venir au marché). À utiliser avec parcimonie.
- **Secondary:** fond blanc, bordure 2px vert, texte vert. Pour l'action alternative.
- **Hover / Focus:** survol → vert profond (`#0a5955`) + `translateY(-4px)` + ombre élevée. Focus → contour `:focus-visible` 3px (blanc à l'intérieur des boutons pleins, vert ailleurs), `outline-offset` 3px.

### Cards / Containers
- **Corner Style:** généreusement arrondi (`16px`, token `rounded.xl`).
- **Background:** blanc sur fond de section clair.
- **Shadow Strategy:** ambiante légère au repos, élevée au survol (voir Elevation).
- **Border:** filet `1.5px` brouillard (`#e5e7eb`), virant au vert verger au survol.
- **Internal Padding:** `2rem`. Pas de cartes imbriquées.

### Inputs / Fields
- **Style:** fond blanc, bordure `1.5px` brouillard, arrondi `8px`, padding `0.75rem 1rem`. `<label>` visible obligatoire au-dessus de chaque champ.
- **Focus:** bordure vert verger + halo `box-shadow: 0 0 0 3px rgba(0,124,118,0.1)`.
- **Error / Disabled:** message d'erreur inline en texte sombre près du champ (à implémenter — actuellement absent ; voir Do's).

### Navigation
- **Style:** barre fixe, fond blanc translucide (`rgba(255,255,255,0.95)`) avec léger `backdrop-filter: blur(10px)`, filet bas discret. Logo en vert verger.
- **States:** liens en survol → vert profond + soulignement ; `:focus-visible` contour vert. CTA « Commander » en bouton vert.
- **Mobile:** la barre passe en colonne centrée sous 768px. Cible : un vrai déclencheur de menu plutôt qu'un empilement de 5 items.

### Sélecteur de langue (signature)
Menu déroulant accessible (`role="listbox"`, `aria-expanded`, fermeture Escape + clic extérieur), drapeaux + libellés, coche vert sur la langue active. Carte flottante blanche arrondie `12px` avec ombre `0 8px 24px rgba(0,0,0,0.12)`.

## 6. Do's and Don'ts

### Do:
- **Do** garder le vert verger (`#007C76`) comme couleur dominante de chaque surface ; il porte l'identité.
- **Do** réchauffer ponctuellement avec l'ocre soleil (`#A85D0E`) — CTA gourmand, prochaines dates, pied de page — sans jamais qu'il devienne la couleur de surface.
- **Do** laisser la photographie des fruits et du paysage porter l'appétit ; la couleur l'encadre.
- **Do** teinter les ombres de vert (`rgba(0,124,118,…)`) pour relier chaque élément à l'identité.
- **Do** réserver Dancing Script au logo et aux titres héros, en Noto Sans lisible partout ailleurs.
- **Do** viser AA : texte courant ≥ 4.5:1, alternative `prefers-reduced-motion` pour toute animation, `<label>` visibles.

### Don't:
- **Don't** ressembler à un **supermarché / grande distribution** : froid, promo agressive, esthétique industrielle. La ferme n'est pas un rayon.
- **Don't** verser dans le **surchargé / kitsch** : couleurs criardes, clipart, folklore provençal décoratif, animations sur chaque section.
- **Don't** réintroduire le saumon `#ff8389` sur le vert (2.14:1, échec AA) — blanc 700 ou ocre à la place.
- **Don't** noyer la page sous des dégradés vert-vers-blanc sur chaque section ; aplatir et laisser respirer.
- **Don't** poser une petite étiquette en majuscules tracée au-dessus de chaque titre de section (eyebrow).
- **Don't** empiler quatre grilles de cartes identiques d'affilée ; varier le rythme des sections.
- **Don't** utiliser des emojis comme iconographie de marque — ça sape le « artisanal / sincère ».
