import { Box, Typography, Link } from "@mui/material";
import { PhoneAndroid, Schedule, LocationOn, Email } from "@mui/icons-material";

const sections = [
  {
    icon: <Schedule fontSize="large" color="action" />,
    title: "Horario de atención",
    description:
      "Nuestro personal estará dispuesto a colaborarte en el siguiente horario",
    content: "Lunes a viernes de 7:00am a 5:00pm\nSábados de 7:00am a 12:00m",
  },
  {
    icon: <PhoneAndroid fontSize="large" color="action" />,
    title: "Llámanos",
    description: "Habla directamente con nosotros a las líneas",
    content: "322 789 16 82\n601 293 99 65",
  },
  {
    icon: <Email fontSize="large" color="action" />,
    title: "Contáctanos por email",
    description: "¿Prefieres un correo electrónico? Escríbenos a",
    linkText: "servicuchillas@hotmail.com",
    linkHref: "mailto:servicuchillas@hotmail.com",
  },
  {
    icon: <LocationOn fontSize="large" color="action" />,
    title: "Visítanos",
    description: "Bogotá - Colombia",
    linkText: "Carrera 86 B # 41 - 10 sur",
    linkHref:
      "https://www.google.com/maps/place/SERVICUCHILLAS+CUCHILLAS+INDUSTRIALES/@4.6318743,-74.1698462,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9c2ba7cec7a7:0x7efcec74dc8a67f0!8m2!3d4.631869!4d-74.1672713!16s%2Fg%2F1ptwt_7p0?hl=es&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D",
  },
];

const Info = () => {
  return (
    <Box
      sx={{
        maxWidth: "45%",
        mx: "auto",
        paddingRight: "100px",
        paddingLeft: "50px",
      }}
    >
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
            {section.content && (
              <Typography
                variant="body2"
                color="#EAC01B"
                sx={{ mt: 0.5, fontStyle: "italic", whiteSpace: "pre-line" }}
              >
                {section.content}
              </Typography>
            )}
            {section.linkText && (
              <Link
                href={section.linkHref}
                target="_blank"
                rel="noopener noreferrer"
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
