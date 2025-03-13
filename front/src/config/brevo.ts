import { EmailT } from "@/types/email";
import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.NEXT_PUBLIC_BEVO_API as string
);

export async function sendEmail(info: EmailT) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = info.subject as string;
    smtpEmail.to = [{ email: process.env.NEXT_PUBLIC_EMAIL as string }];
    smtpEmail.htmlContent = `
      <html>
      <h2>Este es un mensaje desde la web de de Servicuchillas</h2>
      <p><strong>Nombre:</strong> ${info.from as string}</p>
      <p><strong>Teléfono:</strong> ${info.phone as string}</p>
      <p><strong>Correo:</strong> ${info.email as string}</p>
      <p><strong>Consulta:</strong> ${info.content as string}</p>
      </html>
      `;
    smtpEmail.sender = { email: process.env.NEXT_PUBLIC_EMAIL as string }

    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.log(error);
  }
}
