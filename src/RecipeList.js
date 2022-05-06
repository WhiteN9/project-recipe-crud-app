import React from "react";

function RecipeList({ recipesArray, deleteRecipe }) {
  console.log(recipesArray[0]);
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const recipeList = recipesArray.map((recipe, index) => (
    <RecipeListItem
      key={index}
      {...recipe}
      deleteRecipe={() => deleteRecipe(index)}
    />
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="short">Name</th>
            <th className="short">Cuisine</th>
            <th className="short">Photo</th>
            <th className="long">Ingredients</th>
            <th className="long">Preparation</th>
            <th className="short">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="short">{recipesArray[0].name}</td>
            <td className="short">{recipesArray[0].cuisine}</td>
            <td className="short url">
              <img src={recipesArray[0].photo} />
            </td>
            <td className="long content_td">
              <p>{recipesArray[0].ingredients}</p>
            </td>
            <td className="long content_td">
              <p>{recipesArray[0].preparation}</p>
            </td>
            <td className="short">
              <button name="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
