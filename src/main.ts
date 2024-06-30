import { createApp } from "vue";
import SwitchToggle from "@/components/switch-toggle/switch-toggle.vue";
import ButtonBasic from "@/components/button-basic/button-basic.vue";
import HomePage from './pages/home-page/home-page.vue';
import ViewContextProvider from './helpers/view-context-provider.vue';
import { getServerSideRenderedBody } from "@/helpers/ssr-body";

// Create the application with a root template that consists of the SSR generated HTML.
const app = createApp({
  template: getServerSideRenderedBody()
})

// Register the components that we need to "know of" when doing the template compiling.
app.component('home-page', HomePage)
app.component('switch-toggle', SwitchToggle)
app.component('button-basic', ButtonBasic)
app.component('view-context-provider', ViewContextProvider)

app.mount('#app')

