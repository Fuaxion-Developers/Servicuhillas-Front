import { Box, Typography, Link } from "@mui/material";
import {
  PhoneAndroid,
  QuestionAnswer,
  LocationOn,
  Email,
} from "@mui/icons-material";

const sections = [
  {
    icon: <PhoneAndroid fontSize="large" color="action" />,
    title: "Llámanos",
    description: "Habla directamente con nosotros a la línea",
    phone: "312 409 07 61",
  },
//   {
//     icon: <QuestionAnswer fontSize="large" color="action" />,
//     title: "FAQ",
//     description: "Explore our FAQ for quick, clear answers to common queries.",
//     linkText: "Visit FAQ",
//     linkHref: "#",
//   },
  {
    icon: <LocationOn fontSize="large" color="action" />,
    title: "Visítanos",
    description: "Bogotá - Colombia",
    address: "Carrera 86 B # 41 - 10 sur",
  },
  {
    icon: <Email fontSize="large" color="action" />,
    title: "Contáctanos por email",
    description: "¿Prefieres un correo electrónico? Escríbenos a",
    linkText: "servicuchillas@hotmail.com",
    linkHref: "mailto:servicuchillas@hotmail.com",
  },
];

const Info = () => {
  return (
    <Box sx={{ maxWidth: '45%', mx: "auto", py: 6 }}>
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 2,
            py: 3,
            borderBottom: index < sections.length - 1 ? 1 : 0,
            borderColor: "divider",
          }}
        >
          {section.icon}
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {section.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {section.description}
            </Typography>
            {section.address && (
              <Typography
                variant="body2"
                color="#EAC01B"
                sx={{ mt: 0.5, fontStyle: "italic" }}
              >
                {section.address}
              </Typography>
            )}
            {section.phone && (
              <Typography
                variant="body2"
                color="#EAC01B"
                sx={{ mt: 0.5, fontStyle: "italic" }}
              >
                {section.phone}
              </Typography>
            )}
            {section.linkText && (
              <Link
                href={section.linkHref}
                sx={{
                  mt: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: "medium",
                  textDecoration: "none",
                  color: "#EAC01B",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {section.linkText}
              </Link>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Info;
