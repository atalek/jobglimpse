// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
  ],

  hooks: {
    'build:manifest': manifest => {
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
      if (css) {
        for (let i = css.length - 1; i >= 0; i--) {
          if (css[i].startsWith('entry')) css.splice(i, 1)
        }
      }
    },
  },

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  build: {
    transpile: ['vue-toastification'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://upload-widget.cloudinary.com/global/all.js',
          defer: true,
          fetchpriority: 'low',
        },
      ],
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
    '/': { prerender: true },
    '/jobs': { prerender: true },
    '/create': { prerender: true },
  },

  compatibilityDate: '2024-07-22',
})
