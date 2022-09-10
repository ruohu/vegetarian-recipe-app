import React from 'react';
import './RecipeList.css';

import { useSelector } from 'react-redux';

import Card from '../card/Card';
import defaultImage from "../../assets/images/no-image.jpg";

const RecipeList = ({
  listName = "",
  recipes = []
}) => {

  const hasError = useSelector((state) => state.errorReducer.hasError);


  return (
    <>
      {!hasError &&
        <div className="recipe-list-container">
          <h2>{listName}</h2>
          <div className="recipe-cards">
            {recipes.map((recipe) => {
              return <Card
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image ? recipe.image : defaultImage}
              />
            })}
          </div>
        </div>
      }
    </>

  );
}

export default RecipeList;