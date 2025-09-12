'use client'
import Image from "next/image"
import Logo from '../../../public/my-recipes-logo.png'

const Header = () => {
   
    return (
        <header className="text-center  bg-amber-200">
            <div className="flex justify-center">
           <Image src={Logo} alt="logo" width={0} height={0} className="h-[auto] w-[50%] md:w-[25%] lg:w-[20%]"/> 
           </div>  
        </header>
    )
    
}

export default Header