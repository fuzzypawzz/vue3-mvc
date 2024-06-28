// We need to use the template compiler, because we need to compile vue templates at runtime:
// @ts-ignore - This file totally exists and is valid to use, but TypeScript is being bratty.
import { createApp } from 'vue/dist/vue.esm-bundler';
import SomeVueComponent from './some-vue-component.vue'

// Create the application with a root template that consists of the SSR generated HTML.
const app = createApp({
    template: getServerSideRenderedBody()
})

// Register the components that we need to "know of" when doing the template compiling.
app.component('some-vue-component', SomeVueComponent)

app.mount('#app')

function getServerSideRenderedBody() {
    const element = document.querySelector('#ssr-body')

    if (!element) throw new Error('Could not locate server side rendered html.')
    
    const markup = element.innerHTML

    element.remove()

    return markup
}

