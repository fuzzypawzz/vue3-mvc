import type { AsyncComponentLoader } from "@vue/runtime-core";

/**
 * Returns a list of async component definitions to be passed to "app.component()".
 * You should only register the components needed for runtime compilation,
 * which in our case means only the components that are used in the Razor views.
 */
export function getAsyncPageComponentsForRazorViews(): [string, AsyncComponentLoader][] {
  return [
    ['home-page', () => import('../pages/home-page/home-page.vue')],
  ]
}