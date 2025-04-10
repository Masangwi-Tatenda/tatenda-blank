import type { Rule } from 'sanity'

export default {
    name: 'bulletin',
    title: 'Parish Bulletin',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'file',
        title: 'PDF File',
        type: 'file',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail Image',
        type: 'image',
        options: {
          hotspot: true,
        },
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
  