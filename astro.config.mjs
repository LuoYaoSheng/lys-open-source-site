import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://open.i2kai.com',
  integrations: [sitemap()],
  redirects: {
    '/learn': '/docs/getting-started',
    '/articles': '/docs/guides',
    '/weekly': '/changelog',
  },
});
