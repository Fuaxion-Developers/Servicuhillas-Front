"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";

const Recomendations = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "50px",
      }}
    >
      {/* Sección de Imágenes */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 2 }}>
        <Image
          src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741735449/5574dfa6-3e20-4eff-8339-4e332cdcba9a_no2g9e.png"
          alt="Box 1"
          width={500}
          height={500}
          style={{ transform: "rotate(-10deg)" }}
        />
      </Box>

      {/* Sección de Texto */}
      <Box sx={{ flex: 1, color: "white", padding: "20px" }}>
        <Typography variant="h4" fontWeight="bold">
          ¿Por qué elegir ServiCuchillas?
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px", opacity: 0.8 }}>
          Convierte tus ideas en resultados precisos con las cuchillas de
          ServiCuchillas. Ya sea que necesites herramientas de corte para la
          industria metalúrgica, papelera, maderera o plástica, nuestras
          cuchillas están diseñadas para ofrecer máxima precisión y durabilidad.
        </Typography>

        {/* Lista de Beneficios */}
        <List sx={{ marginTop: "20px" }}>
          {[
            "Cuchillas robustas y resistentes para un rendimiento de larga duración.",
            "Soluciones innovadoras adaptadas a las necesidades de cada industria.",
            "Soporte especializado para garantizar el éxito de tus proyectos.",
          ].map((text, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <ListItemIcon>
                <CheckCircleOutlineIcon sx={{ color: "#F45C43" }} />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Recomendations;
