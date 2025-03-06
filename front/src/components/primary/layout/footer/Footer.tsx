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
        paddingY: '36px',
        paddingX: '60px',
        marginTop: '100px',
        justifyContent: 'space-between',
        background: 'black',
        gap:'60px'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Logo />
        </Box>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="caption1">sobre nosotros</Typography>
          <Typography variant="caption1">SERVICUCHILLAS</Typography>
          <Typography variant="caption1">SERVICUCHILLAS</Typography>
          <Typography variant="caption1">SERVICUCHILLAS</Typography>
        </Box> */}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
        <Box>
          <Typography variant="body2">&copy; 2025 SERVICUCHILLAS LTDA. Elaborado por FUAXION</Typography>
        </Box>
        <Box>
          <WhatsAppIcon fontSize="large"></WhatsAppIcon>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
