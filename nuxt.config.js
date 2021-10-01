import colors from 'vuetify/es5/util/colors';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - todo-app',
    title: 'todo-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/amplify', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/', pathPrefix: false },
    { path: '~/fragments/', pathPrefix: false },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-vite',
  ],
  vite: {
    build: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.lightBlue,
          info: colors.lightBlue,
          red: colors.red,
          green: '#6FCF97',
          orange: colors.amber.darken3,
          grey: colors.grey.lighten1,
          black: '#0A0A0A',
          secondary: '#6d6d6d',
        },
      },
    },
  },

  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    AWS_AMPLIFY_AUTH_REGION: process.env.AWS_AMPLIFY_AUTH_REGION,
    AWS_AMPLIFY_AUTH_USER_POOL_ID: process.env.AWS_AMPLIFY_AUTH_USER_POOL_ID,
    AWS_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID:
      process.env.AWS_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
    AWS_AMPLIFY_AUTH_ID_POOL_ID: process.env.AWS_AMPLIFY_AUTH_ID_POOL_ID,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
