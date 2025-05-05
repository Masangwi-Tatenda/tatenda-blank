
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'liturgicalCalendar',
  title: 'Liturgical Calendar',
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
      name: 'introduction',
      title: 'Introduction Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'currentSeason',
      title: 'Current Liturgical Season',
      type: 'reference',
      to: [{ type: 'liturgicalSeason' }],
    }),
    defineField({
      name: 'upcomingFeasts',
      title: 'Upcoming Feast Days',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'feastDay' }],
        },
      ],
    }),
    defineField({
      name: 'seasons',
      title: 'Liturgical Seasons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Season Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'color', title: 'Liturgical Color', type: 'string' },
            { name: 'startDate', title: 'Typical Start Date', type: 'string' },
            { name: 'endDate', title: 'Typical End Date', type: 'string' },
            { name: 'image', title: 'Season Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
})
