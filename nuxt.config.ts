import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-27",
  devtools: { enabled: true },
  plugins: ["./plugins/msw.client.ts", "./plugins/tanstack-query.ts"],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "https://api.example.com/graphql"
    }
  },

  srcDir: "src",
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@graphql-typed-document-node/core"]
    }
  },

  dir: {
    pages: "./app/routes",
    layouts: "./app/layouts"
  },

  css: ["./src/app/styles.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/hints",
    "nuxt-typed-router"
  ],

  tailwindcss: {
    cssPath: "./src/app/styles.css"
  },

  shadcn: {
    prefix: "",
    componentDir: "./src/shared/ui"
  },

  fonts: {
    families: [
      {
        name: "Wix Madefor Text",
        provider: "google"
      }
    ]
  }
})
