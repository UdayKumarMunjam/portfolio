function Skills() {

  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "JWT Authentication",
    "Cloudinary",
    "REST APIs",
    "Java",
    "DSA",
    "Git & GitHub",
  ];

  return (
    <section className="bg-black py-28 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-cyan-400 font-semibold mb-4">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-extrabold">
            Technologies I Work With
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="px-10 py-5 bg-slate-900 rounded-2xl border border-slate-800 text-xl font-semibold hover:bg-cyan-500 hover:text-black transition duration-300 shadow-xl"
            >

              {skill}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;