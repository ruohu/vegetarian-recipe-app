const initialState = {
  details: {
    id: null,
    title: "",
    name: "",
    readyInMinutes: 0,
    servings: 0,
    glutenFree: true,
    dairyFree: true,
    extendedIngredients: [],
    instructions: "",
  }
}

const recipeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPE_DETAILS':
      return { ...state, details: action.payload };
    default:
      return state;

  }
}

export default recipeDetailsReducer;