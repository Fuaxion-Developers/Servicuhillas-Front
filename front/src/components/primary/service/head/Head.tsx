"use client";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useRef } from "react";

const Head = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play(); // Reproduce automáticamente

      const pauseTimeout = setTimeout(() => {
        video.pause();
      }, 6320);

      return () => clearTimeout(pauseTimeout);
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        mx: 'auto',
        borderBottom: "2px solid lightgray",
        paddingBottom: "100px",
        marginBottom: '100px',
      }}
    >
      <Box
        sx={{
          width: "30%",
          maxWidth: "800px",
          mx: "auto",
          overflow: "hidden",
          marginLeft: '150px'
        }}
      >
        <video ref={videoRef} width="100%" autoPlay muted>
          <source
            src="https://res.cloudinary.com/dkobjvdgn/video/upload/v1741320354/0001-0160_iqmszg.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el video.
        </video>
      </Box>

      <Box sx={{
        maxWidth: "60%",
        ml: 0,
        textAlign: "left",
        p: 2,
      }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Experiencia que se ajusta a sus necesidades
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: "900px", ml: 0, mb: 3 }}
        >
          Estamos comprometidos con la calidad, precisión y durabilidad en cada
          uno de nuestros productos. Tenemos basta experiencia en la fabricación
          y afilado de cuchillas para diversas industrias, ofrecemos soluciones
          eficientes que optimizan los procesos de corte y reducen costos
          operativos.
        </Typography>
        <Typography
          variant="body1"
          color="#EAC01B"
          sx={{ maxWidth: "900px", ml: 0, mb: 3 }}
        >
          Fabricamos bajo muestra física o plano suministrado por el cliente.
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          href={`/contact`}
          sx={{
            fontWeight: "bold",
            px: 3,
            py: 1.5,
            textTransform: "none",
          }}
        >
          Contáctanos
        </Button>
      </Box>
    </Box>
  );
};

export default Head;
