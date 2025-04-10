import type { Rule } from 'sanity'


export default {
    name: 'heroSlide',
    title: 'Hero Slide',
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
        type: 'text',
        rows: 2,
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            description: 'Important for SEO and accessibility',
          },
        ],
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        validation: (Rule: { required: () => { (): any; new(): any; integer: { (): { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any } }; new(): any } }; new(): any } } }) => Rule.required().integer().min(0).max(1000),

      },
      {
        name: 'cta',
        title: 'Call to Action',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
          },
          {
            name: 'link',
            title: 'Button Link',
            type: 'string',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subtitle',
        media: 'image',
      },
    },
  }
  