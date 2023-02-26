import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST,
  ssl: true,
});

export default async function handler(req, res) {
  const { name, email, message } = JSON.parse(req.body);

  try {
    // const transporter = nodemailer.createTransport({
    //   name: process.env.DOMAIN_NAME,
    //   host:
    //   port: process.env.SMTP_PORT,
    //   secure: true,
    //   auth: {
    //     user:
    //     pass:
    //   },
    // });

    const response = await client.sendAsync({
      text: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Junkerri Art Contact Form | ${name}`,
    });
    console.log(response);

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
