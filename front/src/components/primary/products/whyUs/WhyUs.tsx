"use client";
import React from "react";
import { Box, Grid2, Typography, Paper, Avatar } from "@mui/material";

const testimonials = [
  {
    text: "Excelente atención y buenos precios.",
    name: "Bryan Rico P.",
    role: "Gerente de Compras | Metalúrgica Industrial",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    text: "Muy buen servicio y atención",
    name: "Cesar Gonzalez",
    role: "Ingeniero de Producción | Fábrica de Muebles",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
  },
  {
    text: "Muy buena atención",
    name: "Rolmar Suarez",
    role: "Supervisor de Calidad | Industria Papelera",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    text: "Muy buen servicio",
    name: "Elier Herrera",
    role: "Especialista en Corte | Metalúrgica Industrial",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Son muy buenos sus productos",
    name: "Alvaro Rodriguez",
    role: "Técnico en Mecanizado | Industria Plástica",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    text: "Excelente servicio y buenos materiales",
    name: "Carlos ABotache",
    role: "Jefe de Producción | Fábrica de Herramientas",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    text: "Excelente",
    name: "Alejandro Guerrero",
    role: "Director Técnico | Industria Automotriz",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    text: "Excelente servicio",
    name: "Alfonso Roa",
    role: "Ingeniero en Procesos | Fábrica de Equipos de Corte",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const WhyUs = () => {
  return (
    <Box sx={{ padding: "25px", textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white"
        sx={{ marginBottom: "30px" }}
      >
        Lo que dicen nuestros clientes
      </Typography>

      <Grid2 container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid2 size={3} key={index}>
            <Paper
              sx={{
                backgroundColor: "#1E1E1E",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography variant="body1" fontStyle="italic">
                {testimonial.text}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  backgroundColor: "#292929",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <Avatar
                  src={testimonial.image}
                  sx={{ width: 40, height: 40, marginRight: "10px" }}
                />
                <Box>
                  <Typography fontWeight="bold">{testimonial.name}</Typography>
                  <Typography variant="body2" color="gray">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default WhyUs;
