import React from "react";

const Banner = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="hero min-h-screen bg-orange-600 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          width="500px"
          src="/src/assets/banner.png"
          className="rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold mb-5">Choose your</h1>
          <h1 className="text-5xl font-bold mb-5">Best Chefs, Best Recipes</h1>
          <h1 className="text-5xl font-bold">Taste is Awesome!!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cum voluptatibus tempora deserunt ea numquam adipisci nostrum autem
            eum quos at dolorem, inventore nemo doloremque rem repellendus amet
            enim consequuntur molestias.
          </p>
          <button
            onClick={() => scrollToElement("chefs")}
            className="btn bg-white border-0 font-bold btn-md text-orange-600 mt-6 hover:bg-gray-200"
          >
            Get your Chefs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
