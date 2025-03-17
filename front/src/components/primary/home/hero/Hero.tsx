// import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Image from "next/image";

const Hero = () => {
  return (
    <Box
      sx={{
        marginX: {
          mobile: "auto",
          tablet: "auto",
          laptop: "15rem",
          desktop: "15rem",
        },
        display: "flex",
        flexDirection: {
          mobile: "column",
          tablet: "column",
          laptop: "row",
          desktop: "row",
        },
        justifyContent: {
          mobile: "center",
          tablet: "center",
          laptop: "space-around",
          desktop: "space-around",
        },
        alignItems: { mobile: "center" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: {
            mobile: "100%",
            tablet: "100%",
            laptop: "60%",
            desktop: "60%",
          },
          gap: "2.4rem",
          display: "flex",
          flexDirection: "column",
          marginBottom: {
            mobile: "3rem",
            tablet: "3rem",
            laptop: "0",
            desktop: "0",
          },
        }}
      >
        <Typography variant="h1" sx={{ color: "#EAC01B" }}>
          Cuchillas industriales
        </Typography>
        <Typography variant="h2">Calidad que corta la diferencia </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Empresa especializada en la fabricación, mantenimiento y afilado de
          cuchillas industriales para las industrias del plástico, papel,
          madera, caucho, metal y alimentos.
        </Typography>
        <Box
          sx={{
            gap: "1.2rem",
            display: "flex",
            flexDirection: {
              mobile: "column",
              tablet: "column",
              laptop: "row",
              desktop: "row",
            },
            maxWidth: { mobile: "100%", tablet: "auto" },
          }}
        >
          <Button variant="contained" href={`/services`}>
            Empieza a Explorar
          </Button>
          <Button
            variant="contained"
            href={`/contact`}
            sx={{ background: "#282F3C", color: "#C9C9CA" }}
          >
            Contactar al equipo
            <ArrowForwardIcon sx={{ fontSize: "3rem", marginLeft: "1rem" }} />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            mobile: "100%",
            tablet: "100%",
            laptop: "35%",
            desktop: "35%",
          },
          height: {
            mobile: "25rem",
            tablet: "30rem",
            laptop: "35rem",
            desktop: "35rem",
          },
          borderRadius: "1.2rem",
          boxShadow: "2px 2px 10px #EAC01B",
          overflow: "hidden",
        }}
      >
        <Image
          alt="Productos"
          src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1742078756/Todas_1_otb35i.png"
          width={500}
          height={300}
          style={{
            width: "100%", // Hace que la imagen se adapte al contenedor
            height: "100%", // Mantiene la proporción
            objectFit: "cover", // Evita la distorsión y llena el box
          }}
        ></Image>
      </Box>
    </Box>
  );
};

export default Hero;
