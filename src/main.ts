import { createApp } from "vue";
import { getServerSideRenderedBody } from "@/helpers/ssr-body";
import { getDynamicComponentsForRazorViews } from "@/helpers/dynamic-components";

// Create the application with a root template that consists of the SSR generated HTML.
const app = createApp({
  template: getServerSideRenderedBody()
})

// Register the components that we need in the Razor view files.
getDynamicComponentsForRazorViews().forEach(([name, component]) => {
  app.component(name, component)
})

app.mount('#app')

