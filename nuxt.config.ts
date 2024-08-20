// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  colorMode: {
    preference: 'dark'
  },
  image: {
    cloudinary: {
        baseURL: 'https://res.cloudinary.com/cyberducky44/image/upload/v1724071663/'
    }
  }
})