'use client'
import { useUserContext } from "@/utils/context"
import { UserContextType } from "@/utils/types"

const ProfilePage = () => {
    const {user} = useUserContext() as UserContextType
    return (
       <p>{user?.favouriteCategory}</p>
    )
}

export default ProfilePage