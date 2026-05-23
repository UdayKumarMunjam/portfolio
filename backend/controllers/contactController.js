import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {

  try {

    const newMessage = new Contact(req.body);

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};