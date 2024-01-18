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
  },

  googleFonts: {
    families: { Roboto: [400, 600, 700, 800] },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [{ src: 'https://upload-widget.cloudinary.com/global/all.js' }],
    },
  },
  runtimeConfig: {
    public: {
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
})
