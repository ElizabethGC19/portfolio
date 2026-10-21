// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por tu dominio real (lo necesita el sitemap)
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});