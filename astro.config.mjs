// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacez par votre vrai domaine avant de déployer
const SITE_URL = 'https://www.lesfruitsdebésignan.fr';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
