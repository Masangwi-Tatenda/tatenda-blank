import type { Rule } from 'sanity'

export default {
    name: 'attachment',
    title: 'Attachment',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'file',
        title: 'File',
        type: 'file',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'name',
      },
    },
  }
  