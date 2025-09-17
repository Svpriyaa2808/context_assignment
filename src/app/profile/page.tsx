'use client'
import DisplayCategory from "@/components/DisplayCategory";
import { useUserContext } from "@/utils/context";
import { UserContextType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";


const ProfilePage = () => {
  const { user, removeFavouriteRecipe } = useUserContext() as UserContextType;

  if (user) {
  return (
    <div className="p-6">
      
      <div className="mt-4">
        <p className="font-semibold">Favourite Category:</p>
        <p className="text-blue-600">{user.favouriteCategory || "None"}</p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Favourite Recipes:</p>
        {user.favouriteRecipes.length === 0 ? (
          <p className="text-gray-500">No favourite recipes yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 mt-4">
            
              <DisplayCategory meals={user.favouriteRecipes} category={user.favouriteCategory || ""}/>
              </div>
            )
        }
      </div>
    </div>
  );
}
};

export default ProfilePage;
