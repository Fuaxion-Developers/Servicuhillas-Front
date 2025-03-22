"use client";
import { Box, Grid2, Typography, Paper, Avatar } from "@mui/material";

const testimonials = [
  {
    text: '"Excelente atención y buenos precios."',
    name: "Bryan Rico P.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    text: '"Muy buen servicio y atención"',
    name: "Cesar Gonzalez",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
  },
  {
    text: '"Muy buena atención"',
    name: "Rolmar Suarez",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    text: '"Muy buen servicio"',
    name: "Elier Herrera",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: '"Son muy buenos sus productos"',
    name: "Alvaro Rodriguez",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    text: '"Excelente servicio y buenos materiales"',
    name: "Carlos ABotache",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    text: '"Excelente"',
    name: "Alejandro Guerrero",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    text: '"Excelente servicio"',
    name: "Alfonso Roa",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const WhyUs = () => {
  return (
    <Box sx={{ padding: "5rem 2.5rem", textAlign: "center" }}>
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
          <Grid2 size={3} key={index} sx={{
            width: {
              mobile: "100%",
              tablet: "45%",
              laptop: "30%",
              desktop: "20%",
            },
          }}>
            <Paper
              sx={{
                backgroundColor: "#1E1E1E",
                color: "white",
                padding: "20px",
                alignItems: "center",
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
                  <Typography variant="body2" color="gray"></Typography>
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
