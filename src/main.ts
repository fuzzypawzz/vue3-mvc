import { createApp, defineAsyncComponent } from "vue"
import { getServerSideRenderedBody } from "@/helpers/ssr-body"
import { getAsyncPageComponentsForRazorViews } from "@/helpers/dynamic-components"
import ViewContextProvider from "@/helpers/view-context-provider.vue"
import PageLoader from "./components/page-loader.vue"
import { usePageLoader } from "@/components/loader"

// Create the application with a root template consisting of the server side generated HTML.
const app = createApp({
  template: getServerSideRenderedBody()
})

const pageLoader = usePageLoader()

pageLoader.addAwaitingModule()

setTimeout(pageLoader.removeAwaitingModule, 1000)

app.component('view-context-provider', ViewContextProvider)

// Register the components that we need in the Razor view files.
getAsyncPageComponentsForRazorViews().forEach(([name, asyncComponentLoader]) => {
  app.component(name, defineAsyncComponent({
    loader: asyncComponentLoader,
    loadingComponent: PageLoader
  }))
})

app.mount('#app')

