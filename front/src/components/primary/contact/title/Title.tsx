import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <Box textAlign="center" sx={{
        padding: '100px'
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