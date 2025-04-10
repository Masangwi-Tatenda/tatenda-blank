import type { Rule } from 'sanity'

export default {
    name: 'author',
    title: 'Author',
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
      },
      {
        name: 'image',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
          },
        ],
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
        rows: 4,
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'role',
        media: 'image',
      },
    },
  }
  