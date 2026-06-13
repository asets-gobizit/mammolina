import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'SEO title', type: 'string' }),
    defineField({ name: 'description', title: 'Meta description', type: 'text', rows: 3 }),
    defineField({ name: 'ogTitle', title: 'Open Graph title', type: 'string' }),
    defineField({ name: 'ogDescription', title: 'Open Graph description', type: 'text', rows: 3 }),
    defineField({ name: 'ogImage', title: 'Open Graph image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url' })
  ]
});

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized string',
  type: 'object',
  fields: [
    defineField({ name: 'es', title: 'Spanish', type: 'string' }),
    defineField({ name: 'en', title: 'English', type: 'string' })
  ]
});

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized text',
  type: 'object',
  fields: [
    defineField({ name: 'es', title: 'Spanish', type: 'text' }),
    defineField({ name: 'en', title: 'English', type: 'text' })
  ]
});
