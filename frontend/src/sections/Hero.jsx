import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import profile from "../assets/profile.jpeg";

function Hero() {

  return (

    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden px-6 md:px-10 pt-36 lg:pt-24">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* LEFT SIDE */}

        <div>

          {/* BADGE */}

          <div className="inline-flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-5 py-3 rounded-full mb-8 backdrop-blur-md">

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

            <p className="text-cyan-400 font-semibold tracking-wide text-sm md:text-base">

              FULL STACK MERN DEVELOPER

            </p>

          </div>

          {/* HEADING */}

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-8">

            Building Modern

            <br />

            <span className="text-cyan-400">

              Scalable Full Stack

            </span>

            <br />

            Web Applications

          </h1>

          {/* DESCRIPTION */}

          <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-2xl mb-12">

            Passionate MERN stack developer focused on
            responsive frontend experiences, scalable backend systems,
            analytics dashboards, REST APIs, authentication systems,
            and modern web technologies.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-6 mb-14">

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl text-lg font-bold transition duration-300 shadow-lg shadow-cyan-500/30 hover:scale-105"
            >

              Download Resume

            </a>

            <a
              href="#projects"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-2xl text-lg font-bold transition duration-300 hover:scale-105"
            >

              View Projects

            </a>

          </div>

          {/* SOCIAL ICONS */}

          <div className="flex gap-5">

            <a
              href="https://github.com/UdayKumarMunjam"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black transition duration-300 hover:-translate-y-1"
            >

              <FaGithub />

            </a>

            <a
              href="https://linkedin.com/in/uday-kumar-munjam-57052232a"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black transition duration-300 hover:-translate-y-1"
            >

              <FaLinkedin />

            </a>

            <a
              href="mailto:munjamudaykumar@gmail.com"
              className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black transition duration-300 hover:-translate-y-1"
            >

              <FaEnvelope />

            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center items-center">

          {/* MAIN GLOW */}

          <div className="absolute w-[420px] lg:w-[520px] h-[420px] lg:h-[520px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

          {/* PROFILE IMAGE */}

          <div className="relative z-10">

            <img
              src={profile}
              alt="profile"
              className="w-[320px] sm:w-[380px] lg:w-[460px] h-[320px] sm:h-[380px] lg:h-[460px] rounded-full object-cover border-[5px] border-cyan-400 shadow-[0_0_90px_rgba(34,211,238,0.25)]"
            />

          </div>

          {/* REACT */}

          <div className="absolute top-8 left-10 lg:left-0 bg-slate-900/90 border border-slate-800 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-md z-20 animate-bounce">

            <FaReact className="text-cyan-400 text-2xl" />

            <span className="font-semibold text-white">
              React
            </span>

          </div>

          {/* NODE */}

          <div className="absolute top-24 right-0 lg:-right-6 bg-slate-900/90 border border-slate-800 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-md z-20 animate-pulse">

            <FaNodeJs className="text-green-500 text-2xl" />

            <span className="font-semibold text-white">
              Node.js
            </span>

          </div>

          {/* MONGODB */}

          <div className="absolute bottom-28 left-0 lg:-left-4 bg-slate-900/90 border border-slate-800 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-md z-20">

            <SiMongodb className="text-green-400 text-2xl" />

            <span className="font-semibold text-white">
              MongoDB
            </span>

          </div>

          {/* EXPRESS */}

          <div className="absolute bottom-12 right-6 lg:right-0 bg-slate-900/90 border border-slate-800 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-md z-20">

            <SiExpress className="text-white text-2xl" />

            <span className="font-semibold text-white">
              Express
            </span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;