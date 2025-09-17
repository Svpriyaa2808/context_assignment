'use client'
import DisplayCategory from "@/components/DisplayCategory";
import { useUserContext } from "@/utils/context";
import { UserContextType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";


const ProfilePage = () => {
  const { user} = useUserContext() as UserContextType;
  // Example: To log categories of all favourite recipes, uncomment below
   console.log(user?.favouriteRecipes.map(recipe => recipe.category));

  if (user) {
  return (
    <div className="p-6 bg-amber-50">
      
      <div className="mt-4">
        <p className="font-bold text-center text-xl">{user.name ? `${user.name}'s Favourite Category:` : "Favourite Category:"}</p>
        <p className="text-center italic font-bold text-2xl m-4 text-amber-800">{user.favouriteCategory || "None"}</p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-center text-xl">{user.name ? `${user.name}'s Favourite Recipes:` : "Favourite Recipes:"}</p>
        {user.favouriteRecipes.length === 0 ? (
          <p className="text-center italic font-bold text-2xl m-4 text-amber-800">Add Favourites that satisfy your cravings</p>
        ) : (
          <div className="flex flex-wrap justify-center">
              <p className="flex-[100%] text-center italic font-bold text-2xl m-8 text-amber-800">Here are the Favourite recipes of {user.name}</p>
              <div className="flex flex-wrap justify-center">
                {user.favouriteRecipes.map((recipe, index) => (
                  <div key={index} className="m-4">
                    <DisplayCategory meals={[recipe]} category={recipe.category} />
                  </div>
                ))}
              </div>
          </div>
          )
        }
      </div>
    </div>
  );
}
};
export default ProfilePage
