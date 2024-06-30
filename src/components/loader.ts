import { computed, ref, watch } from "vue";

export const usePageLoader = (function () {
  const awaitingModules = ref(0)

  const isShown = computed(() => {
    return awaitingModules.value > 0
  })

  function hidePageLoader() {
    const loader: HTMLElement | null = document.querySelector('#loader')
    const app: HTMLElement | null = document.querySelector('#app')

    if (!loader) throw new Error('Could not locate page loader.')
    if (!app) throw new Error('Could not locate app root element.')

    loader.style.display = "none"
    app.style.display = 'block'
  }

  watch(
    isShown,
    (isShown) => {
      if (!isShown) hidePageLoader()
    }
  )

  return function () {
    return {
      addAwaitingModule() {
        awaitingModules.value++
      },

      removeAwaitingModule() {
        if (awaitingModules.value === 0) return

        awaitingModules.value--
      },
    }
  }
})()