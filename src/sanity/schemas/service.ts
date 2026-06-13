import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service / Program',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', validation: (Rule) => Rule.required() }),
    defineField({ name: 'ageRange', title: 'Age range', type: 'localizedString' }),
    defineField({ name: 'summary', title: 'Summary', type: 'localizedText' }),
    defineField({ name: 'details', title: 'Details', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' })
  ]
});
