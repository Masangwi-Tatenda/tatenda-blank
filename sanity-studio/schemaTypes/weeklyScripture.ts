
import type { Rule } from 'sanity'

export default {
  name: 'weeklyScripture',
  title: 'Weekly Scripture',
  type: 'document',
  fields: [
    {
      name: 'verse',
      title: 'Bible Verse Reference',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'text',
      title: 'Scripture Text',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'reflection',
      title: 'Reflection',
      type: 'text',
    },
    {
      name: 'week',
      title: 'Week (Date)',
      type: 'date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'active',
      title: 'Currently Active',
      type: 'boolean',
      initialValue: false,
      description: 'Only one scripture should be active at a time'
    },
  ],
  preview: {
    select: {
      title: 'verse',
      subtitle: 'week',
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection;
      return {
        title: title || 'No verse',
        subtitle: subtitle ? `For week of ${new Date(subtitle).toLocaleDateString()}` : 'No date',
      };
    },
  },
}
