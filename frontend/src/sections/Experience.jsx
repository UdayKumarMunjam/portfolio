function Experience() {

  const timeline = [

    {
      year: "2023",
      title: "Started MERN Stack Journey",
    },

    {
      year: "2024",
      title: "Built Full Stack Projects",
    },

    {
      year: "2025",
      title: "Eureka IIT Bombay Finalist",
    },

    {
      year: "2026",
      title: "Building Scalable Applications",
    },

  ];

  return (
    <section className="bg-black py-28 px-8">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-cyan-400 font-semibold mb-4">
            EXPERIENCE
          </p>

          <h2 className="text-5xl font-extrabold">
            My Journey
          </h2>

        </div>

        <div className="space-y-10">

          {timeline.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-10 rounded-3xl"
            >

              <h3 className="text-cyan-400 text-2xl font-bold mb-3">
                {item.year}
              </h3>

              <p className="text-2xl">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;