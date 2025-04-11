
import type { Rule } from 'sanity'

export default {
  name: 'coreFaith',
  title: 'Core Faith Item',
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
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Enter a Lucide icon name (e.g., "Book", "Heart", "Cross")',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers will display first',
    },
    {
      name: 'content',
      title: 'Detailed Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
