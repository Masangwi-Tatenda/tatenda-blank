
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
      name: 'weekdayMasses',
      title: 'Weekday Masses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'time', title: 'Time', type: 'string' },
            { name: 'language', title: 'Language (optional)', type: 'string' },
            { name: 'location', title: 'Location (optional)', type: 'string' },
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
            { name: 'language', title: 'Language (optional)', type: 'string' },
            { name: 'location', title: 'Location (optional)', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'holyDays',
      title: 'Holy Days of Obligation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Holy Day', type: 'string' },
            { name: 'date', title: 'Date', type: 'string' },
            { name: 'time', title: 'Mass Times', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'confessionTimes',
      title: 'Confession Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'time', title: 'Time', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'text',
    }),
  ],
})
