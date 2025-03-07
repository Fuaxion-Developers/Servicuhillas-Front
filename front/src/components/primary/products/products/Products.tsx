"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "200px",
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
          <Grid size={8}>
            <Item>
              <Box>
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359734/cuchillas/gdhufc5kevf2bgtfr3q2.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Cuchillas para la industria del plástico
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>
              <Box>
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359735/cuchillas/ifbyi1lexmfsyi8hwm6f.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Cuchillas para la industria del papel
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>
              <Box>
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359739/cuchillas/mjw1s4ibx4op0uqwccvv.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Cuchillas para la industria de la madera
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
          <Grid size={8}>
            <Item>
              <Box>
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359736/cuchillas/xuilpvnrrbpz8vd0tocf.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Cuchillas para la industria del caucho
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
          <Grid size={8}>
            <Item>
              <Box>
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359738/cuchillas/o9h5lauapb1mwyiylsaw.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Cuchillas para la industria metalmecánica
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>
              <Box>
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741359738/cuchillas/ctfhuj48yehxjgzljayy.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Cuchillas para la industria de alimentos
                <ArrowOutwardIcon sx={{ fontSize: 24, marginLeft: "8px" }} />
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
