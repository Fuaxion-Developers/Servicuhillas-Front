import Title from "./title/Title";
import Form from "./form/Form";
import Info from "./info/Info";
import Map from "./map/Map";
import { Box } from "@mui/material";

const IndexContact = () => {
  return (
    <Box sx={{
      width: "90%",
      mx: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Title/>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          mobile: "column",
          laptop: "row",
        },
        width: "100%"
      }}>
        <Form/>
        <Info/>
      </Box>
      <Map/>
    </Box>
  );
};

export default IndexContact;
