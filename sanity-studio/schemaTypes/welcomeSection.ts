
import type { Rule } from 'sanity'

export default {
  name: 'welcomeSection',
  title: 'Welcome Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
    },
    {
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
    },
    {
      name: 'quoteAuthorTitle',
      title: 'Quote Author Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
