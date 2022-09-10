import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SearchForm from '../../components/search-form/SearchForm';
import RecipeList from '../../components/recipe-list/RecipeList';

import { setSearchedRecipes } from '../../redux/actions';
import api from '../../api';
import { useFetch } from '../../hooks/useFetch';

const Search = () => {
  const recipes = useSelector((state) => state.allRecipes.searchedRecipes);
  const dispatch = useDispatch();
  let params = useParams();

  const { data } = useFetch(
    `${api.URL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&query=${params.search}&number=30`
  );

  useEffect(() => {
    if (data) {
      dispatch(setSearchedRecipes(data.results));
    }
  }, [data]);

  return (
    <div>
      <SearchForm />
      <RecipeList
        listName={"Results for: " + params.search}
        recipes={recipes}
      />
    </div>
  )
};

export default Search;