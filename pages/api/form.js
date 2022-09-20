let nodemailer = require("nodemailer");
require("dotenv").config();
const PASSWORD = process.env.password;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "panchiportfoliomailer@gmail.com",
    pass: PASSWORD,
  },
});

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  console.log(body);

  const mailData = {
    from: "panchiportfoliomailer@gmail.com",
    to: "fsepulvedadev@gmail.com",
    subject: `Mensaje de ${body.name} ${body.apellido} desde portfolio`,
    text: body.mensaje,
    html: (
      <div>
        <h1>
          De {body.name} {body.apellido}
        </h1>
        <p>{body.mensaje}</p>
      </div>
    ),
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      console.log(info);
      res.status(200).json({ body });
    }
  });
}
