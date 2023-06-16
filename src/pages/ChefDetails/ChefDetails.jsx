import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CustomToast from "../../components/CustomToast/CustomToast";

const ChefDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const chefDetails = useLoaderData();
  const favoriteRecipesRef = useRef(favoriteRecipes);
  favoriteRecipesRef.current = favoriteRecipes;

  useEffect(() => {
    const selectedRecipe = chefDetails?.recipes[0];
    setRecipe(selectedRecipe);
  }, [chefDetails]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("favoriteRecipes"));
    if (storedRecipes) {
      setFavoriteRecipes(storedRecipes);
    }
  }, []);

  const handleLoadRecipe = (index) => {
    const selectedRecipe = chefDetails?.recipes[index];
    setRecipe(selectedRecipe);
  };

  const handleFavoriteItems = (setId, recipeId) => {
    const newRecipe = { setId, recipeId };
    const isDuplicate = favoriteRecipes.some(
      (recipe) => recipe.setId === setId && recipe.recipeId === recipeId
    );
    if (isDuplicate) {
      // Recipe already exists, do not add it again
      return;
    }
    setFavoriteRecipes((prevFavorites) => {
      setShowToast((current) => (current = true));
      setTimeout(() => {
        setShowToast((current) => (current = false));
      }, 2000);
      const updatedFavorites = [...prevFavorites];
      updatedFavorites.push(newRecipe);
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const isRecipeFavorite = (setId, recipeId) => {
    return favoriteRecipes.some(
      (recipe) => recipe?.setId === setId && recipe?.recipeId === recipeId
    );
  };

  return (
    <div className="container mx-auto mt-10 mb-16">
      <CustomToast showToast={showToast}></CustomToast>
      <div className="banner card card-compact bg-gray-100 p-10 rounded-none shadow-sm mb-10">
        <div className="flex gap-10">
          <div className="flex justify-center items-center bg-slate-300">
            <img
              width="200px"
              height="180px"
              src={chefDetails.chefPicture}
              alt=""
            />
          </div>
          <div className="flex-auto">
            <h2 className="text-2xl font-bold text-orange-600">About Chef:</h2>
            <hr className="bg-orange-600 mb-3" />
            <h3 className="text-xl mb-1 text-orange-600">
              {chefDetails.chefName}
            </h3>
            <p className="text-gray-600">Category: {chefDetails.category}</p>
            <p className="text-gray-600">
              Year of experience: {chefDetails.yearOfExperience}
            </p>
            <p className="text-gray-600">
              Number of recipes: {chefDetails.numOfRecipes}
            </p>
            <p className="text-gray-600">Likes: {chefDetails.likes}</p>
            <p className="text-gray-600">
              Description: {chefDetails.description}
            </p>
          </div>
        </div>
        <div className="mt-10">
          {chefDetails.recipes?.map((recipe, index) => (
            <button
              key={index}
              className="btn border-0 bg-orange-500 text-white hover:bg-orange-600 rounded-none"
              onClick={() => handleLoadRecipe(index)}
            >
              Recipe {index + 1}
            </button>
          ))}
          <div className="flex card card-compact rounded-none mt-5 text-gray-600">
            <div className="flex items-center justify-between">
              <p className="text-orange-600 text-xl">
                Recipe name: {recipe?.recipeName}
              </p>
              <button
                onClick={() =>
                  handleFavoriteItems(chefDetails?.id, recipe?.recipeId)
                }
                disabled={isRecipeFavorite(chefDetails?.id, recipe?.recipeId)}
                className="btn bg-orange-500 border-0 hover:bg-orange-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
              </button>
            </div>
            <p>
              <span className="text-orange-600">Cooking Method: </span>{" "}
              {recipe?.cookingMethod}
            </p>
            <p>
              <span className="text-orange-600">Rating: </span> {recipe?.rating}
            </p>
            <div>
              <span className="text-orange-600">Ingredients:</span>{" "}
              {recipe?.ingredients.map((ingred, index) => (
                <span key={index} className="capitalize">
                  {ingred},{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
