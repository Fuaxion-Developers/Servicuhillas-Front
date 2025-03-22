import { Box } from "@mui/material";
import AccordionUsage from "./acordion/Acordion";
import Hero from "./hero/Hero";
import ImgInfo from "./imgInfo/ImgInfo";
import Info from "./info/Info";
import Numbers from "./numbers/Numbers";

const IndexHome = () => {
  return (
    <Box sx={{ width: "90%", mx: "auto", paddingTop: "13rem" }}>
      <Hero/>
      <Info/>
      <ImgInfo/>
      <Numbers/>
      <AccordionUsage/>
    </Box>
  );
};

export default IndexHome;
