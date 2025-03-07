import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const ImgInfo = () => {
  return (
    <Box
      sx={{
        paddingTop: '150px',
        paddingX: '250px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <Box
        sx={{
          borderRadius: '10px',
          overflow: 'hidden',
          width: 600,
          height: 700,
          position: 'absolute',
          top: '250px',
          left: ' 250px',
        }}
      >
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1741282080/proartec-3_dx7gip.webp"
          alt="imagen"
          width={600}
          height={700}
        />
      </Box>
      <Box
        sx={{
          width: '850px',
          background: '#363636',
          paddingY: '100px',
          paddingLeft: '250px',
          paddingRight: '50px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        <Typography variant="h3">
          Personalice las ofertas de
          <span style={{ color: '#EAC01B' }}> Servicuchillas </span>
          para que se adapten perfectamente a sus necesidades de cuchillas y
          herramientas de corte.
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <VerifiedOutlinedIcon sx={{ color: '#EAC01B' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="h5">Herramientas de vanguardia</Typography>
            <Typography variant="body2">
              Experimente una mayor eficiencia en la producción y mantenimiento
              de cuchillas industriales con nuestras avanzadas soluciones
              tecnológicas. Con nuestras herramientas de última generación,
              optimice cada etapa de su cadena productiva, garantizando
              precisión, calidad y reducción de tiempos. En Servicuchillas, su
              empresa se beneficia de la innovación y la máxima performance en
              cada corte.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <VerifiedOutlinedIcon sx={{ color: '#EAC01B' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="h5">Paneles de control intuitivos</Typography>
            <Typography variant="body2">
              Navegue con facilidad utilizando los paneles intuitivos de
              Servicuchillas. Configure y supervise sus procesos de producción y
              mantenimiento de cuchillas industriales sin inconvenientes, con
              interfaces fáciles de usar diseñadas para una gestión rápida y
              eficaz del flujo de trabajo.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <VerifiedOutlinedIcon sx={{ color: '#EAC01B' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="h5">Características robustas</Typography>
            <Typography variant="body2">
              Minimice la complejidad y maximice la productividad. Las sólidas
              características de Servicuchillas están diseñadas para optimizar
              su proceso de producción y mantenimiento de cuchillas
              industriales, ofreciendo resultados que se destacan por su
              excelencia y durabilidad.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImgInfo;
