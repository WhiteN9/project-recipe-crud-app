import React from "react";

function RecipeList({ recipesArray }) {
  console.log(recipesArray[0]);
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="short">{recipesArray[0].name}</th>
            <th className="short">{recipesArray[0].cuisine}</th>
            <th className="short">{recipesArray[0].photo}</th>
            <th className="long">{recipesArray[0].ingredients}</th>
            <th className="long">{recipesArray[0].preparation}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
