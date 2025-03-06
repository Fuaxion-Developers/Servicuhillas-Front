import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const ImgInfo = () => {
  return (
    <Box
      sx={{
        paddingY: '100px',
        paddingX: '60px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <Box
        sx={{
          borderRadius: '10px',
          overflow: 'hidden',
          width: 500,
          height: 600,
          position: 'absolute',
          top: '200px',
          left: ' 150px',
        }}
      >
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1741282080/proartec-3_dx7gip.webp"
          alt="imagen"
          width={500}
          height={600}
        />
      </Box>
      <Box
        sx={{
          width: '700px',
          background: '#262626',
          paddingY: '100px',
          paddingLeft: '200px',
          paddingRight: '50px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        <Typography variant="h3">
          Personalice las ofertas de
          <span style={{ color: '#EAC01B' }}>
            {' '}
            Servicuchillas para que se adapten perfectamente a sus necesidades
            de cuchillas y herramientas de corte.
          </span>
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <VerifiedOutlinedIcon sx={{ color: '#EAC01B' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="h4">Equipo de trabajo</Typography>
            <Typography variant="body2">
              Nuestro equipo combina experiencia, compromiso y pasión por la
              calidad. Como empresa de tradición familiar, valoramos el trabajo
              en equipo y la mejora continua para ofrecer soluciones óptimas con
              un trato humano y profesional.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '350px', display: 'flex', gap: '12px' }}>
          <VerifiedOutlinedIcon sx={{ color: '#EAC01B' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="h4">Equipo de trabajo</Typography>
            <Typography variant="body2">
              Nuestro equipo combina experiencia, compromiso y pasión por la
              calidad. Como empresa de tradición familiar, valoramos el trabajo
              en equipo y la mejora continua para ofrecer soluciones óptimas con
              un trato humano y profesional.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImgInfo;
