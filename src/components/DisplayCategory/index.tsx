'use client';
import { useUserContext } from "@/utils/context";
import { MealType, FavouriteRecipeType, UserContextType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type RecipeProp = {
  meals: (MealType | FavouriteRecipeType)[];
  category?: string;
};

const DisplayCategory = ({ meals, category }: RecipeProp) => {
  const location = usePathname();
 const isHome = ["/", "/profile"].includes(location);


  const { user, addFavouriteRecipe, removeFavouriteRecipe } =
    useUserContext() as UserContextType;

  const getCategory = (item: MealType | FavouriteRecipeType) => {
    return "category" in item ? item.category : category || "";
  };

  return (
    <div className="flex flex-wrap justify-center bg-amber-50">
      {meals.map((item, index) => (
        <div
          key={index}
          className="basis-[100%] md:basis-1/3 max-w-sm border-2 rounded-2xl m-4 flex flex-col items-center shadow-2xl"
        >
          <Link
            href={
              isHome
                ? `category/${getCategory(item)}/${item.idMeal}`
                : `${getCategory(item)}/${item.idMeal}`
            }
            className={`uppercase italic font-bold m-4 text-xl ${
              isHome ? "text-amber-800" : ""
            }`}
          >
            {item.strMeal}
          </Link>

          <Image
            className="h-auto w-[75%] m-2"
            src={item.strMealThumb}
            alt={item.strMeal}
            width={100}
            height={100}
          />

          <Image
            src={
              user?.favouriteRecipes.some((r) => r.idMeal === item.idMeal)
                ? "/favourite_icon.png"
                : "/unfavourite_icon.png"
            }
            alt="fav"
            className="m-4 w-[10%] h-auto cursor-pointer"
            onClick={() =>
              user?.favouriteRecipes.some((r) => r.idMeal === item.idMeal)
                ? removeFavouriteRecipe(item.idMeal)
                : addFavouriteRecipe({
                    ...item,
                    category: getCategory(item), 
                  })
            }
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayCategory;
