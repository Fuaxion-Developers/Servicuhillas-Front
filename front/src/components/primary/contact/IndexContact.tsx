import Title from "./title/Title";
import Form from "./form/Form";
import Info from "./info/Info";
import { Box } from "@mui/material";

const IndexContact = () => {
  return (
    <Box>
      <Title></Title>
      <Box sx={{
        display: 'flex'
      }}>
        <Form></Form>
        <Info></Info>
      </Box>
    </Box>
  );
};

export default IndexContact;
