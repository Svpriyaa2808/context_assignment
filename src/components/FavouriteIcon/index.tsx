// import { useState } from "react"
// import Image from "next/image"
// import { MealType } from "@/utils/types"

// const FavouriteIcon = ({favourites}:{favourites:(item:MealType)=>void}) => {

//     const [favIcon,setFavIcon] = useState<string>("unfavourite_icon.png")
    
//     const handleFav = (item:MealType) => {
//         if(favIcon==="unfavourite_icon.png") {
//             setFavIcon("favourite_icon.png")
//             favourites(item)
//         } else{
//             setFavIcon("unfavourite_icon.png")
//         } 
//     }
   
//     return (
//         <>
//             <Image onClick={()=>handleFav(item)} src={`/${favIcon}`} alt={favIcon} width={50} height={50} />
//         </>
//     )
// }

// export default FavouriteIcon