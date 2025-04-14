
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'youthMinistryPage',
  title: 'Youth Ministry Page',
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
      name: 'bibleVerse',
      title: 'Bible Verse',
      type: 'object',
      fields: [
        { name: 'text', title: 'Verse Text', type: 'text' },
        { name: 'reference', title: 'Verse Reference', type: 'string' },
      ],
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'youthGroups',
      title: 'Youth Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID', type: 'string' },
            { name: 'name', title: 'Group Name', type: 'string' },
            { name: 'ageRange', title: 'Age Range', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'color', title: 'Color Gradient', type: 'string' },
            { name: 'image', title: 'Group Image', type: 'image', options: { hotspot: true } },
            { name: 'verse', title: 'Bible Verse', type: 'text' },
            { name: 'link', title: 'Group Link', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'parentalInvolvement',
      title: 'Parental Involvement',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'content', title: 'Content', type: 'text' },
        { 
          name: 'roles', 
          title: 'Involvement Roles', 
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', title: 'Icon', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
              ],
            },
          ],
        },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'buttonLink', title: 'Button Link', type: 'string' },
      ],
    }),
    defineField({
      name: 'contactInformation',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'content', title: 'Content', type: 'text' },
        { name: 'coordinator', title: 'Coordinator Name', type: 'string' },
        { name: 'role', title: 'Coordinator Role', type: 'string' },
        { name: 'email', title: 'Coordinator Email', type: 'string' },
        { name: 'phone', title: 'Coordinator Phone', type: 'string' },
      ],
    }),
  ],
})
