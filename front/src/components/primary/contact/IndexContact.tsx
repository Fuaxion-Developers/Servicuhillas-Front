import Title from "./title/Title";
import Form from "./form/Form";
import Info from "./info/Info";
import Map from "./map/Map";
import { Box } from "@mui/material";

const IndexContact = () => {
  return (
    <Box sx={{
      paddingX: '10rem'
    }}>
      <Title/>
      <Box sx={{
        display: 'flex',
      }}>
        <Form/>
        <Info/>
      </Box>
      <Map/>
    </Box>
  );
};

export default IndexContact;
