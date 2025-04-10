import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'Musha WeBetania Parish',

  projectId: 'vu33amfn', 
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Management
            S.listItem()
              .title('Site Content')
              .child(
                S.list()
                  .title('Site Content')
                  .items([
                    S.listItem().title('Hero Slides').child(S.documentTypeList('heroSlide')),
                    S.listItem().title('Church Statistics').child(S.documentTypeList('churchStat')),
                  ])
              ),

            // Events & Schedule
            S.listItem()
              .title('Events & Schedule')
              .child(
                S.list()
                  .title('Events & Schedule')
                  .items([
                    S.listItem().title('Parish Events').child(S.documentTypeList('event')),
                    S.listItem().title('Youth Events').child(S.documentTypeList('youthEvent')),
                    S.listItem().title('Mass Recordings').child(S.documentTypeList('mass')),
                  ])
              ),
            
            // Blog & Media
            S.listItem()
              .title('Blog & Media')
              .child(
                S.list()
                  .title('Blog & Media')
                  .items([
                    S.listItem().title('Blog Posts').child(S.documentTypeList('post')),
                    S.listItem().title('Authors').child(S.documentTypeList('author')),
                    S.listItem().title('Photo Galleries').child(S.documentTypeList('photoGallery')),
                    S.listItem().title('Homilies').child(S.documentTypeList('homily')),
                    S.listItem().title('Bulletins').child(S.documentTypeList('bulletin')),
                  ])
              ),
            
            // Faith Resources
            S.listItem()
              .title('Faith Resources')
              .child(
                S.list()
                  .title('Faith Resources')
                  .items([
                    S.listItem().title('Prayers & Novenas').child(S.documentTypeList('prayer')),
                    S.listItem().title('Daily Readings').child(S.documentTypeList('dailyReading')),
                    S.listItem().title('Church Documents').child(S.documentTypeList('document')),
                  ])
              ),
            
            // Liturgical Calendar
            S.listItem()
              .title('Liturgical Calendar')
              .child(
                S.list()
                  .title('Liturgical Calendar')
                  .items([
                    S.listItem().title('Liturgical Seasons').child(S.documentTypeList('liturgicalSeason')),
                    S.listItem().title('Feast Days').child(S.documentTypeList('feastDay')),
                    S.listItem().title('Saints').child(S.documentTypeList('saint')),
                  ])
              ),
            
            // Parish Organization
            S.listItem()
              .title('Parish Organization')
              .child(
                S.list()
                  .title('Parish Organization')
                  .items([
                    S.listItem().title('Parish Team').child(S.documentTypeList('parishTeam')),
                    S.listItem().title('Ministries').child(S.documentTypeList('ministry')),
                  ])
              ),
            
            // Other Types
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'heroSlide', 
                  'churchStat', 
                  'event', 
                  'youthEvent', 
                  'mass',
                  'post', 
                  'author', 
                  'photoGallery', 
                  'homily', 
                  'bulletin',
                  'prayer', 
                  'dailyReading', 
                  'document',
                  'liturgicalSeason', 
                  'feastDay', 
                  'saint',
                  'parishTeam', 
                  'ministry',
                ].includes(listItem.getId() || '')
            ),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
