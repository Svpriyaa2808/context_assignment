import { MealType } from "@/utils/types"
import Image from "next/image"
import Link
 from "next/link"
type RecipeProp = {
    meals : MealType[]
}

const DisplayRecipe = ({meals}:RecipeProp) => {
    return (
        <div className="flex flex-wrap m-auto">
            {meals.map((item, index) => (
                        <div key={index} className="flex-[35%] m-4">
                            <Link href={`/${item.mealId}`}>{item.strMeal}</Link>
                            <Image className="h-auto w-[50%]" src={item.strMealThumb} alt={item.strMeal} width={100} height={100} />
                            </div>
                    ))}
        </div>
    )
}

export default DisplayRecipe