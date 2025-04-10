import type { Rule } from 'sanity'


export default {
    name: 'liturgicalSeason',
    title: 'Liturgical Season',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Season Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'start',
        title: 'Start Date',
        type: 'date',
        description: 'Approximate start date for the current liturgical year',
      },
      {
        name: 'end',
        title: 'End Date',
        type: 'date',
        description: 'Approximate end date for the current liturgical year',
      },
      {
        name: 'color',
        title: 'Liturgical Color',
        type: 'string',
        options: {
          list: [
            {title: 'Green', value: 'green'},
            {title: 'Purple', value: 'purple'},
            {title: 'Rose', value: 'rose'},
            {title: 'White', value: 'white'},
            {title: 'Red', value: 'red'},
            {title: 'Gold', value: 'gold'},
          ],
        },
      },
      {
        name: 'image',
        title: 'Season Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Brief Description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'significance',
        title: 'Spiritual Significance',
        type: 'text',
        rows: 4,
      },
      {
        name: 'readings',
        title: 'Notable Readings',
        type: 'text',
        rows: 3,
      },
      {
        name: 'traditions',
        title: 'Traditions & Customs',
        type: 'text',
        rows: 3,
      },
      {
        name: 'content',
        title: 'Full Description',
        type: 'array',
        of: [{type: 'block'}, {type: 'image'}],
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'color',
        media: 'image',
      },
    },
  }
  