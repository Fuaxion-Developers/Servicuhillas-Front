'use client'
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import Logo from '@/assets/svg/Logo.svg';

const Navbar = () => {
  const pathname = usePathname(); 

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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1.2rem',
      }}
    >
      <Box>
        <Logo />
      </Box>
      <Box sx={{ display: 'flex', gap: '2.4rem' }}>
        {items.map(item => (
          <Link key={item.name} href={item.path}>
            <Typography
              variant="caption1"
              sx={{
                color: pathname === item.path ? '#EAC01B ' : '#939393', 
                ':hover': {
                  color: '#4F4F4F',
                },
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
