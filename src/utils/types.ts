export interface MealType {
    idMeal: string,
    strMeal: string,
    strMealThumb : string
    strCategory?:string
}


export interface FavouriteRecipeType extends MealType {
  category: string;   
}

export interface UserType {
  name: string;
  favouriteCategory: string | null;
  favouriteRecipes: FavouriteRecipeType[];
}

export interface UserContextType {
    user : UserType | null,
    setUser : (user:UserType|null) => void
    setFavouriteCategory: (category: string) => void;
  addFavouriteRecipe: (recipe: FavouriteRecipeType) => void;
  removeFavouriteRecipe: (id: string) => void;
}

export interface NavItemsType {
    name:string,
    link:string
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


