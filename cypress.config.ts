import {defineConfig} from 'cypress'

export default defineConfig(
  {
    e2e: {

      'fixturesFolder': false,
      'supportFile': false,
      // 'pluginsFile': false,
      'baseUrl': 'http://localhost:19006', // Expo local URL 


      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    
    },
  })