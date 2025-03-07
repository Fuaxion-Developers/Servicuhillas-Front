import Circle2 from '@/components/secondary/circles/circles2/Circle2';
import { Box, Typography } from '@mui/material';
import Object3 from '@/assets/svg/Object3.svg';
import Circles4 from '@/components/secondary/circles/circles4/Circles4';

const Team = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {  tablet: 'row' }, // Columna en móviles, fila en tablet y mayores
        padding: {
          mobile: '20px',
          tablet: '40px',
          laptop: '60px',
          desktop: '100px',
        }, // Padding responsivo
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: { mobile: '100%', tablet: '50%' } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              mobile: '24px',
              tablet: '32px',
              laptop: '36px',
              desktop: '40px',
            },
          }}
        >
          Trabajo en equipo
        </Typography>
        <Typography
          sx={{
            fontSize: {
              mobile: '14px',
              tablet: '16px',
              laptop: '18px',
              desktop: '20px',
            },
            marginTop: '16px',
          }}
        >
          Me apasiona trabajar en equipo, ya que creo firmemente en el poder de
          la colaboración para alcanzar objetivos de manera eficiente y
          creativa. Disfruto compartir ideas, aprender de los demás y contribuir
          con mis habilidades para lograr resultados exitosos. Me caracterizo
          por mi capacidad de comunicación, empatía y resolución de problemas,
          lo que me permite integrarme fácilmente en grupos de trabajo diversos.
          Siempre estoy dispuesto a aportar y a recibir retroalimentación
          constructiva para mejorar tanto individual como colectivamente.
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'relative',
          maxWidth: { mobile: '100%', tablet: '50%' }, // Adaptado para pantallas pequeñas
          marginTop: { mobile: '20px', tablet: '0' }, // Espacio en la parte superior para móviles
        }}
      >
        <Object3 />
        <Box
          sx={{
            position: 'absolute',
            top: {
              mobile: '-30px',
              tablet: '-50px',
              laptop: '-100px',
              desktop: '-100px',
            },
            right: { mobile: '-50px', tablet: '0', laptop: '0', desktop: '0' },
            zIndex: -1,
          }}
        >
          <Circle2 />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: {
              mobile: '-180px',
              tablet: '-150px',
              laptop: '310px',
              desktop: '310px',
            },
            right: {
              mobile: '-150px',
              tablet: '-120px',
              laptop: '50px',
              desktop: '50px',
            },
            zIndex: -1,
          }}
        >
          <Circles4 />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
