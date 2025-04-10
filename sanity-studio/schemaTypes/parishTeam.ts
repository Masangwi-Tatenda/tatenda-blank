import type { Rule } from 'sanity'


export default {
    name: 'parishTeam',
    title: 'Parish Team Member',
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
        name: 'role',
        title: 'Role',
        type: 'string',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title: 'Clergy', value: 'clergy'},
            {title: 'Staff', value: 'staff'},
            {title: 'Parish Council', value: 'council'},
            {title: 'Finance Council', value: 'finance'},
            {title: 'Ministry Leader', value: 'ministry'},
          ],
        },
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'orderRank',
        title: 'Display Order',
        type: 'number',
        description: 'Lower numbers will display first within their category',
      },
      {
        name: 'image',
        title: 'Photo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Biography',
        type: 'text',
        rows: 4,
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'officeHours',
        title: 'Office Hours',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Full Biography',
        type: 'array',
        of: [{type: 'block'}, {type: 'image'}],
      },
    ],
    prepare(selection: { title?: string; date?: string; media?: any }) {
        const { title, date, media } = selection;
        return {
          title: title || 'Untitled',
          subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
          media,
        };
      },
  }
  