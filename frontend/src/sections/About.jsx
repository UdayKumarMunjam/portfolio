import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28 px-8"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 text-lg font-semibold mb-4">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-extrabold mb-10 leading-tight">

            Passionate About Building
            Scalable Full Stack Applications

          </h2>

          <p className="text-gray-400 text-xl leading-10 mb-8">

            I am a Full Stack MERN Developer focused on
            creating responsive frontend experiences,
            scalable backend systems, and modern web applications.

          </p>

          <p className="text-gray-400 text-xl leading-10">

            I enjoy solving real-world problems using React,
            Node.js, Express, MongoDB, JWT Authentication,
            Cloudinary, REST APIs, and analytics dashboards.

          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-8"
        >

          <div className="bg-black p-10 rounded-3xl border border-slate-800">

            <h3 className="text-5xl font-bold text-cyan-400 mb-4">
              200+
            </h3>

            <p className="text-gray-400 text-lg">
              LeetCode Problems Solved
            </p>

          </div>

          <div className="bg-black p-10 rounded-3xl border border-slate-800">

            <h3 className="text-5xl font-bold text-cyan-400 mb-4">
              2
            </h3>

            <p className="text-gray-400 text-lg">
              Full Stack Projects
            </p>

          </div>

          <div className="bg-black p-10 rounded-3xl border border-slate-800">

            <h3 className="text-5xl font-bold text-cyan-400 mb-4">
              IITB
            </h3>

            <p className="text-gray-400 text-lg">
              Eureka Finalist
            </p>

          </div>

          <div className="bg-black p-10 rounded-3xl border border-slate-800">

            <h3 className="text-5xl font-bold text-cyan-400 mb-4">
              MERN
            </h3>

            <p className="text-gray-400 text-lg">
              Stack Developer
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;