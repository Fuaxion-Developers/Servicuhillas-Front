import { Box } from "@mui/material";
import History from './history/History'
import Identity from './identity/Identity'

const IndexAbout = () => {
  return (
    <Box sx={{
      width: "90%",
      mx: "auto",
      paddingTop: "12rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Identity/>
      <History/>
    </Box>
  )
}

export default IndexAbout
