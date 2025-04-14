
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sacrament',
  title: 'Sacrament',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'scriptureQuote',
      title: 'Scripture Quote',
      type: 'object',
      fields: [
        { name: 'text', title: 'Quote Text', type: 'text' },
        { name: 'reference', title: 'Reference', type: 'string' },
      ],
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility Information',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'preparation',
      title: 'Preparation Process',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'contactInformation',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'contactPerson', title: 'Contact Person', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'additionalInfo', title: 'Additional Information', type: 'text' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    }),
  ],
})
