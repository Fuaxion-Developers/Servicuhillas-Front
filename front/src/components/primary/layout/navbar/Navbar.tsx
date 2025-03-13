'use client';
import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/svg/Logo.svg';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const items = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/products' },
    { name: 'Servicios', path: '/services' },
    { name: 'Historia', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: '1.5rem',
        background: 'rgba(5, 12, 31, 0.5)',
        backdropFilter: 'blur(1rem)',
        zIndex: 10,
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '95%',
        border: '0.1rem solid #363636',
        paddingX: '3.6rem',
        borderRadius: '5rem',
        marginTop: '1.2rem',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      {/* Contenedor superior con logo y botón de menú */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Logo />
        <Box sx={{ display: { mobile: 'block', tablet: 'none' } }}>
          <IconButton onClick={toggleMenu} sx={{ color: '#fff' }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>

      {/* Menú en móviles con animación de expansión */}
      <Box
        sx={{
          overflow: 'hidden', // Evita que el contenido aparezca de golpe
          maxHeight: open ? '300px' : '0px', // Controla la altura máxima
          transition: 'max-height 0.7s ease-in-out', // Animación más lenta
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: {mobile:'start', tablet:'start'},
          width: '100%',
          marginTop: open ? '1rem' : '0',
        }}
      >
        {items.map(item => (
          <Link key={item.name} href={item.path}>
            <Typography
              variant="caption1"
              sx={{
                color: pathname === item.path ? '#EAC01B' : '#939393',
                ':hover': { color: '#4F4F4F' },
              }}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
