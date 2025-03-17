import { Box, Typography } from "@mui/material";

const History = () => {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
        paddingTop: "10rem",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          letterSpacing: "-0.02em",
          paddingBottom: "5rem",
        }}
      >
        Un futuro prometedor
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            width: "70%",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              paddingX: "2rem",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                marginBottom: "2rem",
              }}
            >
              Servicuchillas LTDA nació en el 2007, del sueño de una familia
              decidida a construirse un mejor futuro, y hoy es un ejemplo de
              crecimiento, confianza y compromiso. A partir del trabajo de una
              pareja focalizada, la empresa comenzó en una modesta habitación de
              su hogar, con una máquina ensamblada personalmente por uno de
              ellos; buscando dar respuesta a las necesidades de diferentes
              industrias, en lo relacionado con la fabricación, afilado y
              mantenimiento de sus cuchillas.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
              }}
            >
              Con determinación y esfuerzo, en 2012 se inauguró la sede actual,
              marcando el inicio de una nueva etapa de profesionalismo y
              expansión. Aunque la base es familiar —con padres e hijos
              integrados en el equipo gerencial— hoy la empresa cuenta con un
              equipo de más de 10 trabajadores y brinda oportunidades laborales
              a diversos talentos, creando un ambiente de trabajo cálido y de
              confianza. Este entorno humano se refleja en la atención
              personalizada y el don de servicio con el que responden a las
              necesidades del mercado, combinando maquinaria original construida
              por la familia, con equipos a medida fabricados por otros
              especialistas para garantizar la excelencia en cada proyecto.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            aspectRatio: "16/9",
            overflow: "hidden", // Para evitar que se desborde el contenido
            borderRadius: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginX: "2rem",
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100vh",
              height: "100vw",
              objectFit: "contain", // O "contain", según prefieras
              transform: "translateY(10%) rotate(270deg)", // Rota 270 grados
              transformOrigin: "center", // Gira desde el centro
              borderRadius: "1.2rem",
              position: "absolute",
            }}
          >
            <source
              src="https://res.cloudinary.com/dzhh3k5kj/video/upload/v1741747164/2025-03-11_21-36-38_elyj1p.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el video.
          </video>
        </Box>
      </Box>
    </Box>
  );
};

export default History;
