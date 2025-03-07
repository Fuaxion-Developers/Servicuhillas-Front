import { Box, Typography, Grid2, List, ListItem } from "@mui/material";
import Image from "next/image";

const Section5 = () => {
  return (
    <Box
      sx={{
        maxWidth: "85rem",
        mx: "auto",
        display: "flex",
        gridTemplateColumns: { lg: "1fr 1fr" },
        gap: 4,
        alignItems: "center",
        marginBottom: '150px'
      }}
    >
      <Grid2 sx={{
        width: '50%',
      }}>
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741313950/linea-caucho_f4kzha.jpg"
          alt="Industria del caucho."
          width={500}
          height={250}
          style={{ borderRadius: "12px", width: "100%", height: 'auto' }}
        />
      </Grid2>
      <Box sx={{
        width: '50%',
      }}>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontWeight: "extrabold",
            color: "text.primary",
          }}
        >
          Industría del caucho
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: "sm",
            color: "text.secondary",
          }}
        >
          Cuchillas diseñadas para realizar cortes precisos y sin deformaciones en materiales elásticos y resistentes. Se fabrican con aceros de alta dureza y tratamientos especiales para soportar la abrasión y la elasticidad del caucho, garantizando una vida útil prolongada y un rendimiento eficiente en los procesos de producción.
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Corte limpio y sin rebabas:</strong> Evitan deformaciones en el material.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Alta resistencia al desgaste:</strong> Fabricadas en acero templado y con recubrimientos especiales.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Versatilidad:</strong> Adecuadas para cortar caucho natural, sintético y reforzado con fibras.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Baja adherencia:</strong> Tratamientos especiales para reducir la acumulación de residuos.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Usos comunes:</strong> Producción de neumáticos, fabricación de sellos y juntas, procesamiento de bandas transportadoras y otros productos de caucho industrial.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Section5;
