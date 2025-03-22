import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          mobile: "30rem",
          tablet: "50rem",
        },
        overflow: "hidden",
        marginY: {
          mobile: "5rem",
          tablet: "10rem",
        },
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.78803693965!2d-74.1672713!3d4.631869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c2ba7cec7a7%3A0x7efcec74dc8a67f0!2sSERVICUCHILLAS%20CUCHILLAS%20INDUSTRIALES!5e0!3m2!1ses!2sco!4v1741618266920!5m2!1ses!2sco"
        allowFullScreen
        loading="lazy"
        style={{ borderRadius: "1rem", border: "none" }}
      ></iframe>
    </Box>
  );
};

export default Map;
