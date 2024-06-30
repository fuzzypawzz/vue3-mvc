import type { Component } from "vue";
import HomePage from "@/pages/home-page/home-page.vue";
import ViewContextProvider from "@/helpers/view-context-provider.vue";

/**
 * Returns a list of component definitions to be passed to "app.component()".
 * You should only register the components needed for runtime compilation,
 * which in our case means only the components that are used in the Razor views.
 *
 * Note that tree-shaking won't work for these components.
 */
export function getDynamicComponentsForRazorViews(): [string, Component][] {
  return [
    ['home-page', HomePage],
    ['view-context-provider', ViewContextProvider]
  ]
}