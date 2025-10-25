// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Virall JEJE Slebew.mp4',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        // { name: 'description', content: 'A responsive Nuxt app with proper meta tags.' },
        // { name: 'format-detection', content: 'telephone=no' },
        // { property: 'og:title', content: 'My Responsive Nuxt App' },
        // { property: 'og:description', content: 'A fast, mobile-friendly Nuxt 3 app.' },
        // { property: 'og:type', content: 'website' },
        // { property: 'og:url', content: 'https://my-nuxt-app.com' },
        // { property: 'og:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon']
})