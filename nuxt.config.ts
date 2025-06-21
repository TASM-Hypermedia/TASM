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
    "nuxt-viewport",
    "motion-v/nuxt",
    "nuxt-svgo",
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
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  viewport: {
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768,
    },

    cookie: {
      expires: 365, // 365 days
      name: "viewport",
      path: "/",
      sameSite: "Strict",
      secure: true,
    },

    defaultBreakpoints: {
      desktop: "desktop",
      mobile: "mobile",
      tablet: "tablet",
    },

    fallbackBreakpoint: "desktop",

    feature: "minWidth",
  },
  svgo: { autoImportPath: '~/assets/homepage/' 
    , defaultImport: "component"
  }
})