import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const faqData = [
  {
    question: '¿Qué incluye el kit de inicio de cuchillas industriales?',
    answer:
      'Nuestro kit de inicio incluye una selección de cuchillas industriales esenciales para diversas aplicaciones de corte. Contiene cuchillas de alto rendimiento para diferentes materiales, junto con accesorios clave para su instalación y mantenimiento. Ha sido diseñado para ayudar tanto a nuevos clientes como a profesionales experimentados a optimizar sus procesos de corte con herramientas de calidad.',
  },
  {
    question:
      '¿Puedo actualizar a un kit de cuchillas industriales más avanzado?',
    answer:
      'Por supuesto! Puedes actualizar a un kit profesional en cualquier momento para acceder a una gama más amplia de cuchillas de alta calidad, disfrutar de soporte prioritario y recibir contenido exclusivo sobre el uso y mantenimiento de nuestras herramientas. Ponte en contacto con nuestro equipo para una transición sin inconvenientes.',
  },
  {
    question:
      '¿Qué tipo de soporte recibo con mi kit de cuchillas industriales?',
    answer:
      'Todos nuestros clientes cuentan con soporte por correo electrónico dedicado. Con el Kit de Inicio, recibirás nuestro soporte estándar, mientras que al actualizar a un kit profesional obtendrás soporte prioritario, con tiempos de respuesta más rápidos y asistencia especializada para optimizar el uso de tus cuchillas industriales.',
  },
  {
    question:
      '¿Ofrecen recursos y tutoriales sobre el uso de las cuchillas industriales?',
    answer:
      'Sí, actualizamos regularmente nuestros recursos y tutoriales en línea para reflejar las últimas innovaciones en corte industrial, así como para presentar nuevas cuchillas y técnicas. Nuestro material está diseñado para ser completo y fácil de entender, adaptándose a todos los niveles de experiencia.',
  },
  {
    question:
      '¿Ofrecen soluciones para empresas con grandes necesidades de corte industrial?',
    answer:
      'Sí, nuestras Soluciones Empresariales están diseñadas para compañías que requieren un servicio integral. Ofrecemos consultoría, planificación y suministro de cuchillas industriales de alto rendimiento, así como asesoramiento para optimizar procesos de corte a gran escala. Contáctanos para una cotización personalizada.',
  },
];

const FAQAccordion = () => {
  return (
    <Box sx={{ width: '75rem' }}>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{ background: 'transparent', padding: '1.2rem' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h4">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontWeight: 'normal', fontSize: '1.6rem', color: '#939393' }}
          >
            {item.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default function AccordionUsage() {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingTop: '15rem',
        paddingBottom: '0.5rem',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '30rem' }}>
        <Typography variant="h2">Preguntas frecuentes</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Pregúntenos cualquier cosa sobre nuestra marca y productos y obtenga
          respuestas objetivas.
        </Typography>
      </Box>
      <FAQAccordion />
    </Box>
  );
}
