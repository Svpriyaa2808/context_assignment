import { getDetailedRecipe } from "@/utils/function"
import { RecipeType } from "@/utils/types"
import Image from "next/image"

const Recipes = async ({params}:{params: Promise<{id:string,category : string}>}) => {
    const {id , category} = await params
    const detailedRecipe:RecipeType[] = await getDetailedRecipe(id)

    return (
        <>
         {detailedRecipe && detailedRecipe.map((item,index)=> 
        <div key={index}>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <Image src={item.image} alt={item.name} width={100} height={100} />
            <h3>Instruction</h3>
            <p>{item.instructions}</p>
            <h3>Required Ingredients</h3>
            {item.requiredIngredients.map((item,index)=><li key={index}>{item}</li>)}
        </div>)}
        </>
    )
}

export default Recipes