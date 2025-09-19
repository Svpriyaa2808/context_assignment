'use client'
import DisplayRecipe from "@/components/DisplayRecipe";
import { useUserContext } from "@/utils/context";
import { UserContextType } from "@/utils/types";

const ProfilePage = () => {
  const { user} = useUserContext() as UserContextType;

  if (user) {
  return (
    <div className="grow p-6 bg-amber-50">
      
      <div className="mt-4">
        <p className="font-bold text-center text-xl">{user.name ? `${user.name}'s Favourite Category:` : "Favourite Category:"}</p>
        <p className="text-center italic font-bold text-2xl m-4 text-amber-800">{user.favouriteCategory || "None"}</p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-center text-xl">{user.name ? `${user.name}'s Favourite Recipes:` : "Favourite Recipes:"}</p>
        {user.favouriteRecipes.length === 0 ? (
          <p className="text-center italic font-bold text-2xl m-4 text-amber-800">Add Favourites that satisfy your cravings</p>
        ) : (
          <div className="">
              <p className=" text-center italic font-bold text-2xl m-8 text-amber-800">Here are the Favourite recipes of {user.name}</p>
             
                {user.favouriteRecipes.map((recipe, index) => (
                  <div key={index}>
                    <DisplayRecipe meals={[recipe]} category={recipe.category} />
                  </div>
                ))}
             
          </div>
          )
        }
      </div>
    </div>
  );
}
};
export default ProfilePage
