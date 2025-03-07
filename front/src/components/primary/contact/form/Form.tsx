import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

const Form = () => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        width: '60%',
        paddingInline: '100px',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
        sx={{
            marginBottom: '50px'
        }}
      >
        Completa el formulario
      </Typography>
      <form>
        <Grid2
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid2
            container
            sx={{
              display: "flex",
              justifyContent: 'space-around'
            }}
          >
            <Grid2 sx={{
                width: '48%'
            }}>
              <TextField fullWidth label="Nombre" variant="outlined" />
            </Grid2>
            <Grid2 sx={{
                width: '48%'
            }}>
              <TextField fullWidth label="Apellido" variant="outlined" />
            </Grid2>
          </Grid2>
          <Grid2
            container
            sx={{
              display: "flex",
              justifyContent: 'space-around'
            }}
          >
            <Grid2 sx={{
                width: '48%'
            }}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                autoComplete="email"
              />
            </Grid2>
            <Grid2 sx={{
                width: '48%'
            }}>
              <TextField
                fullWidth
                label="Número telefónico"
                type="tel"
                variant="outlined"
              />
            </Grid2>
          </Grid2>
          <Grid2
            container
            spacing={2}
            sx={{
              display: "flex",
            }}
          >
            <TextField
              fullWidth
              label="Detalles"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid2>
        </Grid2>
        <Box mt={4}>
          <Button fullWidth variant="contained" type="submit">
            Enviar
          </Button>
        </Box>
        <Box mt={3} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Te contactaremos en máximo 2 días hábiles.
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
