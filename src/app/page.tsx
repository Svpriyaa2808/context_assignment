'use client'
import DisplayCategory from "@/components/DisplayCategory";
import LogOut from "@/components/LogOut";
import { useUserContext } from "@/utils/context";
import { getCategoryRecipes } from "@/utils/function";
import { MealType, UserContextType } from "@/utils/types";
import { useEffect, useState } from "react";

export default function Home() {

  const {user,setUser} = useUserContext() as UserContextType
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

 

  const handleClick = () => {
     
    setUser(null)
    alert("thank you")
  }

  return (
   <div>
    {user && 
    <div>
      <LogOut click={handleClick}/>
      {user.favouriteCategory && recipe ? <DisplayCategory meals={recipe} category={user.favouriteCategory}/> : <p>No Category</p>}
    </div>}
   </div>
  );
}
