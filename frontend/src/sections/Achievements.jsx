import { FaTrophy, FaCode, FaMedal } from "react-icons/fa";

function Achievements() {

  const achievements = [

    {
      icon: <FaTrophy />,
      title: "Eureka! IIT Bombay Finalist",
      description:
        "Selected among Top 600 teams out of 25,000+ participants.",
    },

    {
      icon: <FaCode />,
      title: "200+ LeetCode Problems",
      description:
        "Strong problem-solving and algorithmic thinking skills.",
    },

    {
      icon: <FaMedal />,
      title: "Full Stack Development",
      description:
        "Built scalable MERN stack applications and analytics dashboards.",
    },

  ];

  return (
    <section className="bg-slate-950 py-28 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-cyan-400 font-semibold mb-4">
            ACHIEVEMENTS
          </p>

          <h2 className="text-5xl font-extrabold">
            Accomplishments
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="bg-black border border-slate-800 p-10 rounded-3xl hover:-translate-y-3 transition duration-500 shadow-2xl"
            >

              <div className="text-5xl text-cyan-400 mb-8">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;