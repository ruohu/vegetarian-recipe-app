import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RecipeList from '../recipe-list/RecipeList';

import api from '../../api';
import { setRandomRecipes } from '../../redux/actions';
import { useFetch } from '../../hooks/useFetch';

const Random = () => {
  const randomRecipes = useSelector((state) => state.allRecipes.randomRecipes);

  const dispatch = useDispatch();
  const { data } = useFetch(`${api.URL}/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=12`);

  useEffect(() => {
    if (data) {
      dispatch(setRandomRecipes(data.recipes));
    }
  }, [data]);

  return (
    <>
      <RecipeList
        listName="Some random recipes"
        recipes={randomRecipes}
      />
    </>
  )
}

export default Random;