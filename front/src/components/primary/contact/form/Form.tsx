'use client'
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import handleForm from "../../../../utils/handleForm";
import { useRef, useState } from "react";
import { EmailT } from "@/types/email";
import { FormT } from "@/types/email";
import { validateAllFields, validateForm } from "@/utils/validateForm";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [userMail, setUserMail] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    content: "",
  });
  const [errors, setErrors] = useState<FormT>({});
  const [statusBtn, setStatusBtn] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const userMailCurrent = { ...userMail, [name]: value };
    setUserMail({
      ...userMail,
      [name]: value,
    });

    const errorsFromUser = validateForm(userMailCurrent);
    setErrors(errorsFromUser);

    setStatusBtn(validateAllFields(userMailCurrent, errorsFromUser));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: EmailT = {
      subject: "Mensaje desde la Web",
      from: `${userMail.name} ${userMail.lastname}`,
      email: userMail.email,
      phone: userMail.phone,
      content: userMail.content,
    }

    try {
      handleForm(formData);
      alert("Mensaje enviado")
      setUserMail({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        content: "",
      })
    } catch (error) {
      alert("No se pudo enviar el mensaje")
    }

  }

  return (
    <Box
      sx={{
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        width: "60%",
        paddingLeft: "100px",
        paddingRight: "50px",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
        sx={{
          marginBottom: "50px",
        }}
      >
        Completa el formulario
      </Typography>
      <form ref={form} onSubmit={handleSubmit}>
        <Grid2
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid2
            container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Grid2
              sx={{
                width: "49%",
                marginY: "12px",
              }}
            >
              <TextField
                fullWidth
                name="name"
                label="Nombre"
                variant="outlined"
                onChange={handleInputChange}
                value={userMail.name}
              />
            </Grid2>
            <Grid2
              sx={{
                width: "49%",
                marginY: "12px",
              }}
            >
              <TextField
                fullWidth
                name="lastname"
                label="Apellido"
                variant="outlined"
                onChange={handleInputChange}
                value={userMail.lastname}
              />
            </Grid2>
          </Grid2>
          <Grid2
            container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Grid2
              sx={{
                width: "49%",
                marginY: "12px",
              }}
            >
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                autoComplete="email"
                onChange={handleInputChange}
                value={userMail.email}
              />
            </Grid2>
            <Grid2
              sx={{
                width: "49%",
                marginY: "12px",
              }}
            >
              <TextField
                fullWidth
                name="phone"
                label="Número telefónico"
                type="tel"
                variant="outlined"
                onChange={handleInputChange}
                value={userMail.phone}
              />
            </Grid2>
          </Grid2>
          <Grid2
            container
            sx={{
              display: "flex",
              width: "99%",
            }}
          >
            <TextField
              fullWidth
              name="content"
              label="Detalles"
              multiline
              rows={6}
              variant="outlined"
              onChange={handleInputChange}
              value={userMail.content}
            />
          </Grid2>
        </Grid2>
        <Box mt={4} sx={{ width: "99%" }} mx="auto">
          <Button fullWidth variant="contained" type="submit" disabled={statusBtn}>
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
