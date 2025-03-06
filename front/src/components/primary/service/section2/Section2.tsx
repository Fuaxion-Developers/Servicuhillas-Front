import { Box, Typography,  Grid2 } from '@mui/material';
import Image from 'next/image';

const Section2 = () => {
  return (
    <Box
      sx={{
        maxWidth: '85rem',
        mx: 'auto',
        px: { xs: 4, sm: 6, lg: 8 },
        py: { xs: 10, lg: 14 },
        display: 'grid',
        gridTemplateColumns: { lg: '1fr 1fr' },
        gap: 4,
        alignItems: 'center',
      }}
    >
      {/* Texto */}
      <Box>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontWeight: 'extrabold',
            color: 'text.primary',
          }}
        >
          Ofreciendo orientación experta
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: 'sm',
            color: 'text.secondary',
          }}
        >
          Emprender un proyecto de construcción puede ser abrumador. Con
          nuestros servicios de asesoramiento profesional, lo guiaremos en cada
          etapa, asegurándonos de que tome decisiones informadas. Ya sea un
          aficionado al bricolaje o un contratista experto, nuestros expertos
          están disponibles para ofrecerle asesoramiento personalizado sobre la
          selección de productos, el alcance del proyecto y el cumplimiento de
          las regulaciones locales.
        </Typography>
      </Box>

      {/* Imágenes */}
      <Grid2 container spacing={2}>
        <Grid2 >
          <Image
            src="/blueprints-image.DxAt2gto_ZWTTNw.avif"
            alt="Planos y tableta digital con planos de construcción."
            width={1333}
            height={2000}
            style={{ borderRadius: '12px', width: '100%' }}
          />
        </Grid2>
        <Grid2 >
          <Image
            src="/person-working.aUGgRiE__1hU8Vn.avif"
            alt="Persona trabajando en la oficina"
            width={1334}
            height={2000}
            style={{ borderRadius: '12px', width: '100%', marginTop: '1rem' }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section2;
