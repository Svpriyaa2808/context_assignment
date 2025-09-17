'use client'
import { getAllCategory } from "@/utils/function"
import { CategoryType, UserContextType } from "@/utils/types"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useUserContext } from "@/utils/context"

const CategoryPage = () => {
   const [allCategory,setAllCategory] = useState<CategoryType[]|null>(null)
    const {user,setFavouriteCategory} = useUserContext() as UserContextType

    useEffect(()=>{
        const fetchCategory = async () => {
            const data = await getAllCategory()
            if (data) {
                setAllCategory(data)
            } else {
                setAllCategory([])
            }
        }
        fetchCategory()
    },[])
    
    return (
        <>
        {allCategory && 
        <div className="text-center flex flex-wrap p-4 bg-amber-50">
            {allCategory.map((item,index)=>
            <div key={index} className="flex-[100%] lg:flex-[50%] justify-center m-4 mx-auto border-2 max-w-[500px] rounded-xl shadow-2xl lg:transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400">
                <div className="flex justify-between">
                    <Link className="text-left text-2xl font-bold italic uppercase p-2 m-3 text-amber-800" href={`category/${item.strCategory}`}>{item.strCategory}</Link>
               
                    <Image src={user?.favouriteCategory?.toLowerCase() === item.strCategory.toLowerCase() ? "/favourite_icon.png" : "/unfavourite_icon.png"} alt="fav"
                        onClick={() => setFavouriteCategory(item.strCategory)}  width={100} height={100} className="h-auto w-[15%] lg:w-[10%] m-3 p-2"/>
                </div>
                
                <div className="flex justify-center">
                    <Image src={item.strCategoryThumb} alt={item.strCategory} width={100} height={100} className="h-auto w-[50%] lg:w-[35%]"></Image>
                </div>
                
                <p className="m-3 text-justify indent-[30px] text-[18px]">{item.strCategoryDescription}</p>
               
            </div>
            )}
        </div>
        }
        </>
    )
}

export default CategoryPage