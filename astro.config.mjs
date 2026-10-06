// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ayblelectrical.co.uk',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
