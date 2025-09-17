'use client'
import DisplayCategory from "@/components/DisplayCategory";
import { useUserContext } from "@/utils/context";
import { getCategoryRecipes } from "@/utils/function";
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
      } 
    }
    fetchCategory()
  },[])

  return (
  
    user && 
    <div className="bg-amber-50"> 
      {user.favouriteCategory && recipe ? <DisplayCategory meals={recipe} category={user.favouriteCategory}/> : <p>No Category</p>}
    </div>

  );
}
