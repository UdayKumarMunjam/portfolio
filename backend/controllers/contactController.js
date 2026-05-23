import Contact from "../models/Contact.js";

import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {

  try {

    const { name, email, message } = req.body;

    // SAVE TO DATABASE

    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    // NODEMAILER TRANSPORTER

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS,

      },

    });

    // SEND EMAIL

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Portfolio Message From ${name}`,

      html: `
        <h2>New Portfolio Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    res.status(201).json({

      success: true,

      message: "Message Sent Successfully",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};