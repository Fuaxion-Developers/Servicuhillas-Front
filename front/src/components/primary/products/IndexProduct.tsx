import React from "react";
import Products from "./products/Products";
import WhyUs from "./whyUs/WhyUs";
import Recomendations from "./recomendations/Recomendations";

const IndexProduct = () => {
  return (
    <div>
      <Products></Products>
      <Recomendations></Recomendations>
      <WhyUs></WhyUs>
    </div>
  );
};

export default IndexProduct;
