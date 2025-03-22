'use client'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import { useState, useEffect } from "react";

const Recomendations = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Ejecutar al cargar
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: {
          mobile: "column",
          laptop: "row",
        },
        alignItems: "center",
        mx: "auto",
      }}
    >
      {/* Sección de Imágenes */}
      <Box
        sx={{
          width: {
            mobile: "100%",
            tablet: "100%",
            laptop: "20%",
            desktop: "40%",
          },
          // height: {
          //   mobile: "25rem",
          //   tablet: "30rem",
          //   laptop: "20vw",
          //   desktop: "20vw",
          // },
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          borderRadius: "1.2rem",
          overflow: "hidden",
          mx: "auto",
        }}
      >
        <Image
          src={
            screenWidth >= 1440
              ? "https://res.cloudinary.com/dzhh3k5kj/image/upload/a_-90/v1742250592/Todas_1_dpkusj.png"
              : screenWidth >= 1024
              ? "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1742250592/Todas_1_dpkusj.png"
              : "https://res.cloudinary.com/dzhh3k5kj/image/upload/a_-90/v1742250592/Todas_1_dpkusj.png"
          }
          alt="Cuchillas industriales"
          width={500}
          height={500}
          style={{
            width: "100%", // Hace que la imagen se adapte al contenedor
            height: "100%", // Mantiene la proporción
            objectFit: "contain", // Llena el espacio sin distorsionar
            // objectPosition: "top", // Asegura que siempre se vea la parte superior
            borderRadius: "1.2rem",
          }}
        />
      </Box>

      {/* Sección de Texto */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          color: "white",
          padding: {
            mobile: "7rem 0",
            laptop: "3rem 0 3rem 0",
          },
          width: {
            mobile: "100%",
            laptop: "70%",
          },
          marginLeft: {
            mobile: "0",
            laptop: "5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "felx",
            flexDirection: "column",
            alignItems: {
              mobile: "center",
              tablet: "center",
              laptop: "center",
              desktop: "center",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            ¿Por qué elegir Servicuchillas?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "10px",
              opacity: 0.8,
            }}
          >
            Convierte tus ideas en resultados precisos con las cuchillas de
            Servicuchillas. Ya sea que necesites herramientas de corte para la
            industria metalúrgica, papelera, maderera o plástica, nuestras
            cuchillas están diseñadas para ofrecer máxima precisión y
            durabilidad.
          </Typography>

          {/* Lista de Beneficios */}
          <List
            sx={{
              marginTop: "20px",
              textAlign: {
                mobile: "center",
                tablet: "center",
                laptop: "left",
                desktop: "left",
              },
            }}
          >
            {[
              "Cuchillas robustas y resistentes para un rendimiento de larga duración.",
              "Soluciones innovadoras adaptadas a las necesidades de cada industria.",
              "Soporte especializado para garantizar el éxito de tus proyectos.",
            ].map((text, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: "#F45C43" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Recomendations;
