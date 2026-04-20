// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Nebyss Innovation — Turning Chaos into Clarity',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Nebyss Innovation builds domain-specific AI where human judgment stays at the center.' },
        { name: 'theme-color', content: '#0c0c0c' },
        { property: 'og:title', content: 'Nebyss Innovation' },
        { property: 'og:description', content: 'Turning chaos into clarity. Domain-specific AI built for real-world decisions.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nebyss.eu' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ],
    },

    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },
})
