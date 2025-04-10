import type { Rule } from 'sanity'

export default {
    name: 'dailyReading',
    title: 'Daily Reading',
    type: 'document',
    fields: [
      {
        name: 'date',
        title: 'Date',
        type: 'date',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'liturgicalSeason',
        title: 'Liturgical Season',
        type: 'string',
      },
      {
        name: 'liturgicalColor',
        title: 'Liturgical Color',
        type: 'string',
        options: {
          list: [
            {title: 'Green', value: 'Green'},
            {title: 'Purple', value: 'Purple'},
            {title: 'Rose', value: 'Rose'},
            {title: 'White', value: 'White'},
            {title: 'Red', value: 'Red'},
            {title: 'Gold', value: 'Gold'},
          ],
        },
      },
      {
        name: 'readings',
        title: 'Readings',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
               validation: (Rule: Rule) => Rule.required()

              },
              {
                name: 'citation',
                title: 'Citation',
                type: 'string',
               validation: (Rule: Rule) => Rule.required()

              },
              {
                name: 'text',
                title: 'Text',
                type: 'text',
                rows: 10,
               validation: (Rule: Rule) => Rule.required()

              },
            ],
          },
        ],
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1)
      },
      {
        name: 'reflection',
        title: 'Reflection',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'saint',
        title: 'Saint of the Day',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'feast',
            title: 'Is Feast Day',
            type: 'boolean',
            initialValue: false,
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
          },
        ],
      },
    ],
    preview: {
      select: {
        date: 'date',
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
  