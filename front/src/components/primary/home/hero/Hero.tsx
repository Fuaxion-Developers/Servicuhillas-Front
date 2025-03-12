// import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import { Box, Button, Typography } from '@mui/material';

import Image from 'next/image';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          mobile: 'column',
          tablet: 'column',
          laptop: 'row',
          desktop: 'row',
        },
        justifyContent: {
          mobile: 'center',
          tablet: 'center',
          laptop: 'space-between',
          desktop: 'space-between',
        },
        alignItems: { mobile: 'center' },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: {mobile:'40rem', laptop: '70rem', desktop: '70rem' },
          gap: '2.4rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h1" sx={{ color: '#EAC01B' }}>
          Chuchillas industriales
        </Typography>
        <Typography variant="h2">Calidad que corta la diferencia </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Empresa especializada en la fabricación, mantenimiento y afilado de
          cuchillas industriales para las industrias del plástico, papel,
          madera, caucho, metal y alimentos.
        </Typography>
        <Box
          sx={{
            gap: '1.2rem',
            display: 'flex',
            flexDirection: {
              mobile: 'column',
              tablet: 'column',
              laptop: 'row',
              desktop: 'row',
            },
            maxWidth: { mobile: '100%', tablet: 'auto' },
          }}
        >
          <Button variant="contained">Empieza a Explorar</Button>
          <Button
            variant="contained"
            sx={{ background: '#282F3C', color: '#C9C9CA' }}
          >
            Contactar al equipo de ventas
          </Button>
        </Box>
      </Box>
      <Box>
        <Image
          alt="Productos"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1741187167/Group_18_2_b1hfgt.png"
          width={400}
          height={300}
        ></Image>
      </Box>
    </Box>
  );
};

export default Hero;
