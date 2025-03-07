import { Box, Typography, Grid2, List, ListItem } from "@mui/material";
import Image from "next/image";

const Section2 = () => {
  return (
    <Box
      sx={{
        width: "85rem",
        mx: "auto",
        display: "flex",
        gridTemplateColumns: { lg: "1fr 1fr" },
        gap: 4,
        alignItems: "center",
        marginTop: "100px",
        marginBottom: "150px",
      }}
    >
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontWeight: "extrabold",
            color: "text.primary",
          }}
        >
          Industría del plástico
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: "sm",
            color: "text.secondary",
          }}
        >
          Cuchillas diseñadas para garantizar cortes precisos y eficientes en
          materiales como polímeros, plásticos rígidos y flexibles. Se fabrican
          en aceros de alta resistencia y recubrimientos especiales para
          soportar el desgaste y la fricción generada en procesos de reciclaje,
          extrusión e inyección.
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Materiales de alta resistencia:</strong> Fabricadas en aceros endurecidos y tratamientos especiales para mayor durabilidad.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Cortes precisos y limpios:</strong> Minimización de rebabas y desperdicio de material.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Diseño a medida:</strong> Adaptadas a distintos tipos de máquinas y procesos industriales.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Resistencia al desgaste:</strong> Tratamientos térmicos y recubrimientos anticorrosivos para prolongar su vida útil.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Usos comunes:</strong> Trituración, molienda, corte en caliente, y granulación de plásticos reciclados y vírgenes.
          </ListItem>
        </List>
      </Box>

      {/* Imágenes */}
      <Grid2
        container
        spacing={2}
        sx={{
          width: "50%",
        }}
      >
        <Grid2
          sx={{
            width: "40%",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741300183/linea-plastico_eifjfh.jpg"
            alt="Rollos de material plástico."
            width={500}
            height={250}
            style={{ borderRadius: "12px", width: "100%" }}
          />
        </Grid2>
        <Grid2
          sx={{
            width: "40%",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741300496/linea-plastico_02_gjt5qw.jpg"
            alt="Vasos plásticos"
            width={500}
            height={250}
            style={{ borderRadius: "12px", width: "100%", marginTop: "1rem" }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section2;
