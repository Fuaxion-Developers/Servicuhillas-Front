'use client';
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginY: "15rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{ fontSize: "10rem", padding: "5rem"}}>404</Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <Typography style={{ fontSize: "3rem"}}>Página no encontrada</Typography>
        <Typography>Lo sentimos, la página que buscas no existe.</Typography>
      </Box>
    </Box>
  );
}

export default NotFound;