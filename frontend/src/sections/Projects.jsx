import { useEffect, useState } from "react";

import axios from "axios";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  // FALLBACK PROJECTS

  const fallbackProjects = [

    {
      _id: 1,

      title: "CampusBuzz",

      description:
        "Full stack campus community platform with authentication, media uploads, event management, posts, admin dashboard, and role-based access control.",

      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],

      image: "/projects/campusBuzz.png",

      github:
        "https://github.com/UdayKumarMunjam/campusbuzz",

      live:
        "https://campus-buzz-jade.vercel.app",
    },

    {
      _id: 2,

      title: "Global Insights Dashboard",

      description:
        "Analytics dashboard with filters, charts, KPI cards, geopolitical insights, and MongoDB aggregation pipelines.",

      tech: [
        "React",
        "Express",
        "MongoDB",
        "Recharts",
      ],

      image:
        "/projects/global-insights-dashboard.png",

      github: "#",

      live: "#",
    },

    {
  _id: 3,

  title: "Suraksha+",

  description:
    "Women safety mobile application developed using Flutter featuring SOS alerts, live GPS tracking, emergency contacts, Firebase authentication, and real-time safety support services.",

  tech: [
    "Flutter",
    "Firebase",
    "GPS",
    "Authentication",
  ],

  image: "/projects/suraksha+.png",

  github: "#",

  live: "#",
},

  ];

  // FETCH PROJECTS

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects = async () => {

    try {

      const res = await axios.get(
        "https://portfolio-backend-gy6d.onrender.com/api/projects"
      );

      if (res.data.length > 0) {

        setProjects(res.data);

      } else {

        setProjects(fallbackProjects);

      }

      setLoading(false);

    } catch (error) {

      console.log(error);

      setProjects(fallbackProjects);

      setLoading(false);

    }

  };

  return (

    <section
      id="projects"
      className="
      relative
      bg-gradient-to-b
      from-slate-950
      via-black
      to-slate-950
      py-28
      px-6
      md:px-10
      overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-20 left-0 w-[280px] h-[280px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-400 font-semibold tracking-[5px] uppercase mb-5">

            Featured Projects

          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Real World

            <span className="text-cyan-400">
              {" "}Applications
            </span>

          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-3xl mx-auto">

            Full stack applications focused on scalable
            backend systems, dashboards, authentication,
            responsive UI, and cloud integrations.

          </p>

        </div>

        {/* LOADING */}

        {loading ? (

          <div className="flex justify-center items-center py-24">

            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((project) => (

              <div
                key={project._id}
                className="
                group
                bg-[#0B1120]
                border
                border-slate-800
                rounded-[28px]
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-400/40
                shadow-xl
                flex
                flex-col
                "
              >

                {/* IMAGE */}

                <div className="relative bg-black h-[240px] flex items-center justify-center overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-full
                    object-contain
                    object-center
                    p-4
                    transition
                    duration-700
                    group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* BADGE */}

                  <div className="absolute top-4 left-4">

                    <span
                      className="
                      bg-cyan-400
                      text-black
                      px-4
                      py-1.5
                      rounded-full
                      text-xs
                      font-bold
                      shadow-lg
                      "
                    >

                      Featured

                    </span>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-6 flex flex-col flex-1">

                  {/* TITLE */}

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mb-4
                    transition
                    group-hover:text-cyan-400
                    "
                  >

                    {project.title}

                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                    text-gray-400
                    text-[15px]
                    leading-7
                    mb-6
                    flex-1
                    "
                  >

                    {project.description}

                  </p>

                  {/* TECH STACK */}

                  <div className="flex flex-wrap gap-2 mb-8">

                    {project.tech.map((item, index) => (

                      <span
                        key={index}
                        className="
                        bg-slate-900
                        border
                        border-slate-800
                        px-3
                        py-1.5
                        rounded-lg
                        text-xs
                        font-medium
                        transition
                        hover:border-cyan-400
                        hover:text-cyan-400
                        "
                      >

                        {item}

                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}

                  <div className="flex flex-wrap gap-4">

                    {/* GITHUB */}

                    {project.github !== "#" && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        flex
                        items-center
                        gap-2
                        bg-cyan-500
                        hover:bg-cyan-400
                        text-black
                        px-5
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                        duration-300
                        hover:scale-105
                        "
                      >

                        <FaGithub />

                        GitHub

                      </a>

                    )}

                    {/* LIVE DEMO */}

                    {project.live !== "#" && (

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        flex
                        items-center
                        gap-2
                        border
                        border-cyan-400
                        text-cyan-400
                        hover:bg-cyan-400
                        hover:text-black
                        px-5
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                        duration-300
                        hover:scale-105
                        "
                      >

                        <FaExternalLinkAlt />

                        Live Demo

                      </a>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );

}

export default Projects;