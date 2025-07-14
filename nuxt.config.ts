// import path from "path"
import fs from "fs"

// go through the public directory and find all image files
// that we want to optimize with ipx, this to allow for dynamic image fetching that are still optimized despite the static build
// With a full server that would not be necessary
const files = await fs.promises.readdir("./src/public/", { recursive: true })
const optImgPaths = files
  .filter(
    (file) =>
      file.endsWith(".png") ||
      file.endsWith(".jpg") ||
      file.endsWith(".jpeg") ||
      file.endsWith(".webp")
  )
  .map((path) => [`/_ipx/f_webp/${path}`, `/_ipx/f_webp&q_75/${path}`])
  .flat()

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      // all links for favicons&co.
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
  nitro: {
    prerender: {
      crawlLinks: true,
      // get all the images to optimize with ipx
      routes: ["/", ...optImgPaths],
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
    // Gli ID devono essere mantenuti per l'animazione dei dot nella benefits roadmap
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
    // to generate the sitemap from the vercel backend
    sources: ["/api/__sitemap__/vercel"],
  },
  site: {
    url: "tasm.it",
    name: "Inner Bloom",
    description:
      "Inner Bloom is a Yoga Center in City, Country, offering classes, workshops, and teacher training.",
  },
  icon: {
    collections: ["material-symbols"],
    // using something else seems to cause issues with icons not loading in prod
    provider: "iconify",
    serverBundle: false,
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
  sourcemap: {
    server: true,
    client: true,
  },
})
