import type { Rule } from 'sanity'

export default {
    name: 'churchStat',
    title: 'Church Statistic',
    type: 'document',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'value',
        title: 'Value',
        type: 'number',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string',
        description: 'Icon name from Lucide icons (e.g., "Users", "Heart", "Calendar")',
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        initialValue: 0,
      },
    ],
    preview: {
      select: {
        title: 'label',
        subtitle: 'value',
      },
      prepare(selection: { title?: string; date?: string; media?: any }) {
        const { title, date, media } = selection;
        return {
          title: title || 'Untitled',
          subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
          media,
        };
      },
    },
  }
  