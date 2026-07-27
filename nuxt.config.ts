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
          defer: true,
          src: 'https://cloud.umami.is/script.js',
          'data-website-id': 'c9a4789b-3308-487c-b50f-2b7ac0832faa'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap', media: 'print', onload: "this.media='all'" },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css', media: 'print', onload: "this.media='all'" },

        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
  },
  experimental: {
    inlineSSRStyles: true
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
