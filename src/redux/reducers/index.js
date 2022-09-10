import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import recipeDetailsReducer from "./recipeDetailsReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  allRecipes: recipeReducer,
  recipeDetails: recipeDetailsReducer,
  errorReducer: errorReducer,
  loading: loadingReducer,
})

export default rootReducer;