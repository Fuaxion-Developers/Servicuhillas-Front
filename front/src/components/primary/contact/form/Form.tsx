"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    };

    try {
      handleForm(formData);
      alert("Mensaje enviado");
      setUserMail({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        content: "",
      });
      setStatusBtn(true);
    } catch {
      alert("No se pudo enviar el mensaje.");
    }
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        width: {
          mobile: "100%",
          laptop: "60%",
        },
        paddingRight: {
          mobile: "0",
          laptop: "5rem",
        },
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
        sx={{
          marginBottom: "5rem",
        }}
      >
        Completa el formulario
      </Typography>
      <form ref={form} onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginY: "1.2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "49%",
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
              <Typography>{errors.name}</Typography>
            </Box>
            <Box
              sx={{
                width: "49%",
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
              <Typography>{errors.lastname}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginY: "1.2rem",
            }}
          >
            <Box
              sx={{
                width: "49%",
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
            </Box>
            <Box
              sx={{
                width: "49%",
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
            </Box>
          </Box>
          <Box
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
          </Box>
        </Box>
        <Box mt={4} sx={{ width: "99%" }} mx="auto">
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={statusBtn}
          >
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
