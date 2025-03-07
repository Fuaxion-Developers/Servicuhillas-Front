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
        paddingY: '20px',
        background: 'rgba(38, 38, 38, 0.5)',
        backdropFilter: 'blur(10px)',
        zIndex: 10,
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '77%',
        border: '1px solid #363636',
        paddingX: '36px',
        borderRadius: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '12px',
      }}
    >
      <Box>
        <Logo />
      </Box>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        {items.map(item => (
          <Link key={item.name} href={item.path}>
            <Typography
              variant="caption1"
              sx={{
                color: pathname === item.path ? '#EAC01B ' : '#939393', // Usamos pathname para comparar
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
