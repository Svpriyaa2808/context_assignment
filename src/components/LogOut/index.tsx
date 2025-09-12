'use client'

import { useUserContext } from "@/utils/context"
import { UserContextType } from "@/utils/types"

type LogOutProp = {
    click:() => void
}

const LogOut = ({click}:LogOutProp) => {

    const {user} = useUserContext() as UserContextType

    return (
        <div className="bg-amber-200">  
            
            <button onClick={click}>Logout</button>
            
        </div>
    )
}

export default LogOut