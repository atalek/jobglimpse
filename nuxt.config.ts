// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon',
  ],

  css: ['~/assets/index.css'],

  nitro: {
    compressPublicAssets: true,
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  build: {
    transpile: ['vue-toastification'],
  },

  googleFonts: {
    families: { Roboto: [400, 500, 700, 900] },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [{ src: 'https://upload-widget.cloudinary.com/global/all.js' }],
    },
  },
  runtimeConfig: {
    baseUrl: process.env.BASE_URL,
    public: {
      gtagId: process.env.GTAG_ID,
      cloudinaryName: process.env.CLOUDINARY_NAME,
      cloudinaryFolder: process.env.CLOUDINARY_FOLDER,
      stripePublic: process.env.STRIPE_PUBLIC_KEY,
    },
  },

  image: {
    cloudinary: {
      baseURL: process.env.CLOUDINARY,
    },
  },

  routeRules: {
    '/': { swr: true },
    '/create': { prerender: true },
  },
})
