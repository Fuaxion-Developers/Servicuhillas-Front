import { Box } from "@mui/material";
import History from './history/History'
import Identity from './identity/Identity'

const IndexAbout = () => {
  return (
    <Box sx={{
      paddingTop: "12rem"
    }}>
      <Identity></Identity>
      <History></History>
    </Box>
  )
}

export default IndexAbout
