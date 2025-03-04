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
    <div>
      <Box
        sx={{
          display: 'flex',
          paddingY: '12px',
          border: '1px solid #2B2B2B',
          paddingX: '24px',
          borderRadius: '50px',
          margin: '24px',
          justifyContent: 'space-between',
          alignItems: 'center',
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
    </div>
  );
};

export default Navbar;
