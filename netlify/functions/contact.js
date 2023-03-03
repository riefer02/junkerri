const SparkPost = require("sparkpost");

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);

  try {
    const client = new SparkPost(process.env.SPARKPOST_API_KEY);

    const payload = {
      options: {
        sandbox: false,
      },
      content: {
        from: process.env.EMAIL_FROM,
        subject: `Junkerri Art Contact Form | ${name}`,
        html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
      },
      recipients: [{ address: process.env.EMAIL_TO }],
    };

    const response = await client.transmissions.send(payload);
    // Fixes a circular json error
    const { something, id } = response;
    const responseObj = { something, id };

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        response: responseObj,
      }),
    };
  } catch (error) {
    console.error(error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};
