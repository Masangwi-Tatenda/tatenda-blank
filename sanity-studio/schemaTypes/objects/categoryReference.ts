import type { Rule } from 'sanity'

export default {
    name: 'categoryReference',
    title: 'Category Reference',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 2,
      },
    ],
  }
  