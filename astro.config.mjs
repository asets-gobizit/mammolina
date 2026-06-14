import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'replace-with-sanity-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.PUBLIC_SANITY_API_VERSION || '2026-06-12';
const token = process.env.SANITY_API_READ_TOKEN;
const site = process.env.PUBLIC_SITE_URL || 'https://mammolinamontessori.com';

export default defineConfig({
  site,
  integrations: [
    sanity({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
      studioBasePath: '/admin',
      logClientRequests: 'dev'
    }),
    react(),
    sitemap()
  ]
});
