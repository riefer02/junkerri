const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);

  try {
    const transporter = nodemailer.createTransport({
      name: process.env.DOMAIN_NAME,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail(
      {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `Junkerri Art Contact Form | ${name}`,
        text: message,
        html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
      },
      function (err, info) {
        if (err) console.log(err);
        if (info) console.log(info);
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};
