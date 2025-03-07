import * as React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box } from '@mui/material';

export default function AccordionUsage() {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: '250px',
        paddingY: '150px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '350px' }}>
        <Typography variant="h3">Preguntas frecuentes</Typography>
        <Typography variant="body2">
          Pregúntenos cualquier cosa sobre nuestra marca y productos y obtenga
          respuestas objetivas.
        </Typography>
      </Box>
      <Box sx={{ width: '900px' }}>
        <Accordion sx={{ background: '#262626', padding: '12px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h5">
              ¿Qué incluye el kit de inicio de cuchillas industriales?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontWeight: 'normal', fontSize: '16px', color: '#939393' }}
          >
            Nuestro kit de inicio incluye una selección de cuchillas
            industriales esenciales para diversas aplicaciones de corte.
            Contiene cuchillas de alto rendimiento para diferentes materiales,
            junto con accesorios clave para su instalación y mantenimiento. Ha
            sido diseñado para ayudar tanto a nuevos clientes como a
            profesionales experimentados a optimizar sus procesos de corte con
            herramientas de calidad.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: '#262626', padding: '12px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h5">
              ¿Puedo actualizar a un kit de cuchillas industriales más avanzado?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontWeight: 'normal', fontSize: '16px', color: '#939393' }}
          >
            Por supuesto! Puedes actualizar a un kit profesional en cualquier
            momento para acceder a una gama más amplia de cuchillas de alta
            calidad, disfrutar de soporte prioritario y recibir contenido
            exclusivo sobre el uso y mantenimiento de nuestras herramientas.
            Ponte en contacto con nuestro equipo para una transición sin
            inconvenientes.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: '#262626', padding: '12px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h5">
              ¿Qué tipo de soporte recibo con mi kit de cuchillas industriales?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontWeight: 'normal', fontSize: '16px', color: '#939393' }}
          >
            Todos nuestros clientes cuentan con soporte por correo electrónico
            dedicado. Con el Kit de Inicio, recibirás nuestro soporte estándar,
            mientras que al actualizar a un kit profesional obtendrás soporte
            prioritario, con tiempos de respuesta más rápidos y asistencia
            especializada para optimizar el uso de tus cuchillas industriales.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: '#262626', padding: '12px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h5">
              ¿Ofrecen recursos y tutoriales sobre el uso de las cuchillas
              industriales?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontWeight: 'normal', fontSize: '16px', color: '#939393' }}
          >
            Sí, actualizamos regularmente nuestros recursos y tutoriales en
            línea para reflejar las últimas innovaciones en corte industrial,
            así como para presentar nuevas cuchillas y técnicas. Nuestro
            material está diseñado para ser completo y fácil de entender,
            adaptándose a todos los niveles de experiencia.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: '#262626', padding: '12px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h5">
              ¿Ofrecen soluciones para empresas con grandes necesidades de corte
              industrial?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontWeight: 'normal', fontSize: '16px', color: '#939393' }}
          >
            Sí, nuestras Soluciones Empresariales están diseñadas para compañías
            que requieren un servicio integral. Ofrecemos consultoría,
            planificación y suministro de cuchillas industriales de alto
            rendimiento, así como asesoramiento para optimizar procesos de corte
            a gran escala. Contáctanos para una cotización personalizada.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
