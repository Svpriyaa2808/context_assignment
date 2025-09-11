const API_ENDPOINT:string = "https://www.themealdb.com/api/json/v1/1/"
  
export  const getCategoryRecipes = async (category:string) => {
     try {
      const response = await fetch(`${API_ENDPOINT}filter.php?c=${category}`)
      const data = await response.json()
      return data.meals
    }catch(error){
      console.log(error)
    }
  }

export  const getRandomRecipe = async ()=> {
    try {
      const response = await fetch(`${API_ENDPOINT}random.php`)
      const data = await response.json()
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

export const getAllCategory = async () => {
  try{
    const response = await fetch(`${API_ENDPOINT}/categories.php`)
    const data = await response.json()
    return data.categories
    
  }catch(error){
    console.log(error)
  }
}