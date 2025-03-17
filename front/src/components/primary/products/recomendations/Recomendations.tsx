import {
  Box,
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
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "50px",
      }}
    >
      {/* Sección de Imágenes */}
      <Box
        sx={{
          width: {
            mobile: "100%",
            tablet: "100%",
            laptop: "20vw",
            desktop: "20vw",
          },
          height: {
            mobile: "25rem",
            tablet: "30rem",
            laptop: "20vw",
            desktop: "20vw",
          },
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          borderRadius: "1.2rem",
          overflow: "hidden",
          padding: "3rem",
        }}
      >
        <Image
          src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1742078756/Todas_1_otb35i.png"
          alt="Box 1"
          width={500}
          height={500}
          style={{
            width: "100%", // Hace que la imagen se adapte al contenedor
            height: "100%", // Mantiene la proporción
            objectFit: "cover", // Llena el espacio sin distorsionar
            objectPosition: "top", // Asegura que siempre se vea la parte superior
            borderRadius: "1.2rem",
          }}
        />
      </Box>

      {/* Sección de Texto */}
      <Box
        sx={{
          flex: 1,
          justifyItems: "center",
          color: "white",
          padding: "3rem",
          width: {
            mobile: "100%",
            tablet: "100%",
            laptop: "70vw",
            desktop: "70vw",
          },
          height: {
            mobile: "25rem",
            tablet: "30rem",
            laptop: "20vw",
            desktop: "20vw",
          },
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            ¿Por qué elegir Servicuchillas?
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px", opacity: 0.8 }}>
            Convierte tus ideas en resultados precisos con las cuchillas de
            Servicuchillas. Ya sea que necesites herramientas de corte para la
            industria metalúrgica, papelera, maderera o plástica, nuestras
            cuchillas están diseñadas para ofrecer máxima precisión y
            durabilidad.
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
    </Box>
  );
};

export default Recomendations;
