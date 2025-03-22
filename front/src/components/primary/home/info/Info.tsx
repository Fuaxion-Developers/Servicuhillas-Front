import { Box, Typography } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
import FactoryIcon from "@mui/icons-material/Factory";

const infoData = [
  {
    icon: <VerifiedOutlinedIcon sx={{ color: "#EAC01B", fontSize: "3rem" }} />,
    title: "Diseño centrado en el cliente",
    description:
      "En Servicuchillas Ltda., cada producto es diseñado para garantizar máximo rendimiento y durabilidad, adaptándose a las necesidades específicas de cada industria. Brindamos soluciones precisas con un servicio cercano y personalizado.",
  },
  {
    icon: <Groups3Icon sx={{ color: "#EAC01B", fontSize: "3rem" }} />,
    title: "Equipo de trabajo",
    description:
      "Nuestro equipo combina experiencia, compromiso y pasión por la calidad. Como empresa de tradición familiar, valoramos el trabajo en equipo y la mejora continua para ofrecer soluciones óptimas con un trato humano y profesional.",
  },
  {
    icon: <FactoryIcon sx={{ color: "#EAC01B", fontSize: "3rem" }} />,
    title: "Satisfacer las demandas de la industria",
    description:
      "Las industrias exigen precisión y eficiencia, y en Servicuchillas Ltda. respondemos con tecnología, calidad y rapidez. Nuestro compromiso es entregar productos de alto desempeño que superen las expectativas del sector.",
  },
];

const Info = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          mobile: "column",
          tablet: "column",
          laptop: "row",
          desktop: "row",
        },
        paddingTop: {
          mobile: "5rem",
          tablet: "10rem",
          laptop: "15rem",
        },
        justifyContent: "space-around",
      }}
    >
      {infoData.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: {
              mobile: "100%",
              tablet: "100%",
              laptop: "30%",
              desktop: "30%",
            },
            paddingBottom: {
              mobile: "2rem",
              tablet: "3rem",
              laptop: "0",
              desktop: "0",
            },
            display: "flex",
            gap: "1.2rem",
          }}
        >
          {item.icon}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Info;
