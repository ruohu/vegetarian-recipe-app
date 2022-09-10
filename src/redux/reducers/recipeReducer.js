
const initialState = {
  searchedRecipes: [],
  randomRecipes: [],
  cuisineRecipes: [],
}

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_RECIPES':
      return { ...state, randomRecipes: action.payload };
    case 'SET_SEARCHED_RECIPES':
      return {
        ...state, searchedRecipes: action.payload
      };
    case 'SET_CUISINE_RECIPES':
      return {
        ...state, cuisineRecipes: action.payload
      };
    default:
      return state;

  }
}

export default recipeReducer;