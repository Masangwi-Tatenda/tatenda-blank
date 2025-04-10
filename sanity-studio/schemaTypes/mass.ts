

export default {
    name: 'mass',
    title: 'Mass Recording',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'celebrant',
        title: 'Celebrant',
        type: 'reference',
        to: [{type: 'parishTeam'}],
      },
      {
        name: 'type',
        title: 'Mass Type',
        type: 'string',
        options: {
          list: [
            {title: 'Sunday Mass', value: 'sunday'},
            {title: 'Daily Mass', value: 'daily'},
            {title: 'Feast Day', value: 'feast'},
            {title: 'Special Celebration', value: 'special'},
          ],
        },
      },
      {
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
        description: 'YouTube or Vimeo URL',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
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
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        date: 'date',
        media: 'thumbnail',
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
  