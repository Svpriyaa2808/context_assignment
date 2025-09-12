'use client'
import Image from "next/image"
import Logo from '../../../public/my-recipes-logo.png'
import { useUserContext } from "@/utils/context"
import { UserContextType } from "@/utils/types"
import Navigation from "../Navigation"

const Header = () => {
   const {user} = useUserContext() as UserContextType
    return (
        user ? (
            <header className=" bg-amber-200">
                <div className="flex">
                <div className="flex flex-[60%]">
                    <Image src={Logo} alt="logo" width={0} height={0} className="h-[auto] w-[50%] md:w-[25%] lg:w-[30%]"/> 
                </div> 
                <div className="flex-[40%] justify-end">
                    <Navigation />
                </div> 
                </div>
                <h2 className="font-bold text-2xl p-4 text-amber-800 ">Welcome {user.name}</h2>
            </header>
        ) : (
            <header className="text-center  bg-amber-200">
                <div className="flex justify-center">
                    <Image src={Logo} alt="logo" width={0} height={0} className="h-[auto] w-[50%] md:w-[25%] lg:w-[20%]"/> 
                </div>  
            </header>
        )
    )
    
}

export default Header