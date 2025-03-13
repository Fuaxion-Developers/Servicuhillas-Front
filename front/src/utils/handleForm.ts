"use server";
import { sendEmail } from "@/config/brevo";
import { EmailT } from "@/types/email";

const handleForm = async (formData: EmailT) => {
  await sendEmail(formData);
};

export default handleForm;