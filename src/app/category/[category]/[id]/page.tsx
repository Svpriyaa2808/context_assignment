import { getDetailedRecipe } from "@/utils/function"
import { RecipeType } from "@/utils/types"
import Image from "next/image"

const Recipes = async ({params}:{params: Promise<{id:string,category : string}>}) => {
    const {id } = await params
    const detailedRecipe:RecipeType[] = await getDetailedRecipe(id)

    return (
        <div className="bg-amber-50 flex justify-center grow ">
            {detailedRecipe && detailedRecipe.map((item,index)=> 
            <div key={index} className="bg-amber-100 max-w-[300px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] my-8 text-center rounded-2xl">
                
                <h2 className="font-bold italic text-2xl text-amber-800 text-center m-4">{item.name}</h2>
                
                <div className="flex justify-center">
                    <Image src={item.image} alt={item.name} width={100} height={100} className="h-auto w-[50%] m-4"/>
                </div>
                
                <h3  className="font-bold text-left italic text-[20px] m-4">Required Ingredients</h3>
                
                {item.requiredIngredients.map((item,index)=>
                    <li className="text-left mx-10 mb-2 text-[18px]" key={index}>{item}</li>)}
                
                <h3 className="font-bold text-left italic text-[20px] m-4">Instruction</h3>
                
                <p className="text-justify indent-[30px] m-2 p-4 text-[18px]">{item.instructions}</p>
            </div>)}
        </div>
    )
}

export default Recipes