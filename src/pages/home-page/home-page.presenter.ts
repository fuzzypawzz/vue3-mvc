import { computed } from "vue";
import { useViewContext } from "@/helpers/view-context";
import { presenterFactory } from "@/helpers/presenter-factory/presenter-factory";

// TODO: Generate model def from C# classes
type Model = {
    name?: string
    age?: number
}

export const useHomePagePresenter = presenterFactory(() => {
    const { model } = useViewContext<Model>()
    
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