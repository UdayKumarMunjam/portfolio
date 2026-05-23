import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-8">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div>

          <h2 className="text-3xl font-extrabold text-cyan-400 mb-2">
            Uday.dev
          </h2>

          <p className="text-gray-400">
            Full Stack MERN Developer
          </p>

        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:munjamudaykumar@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;