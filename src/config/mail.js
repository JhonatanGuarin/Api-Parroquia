const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendResetCode = async (mail, resetCode) => {
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: mail,
      subject: 'Código de recuperación de contraseña',
      html: `<strong>Tu código de recuperación es: ${resetCode}</strong>`
    });

    console.log('Email enviado correctamente:', data);
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw new Error('Error al enviar el correo de recuperación');
  }
};