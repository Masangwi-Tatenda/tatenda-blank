
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'massSchedule',
  title: 'Mass Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'weekdayMasses',
      title: 'Weekday Masses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'time', title: 'Time', type: 'string' },
            { name: 'language', title: 'Language', type: 'string' },
            { name: 'notes', title: 'Notes', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'weekendMasses',
      title: 'Weekend Masses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'time', title: 'Time', type: 'string' },
            { name: 'language', title: 'Language', type: 'string' },
            { name: 'notes', title: 'Notes', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'holyDayMasses',
      title: 'Holy Day Masses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Holy Day', type: 'string' },
            { name: 'vigil', title: 'Vigil Mass', type: 'string' },
            { name: 'day', title: 'Day Mass', type: 'string' },
            { name: 'notes', title: 'Notes', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'confessionSchedule',
      title: 'Confession Schedule',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'time', title: 'Time', type: 'string' },
            { name: 'notes', title: 'Notes', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
