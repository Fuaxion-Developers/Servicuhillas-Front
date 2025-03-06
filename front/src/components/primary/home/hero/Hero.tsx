// import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import { Box, Button, Typography } from '@mui/material';
import Prueba from '@/assets/svg/Prueba.svg'



const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: '60px',
        paddingY: '200px',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* <Box
        sx={{ position: 'absolute', top: '0px', right: '30px', zIndex: -1 }}
      >
        <Circle1></Circle1>
      </Box> */}
      <Box sx={{ width: '700px' }}>
        <Typography variant="h1">
          Más que cuchillas,{' '}
          <span style={{ color: '#EAC01B' }}>SERVICUCHILLAS</span>
        </Typography>
        <Typography variant="body1">
          Empresa especializada en la fabricación, mantenimiento y afilado de
          cuchillas industriales para las industrias del plástico, papel,
          madera, caucho, metal y alimentos.
        </Typography>
        <Box sx={{ gap: '12px', display: 'flex', marginTop: '24px' }}>
          <Button variant="contained">Empieza a Explorar</Button>
          <Button
            variant="contained"
            sx={{ background: '#3F3F47', color: '#C9C9CA' }}
          >
            Contactar al equipo de ventas
          </Button>
        </Box>
      </Box>
      <Box>
        <Prueba width="500px" height="500px"></Prueba>
      </Box>
    </Box>
  );
};

export default Hero;
