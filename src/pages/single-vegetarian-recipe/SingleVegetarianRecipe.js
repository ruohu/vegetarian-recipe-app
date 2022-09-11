import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleVegetarianRecipe.css';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import api from '../../api';
import { setRecipeDetails } from '../../redux/actions';
import { useFetch } from '../../hooks/useFetch';
import defaultImage from "../../assets/images/no-image.jpg";

const SingleVegetarianRecipe = () => {
  const details = useSelector((state) => state.recipeDetails.details);
  const hasError = useSelector((state) => state.errorReducer.hasError);
  const dispatch = useDispatch();
  let params = useParams();

  const { data } = useFetch(`${api.URL}/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

  useEffect(() => {
    if (data) {
      dispatch(setRecipeDetails(data));
    }
  }, [data]);

  return (!hasError &&
    <div className="single-recipe-container">
      <h2>{details.title}</h2>

      <div className="recipe-section recipe-details-1">
        <img src={details.image ? details.image : defaultImage} alt={details.title} />
        <div className="short-details-container">
          <div>
            <span className="detail-label">Preparation time: </span>
            <span>{details.readyInMinutes} mins</span>
          </div>
          <div>
            <span className="detail-label">Serving: </span>
            <span>{details.servings}</span>
          </div>
          <div>
            <span>{details.glutenFree ? "Gluten Free" : ""}</span>
          </div>
          <div>
            <span>{details.dairyFree ? "Dairy Free" : ""}</span>
          </div>
        </div>
      </div>

      <div className="recipe-section">
        <h3>Ingredients</h3>
        <ul>
          {details.extendedIngredients.map(ingredient => <li key={ingredient.id}>{ingredient.original}</li>)}
        </ul>
      </div>

      <div className="recipe-section">
        <h3>Instructions</h3>
        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
      </div>

    </div>
  )
}

export default SingleVegetarianRecipe;