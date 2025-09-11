'use client'
import { getAllCategory } from "@/utils/function"
import { CategoryType } from "@/utils/types"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const CategoryPage = () => {
   const [allCategory,setAllCategory] = useState<CategoryType[]|null>(null)

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
       {allCategory && <div>
        {allCategory.map((item,index)=>
        <div key={index}>
            <Image className="h-auto w-[25%]" src={item.strCategoryThumb} alt={item.strCategory} width={100} height={100} />
        <Link href={`category/${item.strCategory}`}>{item.strCategory}</Link>
        <p>{item.strCategoryDescription}</p>
        </div>)}
        </div>}
       </>
    )
}

export default CategoryPage