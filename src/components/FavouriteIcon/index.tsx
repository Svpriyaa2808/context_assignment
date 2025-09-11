import { useState } from "react"
import Image from "next/image"

const FavouriteIcon = () => {

    const [favIcon,setFavIcon] = useState<string>("unfavourite_icon.png")
    
    const handleFav = () => {
        favIcon==="unfavourite_icon.png" ? setFavIcon("favourite_icon.png") : setFavIcon("unfavourite_icon.png")
    }
   
    return (
        <>
            <Image onClick={handleFav} src={`/${favIcon}`} alt={favIcon} width={50} height={50} />
        </>
    )
}

export default FavouriteIcon