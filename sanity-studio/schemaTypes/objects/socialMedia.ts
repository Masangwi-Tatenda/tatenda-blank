import type { Rule } from 'sanity'


export default {
    name: 'socialMedia',
    title: 'Social Media',
    type: 'object',
    fields: [
      {
        name: 'platform',
        title: 'Platform',
        type: 'string',
        options: {
          list: [
            {title: 'Facebook', value: 'facebook'},
            {title: 'Instagram', value: 'instagram'},
            {title: 'Twitter', value: 'twitter'},
            {title: 'YouTube', value: 'youtube'},
            {title: 'LinkedIn', value: 'linkedin'},
            {title: 'WhatsApp', value: 'whatsapp'},
          ],
        },
       validation: (Rule: Rule) => Rule.required()

      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
       validation: (Rule: Rule) => Rule.required()

      },
    ],
    preview: {
      select: {
        title: 'platform',
        subtitle: 'url',
      },
    },
  }
  