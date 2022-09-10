export const setRandomRecipes = (randomRecipes) => {
  return {
    type: 'SET_RANDOM_RECIPES',
    payload: randomRecipes
  }
}

export const setSearchedRecipes = (recipes) => {
  return {
    type: 'SET_SEARCHED_RECIPES',
    payload: recipes
  }
}

export const setCuisineRecipes = (recipes) => {
  return {
    type: 'SET_CUISINE_RECIPES',
    payload: recipes
  }
}

export const setRecipeDetails = (details) => {
  return {
    type: 'SET_RECIPE_DETAILS',
    payload: details
  }
}

export const setError = (hasError) => {
  return {
    type: 'SET_ERROR',
    payload: hasError
  }
}

export const setLoading = (isLoading) => {
  return {
    type: 'SET_LOADING',
    payload: isLoading
  }
}
