import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = JSON.parse(req.body);

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

    await new Promise((resolve, reject) => {
      return transporter.sendMail(
        {
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          subject: `Junkerri Art Contact Form | ${name}`,
          text: message,
          html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
        },
        function (err) {
          if (err) console.log(err);
        }
      );
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
}

export const config = {
  type: "experimental-background",
};
