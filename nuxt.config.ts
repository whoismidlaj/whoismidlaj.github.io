// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // script: [
      //   {
      //     src: 'https://cloud.umami.is/script.js',
      //     defer: true,
      //     'data-website-id': 'e2759eea-c1c1-417c-a99e-7deaf62f4b4c'
      //   }
      // ],
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
    preference: 'dark',
    fallback: 'light'
  },
  plugins: [
    '~/plugins/dateFormatter.js'
  ]
})
