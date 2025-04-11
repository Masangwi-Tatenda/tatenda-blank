
import type { Rule } from 'sanity'

export default {
  name: 'bibleStudyResource',
  title: 'Bible Study Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link URL',
      type: 'string',
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          {title: 'Study Guide', value: 'study-guide'},
          {title: 'Reading Plan', value: 'reading-plan'},
          {title: 'Video Series', value: 'video-series'},
          {title: 'Audio Series', value: 'audio-series'},
          {title: 'Book', value: 'book'},
          {title: 'Other', value: 'other'},
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured Resource',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'resourceType',
      media: 'thumbnail',
    },
  },
}
