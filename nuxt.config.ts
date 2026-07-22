// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'midlaj | pixels & thoughts',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Web Developer focusing on clean layouts, beautiful design, and simple interactions.' },
        { name: 'author', content: 'Midlaj' }
      ],
      script: [
        {
          src: 'https://analytics.onlyfrens.in/tracker.js',
          async: true,
          'data-ackee-server': 'https://analytics.onlyfrens.in',
          'data-ackee-domain-id': '690ac550-0a9c-4840-90c1-901e689ac267',
          'data-ackee-opts': '{"ignoreLocalhost": true}'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css' },

        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode', "@nuxt/icon", "@nuxt/content"],
  compatibilityDate: '2026-01-30',
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  plugins: [
    '~/plugins/dateFormatter.js'
  ]
})
