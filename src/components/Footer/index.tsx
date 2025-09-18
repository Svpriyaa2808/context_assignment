import Image from "next/image"
import Logo from '../../../public/my-recipes-logo.png'
import Navigation from "../Navigation"

const Footer = () => {
    return (
        <footer className="bg-[#FCDFA6] mt-0 p-4">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="text-center font-bold italic my-4 p-4 text-amber-800 text-[20px]">
                Simple recipes made for real, actual, everyday life.
            </div>
               
                <div className="m-4 p-4 mr-6 text-[18px] text-center">
                    <p>About us</p>
                    <p>Privacy Policy</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>
            
            <p className=" text-center">&copy; 2025.</p>
        </footer>
    )
}

export default Footer