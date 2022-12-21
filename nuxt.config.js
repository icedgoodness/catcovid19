export default {
  // server: {
  //   host: '0' // default: localhost
  // },
  target: 'static',

  head: {
    title: 'cat-covid-19',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href:'https://fonts.googleapis.com'},
      { rel: 'preconnect', href:'https://fonts.gstatic.com', crossorigin:true},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'}
    ]

  },

  css: [
    '@/assets/css/main.css'
  ],

  plugins: [
    '~/plugins/firebase.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment',
    '@nuxt/image' //move to modules if ssr
  ],

  moment: {
    locales: ['id']
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
    'bootstrap-vue/nuxt'
    // '@nuxt/image',
  ],

  bootstrapVue: {
    // bootstrapCSS: false, // Or `css: false`
    // bootstrapVueCSS: false, // Or `bvCSS: false`
    componentPlugins: [
      'FormDatepickerPlugin',
      'ToastPlugin',
      'ModalPlugin',
      'TablePlugin',
      'SpinnerPlugin',
      'TooltipPlugin',
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin']
  },

  firebase:{
    config: {
      apiKey: "AIzaSyDaf-TWuaR9qeTCOAuovO1DWviiQD_VPmI",
      authDomain: "cat-covid-database.firebaseapp.com",
      projectId: "cat-covid-database",
      storageBucket: "cat-covid-database.appspot.com",
      messagingSenderId: "452838136858",
      appId: "1:452838136858:web:1f46afde37cd2a50bbc5a3",
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: true, // default
      }
    }
  },

  axios: {},

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
  },

  image: {
    dir: 'assets/img'
  },
}
