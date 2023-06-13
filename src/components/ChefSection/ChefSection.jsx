import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((response) => response.json())
      .then((data) => setChefs(data));
    setLoading(false);
  }, []);
  return (
    <div id="chefs" className="text-center min-h-screen pt-16">
      <div className="container mx-auto">
        <h3 className="text-5xl font-bold text-orange-600">Chef Section</h3>
        <p className="mt-4 mb-16 px-16 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quisquam tempora quae, impedit corporis quo sed, quia quod in, dolorum
          tempore dignissimos ducimus blanditiis. Blanditiis placeat officia eum
          inventore deleniti? Ad voluptates totam veritatis facilis minus cum,
          commodi sequi provident nostrum et sit.
        </p>
        <div className="grid grid-cols-4 justify-center text-left gap-10">
          {chefs.map((chef) =>
            loading ? (
              <div key={chef.id} className="mx-auto py-16">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            ) : (
              <div
                className="bg-gray-100 text-gray-500 border-2 border-gray-100 shadow-sm hover:border-2 hover:border-orange-300"
                key={chef.id}
              >
                <div className="mb-5">
                  <img
                    className="bg-gray-300 px-3"
                    width="100%"
                    style={{ height: "300px", objectFit: "contain" }}
                    src={chef.chefPicture}
                    alt=""
                  />
                </div>
                <div className="px-4">
                  <h3 className="text-xl text-orange-600">{chef.chefName}</h3>
                  <p className="text-sm mb-1 mt-3">
                    Year of experience: {chef.yearOfExperience}
                  </p>
                  <p className="text-sm mb-1">Recipes: {chef.numOfRecipes}</p>
                  <p className="text-sm mb-1">Likes: {chef.likes}</p>
                  <div className="mt-5">
                    <Link to={`/chef_details/${chef.id}`}>
                      <button className="btn bg-orange-500 text-white mb-5 border-0 hover:bg-orange-600">
                        View Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
