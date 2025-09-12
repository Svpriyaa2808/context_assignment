'use client'
import { useUserContext } from "@/utils/context"
import {  MealType, UserContextType } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type RecipeProp = {
    meals : MealType[],
    category: string
}

const DisplayCategory = ({meals,category}:RecipeProp) => {

    const location = usePathname()
    const isHome = location === "/"

    const {user,addFavouriteRecipe,removeFavouriteRecipe}  = useUserContext() as UserContextType

    return (
        <div className="flex flex-wrap m-auto">
            {meals.map((item, index) => (
                <div key={index} className="flex-[35%] m-4">
                    {isHome ? <Link href={`category/${category}/${item.idMeal}`}>{item.strMeal}</Link> 
                            : <Link href={`${category}/${item.idMeal}`}>{item.strMeal}</Link> 
                     }
                    
                    <Image className="h-auto w-[50%]" src={item.strMealThumb} alt={item.strMeal} width={100} height={100} />
                    <Image src={user?.favouriteRecipes.some(r => r.idMeal === item.idMeal) ? "/favourite_icon.png" : "/unfavourite_icon.png"}
                        alt="fav"  onClick={() =>user?.favouriteRecipes.some(r => r.idMeal === item.idMeal)
                                                        ? removeFavouriteRecipe(item.idMeal)
                                                        : addFavouriteRecipe({ ...item, category })} width={30} height={30}/>

                </div>
            ))}
        </div>
    )
}

export default DisplayCategory