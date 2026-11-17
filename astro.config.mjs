// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://www.lesfruitsdebesignan.com';

export default defineConfig({
  site: SITE_URL,
  // Astro 7 defaults to 'jsx', which drops whitespace across line breaks and glued
  // words together ("Nous appeler au+33…"). `true` keeps the v5 HTML-aware behavior.
  compressHTML: true,
  vite: {
    build: {
      // Astro 7's default target rewrote `max-width: 768px` media queries into the
      // `width <= 768px` range syntax, which iOS < 16.4 ignores — phones on older
      // iOS would get the desktop layout. These targets keep the v5 output.
      cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'],
    },
  },
  integrations: [
    // The order-confirmation pages are dead ends reached only after a form post —
    // they have nothing to rank for and would dilute the sitemap.
    sitemap({
      filter: (page) => !page.includes('/success'),
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
