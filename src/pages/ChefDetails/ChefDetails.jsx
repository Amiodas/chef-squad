import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CustomToast from "../../components/CustomToast/CustomToast";

const ChefDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const chefDetails = useLoaderData();
  console.log(chefDetails);

  useEffect(() => {
    const selectedRecipe = chefDetails?.recipes[0];
    setRecipe(selectedRecipe);
  }, [chefDetails]);

  const handleLoadRecipe = (index) => {
    const selectedRecipe = chefDetails?.recipes[index];
    setRecipe(selectedRecipe);
  };

  const handleFavoriteBtn = (id) => {
    console.log(id);
    setShowToast((current) => (current = true));
    setTimeout(() => {
      setShowToast((current) => (current = false));
    }, 2000);
  };
  return (
    <div>
      <CustomToast showToast={showToast}></CustomToast>
      <div className="banner flex">
        <div className="flex-auto">
          <img src={chefDetails.chefPicture} alt="" />
        </div>
        <div className="flex-auto">
          <h3>{chefDetails.chefName}</h3>
          <p>Category: {chefDetails.category}</p>
          <p>Year of experience: {chefDetails.yearOfExperience}</p>
          <p>Number of recipes: {chefDetails.numOfRecipes}</p>
          <p>Likes: {chefDetails.likes}</p>
          <p>Description: {chefDetails.description}</p>
        </div>
      </div>

      <div>
        {chefDetails.recipes?.map((recipe, index) => (
          <button
            key={index}
            className="btn btn-primary mr-3"
            onClick={() => handleLoadRecipe(index)}
          >
            Recipe {index + 1}
          </button>
        ))}
        <div>
          <p>{recipe?.recipeName}</p>
          <p>Cooking Method: {recipe?.cookingMethod}</p>
          <p>Rating: {recipe?.rating}</p>
          <div>
            Ingredients:{" "}
            {recipe?.ingredients.map((ingred, index) => (
              <span key={index}>{ingred}, </span>
            ))}
          </div>
          <button
            disabled={recipe?.favorite}
            onClick={() => handleFavoriteBtn(recipe.recipeId)}
            className="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
