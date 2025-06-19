// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      wpApiBaseUrl: process.env.WP_API_BASE_URL,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },
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
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap' }, 
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
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
  modules: ['@nuxtjs/color-mode', "nuxt-svgo"],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light'
},
plugins: [
  '~/plugins/dateFormatter.js'
]
})
