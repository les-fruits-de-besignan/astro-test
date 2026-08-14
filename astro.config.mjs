// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://www.lesfruitsdebesignan.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
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
