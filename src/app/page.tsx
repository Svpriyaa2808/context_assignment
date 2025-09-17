'use client'
import DisplayRecipe from "@/components/DisplayRecipe";
import DisplayCategory from "@/components/DisplayRecipe";
import { useUserContext } from "@/utils/context";
import { getCategoryRecipes, getRandomRecipe } from "@/utils/function";
import { MealType, UserContextType } from "@/utils/types";
import { useEffect, useState } from "react";

export default function Home() {

  const {user} = useUserContext() as UserContextType
  const [recipe,setRecipe] = useState<MealType[]|null>(null)

  useEffect(() => {
    const fetchCategory = async () => {
      if(user?.favouriteCategory){
        const data = await getCategoryRecipes(user.favouriteCategory)
        setRecipe(data)
        console.log(data)
      } else {
        const data = await getRandomRecipe()
        setRecipe(data)
      }
    }
    fetchCategory()
  },[])

  return (
  
    user && 
    <div className="bg-amber-50"> 
      {user.favouriteCategory && recipe && <DisplayCategory meals={recipe} category={user.favouriteCategory}/> }
      {!user.favouriteCategory && recipe && (
        <>
      <p className="text-center font-bold text-amber-800 text-[20px] m-4">Random Meal for you {user.name}</p>
      <DisplayRecipe meals={recipe} />
      </>)
      }
    </div>

  );
}
