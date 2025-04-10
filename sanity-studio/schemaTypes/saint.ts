import type { Rule } from 'sanity'


export default {
    name: 'saint',
    title: 'Saint',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
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
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'feastDay',
        title: 'Feast Day',
        type: 'date',
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'lifeYears',
        title: 'Years of Life',
        type: 'string',
        description: 'e.g., 1181-1226',
      },
      {
        name: 'region',
        title: 'Region',
        type: 'string',
        options: {
          list: [
            {title: 'Europe', value: 'Europe'},
            {title: 'Africa', value: 'Africa'},
            {title: 'Asia', value: 'Asia'},
            {title: 'Americas', value: 'Americas'},
            {title: 'Oceania', value: 'Oceania'},
            {title: 'Middle East', value: 'Middle East'},
          ],
        },
      },
      {
        name: 'patronageOf',
        title: 'Patron Of',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags',
        },
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
        name: 'description',
        title: 'Brief Description',
        type: 'text',
        rows: 4,
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'biography',
        title: 'Full Biography',
        type: 'array',
        of: [{type: 'block'}, {type: 'image'}],
      },
      {
        name: 'quote',
        title: 'Notable Quote',
        type: 'text',
        rows: 2,
      },
    ],
    preview: {
      select: {
        title: 'name',
        date: 'feastDay',
        media: 'image',
      },
      prepare(selection: { title?: string; date?: string; media?: any }) {
        const { title, date, media } = selection;
        return {
          title: title || 'Untitled',
          subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
          media,
        };
      },
    },
  }
  