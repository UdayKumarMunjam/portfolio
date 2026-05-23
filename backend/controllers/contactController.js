import Contact from "../models/Contact.js";

import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {

  try {

    const {
      name,
      email,
      message,
    } = req.body;

    // SAVE MESSAGE TO DATABASE

    const newMessage = new Contact({

      name,
      email,
      message,

    });

    await newMessage.save();

    // GMAIL SMTP CONFIGURATION

    const transporter =
      nodemailer.createTransport({

        host: "smtp.gmail.com",

        port: 587,

        secure: false,

        auth: {

          user: process.env.EMAIL_USER,

          pass: process.env.EMAIL_PASS,

        },

      });

    // SEND EMAIL

    await transporter.sendMail({

      from: process.env.EMAIL_FROM,

      to: process.env.EMAIL_USER,

      subject:
        `New Portfolio Message From ${name}`,

      html: `

        <div style="font-family: Arial; padding: 20px;">

          <h2>
            New Portfolio Contact Message
          </h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

        </div>

      `,

    });

    return res.status(200).json({

      success: true,

      message:
        "Message Sent Successfully",

    });

  } catch (error) {

    console.log(
      "EMAIL ERROR:",
      error
    );

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};