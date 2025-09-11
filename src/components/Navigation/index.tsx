import { NavItems } from "@/data/navItem"
import Link from "next/link"

const Navigation = () => {
    return (
        <nav>
            {NavItems.map((item,index)=><Link key={index} href={item.link}>{item.name}</Link>)}
        </nav>
    )
}

export default Navigation