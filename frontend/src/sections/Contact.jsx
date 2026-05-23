import { useState } from "react";

import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: "",

  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  // HANDLE SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await emailjs.send(

        "service_cfdsigz",

        "template_aqlfgzp",

        {

          name: formData.name,

          email: formData.email,

          message: formData.message,

        },

        "rrA0bj7cxzjC0vTYP"

      );

      alert("Message Sent Successfully");

      setFormData({

        name: "",
        email: "",
        message: "",

      });

    } catch (error) {

      console.log(error);

      alert("Failed To Send Message");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      id="contact"
      className="bg-black py-28 px-6 md:px-8"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}

        <div>

          <p className="text-cyan-400 font-semibold tracking-widest mb-5">

            CONTACT

          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10">

            Let's Build

            <span className="text-cyan-400">

              {" "}Something Great

            </span>

          </h2>

          <p className="text-gray-400 text-xl leading-10 mb-14">

            I'm always open to discussing full stack
            development opportunities, innovative projects,
            collaborations, and startup ideas.

          </p>

          {/* CONTACT INFO */}

          <div className="space-y-8">

            {/* EMAIL */}

            <div className="flex items-center gap-6 bg-slate-950 border border-slate-800 p-6 rounded-3xl">

              <div className="w-16 h-16 rounded-2xl bg-black border border-slate-800 flex items-center justify-center text-cyan-400 text-2xl">

                <FaEnvelope />

              </div>

              <div>

                <h3 className="text-2xl font-semibold mb-1">

                  Email

                </h3>

                <p className="text-gray-400">

                  munjamudaykumar@gmail.com

                </p>

              </div>

            </div>

            {/* PHONE */}

            <div className="flex items-center gap-6 bg-slate-950 border border-slate-800 p-6 rounded-3xl">

              <div className="w-16 h-16 rounded-2xl bg-black border border-slate-800 flex items-center justify-center text-cyan-400 text-2xl">

                <FaPhone />

              </div>

              <div>

                <h3 className="text-2xl font-semibold mb-1">

                  Phone

                </h3>

                <p className="text-gray-400">

                  +91 9110328463

                </p>

              </div>

            </div>

            {/* LOCATION */}

            <div className="flex items-center gap-6 bg-slate-950 border border-slate-800 p-6 rounded-3xl">

              <div className="w-16 h-16 rounded-2xl bg-black border border-slate-800 flex items-center justify-center text-cyan-400 text-2xl">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h3 className="text-2xl font-semibold mb-1">

                  Location

                </h3>

                <p className="text-gray-400">

                  Telangana, India

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={handleSubmit}
          className="bg-slate-950 border border-slate-800 p-10 rounded-[35px] shadow-2xl"
        >

          <div className="space-y-7">

            {/* NAME */}

            <div>

              <label className="block mb-3 text-lg font-medium">

                Full Name

              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-5 rounded-2xl bg-black border border-slate-800 outline-none focus:border-cyan-400 transition"
              />

            </div>

            {/* EMAIL */}

            <div>

              <label className="block mb-3 text-lg font-medium">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-5 rounded-2xl bg-black border border-slate-800 outline-none focus:border-cyan-400 transition"
              />

            </div>

            {/* MESSAGE */}

            <div>

              <label className="block mb-3 text-lg font-medium">

                Message

              </label>

              <textarea
                rows="7"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="w-full p-5 rounded-2xl bg-black border border-slate-800 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              bg-cyan-500
              hover:bg-cyan-600
              disabled:opacity-70
              py-5
              rounded-2xl
              text-lg
              font-semibold
              transition
              duration-300
              shadow-lg
              shadow-cyan-500/20
              "
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

          </div>

        </form>

      </div>

    </section>

  );

}

export default Contact;