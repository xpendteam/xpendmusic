import axios from 'axios'
export default {
  generate: {
    routes() {
      return axios.get('https://cdn.xpendmusic.com/api/list_index/').then(res => {
        return res.data.map(key => {
          return key.id
        })
      })
    }
  },
  // loading: {
  //   color: '#943fff',
  //   height: '5px'
  // },
  
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Xpend Music',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Xpend Music' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://blog.xpendmusic.com/' }
    ]
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '@/plugins/element-ui',
    '~/plugins/lazyload'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['es']
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
  sitemap: {
    hostname: 'https://xpendmusic.com',
  },
  googleAnalytics: {
    id: 'UA-167348549-1'
  },
  pwa: {
    manifest: {
      short_name: "Xpend Music",
      name: 'Xpend Music',
      background_color: '#18191c',
      lang: 'es',
      description: "Sitio web de Xpend Music"
    },
    meta: {
      theme_color: '#18191c',
      lang: 'es'
    },
  },
  oneSignal: {
    init: {
      appId: '986baf19-dd01-4ee2-bebd-f30b24e2b8f4',
      allowLocalhostAsSecureOrigin: true
    }
  },
  content: {
    nestedProperties: ['author.name']
  }
}
