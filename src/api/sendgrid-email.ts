const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(
  process.env.SENDGRID_API_KEY
);
const message: any = {
  to: process.env.GATSBY_API_EMAIL_TO,
};

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req: any, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Try a POST!" });
    }

    const { Name, Email, Phone, Interest, Budget, SkypeID, Message } = req.body;

    if (!process.env.GATSBY_API_EMAIL_TO) {
      return res.status(500).json({ message: "GATSBY_API_EMAIL_TO environment variable is not set." });
    }

    const emailMessage = {
      to: process.env.GATSBY_API_EMAIL_TO,
      from: Email,
      subject: 'Testing',
      text: `Name: ${Name}\nEmail: ${Email}\nPhone: ${Phone}\nInterest: ${Interest}\nBudget: ${Budget}\nSkypeID: ${SkypeID}\nMessage: ${Message}`,
      html: `
      <p>Name: ${Name}</p>
      <p>Email: ${Email}</p>
      <p>Phone no: ${Phone}</p>
      <p>Interested In: ${Interest}</p>
      <p>Budget: ${Budget}</p>
      <p>Skype ID: ${SkypeID}</p>
      <p>Message: ${Message}</p>`,
    }

    await sendgrid.send(emailMessage);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      return res.status(500).json({ error: error.response.body });
    }
    return res.status(500).json({ message: "There was an error", error });
  }
};

module.exports = handler;
