'use client'
import { createContext,useContext, useState } from "react";
import { UserType,UserContextType, MealType, FavouriteRecipeType } from "./types";

const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children } : {children :  React.ReactNode} ) => {
    const [user,setUser] = useState<UserType | null>(null)

    const setFavouriteCategory = (category: string) => {
    if (!user) return;
    setUser({ ...user, favouriteCategory: category });
    };

    const addFavouriteRecipe = (recipe: FavouriteRecipeType) => {
    if (!user) return;
    if (user.favouriteRecipes.some(r => r.idMeal === recipe.idMeal)) return;
    setUser({ ...user, favouriteRecipes: [...user.favouriteRecipes, recipe] });
  };

  const removeFavouriteRecipe = (id: string) => {
    if (!user) return;
    setUser({
      ...user,
      favouriteRecipes: user.favouriteRecipes.filter(r => r.idMeal !== id),
    });
  };
    return (
        <UserContext.Provider  value={{ user, setUser, setFavouriteCategory, addFavouriteRecipe, removeFavouriteRecipe }}>
            {children}
        </UserContext.Provider>
    )
}
 
export const useUserContext = () => {
    return useContext (UserContext) 
}

