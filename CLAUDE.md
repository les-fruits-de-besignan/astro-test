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

**One page, many sections.** `src/pages/index.astro` renders `src/components/Welcome.astro`, which composes all sections in order: NavBar → Hero → SalesPoints → Products → SeasonOffer → Farm → Benefits → Contact → Footer. To add or reorder sections, edit `Welcome.astro`.

**A second, unlisted page.** `src/pages/success.astro` (and `en/success.astro`) is where Netlify lands a visitor whose form post was not intercepted by the inline script. It is `noindex` and excluded from the sitemap in `astro.config.mjs`.

**The navbar stays lean.** It deliberately carries only four links plus the language toggle. Route new calls to action to the Contact section, a content section, or the footer.

**Component + CSS pairing.** Each section is an `.astro` file in `src/components/` with a dedicated `.css` file in `src/styles/` that it imports directly. There is no CSS framework — styles are written by hand.

**Shared design tokens.** `src/styles/global.css` defines all CSS custom properties (colors, typography) and reusable utility classes (`.primary-button`, `.secondary-button`, `.section`, `.container`, `.product-card`, etc.). Use these variables and classes before writing new ones.

**Fonts.** Dancing Script (headings, logo) and Noto Sans (body) are **self-hosted**: `.woff2` files in `public/fonts/`, declared by `@font-face` rules at the top of `global.css`, with the two latin subsets preloaded in `Layout.astro`. Nothing is fetched from Google — that keeps visitor IPs off a third-party CDN and takes a render-blocking request off the critical path. Noto Sans is one variable file per subset covering weights 400–700. The unused `.ttf` copies in `src/fonts/` are leftovers.

**Images.** All photos are on Cloudinary and must be requested through `cloudinary()` in `src/lib/images.ts`, which inserts an `f_auto,q_auto,c_fill,…` transform so the CDN serves WebP cropped to the displayed box. Crop presets mirror the CSS heights — keep them in step. Below-the-fold images carry `loading="lazy"`. The hero is a CSS `background-image` in `Hero.css` with a separate mobile crop; it is the LCP element.

**No UI framework, no client bundle.** Interactivity is plain `<script>` tags inside `.astro` components (the language dropdown in `LangToggle.astro`, the form in `Contact.astro`). React was removed because it shipped ~57 KB gzip for a two-link menu — don't reintroduce a framework for small widgets.

**Layout.** `src/layouts/Layout.astro` is a minimal HTML shell (`lang="fr-FR"`, meta description, title). All visible content lives in components.