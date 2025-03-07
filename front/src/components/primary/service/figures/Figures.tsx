import { Box, Typography, Grid2 } from "@mui/material";

const Figures = () => {
  return (
    <Box sx={{ maxWidth: "85rem", mx: "auto" }}>
      <Box sx={{ maxWidth: "600px", textAlign: "left", ml: 0, mb: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
        >
          Cifras
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Nuestro compromiso con la calidad y precisión se refleja en cada una
          de nuestras cuchillas. En Servicuchillas, nos especializamos en
          ofrecer soluciones de corte industrial de alto rendimiento,
          garantizando durabilidad y eficiencia en cada proceso productivo.
        </Typography>
      </Box>

      <Grid2 container spacing={6} alignItems="center">
        <Grid2
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRight: "2px solid lightgray",
            pr: 4,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="orange"
              gutterBottom
            >
              96%
            </Typography>
            <Typography variant="body1" color="text.secondary">
              de nuestros clientes califican su experiencia con Servicuchillas como excepcional
            </Typography>
          </Box>
        </Grid2>

        <Grid2>
          <Grid2 container spacing={4}>
            <Grid2
              sx={{
                width: "30%",
              }}
            >
              <Typography variant="h4" fontWeight="bold" color="orange">
                99.8%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                taza de finalización de proyectos
              </Typography>
            </Grid2>
            <Grid2
              sx={{
                width: "30%",
              }}
            >
              <Typography variant="h4" fontWeight="bold" color="orange">
                5,000+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                cuchillas fabricadas
              </Typography>
            </Grid2>
            <Grid2
              sx={{
                width: "30%",
              }}
            >
              <Typography variant="h4" fontWeight="bold" color="orange">
                85%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                crecimiento de clientes año tras año
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Figures;
