import React, { useEffect } from 'react';
import RecipeList from '../../components/recipe-list/RecipeList';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';

import api from '../../api';
import { setCuisineRecipes } from '../../redux/actions';

const Cuisine = () => {
  const recipes = useSelector((state) => state.allRecipes.cuisineRecipes);
  let params = useParams();
  const dispatch = useDispatch();
  const { data } = useFetch(`${api.URL}/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=12&cuisine=${params.name}`);


  useEffect(() => {
    if (data) {
      dispatch(setCuisineRecipes(data.recipes));
    }
  }, [data]);

  return (
    <>
      <RecipeList
        listName={
          "Here some random "
          + params.name.charAt(0).toUpperCase()
          + params.name.slice(1)
          + " recipes!"
        }
        recipes={recipes}
      />
    </>

  )
};

export default Cuisine;
