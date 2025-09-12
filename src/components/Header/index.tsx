'use client'
import Image from "next/image"
import Logo from '../../../public/my-recipes-logo.png'
import { useUserContext } from "@/utils/context"
import { UserContextType } from "@/utils/types"
import Navigation from "../Navigation"
import LogOut from "../LogOut"

const Header = () => {
   const {user,setUser} = useUserContext() as UserContextType

    const handleClick = () => {
    setUser(null)
    alert("thank you")
  }
    return (
        user ? (
            <header className=" bg-amber-200">
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex justify-center md:justify-start md:flex-[40%]">
                        <Image src={Logo} alt="logo" width={0} height={0} sizes="100vw" priority className="h-[auto] w-[50%] sm:w-[25%] md:w-[50%]"/> 
                    </div> 
                    <div className="md:flex-[60%] md:justify-end">
                        <Navigation />
                    </div> 
                </div>
                <div className="flex justify-between mt-6 md:mt-3">
                    <h2 className="font-bold text-2xl md:text-3xl p-4 text-amber-800 ">Welcome {user.name} 👋</h2>
                    <LogOut click={handleClick}/>
                </div>
            </header>
        ) : (
            <header className="text-center  bg-amber-200">
                <div className="flex justify-center">
                    <Image src={Logo} alt="logo" width={0} height={0} sizes="100vw" priority className="h-[auto] w-[50%] md:w-[25%] lg:w-[20%]"/> 
                </div>  
            </header>
        )
    )
    
}

export default Header