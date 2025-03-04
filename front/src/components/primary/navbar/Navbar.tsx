import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  const items = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Servicuchillas', path: '/servicuchillas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        paddingY: '12px',
        background: '#030712',
        backdropFilter: 'blur(10px)',
        zIndex: 10,
        position: 'fixed',
        top: 0,
        left: '50%', // Asegura que el box comience en el centro
        transform: 'translateX(-50%)', // Ajusta el box para que quede completamente centrado
        width: '95%', // Esto hace que ocupe el 80% del ancho de la pantalla
        border: '1px solid #2B2B2B',
        paddingX: '36px',
        borderRadius: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:'24px'
      }}
    >
      <Box>
        <Typography variant="h2">SERVICUCHILLAS</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        {items.map(item => (
          <Link key={item.name} href={item.path}>
            <Typography
              sx={{
                fontWeight: '500',
                fontSize: '20px',
                ':hover': {
                  color: '#2B2B2B',
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
