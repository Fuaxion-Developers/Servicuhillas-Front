"use client";
import React from "react";
import { Box, Grid2, Typography, Paper, Avatar } from "@mui/material";

const testimonials = [
  {
    text: `Desde que trabajamos con ServiCuchillas, la precisión y eficiencia en nuestros cortes ha mejorado significativamente. Sus cuchillas personalizadas se adaptan perfectamente a nuestras máquinas, garantizando un rendimiento superior y una mayor durabilidad. Sin duda, un aliado clave para nuestra producción.`,
    name: "Juan Pérez",
    role: "Jefe de producción | Metalúrgica Industrial",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: `"Como diseñadora, siempre busco herramientas que combinen calidad y precisión. ServiCuchillas nos ha permitido trabajar con cuchillas a medida para cada tipo de material, desde madera hasta plásticos industriales. Su atención al detalle y el excelente servicio postventa marcan la diferencia."`,
    name: "Ana Rodriguez",
    role: "Diseñadora Industrial | Muebles Creativos",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: `"Después de más de 10 años en la industria, puedo decir que las cuchillas de ServiCuchillas son de las mejores que hemos utilizado. Su capacidad para fabricar herramientas de corte personalizadas nos ha permitido optimizar el proceso de producción y reducir costos. La calidad y el servicio son simplemente impecables."`,
    name: "Jeroham Sanchez",
    role: "Supervisor de Planta | Industria Papelera",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const WhyUs = () => {
  return (
    <Box sx={{ padding: "50px", textAlign: "center" }}>
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
