'use client'
import DisplayRecipe from "@/components/DisplayRecipe";
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
   <div>
    {user && 
    <div>
      welcome to website, {user.name}
      {user.favouriteCategory && recipe ? <DisplayRecipe meals={recipe}/> : <p>No Category</p>}
    </div>}
   </div>
  );
}
