'use client'
import { useUserContext } from "@/utils/context";
import { UserContextType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { user, removeFavouriteRecipe } = useUserContext() as UserContextType;

  if (user) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome, {user.name} 👋</h1>
      
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
            {user.favouriteRecipes.map((recipe,index) => (
              <div key={index} className="border rounded-lg p-3 shadow">
                <Image
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <Link href={`category/${recipe.category}/${recipe.idMeal}`} className="mt-2 font-medium">{recipe.strMeal}</Link>
                <button onClick={() => removeFavouriteRecipe(recipe.idMeal)} className="mt-2 text-sm text-red-500 hover:underline">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
};

export default ProfilePage;
