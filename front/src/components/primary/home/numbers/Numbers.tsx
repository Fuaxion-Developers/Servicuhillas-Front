import React from 'react';
import { Typography, Box, Grid2 } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Comillas from '@/assets/svg/comillas.svg';

const statistics = [
  {
    value: '70k+',
    description:
      'Clientes equipados, desde aficionados al bricolaje hasta grandes empresas de construcción',
  },
  {
    value: '35%',
    description:
      'Aumento de la eficiencia del proyecto con las herramientas y servicios de ScrewFast',
    icon: <ArrowUpwardIcon sx={{ color: '#EAC01B' }} />,
  },
  {
    value: '15,3%',
    description:
      'Reducción en los costos de mantenimiento reportada por clientes de largo plazo',
    icon: <ArrowUpwardIcon sx={{ color: '#EAC01B' }} />,
  },
  {
    value: '2x',
    description:
      'Montaje más rápido gracias a soluciones de fijación innovadoras',
  },
];

const Numbers = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: '60px',
        paddingY: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '500px',
        }}
      >
        <Box>
          <Typography variant="h3">Acelere sus proyectos</Typography>
          <Typography variant="body1">
            En ScrewFast, garantizamos un inicio rápido con la creación
            instantánea de la cuenta. Experimente la velocidad de la
            construcción redefinida.
          </Typography>
        </Box>
        <Typography variant="h5" color= '#BFB7B6'>
          ScrewFast mejoró drásticamente la eficiencia de nuestro proyecto. La
          instalación fue instantánea y sus rápidos tiempos de respuesta son
          fenomenales. ¡Realmente un punto de inflexión en el soporte de
          construcción y hardware!
        </Typography>
      </Box>

      <Grid2 container sx={{ width: '600px' }}>
        {statistics.map((stat, index) => (
          <Grid2
            size={6}
            key={index}
            sx={{
              padding: '36px',
              borderRight: index % 2 === 0 ? 2 : 0, // Borde derecho en los elementos impares
              borderBottom: index < 2 ? 2 : 0, // Borde inferior en los elementos de la primera fila
              borderColor: '#848C8E',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {stat.icon && stat.icon}
              <Typography variant="h2">{stat.value}</Typography>
            </Box>
            <Typography variant="body2">{stat.description}</Typography>
          </Grid2>
        ))}
      </Grid2>
      <Box sx={{ position: 'absolute', top:'240px', left:'30px', zIndex:-1 }}>
        <Comillas></Comillas>
      </Box>
    </Box>
  );
};

export default Numbers;
