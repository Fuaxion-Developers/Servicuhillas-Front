import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const faqData = [
  {
    question: "¿Qué tipo de cuchillas fabrican y afilan?",
    answer:
      "Fabricamos y afilamos cuchillas industriales para diversas industrias, incluyendo plástico, papel, madera, caucho, metalmecánica y alimentos. Nuestras cuchillas están diseñadas para garantizar cortes precisos y mayor durabilidad.",
  },
  {
    question: "¿Ofrecen fabricación de cuchillas personalizadas?",
    answer:
      "Sí, fabricamos cuchillas a medida según las necesidades específicas de cada cliente. Podemos adaptar dimensiones, materiales y acabados para garantizar el mejor rendimiento en su proceso productivo.",
  },
  {
    question: "¿Qué materiales utilizan en la fabricación de sus cuchillas?",
    answer:
      "Trabajamos con aceros de alta resistencia, como acero grado herramienta, acero inoxidable y aceros aleados con tratamientos térmicos, asegurando mayor durabilidad, precisión y resistencia al desgaste.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso de afilado o fabricación?",
    answer:
      "El tiempo varía según la complejidad y el volumen del pedido. El afilado de cuchillas suele tardar entre 24 y 72 horas, mientras que la fabricación de cuchillas personalizadas depende de las especificaciones del cliente y la carga de producción.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puede contactarnos a través de nuestro sitio web, correo electrónico, teléfono o visítenos en nuestra sede. Para ofrecerle una cotización precisa, necesitamos conocer las dimensiones, material y tipo de aplicación de la cuchilla.",
  },
  {
    question: "¿Ofrecen servicio de recolección y entrega de cuchillas?",
    answer:
      "Sí, contamos con servicio de recolección y entrega en ciertas zonas. Consulte con nuestro equipo para conocer la cobertura y disponibilidad en su área.",
  },
  {
    question: "¿Tienen garantía en sus productos y servicios?",
    answer:
      "Sí, garantizamos la calidad de nuestras cuchillas y servicios de afilado. Si presenta algún inconveniente con el rendimiento de la cuchilla, nuestro equipo está disponible para revisar el caso y brindarle una solución.",
  },
  {
    question:
      "¿Solo trabajan con empresas o también con clientes individuales?",
    answer:
      "Atendemos tanto a grandes empresas como a clientes individuales que necesiten cuchillas de alta calidad para sus procesos productivos.",
  },
  {
    question: "¿Pueden fabricar cuchillas para maquinaria importada?",
    answer:
      "Sí, podemos fabricar cuchillas compatibles con maquinaria de distintas marcas y procedencias. Solo necesitamos las especificaciones o muestras para garantizar la compatibilidad.",
  },
  {
    question: "¿Qué diferencia a Servicuchillas de otras empresas del sector?",
    answer:
      "Nos diferenciamos por nuestro enfoque en la calidad, la personalización y la atención cercana. Somos una empresa familiar con más de una década de experiencia, combinando tecnología, innovación y un servicio humano que garantiza soluciones eficientes y duraderas.",
  },
];

const FAQAccordion = () => {
  return (
    <Box
      sx={{
        width: {
          mobile: "100%",
          tablet: "100%",
          laptop: "75rem",
          desktop: "75rem",
        },
      }}
    >
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{ background: "transparent", padding: "1.2rem" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h4">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontWeight: "normal", fontSize: "1.6rem", color: "#939393" }}
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
        display: "flex",
        flexDirection: {
          mobile: "column",
          tablet: "column",
          laptop: "row",
          desktop: "row",
        },
        paddingTop: "15rem",
        paddingBottom: "0.5rem",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ width: "30rem" }}>
        <Typography variant="h2">Preguntas frecuentes</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Pregúntenos cualquier cosa sobre nuestra marca y productos y obtenga
          respuestas objetivas.
        </Typography>
      </Box>
      <FAQAccordion />
    </Box>
  );
}
