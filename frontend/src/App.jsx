import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="bg-[#020617] text-white overflow-x-hidden">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO SECTION */}

      <Hero />

      {/* STATS */}

      <Stats />

      {/* ABOUT */}

      <About />

      {/* SKILLS */}

      <Skills />

      {/* PROJECTS */}

      <Projects />

      {/* EXPERIENCE */}

      <Experience />

      {/* ACHIEVEMENTS */}

      <Achievements />

      {/* CONTACT */}

      <Contact />

      {/* FOOTER */}

      <Footer />

    </main>
  );
}

export default App;