// import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import { Box, Button, Typography } from '@mui/material';

import Image from 'next/image';



const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: '250px',
        paddingTop: '150px',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <Box sx={{ width: '700px', gap: '24px', display: 'flex', flexDirection:'column' }}>
        <Typography variant="h1">
          Más que cuchillas,{' '}
          <span style={{ color: '#EAC01B' }}>SERVICUCHILLAS</span>
        </Typography>
        <Typography variant="body1">
          Empresa especializada en la fabricación, mantenimiento y afilado de
          cuchillas industriales para las industrias del plástico, papel,
          madera, caucho, metal y alimentos.
        </Typography>
        <Box sx={{ gap: '12px', display: 'flex' }}>
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
