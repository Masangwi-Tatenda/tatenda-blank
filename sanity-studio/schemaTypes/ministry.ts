import type { Rule } from 'sanity'


export default {
    name: 'ministry',
    title: 'Ministry',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Ministry Name',
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
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 4,
      },
      {
        name: 'image',
        title: 'Ministry Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title: 'Liturgical', value: 'liturgical'},
            {title: 'Education', value: 'education'},
            {title: 'Service', value: 'service'},
            {title: 'Prayer', value: 'prayer'},
            {title: 'Social', value: 'social'},
            {title: 'Youth', value: 'youth'},
            {title: 'Music', value: 'music'},
            {title: 'Administration', value: 'administration'},
          ],
        },
      },
      {
        name: 'leaders',
        title: 'Ministry Leaders',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'role',
                title: 'Role',
                type: 'string',
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
            ],
            preview: {
              select: {
                title: 'name',
                subtitle: 'role',
              },
            },
          },
        ],
      },
      {
        name: 'meetingTime',
        title: 'Meeting Time',
        type: 'string',
      },
      {
        name: 'meetingLocation',
        title: 'Meeting Location',
        type: 'string',
      },
      {
        name: 'requirements',
        title: 'Requirements to Join',
        type: 'text',
        rows: 3,
      },
      {
        name: 'howtojoin',
        title: 'How to Join',
        type: 'text',
        rows: 3,
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
        subtitle: 'category',
        media: 'image',
      },
    },
  }
  