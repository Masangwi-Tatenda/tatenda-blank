import type { Rule } from 'sanity'
import { Rule as ValidationRule } from 'sanity';


export default {
    name: 'photoGallery',
    title: 'Photo Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Album Title',
        type: 'string',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'date',
        title: 'Event Date',
        type: 'date',
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title: 'Liturgies', value: 'liturgies'},
            {title: 'Parish Events', value: 'parish-events'},
            {title: 'Youth Activities', value: 'youth'},
            {title: 'Sacraments', value: 'sacraments'},
            {title: 'Outreach', value: 'outreach'},
            {title: 'Parish Life', value: 'parish-life'},
          ],
        },
      },
      {
        name: 'images',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'caption',
                title: 'Caption',
                type: 'string',
              },
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string',
                description: 'Important for accessibility and SEO',
              },
            ],
          },
        ],
        validation: (Rule: ValidationRule) => Rule.required().min(1),

      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'category',
        media: 'coverImage',
      },
    },
  }
  