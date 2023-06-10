import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setChefs(data));
    setLoading(false);
  }, []);
  return (
    <div className="text-center container mx-auto py-16">
      <h3 className="text-4xl font-bold">Chef Section</h3>
      <p className="mt-4 mb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        quisquam tempora quae, impedit corporis quo sed, quia quod in, dolorum
        tempore dignissimos ducimus blanditiis. Blanditiis placeat officia eum
        inventore deleniti? Ad voluptates totam veritatis facilis minus cum,
        commodi sequi provident nostrum et sit.
      </p>
      <div className="grid grid-cols-3 justify-center gap-10">
        {chefs.map((chef) =>
          loading ? (
            <div key={chef.id} className="mx-auto py-16">
              <span
                className="loading loading-spinner loading-lg text-primary"
              ></span>
            </div>
          ) : (
            <div
              className="bg-primary border border-spacing-36 text-white mb-3 rounded-lg"
              key={chef.id}
            >
              <div className="mb-5">
                <img
                  className="bg-white rounded"
                  width="100%"
                  style={{ height: "300px", objectFit: "contain" }}
                  src={chef.chefPicture}
                  alt=""
                />
              </div>
              <h3 className="text-3xl">{chef.chefName}</h3>
              <p>Year of experience: {chef.yearOfExperience}</p>
              <p>Recipes: {chef.numOfRecipes}</p>
              <p>Likes: {chef.likes}</p>
              <div className="mt-5">
                <Link to={`/chef_details/${chef.id}`}>
                  <button className="btn mb-5">View Details</button>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChefSection;
