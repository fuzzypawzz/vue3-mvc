import { inject } from "vue";

export function useViewContext<Model extends object>(): { model: Model } {
  const model = inject<Model>('model')

  // TODO: Take schema argument and run the zod parsing

  if (!model) {
    const message = 'No model to inject. Did you wrap your page component in a view-context-provider?'

    throw new Error(message)
  }

  return { model }
}