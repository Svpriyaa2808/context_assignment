'use client'
import { createContext,useContext, useState } from "react";
import { UserType,UserContextType, MealType, FavContextType } from "./types";

const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children } : {children :  React.ReactNode} ) => {
    const [user,setUser] = useState<UserType | null>(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
 
export const useUserContext = () => {
    return useContext (UserContext) 
}

const FavouriteContext = createContext<FavContextType | null>(null)

export const FavouriteContextProvider = ({children}:{children : React.ReactNode}) => {
    const [favRecipes,setFavRecipes] = useState<MealType|null>(null)

    return (
        <FavouriteContext.Provider value={{favRecipes,setFavRecipes}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export const useFavouriteContext = () => {
    return useContext (FavouriteContext)
}