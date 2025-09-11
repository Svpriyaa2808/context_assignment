export interface UserType {
    name:string,
    favouriteCategory : string | null,
    favouriteRecipes : string []
}

export interface UserContextType {
    user : UserType | null,
    setUser : (user:UserType|null) => void
}

export interface FavContextType {
    favRecipes : MealType | null,
    setFavRecipes : (meal:MealType|null) => void 
}

export interface NavItemsType {
    name:string,
    link:string
}

export interface MealType {
    idMeal: string,
    strMeal: string,
    strMealThumb : string
}

export interface CategoryType {
    idCategory: string
    strCategory: string
    strCategoryThumb: string
    strCategoryDescription: string
}

export interface RecipeType {
    id: string,
    name: string,
    category: string,
    area: string,
    instructions: string,
    image:string,
    video : string,
    requiredIngredients:string[]
}


