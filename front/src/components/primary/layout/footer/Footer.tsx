"use client";
import { Box, Typography } from "@mui/material";
import Fuaxion from "@/assets/svg/LogoFuaxion.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ mx: "-3vw" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          py: "3.6rem",
          px: { mobile: "2rem", tablet: "6rem" }, // Más espacio en tablets/desktop
          mt: "10rem",
          borderTop: "0.1rem solid #363636",
          gap: { mobile: "5rem", tablet: "10rem" }, // Menos gap en móviles
          position: "relative",
        }}
      >
        {/* Contenedor Principal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { mobile: "column", tablet: "row" }, // Column en móviles, row en tablets+
            justifyContent: "space-between",
            alignItems: { mobile: "center", tablet: "flex-start" }, // Centrado en móviles
            textAlign: { mobile: "center", tablet: "left" }, // Texto centrado en móviles
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              width: {
                mobile: "100%",
                tablet: "30%",
                laptop: "30%",
                desktop: "30%",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  mobile: "90%",
                  tablet: "80%",
                  laptop: "70%",
                },
                mx: "auto",
              }}
            >
              <Image
                alt="Productos"
                src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1742098349/LogoServicuchillas_wcd5v5.svg"
                width={500}
                height={300}
                style={{
                  width: "100%", // Hace que la imagen se adapte al contenedor
                  height: "100%", // Mantiene la proporción
                  objectFit: "contain", // Evita la distorsión y llena el box
                }}
              ></Image>
            </Box>
          </Box>

          {/* Descripción */}
          <Box
            sx={{
              width: {
                mobile: "100%",
                tablet: "30%",
                laptop: "30%",
                desktop: "30%",
              },
              display: "flex",
              justifyContent: "center",
              mt: { mobile: "2rem", tablet: "0" }, // Margen superior solo en móviles
            }}
          >
            <Typography variant="body2" align="center">
              Fabricación y afilado de cuchillas para la industria del plástico,
              papel, madera, caucho, metal y alimentos. <br /> Servicio de
              rectificadora plana hasta cuatro metros.
            </Typography>
          </Box>

          {/* Información de la Empresa */}
          <Box
            sx={{
              mt: { mobile: "2rem", tablet: "0" },
              width: {
                mobile: "100%",
                tablet: "30%",
                laptop: "30%",
                desktop: "30%",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: {
                mobile: "center",
                tablet: "center",
                laptop: "center",
                desktop: "center",
              },
            }}
          >
            <Typography variant="h4" sx={{ color: "#FBC600", mb: "1rem" }}>
              Empresa
            </Typography>
            <Typography variant="body2">Cra. 86B No. 41 - 10 Sur</Typography>
            <Typography variant="body2">
              Tel: 601 293 9965 - 322 789 1682
            </Typography>
            <Typography variant="body2">Bogotá, D.C. </Typography>
          </Box>
        </Box>

        {/* Derechos de Autor */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { mobile: "column", tablet: "row" },
            gap: "1.2rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            &copy; 2025 - SERVICUCHILLAS LTDA. Elaborado por{" "}
          </Typography>
          <Link
            href="https://landing-fuaxions.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fuaxion />
          </Link>
        </Box>

        {/* Botón de WhatsApp Fijo */}
        <Box
          sx={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 10,
          }}
        >
          <Link
            href="https://wa.me/573227891682?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios%20de%20fabricación%20y%20afilado%20de%20cuchillas."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon
              sx={{
                color: "#fff",
                backgroundColor: "#25d366",
                borderRadius: "50%",
                p: "0.5rem",
                boxShadow: "0 0.4rem 0.6rem rgba(0, 0, 0, 0.2)",
                width: { mobile: "4rem", tablet: "5rem" }, // Tamaño menor en móviles
                height: { mobile: "4rem", tablet: "5rem" },
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
