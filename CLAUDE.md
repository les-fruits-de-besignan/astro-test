# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

This is a single-page marketing website in French for "Les fruits de Bésignan" — a fruit and aromatic plant farm in the Baronnies Provençales Natural Park.

**One page, many sections.** `src/pages/index.astro` renders `src/components/Welcome.astro`, which composes all sections in order: NavBar → Hero → Products → NextDates → SeasonOffer → Benefits → SalesPoints → Contact → Footer. To add or reorder sections, edit `Welcome.astro`.

**Component + CSS pairing.** Each section is an `.astro` file in `src/components/` with a dedicated `.css` file in `src/styles/` that it imports directly. There is no CSS framework — styles are written by hand.

**Shared design tokens.** `src/styles/global.css` defines all CSS custom properties (colors, typography) and reusable utility classes (`.primary-button`, `.secondary-button`, `.section`, `.container`, `.product-card`, etc.). Use these variables and classes before writing new ones.

**Fonts.** Dancing Script (headings, logo) and Noto Sans (body) are loaded from Google Fonts in `global.css`. Local `.ttf` copies live in `src/fonts/` but are not currently referenced — Google Fonts is the active source.

**React integration.** `@astrojs/react` is configured but no React components exist yet. Interactive islands can be added by creating `.tsx` files and using `client:*` directives.

**Layout.** `src/layouts/Layout.astro` is a minimal HTML shell (`lang="fr-FR"`, meta description, title). All visible content lives in components.