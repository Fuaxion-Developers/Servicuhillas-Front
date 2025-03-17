import { FormT } from "../types/email";

export const validateForm = (inputs: FormT) => {
  const errors: FormT = {};

  if (
    inputs.name &&
    inputs.lastname &&
    inputs.email &&
    inputs.phone &&
    inputs.content
  ) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(inputs.name)) {
      errors.name = "No es un nombre válido.";
    }
    if (!nameRegex.test(inputs.lastname)) {
      errors.lastname = "No es un apellido válido.";
    }

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(inputs.email)) {
      errors.email = "Correo electónico inválido.";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(inputs.phone)) {
      errors.phone = "No es un número de teléfono válido.";
    }

    const textRegex = /^[\w\s.,;:'"?!()\-]+$/;
    if (!textRegex.test(inputs.content)) {
      errors.content = "No es un mensaje válido.";
    }
  }

  return errors;
};

export const validateAllFields = (inputs: FormT, errors: FormT) => {
  const err = Object.keys(errors).length;
  return (
    !inputs.name ||
    !inputs.lastname ||
    !inputs.email ||
    !inputs.phone ||
    !inputs.content ||
    err !== 0
  );
};
