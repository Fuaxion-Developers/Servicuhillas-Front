import { Box, Typography, Grid2, List, ListItem } from "@mui/material";
import Image from "next/image";

const Section7 = () => {
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
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741316388/linea-alimentos_krnrnh.jpg"
          alt="Industria de alimentos."
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
          Industría de alimentos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: "sm",
            color: "text.secondary",
          }}
        >
          Cuchillas diseñadas para realizar cortes precisos en productos como carnes, embutidos, pan, frutas, vegetales y otros alimentos procesados. Están fabricadas en acero inoxidable de grado alimenticio, lo que garantiza resistencia a la corrosión, higiene y cumplimiento de normativas sanitarias. Su diseño optimiza la eficiencia del corte y minimiza el desperdicio de producto.
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Material higiénico y resistente:</strong> Acero inoxidable con alta resistencia a la corrosión y fácil limpieza.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Corte preciso y uniforme:</strong> Diseñadas para garantizar eficiencia en procesos de producción automatizados.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Variedad de formas y tamaños:</strong> Adaptadas para diferentes tipos de alimentos y maquinaria.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Durabilidad y rendimiento:</strong> Tratamientos especiales para reducir el desgaste y aumentar la vida útil.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Usos comunes:</strong> Procesamiento de carnes, panificación, corte de frutas y vegetales, producción de snacks y alimentos congelados.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Section7;
