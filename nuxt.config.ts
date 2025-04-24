// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  srcDir: "src/",
  css: ["@/assets/styles/index.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "vuetify-nuxt-module",
  ],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin-ext", "latin"],
    },
  },
})
