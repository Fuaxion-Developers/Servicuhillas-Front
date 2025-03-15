// import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Image from 'next/image';

const Hero = () => {
  return (
    <Box
      sx={{
        marginX: "15rem",
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
          laptop: 'space-around',
          desktop: 'space-around',
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
          Cuchillas industriales
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
          <Button variant="contained" href={`/services`}>Empieza a Explorar</Button>
          <Button
            variant="contained"
            href={`/contact`}
            sx={{ background: '#282F3C', color: '#C9C9CA' }}
          >
            Contactar al equipo
            <ArrowForwardIcon sx={{ fontSize: "3rem", marginLeft: "1rem" }} />
          </Button>
        </Box>
      </Box>
      <Box>
        <Image
          alt="Productos"
          src="https://res.cloudinary.com/dzhh3k5kj/image/upload/v1741882210/cuchillas_ecyih8.jpg"
          width={500}
          height={300}
          style={{
            borderRadius: "1.2rem",
          }}
        ></Image>
      </Box>
    </Box>
  );
};

export default Hero;
