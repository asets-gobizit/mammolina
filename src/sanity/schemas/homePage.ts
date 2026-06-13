import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'localizedString' }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'localizedText' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'whyTitle', title: 'Why title', type: 'localizedString' }),
    defineField({ name: 'whyBody', title: 'Why body', type: 'localizedText' }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'localizedString' }]
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' })
  ]
});
