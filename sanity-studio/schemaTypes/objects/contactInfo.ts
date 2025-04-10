export default {
    name: 'contactInfo',
    title: 'Contact Information',
    type: 'object',
    fields: [
      {
        name: 'address',
        title: 'Address',
        type: 'text',
        rows: 3,
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'officeHours',
        title: 'Office Hours',
        type: 'text',
        rows: 2,
      },
      {
        name: 'mapCoordinates',
        title: 'Map Coordinates',
        type: 'object',
        fields: [
          {
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
          },
          {
            name: 'longitude',
            title: 'Longitude',
            type: 'number',
          },
        ],
      },
    ],
  }
  