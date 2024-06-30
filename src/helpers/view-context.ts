import { inject } from "vue";

export function useViewContext<Model extends object>(): { model: Model } {
    const model = inject<Model>('model')

    // TODO: Take schema argument and run the zod parsing

    if (!model) throw new Error('No model could be injected.')

    return { model }
}