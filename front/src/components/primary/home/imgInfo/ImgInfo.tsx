import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const ImgInfo = () => {
  const infoItems = [
    {
      title: "Herramientas de vanguardia",
      description:
        "Combinamos innovación y experiencia para ofrecer herramientas de vanguardia que cumplen con los más altos estándares de calidad. Contamos con maquinaria diseñada y construida por nuestra propia familia, junto con equipos especializados adquiridos a medida, lo que nos permite adaptarnos a las necesidades del mercado con precisión y eficiencia. Esta combinación de tecnología y conocimiento nos permite fabricar y afilar cuchillas industriales con un nivel de exactitud excepcional, asegurando durabilidad, rendimiento y cortes perfectos en cada aplicación.",
      icon: <BuildOutlinedIcon sx={{ color: "#EAC01B", fontSize: "3rem" }} />,
    },
    {
      title: "Diversas industrias",
      description:
        "Ofrecemos soluciones de corte especializadas para una amplia variedad de industrias. Atendemos sectores como el plástico, papel, madera, caucho, metal y alimentos, proporcionando cuchillas diseñadas para cada necesidad específica. Nuestra experiencia nos ha permitido desarrollar herramientas de alto rendimiento que optimizan los procesos productivos y garantizan cortes precisos y eficientes. Nos adaptamos a las exigencias del mercado, innovando constantemente para brindar soluciones que impulsen la productividad de nuestros clientes en diferentes sectores industriales.",
      icon: (
        <DashboardOutlinedIcon sx={{ color: "#EAC01B", fontSize: "3rem" }} />
      ),
    },
    {
      title: "Características robustas",
      description:
        "La calidad es el pilar de nuestro trabajo. Utilizamos aceros de alta resistencia, tratamientos térmicos avanzados y procesos de fabricación precisos para garantizar cuchillas industriales duraderas y eficientes. Cada herramienta es sometida a rigurosos controles de calidad para asegurar su rendimiento óptimo en las diferentes industrias que atendemos. Nuestro compromiso con la excelencia nos permite ofrecer productos confiables que maximizan la productividad y minimizan el desgaste, siempre con un enfoque en la precisión y la satisfacción de nuestros clientes.",
      icon: (
        <SecurityOutlinedIcon sx={{ color: "#EAC01B", fontSize: "3rem" }} />
      ),
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "80vw",
        mx: "auto",
        marginTop: "15rem",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          paddingX: "3rem",
        }}
        >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "25vw",
              height: "30vw",
              overflow: "hidden",
              justifyContent: "center",
              alignContent: "center",
              zIndex: 2,
              borderRadius: "1rem",
              marginRight: "-5rem",
              // top: { mobile: '', tablets: '', laptop: '25rem', desktop: '' },
              // left: { mobile: '', tablets: '', laptop: '-2rem', desktop: '' },
            }}
          >
            <Image
              src="https://res.cloudinary.com/dseutp7hi/image/upload/v1741282080/proartec-3_dx7gip.webp"
              alt="imagen"
              layout="fill"
              objectFit="cover" // Hace que la imagen llene el Box sin distorsionarse
              objectPosition="center" // Centra la imagen dentro del Box
              style={{
                borderRadius: "12px",
              }}
              // width={450}
              // height={550}
            />
          </Box>
          <Box
            sx={{
              width: "70%",
              background: "#282F3C",
              padding: "5rem 5rem 5rem 10rem",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              position: "relative",
              gap: "4.8rem",
              zIndex: 1,
            }}
          >
            <Typography variant="h3">
              Personalice las ofertas de
              <span style={{ color: "#EAC01B" }}> Servicuchillas </span>
              para que se adapten perfectamente a sus necesidades de cuchillas y
              herramientas de corte.
            </Typography>

            {infoItems.map((item, index) => (
              <Box key={index} sx={{ display: "flex", gap: "1.2rem" }}>
                {item.icon}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                  }}
                >
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ImgInfo;
