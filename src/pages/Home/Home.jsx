import React from "react";
import Banner from "../../components/Banner/Banner";
import ChefSection from "../../components/ChefSection/ChefSection";
import Gallery from "../../components/Gallery/Gallery";
import Category from "../../components/category/category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category />
      <ChefSection></ChefSection>
      <Gallery />
    </div>
  );
};

export default Home;
