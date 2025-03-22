import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <Box textAlign="center" sx={{
      width: "100%",
      paddingTop: '10rem',
      marginBottom: "5rem",
    }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
        sx={{ typography: { md: "h3" } }}
      >
        Contáctanos
      </Typography>
      <Typography variant="body1" color="text.secondary">
      ¿Tienes preguntas? Comunícate con nosotros y diseñemos la solución perfecta con nuestras herramientas y servicios.
      </Typography>
    </Box>
  );
}

export default Title;