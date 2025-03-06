import { Box, Typography } from '@mui/material';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Groups3Icon from '@mui/icons-material/Groups3';
import FactoryIcon from '@mui/icons-material/Factory';
const Info = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: '60px',
        paddingBottom: '0px',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '350px', display: 'flex', gap: '12px' }}>
        <VerifiedOutlinedIcon sx={{ color: '#EAC01B' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="h4">Diseño centrado en el cliente</Typography>
          <Typography variant="body2">
            En Servicuchillas Ltda., cada producto es diseñado para garantizar
            máximo rendimiento y durabilidad, adaptándose a las necesidades
            específicas de cada industria. Brindamos soluciones precisas con un
            servicio cercano y personalizado.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '350px', display: 'flex', gap: '12px' }}>
        <Groups3Icon sx={{ color: '#EAC01B' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="h4">Equipo de trabajo</Typography>
          <Typography variant="body2">
            Nuestro equipo combina experiencia, compromiso y pasión por la
            calidad. Como empresa de tradición familiar, valoramos el trabajo en
            equipo y la mejora continua para ofrecer soluciones óptimas con un
            trato humano y profesional.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '350px', display: 'flex', gap: '12px' }}>
        <FactoryIcon sx={{ color: '#EAC01B' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="h4">
            Satisfacer las demandas de la industria
          </Typography>
          <Typography variant="body2">
            Las industrias exigen precisión y eficiencia, y en Servicuchillas
            Ltda. respondemos con tecnología, calidad y rapidez. Nuestro
            compromiso es entregar productos de alto desempeño que superen las
            expectativas del sector.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
