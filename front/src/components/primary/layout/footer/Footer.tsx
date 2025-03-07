'use client';
import { Box, Typography } from '@mui/material';
import Logo1 from '@/assets/svg/Logo1.svg';
import Fuaxion from '@/assets/svg/LogoFuaxion.svg';

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
        background: '#171717',
        gap: '60px',
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Logo1 />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Typography variant="body2">
            &copy; 2025 SERVICUCHILLAS LTDA. Elaborado por{' '}
          </Typography>
          <Fuaxion />
        </Box>
      </Box>
      {/* Ícono de WhatsApp flotante */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 10,
        }}
      >
        <WhatsAppIcon
          sx={{
            color: '#fff',
            backgroundColor: '#25d366',
            borderRadius: '50%',
            padding: '5px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            width:'50px',
            height:'50px'
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
