import { computed } from 'vue'

import { tryOnScopeDispose } from "@/helpers/try-on-scope-dispose";
import type {
  PresenterConfig,
  PresenterFactoryFunction,
  PresenterHookOutput,
  Props,
  View,
  ViewModelOverride
} from './presenter-factory.types'
import {
  validatePresenterConfig,
  validateViewModelOverride
} from './validators'
import { ERROR } from "@/helpers/presenter-factory/error.constants";

/**
 * @example
 * const useDocumentOverviewPresenter = presenterFactory((props: Props, view: View) => {
 *   const state = reactive({ showSkeleton: false })
 *
 *   return {
 *     viewModel: computed(() => {
 *       return {
 *         isPageSkeletonLoaderShown: state.showSkeleton
 *       }
 *     }),
 *
 *     onCreated() { ... },
 *     onDestroy() { ... }
 *   }
 * })
 *
 * const { presenter, viewModel } = useDocumentOverviewPresenter()
 */
export function presenterFactory<
  TPresenterOptions extends PresenterConfig,
  TProps extends Props = void,
  TView extends View = void
>(presenterFactoryFunction: PresenterFactoryFunction<TProps, TView, TPresenterOptions>) {
  const cachedPresenterInstance = {
    value: undefined as TPresenterOptions | undefined,
    reset() {
      this.value = undefined
    }
  }

  const viewModelOverride = {
    value: undefined as ViewModelOverride<TPresenterOptions> | undefined,
    reset() {
      this.value = undefined
    }
  }

  function createPresenterProxy(
    presenterOptions: TPresenterOptions,
    viewModelOverride: ViewModelOverride<TPresenterOptions>
  ) {
    return new Proxy(presenterOptions, {
      get(target, property: keyof PresenterConfig) {
        if (property === 'viewModel') {
          return computed(() => viewModelOverride(target.viewModel.value))
        }

        return Reflect.get(target, property)
      }
    })
  }

  /**
   * @example
   * const { presenter, viewModel } = useFooPresenter(props, view)
   */
  function usePresenterHook(props: TProps, view: TView): PresenterHookOutput<TPresenterOptions> {
    const config = presenterFactoryFunction(props, view)

    validatePresenterConfig(config)

    if (viewModelOverride.value) {
      validateViewModelOverride(viewModelOverride.value, config.viewModel.value)
    }

    tryOnScopeDispose(() => config.onDestroy?.())

    config.onCreated?.()

    const presenterInstance = viewModelOverride.value
      ? createPresenterProxy(config, viewModelOverride.value)
      : config

    cachedPresenterInstance.value = presenterInstance

    viewModelOverride.reset()

    return {
      presenter: presenterInstance,
      viewModel: presenterInstance.viewModel
    }
  }

  /**
   * @example
   * const wrapper = mount(DocumentOverview)
   * const { viewModel } = useDocumentOverviewPresenter.spy()
   *
   * expect(viewModel.value.amountOfClicks).toBe(0)
   * wrapper.find('button').trigger('click')
   * expect(viewModel.value.amountOfClicks).toBe(1)
   */
  usePresenterHook.spy = function (): PresenterHookOutput<TPresenterOptions> {
    const presenterOptions = cachedPresenterInstance.value

    if (!presenterOptions) throw ERROR.SPYING.NO_PRESENTER_INSTANCE

    cachedPresenterInstance.reset()

    return {
      presenter: presenterOptions,
      viewModel: presenterOptions.viewModel
    }
  }

  usePresenterHook.resetSpy = function () {
    cachedPresenterInstance.reset()
  }

  /**
   * @example
   * useDocumentOverviewPresenter.mockViewModel((viewModel) => {
   *   return {
   *     ...viewModel,
   *     showPageSkeletonLoader: true,
   *   }
   * })
   */
  usePresenterHook.mockViewModel = function (
    viewModelOverrideFunction: ViewModelOverride<TPresenterOptions>
  ) {
    viewModelOverride.value = viewModelOverrideFunction
  }

  return usePresenterHook
}
