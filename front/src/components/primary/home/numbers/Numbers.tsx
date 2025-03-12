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
    icon: <ArrowUpwardIcon sx={{ color: '#EAC01B', fontSize: '2rem' }} />,
  },
  {
    value: '15,3%',
    description:
      'Reducción en los costos de mantenimiento reportada por clientes de largo plazo',
    icon: <ArrowUpwardIcon sx={{ color: '#EAC01B', fontSize: '2rem' }} />,
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
        paddingTop: '15rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
          width: '50rem',
        }}
      >
        <Box>
          <Typography variant="h2">Acelere sus procesos</Typography>
          <Typography variant="body2" sx={{color:'text.secondary'}}>
            En Servicuchillas, garantizamos un inicio rápido con la creación
            instantánea de su cuenta. Experimente la velocidad en la producción
            y mantenimiento de cuchillas industriales como nunca antes.
          </Typography>
        </Box>
        <Typography variant="body1" color="#BFB7B6" sx={{ fontStyle: 'italic', fontWeight:'600', fontSize:'2rem' }}>
          Servicuchillas mejoró drasticamente la eficiencia de nuestros
          procesos. La implementación fue inmediata y sus tiempos de respuesta
          rápidos son fenomenales. ¡Realmente un punto de inflexión en el
          soporte industrial y la fabricación de cuchillas!
        </Typography>
      </Box>

      <Grid2 container sx={{ width: '60rem' }}>
        {statistics.map((stat, index) => (
          <Grid2
            size={6}
            key={index}
            sx={{
              padding: '3.6rem',
              borderRight: index % 2 === 0 ? 2 : 0, // Borde derecho en los elementos impares
              borderBottom: index < 2 ? 2 : 0, // Borde inferior en los elementos de la primera fila
              borderColor: '#848C8E',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {stat.icon && stat.icon}
              <Typography variant="h2" sx={{fontSize:'4.8rem'}}>{stat.value}</Typography>
            </Box>
            <Typography variant="body2" sx={{color:'text.secondary'}}>{stat.description}</Typography>
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={{ position: 'absolute', top: '34rem', left: '-1.5rem', zIndex: -1 }}
      >
        <Comillas></Comillas>
      </Box>
    </Box>
  );
};

export default Numbers;
