import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const ImgInfo = () => {
  const infoItems = [
    {
      title: 'Herramientas de vanguardia',
      description:
        'Experimente una mayor eficiencia en la producción y mantenimiento de cuchillas industriales con nuestras avanzadas soluciones tecnológicas. Con nuestras herramientas de última generación, optimice cada etapa de su cadena productiva, garantizando precisión, calidad y reducción de tiempos. En Servicuchillas, su empresa se beneficia de la innovación y la máxima performance en cada corte.',
      icon: <BuildOutlinedIcon sx={{ color: '#EAC01B', fontSize: '3rem' }} />,
    },
    {
      title: 'Paneles de control intuitivos',
      description:
        'Navegue con facilidad utilizando los paneles intuitivos de Servicuchillas. Configure y supervise sus procesos de producción y mantenimiento de cuchillas industriales sin inconvenientes, con interfaces fáciles de usar diseñadas para una gestión rápida y eficaz del flujo de trabajo.',
      icon: (
        <DashboardOutlinedIcon sx={{ color: '#EAC01B', fontSize: '3rem' }} />
      ),
    },
    {
      title: 'Características robustas',
      description:
        'Minimice la complejidad y maximice la productividad. Las sólidas características de Servicuchillas están diseñadas para optimizar su proceso de producción y mantenimiento de cuchillas industriales, ofreciendo resultados que se destacan por su excelencia y durabilidad.',
      icon: (
        <SecurityOutlinedIcon sx={{ color: '#EAC01B', fontSize: '3rem' }} />
      ),
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: '15rem',
        position: 'relative',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <Box
        sx={{
          borderRadius: '1rem',
          overflow: 'hidden',
          width: 450,
          height: 550,
          position: 'absolute',
          top: { mobile: '', tablets: '', laptop: '25rem', desktop: '' },
          left: { mobile: '', tablets: '', laptop: '5rem', desktop: '' },
        }}
      >
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1741282080/proartec-3_dx7gip.webp"
          alt="imagen"
          width={450}
          height={550}
        />
      </Box>
      <Box
        sx={{
          width: '80rem',
          background: '#282F3C',
          paddingY: '10rem',
          paddingLeft: '20rem',
          paddingRight: '5rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '4.8rem',
        }}
      >
        <Typography variant="h3">
          Personalice las ofertas de
          <span style={{ color: '#EAC01B' }}> Servicuchillas </span>
          para que se adapten perfectamente a sus necesidades de cuchillas y
          herramientas de corte.
        </Typography>

        {infoItems.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', gap: '1.2rem' }}>
            {item.icon}
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImgInfo;
