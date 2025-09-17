import DisplayRecipe from "@/components/DisplayRecipe"
import { getCategoryRecipes } from "@/utils/function"
import { MealType } from "@/utils/types"

const SelectedCategory = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params
  const meals: MealType[] = await getCategoryRecipes(category)

  return (
    <div>
      {meals.length > 0 && <DisplayRecipe meals={meals} category={category}/>}
    </div>
  )
}

export default SelectedCategory 