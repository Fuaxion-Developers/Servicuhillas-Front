import { Box, Typography, Grid2 } from "@mui/material";

const Figures = () => {
  return (
    <Box sx={{ width: "90%", mx: "auto" }}>
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

      <Box sx={{
        display: "flex",
        alignItems: "center",
      }}>
        <Box
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
          <Box sx={{
          }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="#EAC01B"
              gutterBottom
            >
              96%
            </Typography>
            <Typography variant="body1" color="text.secondary">
              de nuestros clientes califican su experiencia con Servicuchillas
              como excepcional
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid2
            sx={{
              width: "30%",
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="#EAC01B">
              99.8%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              taza de recompra
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              width: "30%",
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="#EAC01B">
              4,000+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              cuchillas fabricadas en el último año
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              width: "30%",
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="#EAC01B">
              300+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              clientes satisfechos en el último año
            </Typography>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
};

export default Figures;
