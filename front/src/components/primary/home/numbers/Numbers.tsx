import { Typography, Box, Grid2 } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const statistics = [
  {
    value: "96%",
    description:
      "de nuestros clientes califican su experiencia con Servicuchillas como excepcional",
  },
  {
    value: "99.8%",
    description:
      "de nuestros clientes han vuelto a adquirir nuestros servicios",
  },
  {
    value: "4.000",
    description: "cuchillas fabricadas en el último año",
    icon: <ArrowUpwardIcon sx={{ color: "#EAC01B", fontSize: "2rem" }} />,
  },
  {
    value: "300",
    description: "clientes satisfechos en el último año",
    icon: <ArrowUpwardIcon sx={{ color: "#EAC01B", fontSize: "2rem" }} />,
  },
];

const Numbers = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          mobile: "column",
          desktop: "row",
        },
        marginTop: {
          mobile: "5rem",
          tablet: "10rem",
        },
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          width: {
            mobile: "95%",
            desktop: "45%",
          },
          paddingBottom: {
            mobile: "2rem",
            tablet: "3rem",
            laptop: "3rem",
            desktop: "0",
          },
        }}
      >
        <Box>
          <Typography variant="h2">Mejore su productividad</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Entendemos que la eficiencia en los procesos de corte es clave para
            el éxito de su industria. Por eso, fabricamos y afilamos cuchillas
            industriales con los más altos estándares de calidad, asegurando un
            rendimiento óptimo y una mayor durabilidad. Nuestras herramientas
            están diseñadas para minimizar el desperdicio de material, reducir
            tiempos de inactividad y mejorar la precisión en cada corte. Con
            nuestra experiencia y tecnología, ayudamos a que su producción sea
            más rápida, eficiente y rentable.
          </Typography>
        </Box>
      </Box>

      <Grid2
        container
        sx={{
          width: {
            mobile: "100%",
            desktop: "45%",
          },
        }}
      >
        {statistics.map((stat, index) => (
          <Grid2
            size={{ mobile: 12, tablet: 12, laptop: 6, desktop: 6 }}
            key={index}
            sx={{
              padding: "3.6rem",
              margin: {
                mobile: "2rem",
                laptop: "0",
              },
              borderRight: {
                mobile: 2,
                laptop: index % 2 === 0 ? 2 : 0,
              },
              borderBottom: {
                mobile: 2,
                laptop: index < 2 ? 2 : 0,
              },
              borderColor: "#848C8E",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {stat.icon && stat.icon}
              <Typography variant="h2" sx={{ fontSize: "4.8rem" }}>
                {stat.value}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {stat.description}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Numbers;
