import type { Rule } from 'sanity'


export default {
    name: 'prayer',
    title: 'Prayer',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Prayer Title',
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
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title: 'Traditional', value: 'traditional'},
            {title: 'Marian', value: 'marian'},
            {title: 'Novena', value: 'novena'},
            {title: 'Litany', value: 'litany'},
            {title: 'Chaplet', value: 'chaplet'},
            {title: 'Intercession', value: 'intercession'},
            {title: 'Adoration', value: 'adoration'},
            {title: 'Morning', value: 'morning'},
            {title: 'Evening', value: 'evening'},
            {title: 'Seasonal', value: 'seasonal'},
            {title: 'Other', value: 'other'},
          ],
        },
      },
      {
        name: 'text',
        title: 'Prayer Text',
        type: 'array',
        of: [{type: 'block'}],
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'origin',
        title: 'Origin',
        type: 'string',
        description: 'Origin or author of the prayer',
      },
      {
        name: 'isNovena',
        title: 'Is this a Novena?',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'novenaStructure',
        title: 'Novena Structure',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'day',
                title: 'Day',
                type: 'number',
              },
              {
                name: 'intention',
                title: 'Intention',
                type: 'string',
              },
              {
                name: 'prayers',
                title: 'Prayers',
                type: 'array',
                of: [{type: 'block'}],
              },
            ],
          },
        ],
        hidden: ({document}: {document: {isNovena?: boolean}}) => !document?.isNovena,
      },
      {
        name: 'audioFile',
        title: 'Audio Recording',
        type: 'file',
        options: {
          accept: 'audio/*',
        },
      },
      {
        name: 'image',
        title: 'Associated Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'category',
        media: 'image',
      },
    },
  }
  