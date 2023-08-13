export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  
  mode: 'spa',
  
  head: {
    title: 'nuxtmovieapp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/defaults.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAQ62eMm7g8GbZoHDCxfrVl-9Ho4NKFlbA",
          authDomain: "filmesia-ae56e.firebaseapp.com",
          projectId: "filmesia-ae56e",
          storageBucket: "filmesia-ae56e.appspot.com",
          messagingSenderId: "950077564302",
          appId: "1:950077564302:web:745f87d8628eb28121f0df",
          measurementId: "G-R2NZHY8W5H"
        },
        services: {
          auth: {
            onAuthStateMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateAction: 'onAuthStateChangedAction'
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
