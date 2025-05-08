
import type { Rule } from 'sanity'

export default {
    name: 'feastDay',
    title: 'Feast Day',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Feast Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'title',
        title: 'Display Title',
        type: 'string',
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
        name: 'date',
        title: 'Date',
        type: 'date',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'type',
        title: 'Feast Type',
        type: 'string',
        options: {
          list: [
            {title: 'Solemnity', value: 'solemnity'},
            {title: 'Feast', value: 'feast'},
            {title: 'Memorial', value: 'memorial'},
            {title: 'Optional Memorial', value: 'optional-memorial'},
          ],
        },
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
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 4,
      },
      {
        name: 'readings',
        title: 'Readings',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'citation',
                title: 'Citation',
                type: 'string',
              },
              {
                name: 'text',
                title: 'Text',
                type: 'text',
                rows: 6,
              },
            ],
          },
        ],
      },
      {
        name: 'content',
        title: 'Full Content',
        type: 'array',
        of: [{type: 'block'}, {type: 'image'}],
      },
    ],
    preview: {
      select: {
        title: 'name',
        date: 'date',
        type: 'type',
      },
      prepare(selection: { title?: string; date?: string; type?: string; media?: any }) {
        const { title, date, type, media } = selection;
        return {
          title: title || 'Untitled',
          subtitle: `${type ? type + ' • ' : ''}${date ? new Date(date).toLocaleDateString() : 'No date'}`,
          media,
        };
      },
    },
  }
