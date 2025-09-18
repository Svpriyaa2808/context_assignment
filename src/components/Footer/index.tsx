import Image from "next/image"
import Logo from '../../../public/my-recipes-logo.png'
import Navigation from "../Navigation"

const Footer = () => {
    return (
        <footer className="bg-amber-100 mt-0 p-4">
            <div className="flex justify-between">
                <div className="flex justify-start flex-[40%]">
                    <Image src={Logo} alt="logo" width={0} height={0} sizes="100vw" priority className="h-[auto] w-[75%] xs:w-[40%] sm:w-[35%] md:w-[25%] lg:w-[20%]"/> 
                </div> 
               
                <div className="m-4 p-4 mr-6 text-[18px] ">
                    <p>About us</p>
                    <p>Privacy Policy</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="text-center font-bold italic my-4 text-amber-800 text-[20px]">
                Simple recipes made for real, actual, everyday life.
            </div>
            <p className=" text-center">&copy; 2025.</p>
        </footer>
    )
}

export default Footer