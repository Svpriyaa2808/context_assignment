'use client'
import { FavContextType, MealType } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useFavouriteContext } from "@/utils/context"
import { useState } from "react"

type RecipeProp = {
    meals : MealType[],
    category: string
}


const DisplayCategory = ({meals,category}:RecipeProp) => {

    const location = usePathname()
    const isHome = location === "/"

    const {favRecipes,setFavRecipes} = useFavouriteContext() as FavContextType

    const [favId,setFavId] = useState<string[]>([])
        
        const handleFav = (id:string) => {
            if(favId.includes(id)) {
                setFavId(favId.filter(favId => favId!= id))
                
            } else{
                setFavId([...favId,id])
            } 
        }

  

    return (
        <div className="flex flex-wrap m-auto">
            {meals.map((item, index) => (
                        <div key={index} className="flex-[35%] m-4">
                            {isHome ? <Link href={`category/${category}/${item.idMeal}`}>{item.strMeal}</Link> :
                            <Link href={`${category}/${item.idMeal}`}>{item.strMeal}</Link>  }
                            <Image className="h-auto w-[50%]" src={item.strMealThumb} alt={item.strMeal} width={100} height={100} />
                            <Image onClick={()=>handleFav(item.idMeal)}  src={`/${favId.includes(item.idMeal) ? "favourite_icon.png" : "unfavourite_icon.png"}`} 
                            alt="fav icon" width={50} height={50} />
                            </div>
            
                    ))}
        </div>
    )
}

export default DisplayCategory