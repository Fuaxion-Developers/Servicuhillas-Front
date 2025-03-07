import { Box, Typography,  Grid2, List, ListItem } from '@mui/material';
import Image from 'next/image';

const Section6 = () => {
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
          Industría metalmecánica
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: 'sm',
            color: 'text.secondary',
          }}
        >
          Cuchillas diseñadas para cortar, troquelar y dar forma a metales de distintas durezas con alta precisión y durabilidad. Fabricadas con aceros de alta resistencia y tratamientos térmicos especializados, estas cuchillas garantizan un rendimiento óptimo en entornos de alta exigencia, minimizando el desgaste y optimizando la producción.
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Alta dureza y resistencia al desgaste:</strong> Fabricadas en acero templado o con recubrimientos especiales.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Precisión en el corte:</strong> Ideales para cortar láminas, tubos y piezas metálicas sin deformaciones.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Durabilidad optimizada:</strong> Diseñadas para soportar altas cargas de trabajo.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Versatilidad de aplicaciones:</strong> Utilizadas en procesos de estampado, troquelado, cizallado y perfilado de metales.
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>Usos comunes:</strong> Producción de piezas automotrices, estructuras metálicas, herramientas y componentes industriales.
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
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741315953/linea-metalmecanica_02_fqumh1.jpg"
            alt="Láminas de metal."
            width={500}
            height={250}
            style={{ borderRadius: '12px', width: '100%' }}
          />
        </Grid2>
        <Grid2 sx={{
          width: '40%',
        }}>
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1741315952/linea-metalmecanica_g9qciw.jpg"
            alt="Cortando tuvo de metal."
            width={500}
            height={250}
            style={{ borderRadius: '12px', width: '100%', marginTop: '1rem' }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section6;