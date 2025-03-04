'use client'
import { Box, Typography } from '@mui/material';
import Logo  from '@/assets/svg/Logo.svg';


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '48px',
        marginTop: '100px',
        justifyContent: 'space-between',
        background: 'black',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Logo />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="caption1">sobre nosotros</Typography>
          <Typography variant="caption1">SERVICUCHILLAS</Typography>
          <Typography variant="caption1">SERVICUCHILLAS</Typography>
          <Typography variant="caption1">SERVICUCHILLAS</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5">&copy;2025 SERVICUCHILLAS LTDA</Typography>
        </Box>
        <Box>
          <WhatsAppIcon fontSize="large"></WhatsAppIcon>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
