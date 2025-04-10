import { SanityDocument } from '@sanity/types';
import type { Rule } from 'sanity'

interface PreviewSelection {
  title: string;
  date: string;
  media: any; // Or a more specific type for media (e.g., `SanityImage` if you're using images)
}

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
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
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
        name: 'startTime',
        title: 'Start Time',
        type: 'string',
        validation: (Rule: Rule) =>
          Rule.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'time').error('Time must be in HH:mm format'),
      },
      {
        name: 'endTime',
        title: 'End Time',
        type: 'string',
        validation: (Rule: Rule) =>
          Rule.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'time').error('Time must be in HH:mm format'),
      },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Liturgical', value: 'liturgical' },
          { title: 'Youth', value: 'youth' },
          { title: 'Community', value: 'community' },
          { title: 'Education', value: 'education' },
          { title: 'Service', value: 'service' },
          { title: 'Sacramental', value: 'sacramental' },
          { title: 'Social', value: 'social' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'recurring',
      title: 'Recurring Pattern',
      type: 'string',
      options: {
        list: [
          { title: 'Not Recurring', value: 'none' },
          { title: 'Daily', value: 'daily' },
          { title: 'Weekly', value: 'weekly' },
          { title: 'Monthly', value: 'monthly' },
          { title: 'Yearly', value: 'yearly' },
        ],
      },
      initialValue: 'none',
    },
    {
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
    },
    {
        name: 'contactEmail',
        title: 'Contact Email',
        type: 'string',
        validation: (Rule: Rule) =>
          Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email').error('Must be a valid email address'),
      },
      
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
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
        hidden: ({ document }: { document: SanityDocument | undefined }) => !document?.registrationRequired,
        validation: (Rule: Rule) =>
          Rule.custom((url: string, context) => {
            const document = context.document as SanityDocument | undefined; // Explicitly cast document as SanityDocument
      
            if (document?.registrationRequired && !url) {
              return 'Registration link is required when registration is required';
            }
      
            return true;
          }),
      },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule: Rule) => Rule.unique().error('Tags must be unique'),
    },
    {
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      of: [{ type: 'file' }],
    },
    {
      name: 'body',
      title: 'Event Details',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
        { type: 'image' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'mainImage',
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
};
