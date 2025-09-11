'use client'
import Image from "next/image"
import Logo from '../../../public/logo.png'

const Header = () => {
   
    return (
        <header className="text-center  bg-amber-200">
           <Image src={Logo} alt="logo" />   
        </header>
    )
    
}

export default Header