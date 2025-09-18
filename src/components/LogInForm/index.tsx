'use client'
import { UserArray } from "@/data/users"
import { useState } from "react"
import { useUserContext } from "@/utils/context"
import { UserContextType } from "@/utils/types"
import Header from "../Header"
const LogInForm = () => {
    const [userInput,setUserInput] = useState<string>('')
    const [userNotFound,setUserNotFound] = useState<boolean>(true)
   
    const {user,setUser} = useUserContext() as UserContextType
    
    const handleClick = (e : {preventDefault : ()=>void}) => {
        e.preventDefault()
        const loggedInUser = UserArray.filter(user => user.name === userInput)

        if(!loggedInUser[0]) setUserNotFound(false)
        else {
            setUserNotFound(true)  
            setUser(loggedInUser[0])
        }    
    }

    const handleChange = (event: {target:{value:any}}) => {
        setUserInput(event.target.value)
    }

    return (
        <>
        <Header />
        <div className="grow flex flex-col justify-center m-4">
        <form className="flex flex-col max-w-[400px] rounded-2xl border-amber-800 border-2 m-auto shadow-2xl my-4  p-4">
            <h2 className="text-center font-bold text-3xl mb-4 text-[#FA824C] uppercase">LogIn!</h2>
            <div className="flex justify-center m-4">
                <label htmlFor="username" className="m-2">Username</label>
                <input onChange={handleChange} id="username" placeholder="Username" value={userInput} className="m-2 border-2 rounded-xl border-gray-500"/>
            </div>
            <div className="flex justify-center m-4">
                <label htmlFor="password" className="m-2">Password</label>
                <input id="password" placeholder="password" className="m-2 border-2 rounded-xl border-gray-500"/>
            </div>
            <div className="text-center">
            <button onClick={handleClick} className="m-4 p-2 rounded-2xl cursor-pointer bg-amber-800 text-white">Log In !</button>
            </div>

            {!userNotFound && <p>User Not found</p>}
        </form>
        </div>
        </>
    )
}

export default LogInForm