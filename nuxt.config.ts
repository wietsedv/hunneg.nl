export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/ui", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Hunneg | Groningse Honing uit het Westerkwartier",
      htmlAttrs: {
        lang: "nl",
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [{ name: "author", content: "Wietse de Vries" }],
    },
  }
});
