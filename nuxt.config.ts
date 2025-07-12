// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
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
    "@nuxtjs/seo",
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
  svgo: {
    autoImportPath: "~/assets/homepage/",
    defaultImport: "component",

    // Configurazione svgo vera e propria
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              cleanupIds: false,
            },
          },
        },
      ],
    },
  },
  sitemap: {
    sources: ["/api/__sitemap__/vercel"],
  },
  site: {
    url: "tasm.it",
    name: "Inner Bloom",
    description:
      "Inner Bloom is a Yoga Center in City, Country, offering classes, workshops, and teacher training.",
  },
})
