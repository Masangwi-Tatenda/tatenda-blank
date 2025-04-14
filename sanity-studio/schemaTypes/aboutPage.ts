
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
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
      name: 'historyTitle',
      title: 'History Section Title',
      type: 'string',
    }),
    defineField({
      name: 'historySubtitle',
      title: 'History Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'historyContent',
      title: 'History Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'historyImage',
      title: 'History Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
    }),
    defineField({
      name: 'visionDescription',
      title: 'Vision Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'joinCommunityTitle',
      title: 'Join Community Section Title',
      type: 'string',
    }),
    defineField({
      name: 'joinCommunityText',
      title: 'Join Community Text',
      type: 'text',
    }),
    defineField({
      name: 'joinCommunityButtonText',
      title: 'Join Community Button Text',
      type: 'string',
    }),
    defineField({
      name: 'joinCommunityButtonLink',
      title: 'Join Community Button Link',
      type: 'string',
    }),
  ],
})
