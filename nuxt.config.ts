export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Hunneg • Groningse Honing uit het Westerkwartier",
      htmlAttrs: {
        lang: "nl",
      },
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      meta: [{ name: "author", content: "Wietse de Vries" }],
    },
  },
});
