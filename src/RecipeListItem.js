import React from "react";

export const RecipeListItem = (recipe) => {
  console.log(recipe);
  return (
    <React.Fragment>
      <tr>
        <td className="short">{recipe.name}</td>
        <td className="short">{recipe.cuisine}</td>
        <td className="short url">
          <img src={recipe.photo} alt="food phot"/>
        </td>
        <td className="long content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="long content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td className="short">
          <button name="delete" onClick={recipe.deleteRecipe}>Delete</button>
        </td>
      </tr>
    </React.Fragment>
  );
};
