import React from "react";
import Products from "./products/Products";
import WhyUs from "./whyUs/WhyUs";
import Recomendations from "./recomendations/Recomendations";
import { Box } from "@mui/material";

const IndexProduct = () => {
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        marginTop: {
          mobile: "10rem",
          tablet: "10rem",
          laptop: "15rem",
          desktop: "15rem",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Products></Products>
      <Recomendations></Recomendations>
      <WhyUs></WhyUs>
    </Box>
  );
};

export default IndexProduct;
