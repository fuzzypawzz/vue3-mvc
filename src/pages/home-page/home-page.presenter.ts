import { computed } from "vue";
import { useViewContext } from "@/helpers/view-context";
import { presenterFactory } from "@/helpers/presenter-factory/presenter-factory";
import type { HomePageViewModel } from "@/models/home-page-view-model";

export const useHomePagePresenter = presenterFactory(() => {
    const { model } = useViewContext<HomePageViewModel>()
    
    return {
        viewModel: computed(() => {
            return {
                customerName: `Name: ${model.name}`,
                customerAge: `Age: ${model.age} years old.`,
                teaser: 'dotnet.... 👳🏾‍',
                toggleLabel: 'Here is a toggle component ➡'
            }
        })
    }
})