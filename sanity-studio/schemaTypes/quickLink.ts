
import type { Rule } from 'sanity'

export default {
  name: 'quickLink',
  title: 'Quick Link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Link URL',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Enter a Lucide icon name (e.g., "Church", "Calendar", "Heart")',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'color',
      title: 'Gradient Color',
      type: 'string',
      description: 'CSS gradient class (e.g., "from-church-burgundy/90 to-church-burgundy/70")',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers will display first',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
