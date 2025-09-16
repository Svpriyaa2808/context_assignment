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
        <div className="flex flex-wrap  justify-center">
            {allCategory.map((item,index)=>
            <div key={index} className="flex-[60%]">
                <div className="flex">
                <Image src={item.strCategoryThumb} alt={item.strCategory} width={50} height={50}></Image>
                 <Image src={user?.favouriteCategory === item.strCategory ? "/favourite_icon.png" : "/unfavourite_icon.png"} alt="fav"
                    onClick={() => setFavouriteCategory(item.strCategory)}  width={30} height={30}/>
                    </div>
                <Link href={`category/${item.strCategory}`}>{item.strCategory}</Link>
                <p>{item.strCategoryDescription}</p>
               
            </div>
            )}
        </div>
        }
        </>
    )
}

export default CategoryPage