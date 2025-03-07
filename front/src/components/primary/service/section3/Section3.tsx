import { Box, Typography, Grid2, List, ListItem } from "@mui/material";
import Image from "next/image";

const Section3 = () => {
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
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741305174/linea-papel_ajsu69.jpg"
          alt="Industria de papel"
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
          Industría del papel
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: "sm",
            color: "text.secondary",
          }}
        >
          Cuchillas diseñadas para realizar cortes precisos en materiales como
          papel, cartón y celulosa, garantizando bordes limpios y minimizando el
          desperdicio. Se fabrican con aceros de alta dureza y recubrimientos
          especiales para resistir el desgaste y la fricción constante en
          procesos de corte y troquelado.
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Alta precisión:</strong> Garantizan cortes limpios sin desgarres ni imperfecciones.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Materiales resistentes:</strong> Fabricadas en aceros de alta dureza con tratamientos para mayor durabilidad.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Diseño a medida:</strong> Adaptadas a distintos tipos de máquinas y aplicaciones.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Baja fricción:</strong> Recubrimientos especiales para reducir el calentamiento y el desgaste.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Usos comunes:</strong> Corte de bobinas, troquelado de etiquetas, procesamiento de cartón y papel reciclado.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Section3;
