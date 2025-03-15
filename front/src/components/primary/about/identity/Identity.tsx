import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Identity = () => {
  const identity = [
    {
      text: "Servicuchillas es una empresa de tradición familiar, comprometida con la fabricación y mantenimiento de cuchillas industriales para las industrias del plástico, papel, madera, caucho, metal y alimentos. Durante más de 15 años, hemos construido un camino basado en la calidad, el esfuerzo y la confianza, consolidándonos como una empresa competitiva a nivel nacional. Nuestro compromiso va más allá de los productos: creemos en el valor de las relaciones cercanas y en el trabajo bien hecho, siempre con un enfoque humano y responsable.",
      title: "Quiénes somos",
      image:
        "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741811476/enfoque-humano_mpbyb8.jpg",
      alt: "Enfoque humano",
    },
    {
      text: "Nuestra experiencia y dedicación nos han permitido estar a la vanguardia en la fabricación, distribución y mantenimiento de cuchillas industriales. En Servicuchillas trabajamos con pasión para ofrecer productos de la más alta calidad, con procesos eficientes y un servicio cercano y personalizado. Nos enorgullece garantizar precisión, capacidad de producción y entregas puntuales, siempre priorizando el bienestar de nuestros clientes y colaboradores.",
      title: "Misión",
      image:
        "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741811476/calidad_y4bboq.jpg",
      alt: "Calidad",
    },
    {
      text: "Nuestro propósito es seguir creciendo como una empresa líder a nivel nacional, manteniendo el sello de calidad, confianza y cercanía que nos ha caracterizado desde nuestros inicios. Queremos ampliar nuestra cobertura y mejorar nuestros tiempos de respuesta, fortaleciendo nuestra infraestructura, tecnología y talento humano. Más que fabricar cuchillas industriales, creamos soluciones con el compromiso y la pasión de una empresa familiar que valora el trabajo bien hecho y las relaciones a largo plazo.",
      title: "Visión",
      image:
        "https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741811475/colombia-mapa_wfovix.png",
      alt: "Mapa de colombia",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "90%",
        mx: "auto",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          paddingX: "3rem",
        }}
      >
        {identity.map((i, index) => (
          <Box key={index}>
            {index % 2 === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  marginY: "2rem",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "10vw",
                    height: "10vw",
                    overflow: "hidden",
                    justifyContent: "center",
                    alignContent: "center",
                    zIndex: 2,
                    borderRadius: "12px",
                    marginRight: "-20px",
                    boxShadow: "2px 2px 10px #EAC01B",
                  }}
                >
                  <Image
                    src={i.image}
                    alt={i.alt}
                    layout="fill" // Ajusta la imagen al contenedor
                    objectFit="cover" // Hace que la imagen llene el Box sin distorsionarse
                    objectPosition="center" // Centra la imagen dentro del Box
                    style={{
                      borderRadius: "12px",
                    }}
                  />
                </Box>
                <Paper
                  sx={{
                    width: "60vw",
                    backgroundColor: "#282F3C",
                    color: "white",
                    padding: "20px 20px 20px 40px",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#282F3C",
                      padding: "10px",
                      marginBottom: "20px",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography fontWeight="bold">{i.title}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    // flexDirection="column"
                    alignItems="flex-start" // Alinea el contenido a la izquierda
                    justifyContent="flex-start" // Asegura que el contenido esté arriba
                  >
                    <Typography
                      variant="body1"
                      fontStyle="italic"
                      my={0}
                      px={2}
                    >
                      {i.text}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  marginY: "2rem",
                  alignItems: "center",
                }}
              >
                <Paper
                  sx={{
                    width: "60vw",
                    backgroundColor: "#282F3C",
                    color: "white",
                    padding: "20px 40px 20px 20px",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "end",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#282F3C",
                      padding: "10px",
                      marginBottom: "20px",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography fontWeight="bold">{i.title}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    // flexDirection="column"
                    alignItems="flex-start" // Alinea el contenido a la izquierda
                    justifyContent="flex-start" // Asegura que el contenido esté arriba
                  >
                    <Typography
                      variant="body1"
                      fontStyle="italic"
                      my={0}
                      px={2}
                    >
                      {i.text}
                    </Typography>
                  </Box>
                </Paper>
                <Box
                  sx={{
                    position: "relative",
                    width: "10vw",
                    height: "10vw",
                    overflow: "hidden",
                    justifyContent: "center",
                    alignContent: "center",
                    zIndex: 2,
                    borderRadius: "12px",
                    marginLeft: "-20px",
                    boxShadow: "2px 2px 10px #EAC01B",
                  }}
                >
                  <Image
                    src={i.image}
                    alt={i.alt}
                    layout="fill" // Ajusta la imagen al contenedor
                    objectFit="cover" // Hace que la imagen llene el Box sin distorsionarse
                    objectPosition="center" // Centra la imagen dentro del Box
                    style={{
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Identity;
