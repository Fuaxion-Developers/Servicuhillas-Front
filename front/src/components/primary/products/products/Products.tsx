"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "300px",
  color: theme.palette.text.secondary,
  borderRadius: "16px", // 🔹 Bordes redondeados
  overflow: "hidden", // 🔹 Evita que la imagen sobresalga del Item
  ...theme.applyStyles("dark", {
    backgroundColor: "#111",
  }),

  "&:hover img": {
    transform: "scale(1.1)", // 🔥 Efecto de agrandar la imagen
    transition: "transform 0.5s ease-in-out", // ⚡ Suaviza la animación
  },
}));

export default function Products() {
  return (
    <Box sx={{ padding: "100px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* <Link href="/products/plastic" passHref> */}
          <Grid size={8}>
            <Item
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "300px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741636464/plastic_02_feihyn.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -9,
                  left: 0,
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  zIndex: 1,
                  color: "white",
                  padding: "16px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Cuchillas para la industria del plástico
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
          {/* </Link> */}
          <Grid size={4}>
            <Item sx={{ padding: 0, overflow: "hidden", height: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741730891/linea-papel_wj0m4y.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    zIndex: 1,
                    color: "white",
                    padding: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo más oscuro para mejorar la legibilidad
                  }}
                >
                  Cuchillas para la industria del papel
                  <ArrowOutwardIcon sx={{ fontSize: 20, marginLeft: "6px" }} />
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid size={4}>
            <Item sx={{ padding: 0, overflow: "hidden", height: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741730810/linea-madera_02_liy1ny.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    zIndex: 1,
                    color: "white",
                    padding: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo más oscuro para mejorar la legibilidad
                  }}
                >
                  Cuchillas para la industria de la madera
                  <ArrowOutwardIcon sx={{ fontSize: 20, marginLeft: "6px" }} />
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid size={8}>
            <Item
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "300px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741730808/linea-caucho_emewv9.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -9,
                  left: 0,
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  zIndex: 1,
                  color: "white",
                  padding: "16px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Cuchillas para la industria del caucho
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
          <Grid size={8}>
            <Item
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "300px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741730762/linea-metalmecanica_02_cavvts.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -9,
                  left: 0,
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  zIndex: 1,
                  color: "white",
                  padding: "16px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Cuchillas para la industria metalmecánica
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>

          <Grid size={4}>
            <Item sx={{ padding: 0, overflow: "hidden", height: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741730727/linea-alimentos_ci9fsb.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    zIndex: 1,
                    color: "white",
                    padding: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo más oscuro para mejorar la legibilidad
                  }}
                >
                  Cuchillas para la industria de alimentos
                  <ArrowOutwardIcon sx={{ fontSize: 20, marginLeft: "6px" }} />
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
