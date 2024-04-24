/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import firebase from './firebase'
import pinia from '@/stores'
import router from '@/router'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(firebase)
    .use(router)
    .use(pinia)
}
