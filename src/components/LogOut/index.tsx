'use client'

import { useUserContext } from "@/utils/context"
import { UserContextType } from "@/utils/types"

type LogOutProp = {
    click:() => void
}

const LogOut = ({click}:LogOutProp) => {

    const {user} = useUserContext() as UserContextType

    return (   
        <button className="m-4 p-2 rounded-2xl cursor-pointer bg-amber-800 text-white text-xl md:text-2xl" onClick={click}>Logout</button>
    )
}

export default LogOut