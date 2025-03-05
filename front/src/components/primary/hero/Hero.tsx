import { Box, Button, Typography } from '@mui/material';

import Image from 'next/image';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: '50px',
        paddingY: '200px',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '700px' }}>
        <Typography variant="h1">
          Más que cuchillas,{' '}
          <span style={{ color: '#F8ED0D' }}>
            SERVICUCHILLA
          </span>
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
            sx={{ background: '#848c8E', color: '#F1F2EE' }}
          >
            Contactar al equipo de ventas
          </Button>
        </Box>
      </Box>
      <Box>
        <Image
          width={450}
          height={350}
          alt=""
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1741188971/Group_18_3_izonce.png"
        ></Image>
      </Box>
    </Box>
  );
};

export default Hero;
