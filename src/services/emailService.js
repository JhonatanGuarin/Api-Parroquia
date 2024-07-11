const SibApiV3Sdk = require('@getbrevo/brevo');

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY;

exports.sendResetCode = async (mail, resetCode) => {
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "Código de recuperación de contraseña";
  sendSmtpEmail.htmlContent = `<html><body><h1>Código de recuperación de contraseña</h1><p>Tu código de recuperación es: <strong>${resetCode}</strong></p></body></html>`;
  sendSmtpEmail.sender = { name: "Parroquia de Santa Maria", email: process.env.FROM_EMAIL };
  sendSmtpEmail.to = [{ email: mail }];

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email enviado correctamente. ID:', data.messageId);
    return data;
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw new Error('Error al enviar el correo de recuperación');
  }
};