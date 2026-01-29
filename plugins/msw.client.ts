import { defineNuxtPlugin } from "#imports"

export default defineNuxtPlugin(async () => {
  // if (process.env.NODE_ENV === "development") {
  //   const { worker } = await import("../msw/browser")
  //   await worker.start({ onUnhandledRequest: "bypass" })
  // }
  const { worker } = await import("../msw/browser")
  await worker.start({ onUnhandledRequest: "bypass" })
})
