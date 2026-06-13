import { defineField, defineType } from 'sanity';

export const person = defineType({
  name: 'person',
  title: 'Team member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Role', type: 'localizedString' }),
    defineField({ name: 'bio', title: 'Bio', type: 'localizedText' }),
    defineField({ name: 'image', title: 'Portrait', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display order', type: 'number' })
  ]
});
