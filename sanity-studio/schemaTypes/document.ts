import type { Rule } from 'sanity'

export default {
    name: 'churchDocument',
    title: 'Church Document',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
       validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'file',
        title: 'File',
        type: 'file',
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
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title: 'Parish Documents', value: 'parish'},
            {title: 'Papal Encyclicals', value: 'papal'},
            {title: 'Vatican Documents', value: 'vatican'},
            {title: 'Catechetical Materials', value: 'catechetical'},
            {title: 'Liturgical Documents', value: 'liturgical'},
            {title: 'Diocesan Documents', value: 'diocesan'},
            {title: 'Other', value: 'other'},
          ],
        },
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'type',
        title: 'Document Type',
        type: 'string',
        options: {
          list: [
            {title: 'PDF', value: 'pdf'},
            {title: 'Word Document', value: 'word'},
            {title: 'Presentation', value: 'presentation'},
            {title: 'Spreadsheet', value: 'spreadsheet'},
            {title: 'Image', value: 'image'},
            {title: 'Other', value: 'other'},
          ],
        },
      },
      {
        name: 'year',
        title: 'Year',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'documentFile',
        title: 'Document File',
        type: 'file',
      },
      {
        name: 'downloadUrl',
        title: 'External Download URL',
        type: 'url',
        description: 'Optional. Use if document is hosted externally',
      },
      {
        name: 'summary',
        title: 'Document Summary',
        type: 'array',
        of: [{type: 'block'}],
        description: 'Detailed summary of the document content',
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'category',
      },
    },
  };
  