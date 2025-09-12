import { NavItems } from "@/data/navItem"
import Link from "next/link"

const Navigation = () => {
    return (
        <nav className="flex justify-around p-0 m-2 md:pt-8 md:mt-8">
            {NavItems.map((item,index)=><Link className="text-xl m-2 md:text-2xl font-bold uppercase text-amber-800" key={index} href={item.link}>{item.name}</Link>)}
        </nav>
    )
}

export default Navigation