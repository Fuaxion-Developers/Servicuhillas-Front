'use client';
import { Box, Typography } from '@mui/material';
import Logo1 from '@/assets/svg/Logo1.svg';
import Fuaxion from '@/assets/svg/LogoFuaxion.svg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box sx={{ mx: '-62px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: '3.6rem',
          px: { mobile: '2rem', tablet: '6rem' }, // Más espacio en tablets/desktop
          mt: '10rem',
          borderTop: '0.1rem solid #363636',
          gap: { mobile: '5rem', tablet: '10rem' }, // Menos gap en móviles
          position: 'relative',
        }}
      >
        {/* Contenedor Principal */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { mobile: 'column', tablet: 'row' }, // Column en móviles, row en tablets+
            justifyContent: 'space-between',
            alignItems: { mobile: 'center', tablet: 'flex-start' }, // Centrado en móviles
            textAlign: { mobile: 'center', tablet: 'left' }, // Texto centrado en móviles
          }}
        >
          {/* Logo */}
          <Box>
            <Logo1 />
          </Box>

          {/* Descripción */}
          <Box
            sx={{
              width: { mobile: '100%', tablet: '40rem' },
              display: 'flex',
              justifyContent: 'center',
              mt: { mobile: '2rem', tablet: '0' }, // Margen superior solo en móviles
            }}
          >
            <Typography variant="body2" align='center'>
              Fabricación y afilado de cuchillas para la industria del plástico,
              papel, madera, caucho, metal y alimentos. <br /> Servicio de
              rectificadora plana.
            </Typography>
          </Box>

          {/* Información de la Empresa */}
          <Box sx={{ mt: { mobile: '2rem', tablet: '0' } }}>
            <Typography variant="h4" sx={{ color: '#FBC600', mb: '1rem' }}>
              Empresa
            </Typography>
            <Typography variant="body2">Cra. 86B No. 41 - 10 Sur</Typography>
            <Typography variant="body2">
              Tel: 601 293 9965 - 601 293 27 33
            </Typography>
            <Typography variant="body2">Cel: 322789 1682 </Typography>
            <Typography variant="body2">Bogotá, D.C. </Typography>
          </Box>
        </Box>

        {/* Derechos de Autor */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { mobile: 'column', tablet: 'row' },
            gap: '1.2rem',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            &copy; 2025 - SERVICUCHILLAS LTDA. Elaborado por{' '}
          </Typography>
          <Link href="https://landing-fuaxions.vercel.app/">
            <Fuaxion />
          </Link>
        </Box>

        {/* Botón de WhatsApp Fijo */}
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
                p: '0.5rem',
                boxShadow: '0 0.4rem 0.6rem rgba(0, 0, 0, 0.2)',
                width: { mobile: '4rem', tablet: '5rem' }, // Tamaño menor en móviles
                height: { mobile: '4rem', tablet: '5rem' },
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
