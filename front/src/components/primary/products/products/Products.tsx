"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
  borderRadius: "16px",
  overflow: "hidden",
  ...theme.applyStyles("dark", {
    backgroundColor: "#111",
  }),

  "&:hover img": {
    transform: "scale(1.1)",
    transition: "transform 0.5s ease-in-out",
  },
}));

export default function Products() {
  return (
    <Box
      sx={{
        paddingBottom: {
          mobile: "5rem",
          tablet: "10rem",
          laptop: "5rem",
          desktop: "10rem",
        },
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            mobile: "column",
            tablet: "row",
            laptop: "row",
            desktop: "row",
          },
        }}
      >
        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "60%",
            },
            margin: {
              mobile: "0% 5% 5% -5%",
              tablet: "0% 1.5% 1.5% 0%",
              laptop: "0% 0.5% 0.5% 0%",
            },
          }}
        >
          <Link href="/products/plastic" passHref>
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
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741962352/polipropileno_02_uwo9bg.webp"
                  alt="Cuchillas para la industria del plástico"
                  layout="fill"
                  objectFit="cover"
                />
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
              </Box>
            </Item>
          </Link>
        </Box>

        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "40%",
            },
            margin: {
              mobile: "5% 0% 5% 5%",
              tablet: "0% 0% 1.5% 1.5%",
              laptop: "0% 0% 0.5% 0.5%",
            },
          }}
        >
          <Link href="/products/paper" passHref>
            <Item sx={{ padding: 0, overflow: "hidden", height: "100%" }}>
              <Box
                sx={{ position: "relative", width: "100%", height: "300px" }}
              >
                <Image
                  src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741730891/linea-papel_wj0m4y.jpg"
                  alt="Cuchillas para la industria del papel"
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
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Cuchillas para la industria del papel
                  <ArrowOutwardIcon sx={{ fontSize: 20, marginLeft: "6px" }} />
                </Box>
              </Box>
            </Item>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            mobile: "column",
            tablet: "row",
            laptop: "row",
            desktop: "row",
          },
        }}
      >
        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "40%",
            },
            margin: {
              mobile: "5% 5% 5% -5%",
              tablet: "1.5% 1.5% 1.5% 0%",
              laptop: "0.5% 0.5% 0.5% 0%",
            },
          }}
        >
          <Link href="/products/wood" passHref>
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
                  alt="Cuchillas para la industria de la madera"
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
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Cuchillas para la industria de la madera
                  <ArrowOutwardIcon sx={{ fontSize: 20, marginLeft: "6px" }} />
                </Box>
              </Box>
            </Item>
          </Link>
        </Box>

        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "60%",
            },
            margin: {
              mobile: "5% 0% 5% 5%",
              tablet: "1.5% 0% 1.5% 1.5%",
              laptop: "0.5% 0% 0.5% 0.5%",
            },
          }}
        >
          <Link href="/products/rubber" passHref>
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
                  alt="Cuchillas para la industria del caucho"
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
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            mobile: "column",
            tablet: "row",
            laptop: "row",
            desktop: "row",
          },
          margin: {
            mobile: "5% 5% 5% -5%",
            tablet: "1.5% 1.5% 0% 0%",
            laptop: "0.5% 0.5% 0% 0%",
            desktop: "0.5% 0.5% 0% 0%",
          },
        }}
      >
        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "60%",
            },
          }}
        >
          <Link href="/products/metal" passHref>
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
                  alt="Cuchillas para la industria metalmecánica"
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
          </Link>
        </Box>

        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "40%",
            },
            margin: {
              mobile: "5% 15% 0% 5%",
              tablet: "0% 0% 0% 3%",
              laptop: "0% 0% 0% 1%",
            },
          }}
        >
          <Link href="/products/food" passHref>
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
                  alt="Cuchillas para la industria de alimentos"
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
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
