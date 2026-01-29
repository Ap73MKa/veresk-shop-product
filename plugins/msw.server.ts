import { defineNuxtPlugin } from "#imports"

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV === "development") {
    const { server } = require("../msw/server")
    server.listen({ onUnhandledRequest: "bypass" })
    nuxtApp.hook("app:unmount", () => server.close())
  }
})
