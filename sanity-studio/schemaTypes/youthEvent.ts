import type { Rule } from 'sanity'


export default {
    name: 'youthEvent',
    title: 'Youth Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 4,
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'startTime',
        title: 'Start Time',
        type: 'string',
      },
      {
        name: 'endTime',
        title: 'End Time',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'ageGroup',
        title: 'Age Group',
        type: 'string',
        options: {
          list: [
            {title: 'Children (7-12)', value: 'children'},
            {title: 'Teenagers (13-17)', value: 'teenagers'},
            {title: 'Young Adults (18-30)', value: 'young-adults'},
            {title: 'All Youth', value: 'all-youth'},
          ],
        },
      },
      {
        name: 'coordinator',
        title: 'Coordinator',
        type: 'reference',
        to: [{type: 'parishTeam'}],
      },
      {
        name: 'contactEmail',
        title: 'Contact Email',
        type: 'string',
      },
      {
        name: 'contactPhone',
        title: 'Contact Phone',
        type: 'string',
      },
      {
        name: 'registrationRequired',
        title: 'Registration Required',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'registrationLink',
        title: 'Registration Link',
        type: 'url',
        hidden: ({document}: { document: { registrationRequired?: boolean } }) => !document?.registrationRequired,
      },
      {
        name: 'featured',
        title: 'Featured Event',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'details',
        title: 'Event Details',
        type: 'array',
        of: [{type: 'block'}, {type: 'image'}],
      },
    ],
    preview: {
      select: {
        title: 'title',
        date: 'date',
        ageGroup: 'ageGroup',
        media: 'mainImage',
      },
      prepare(selection: { title: any; date: any; ageGroup: any; media: any; }) {
        const {title, date, ageGroup, media} = selection;
        return {
          title,
          subtitle: `${date ? new Date(date).toLocaleDateString() : 'No date'} - ${ageGroup || ''}`,
          media,
        };
      },
    },
  }
  