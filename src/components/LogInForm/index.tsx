'use client'
import { UserArray } from "@/data/users"
import { useState } from "react"
import { useUserContext } from "@/utils/context"
import { UserContextType } from "@/utils/types"

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

    if(user) console.log("user is : " + user.name)

    const handleChange = (event: {target:{value:any}}) => {
        setUserInput(event.target.value)
    }

    return (
        <form className="flex flex-col max-w-2xl rounded-2xl border-gray-900 border-2 m-auto p-4">
            <h2 className="text-center font-bold text-2xl mb-4">LogIn!</h2>
            <div className="flex">
                <label htmlFor="username" className="m-2">Enter your username</label>
                <input onChange={handleChange} id="username" placeholder="Username" value={userInput} className="m-2 border-2 rounded-xl border-gray-500"/>
            </div>
            <div className="flex">
                <label htmlFor="password" className="m-2">Enter your password</label>
                <input id="password" placeholder="password" className="m-2 border-2 rounded-xl border-gray-500"/>
            </div>
            <button onClick={handleClick} className="border-2 border-gray-500 max-w-[100px] bg-gray-200">Log In !</button>

            {!userNotFound && <p>User Not found</p>}
        </form>
    )
}

export default LogInForm