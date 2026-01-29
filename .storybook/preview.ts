import type { Preview } from "@storybook-vue/nuxt"
import { initialize, mswLoader } from "msw-storybook-addon"
import { handlers } from "../msw/handlers"

initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url: "/mockServiceWorker.js"
  }
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    msw: {
      handlers
    }
  },
  loaders: [mswLoader]
}

export default preview
