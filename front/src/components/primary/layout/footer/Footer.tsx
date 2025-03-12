'use client';
import { Box, Typography } from '@mui/material';
import Logo1 from '@/assets/svg/Logo1.svg';
import Fuaxion from '@/assets/svg/LogoFuaxion.svg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box sx={{ marginX: '-62px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingY: '3.6rem',
          paddingX: '6.0rem',
          marginTop: '10rem',
          borderTop:'0.1rem solid #363636',
          gap: '10rem',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Logo1 />
          </Box>
          <Box
            sx={{ width: '40rem', display: 'flex', justifyContent: 'center' }}
          >
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Fabricación y afilado de cuchillas para la industria del plastico,
              papel, madera, caucho, metal y alimentos. <br /> Servicio de
              rectificadora plana.
            </Typography>
            <Typography></Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ color: '#FBC600', marginBottom: '1rem' }}
            >
              Empresa
            </Typography>
            <Typography variant="body2">Cra. 86B No. 41 - 10 Sur</Typography>
            <Typography variant="body2">
              Tel: 601 193 9965 - 601 293 27 33
            </Typography>
            <Typography variant="body2">Cel: 322789 1682 </Typography>
            <Typography variant="body2">Bogotá, D.C. </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '1.2rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2">
            &copy; 2025 - SERVICUCHILLAS LTDA. Elaborado por{' '}
          </Typography>
          <Link href="https://landing-fuaxions.vercel.app/">
            <Fuaxion />
          </Link>
        </Box>

        <Box
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 10,
          }}
        >
          <Link
            href="https://wa.me/573227891682?text=Hola,%20quiero%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon
              sx={{
                color: '#fff',
                backgroundColor: '#25d366',
                borderRadius: '50%',
                padding: '0.5rem',
                boxShadow: '0 0.4rem 0.6rem rgba(0, 0, 0, 0.2)',
                width: '5rem',
                height: '5rem',
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
