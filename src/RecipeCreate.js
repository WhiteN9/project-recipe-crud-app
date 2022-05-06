import React, { useState } from "react";

function RecipeCreate({ makeRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [dataForm, setDataForm] = useState({ ...initialForm });

  const handleChange = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    makeRecipe(dataForm);
    setDataForm({ ...initialForm });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                name="name"
                value={dataForm.name}
                onChange={handleChange}
                required
                placeholder="Name"
              ></input>
            </td>
            <td>

            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
