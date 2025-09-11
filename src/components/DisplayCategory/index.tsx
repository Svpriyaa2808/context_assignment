'use client'
import { MealType } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type RecipeProp = {
    meals : MealType[],
    category: string
}


const DisplayCategory = ({meals,category}:RecipeProp) => {

    const location = usePathname()
const isHome = location === "/"

    return (
        <div className="flex flex-wrap m-auto">
            {meals.map((item, index) => (
                        <div key={index} className="flex-[35%] m-4">
                            {isHome ? <Link href={`category/${category}/${item.idMeal}`}>{item.strMeal}</Link> :
                            <Link href={`${category}/${item.idMeal}`}>{item.strMeal}</Link>  }
                            <Image className="h-auto w-[50%]" src={item.strMealThumb} alt={item.strMeal} width={100} height={100} />
                            </div>
                    ))}
        </div>
    )
}

export default DisplayCategory