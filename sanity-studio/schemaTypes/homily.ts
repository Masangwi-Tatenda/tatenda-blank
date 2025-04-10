import type { Rule } from 'sanity'

export default {
    name: 'homily',
    title: 'Homily',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
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
        name: 'preacher',
        title: 'Preacher',
        type: 'reference',
        to: [{type: 'parishTeam'}],
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'readings',
        title: 'Scripture Readings',
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
            ],
          },
        ],
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
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
        description: 'YouTube or Vimeo URL',
      },
      {
        name: 'liturgicalSeason',
        title: 'Liturgical Season',
        type: 'string',
      },
      {
        name: 'transcript',
        title: 'Transcript',
        type: 'array',
        of: [{type: 'block'}],
      },
    ],
    preview: {
      select: {
        title: 'title',
        preacher: 'preacher.name',
        date: 'date',
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
  