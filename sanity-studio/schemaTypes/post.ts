import type { Rule } from 'sanity'


export default {
    name: 'post',
    title: 'Blog Post',
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
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
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
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'Faith', value: 'faith'},
            {title: 'Parish Life', value: 'parish-life'},
            {title: 'Sacraments', value: 'sacraments'},
            {title: 'Scripture', value: 'scripture'},
            {title: 'Youth', value: 'youth'},
            {title: 'Community', value: 'community'},
            {title: 'Social Justice', value: 'social-justice'},
            {title: 'Catholic Teaching', value: 'catholic-teaching'},
          ],
          layout: 'tags',
        },
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        rows: 3,
        description: 'A short summary that will appear on preview cards',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'H4', value: 'h4'},
              {title: 'Quote', value: 'blockquote'},
            ],
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Underline', value: 'underline'},
                {title: 'Strike', value: 'strike-through'},
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'URL',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL',
                    },
                    {
                      name: 'blank',
                      type: 'boolean',
                      title: 'Open in new tab',
                      initialValue: true,
                    },
                  ],
                },
              ],
            },
          },
          {type: 'image'},
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
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
  }
  