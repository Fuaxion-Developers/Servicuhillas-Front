import { Box, Typography,  Grid2, List, ListItem } from '@mui/material';
import Image from 'next/image';

const Section4 = () => {
  return (
    <Box
      sx={{
        width: '85rem',
        mx: 'auto',
        display: 'flex',
        gridTemplateColumns: { lg: '1fr 1fr' },
        gap: 4,
        alignItems: 'center',
        marginBottom: '150px'
      }}
    >
      
      <Box sx={{
        width: '50%',
      }}>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontWeight: 'extrabold',
            color: 'text.primary',
          }}
        >
          Industría de la madera
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: 'sm',
            color: 'text.secondary',
          }}
        >
          Cuchillas diseñadas para realizar cortes precisos y eficientes en diferentes tipos de madera, desde tableros de fibra hasta troncos macizos. Se fabrican con aceros de alta resistencia y tratamientos especiales que les permiten soportar altas velocidades y esfuerzos sin perder el filo.
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Corte limpio y preciso:</strong> Diseñadas para minimizar astillas y desperdicio de material.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Alta resistencia:</strong> Fabricadas en aceros endurecidos para mayor durabilidad.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Adaptabilidad:</strong> Disponibles en diferentes formatos para sierras, cepilladoras y trituradoras.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Recubrimientos especiales:</strong> Reducen la fricción y el desgaste, prolongando la vida útil.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Usos comunes:</strong> Procesamiento de tableros, corte de madera maciza, fabricación de muebles y carpintería industrial.
          </ListItem>
        </List>
      </Box>

      {/* Imágenes */}
      <Grid2 container spacing={2} sx={{
        width: '50%',
        }}>
        <Grid2 sx={{
          width: '40%',
        }}>
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741313521/linea-madera_t0mfak.jpg"
            alt="Troncos de madera."
            width={500}
            height={250}
            style={{ borderRadius: '12px', width: '100%' }}
          />
        </Grid2>
        <Grid2 sx={{
          width: '40%',
        }}>
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741313521/linea-madera_02_nop0rj.jpg"
            alt="Listones de madera."
            width={500}
            height={250}
            style={{ borderRadius: '12px', width: '100%', marginTop: '1rem' }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section4;