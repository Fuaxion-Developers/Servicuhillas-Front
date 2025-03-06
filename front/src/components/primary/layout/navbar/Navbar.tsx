'use client'
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Usamos usePathname en lugar de useRouter
import Logo from '@/assets/svg/Logo.svg';

const Navbar = () => {
  const pathname = usePathname(); // Obtenemos la ruta actual usando usePathname

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
        paddingY: '12px',
        background: 'rgba(3, 7, 18, 0.3)',
        backdropFilter: 'blur(10px)',
        zIndex: 10,
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '95%',
        border: '1px solid #2B2B2B',
        paddingX: '36px',
        borderRadius: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '24px',
      }}
    >
      <Box>
        <Logo />
      </Box>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        {items.map(item => (
          <Link key={item.name} href={item.path}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '14px',
                color: pathname === item.path ? '#EAC01B ' : '#C9C9CA', // Usamos pathname para comparar
                ':hover': {
                  color: '#6B6B6B',
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
