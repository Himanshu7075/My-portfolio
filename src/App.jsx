// import { useRef } from "react";
// import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Achievements from "./components/Achievements";
// import Contact from "./components/Contact";
// import Transition from "./components/Transition";

// function App() {
//   const introRef = useRef(null);
//   const skillsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const achievementsRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (section) => {
//     switch (section) {
//       case "Intro":
//         introRef.current?.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "Skills":
//         skillsRef.current?.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "Projects":
//         projectsRef.current?.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "Achievements":
//         achievementsRef.current?.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "Contact":
//         contactRef.current?.scrollIntoView({ behavior: "smooth" });
//         break;
//       default:
//         introRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-dark text-white font-sans">
//       <Navbar onNavClick={scrollToSection} />
//       <div ref={introRef}>
//         <Intro />
//       </div>
//       <div ref={skillsRef}>
//         <Skills />
//       </div>
//       <Transition />
//       <div ref={projectsRef}>
//         <Projects />
//       </div>
//       <div ref={achievementsRef}>
//         <Achievements />
//       </div>
//       <div ref={contactRef}>
//         <Contact />
//       </div>
//     </div>
//   );
// }

// export default App;

























import { useRef } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Transition from "./components/Transition";

function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    Intro: introRef,
    About: aboutRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Achievements: achievementsRef,
    Contact: contactRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark text-white font-sans scroll-smooth">
      <Navbar onNavClick={scrollToSection} />

      <section ref={introRef} id="intro">
        <Intro />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={skillsRef} id="skills">
        <Skills />
      </section>

      <Transition />

      <section ref={projectsRef} id="projects">
        <Projects />
      </section>

      <section ref={achievementsRef} id="achievements">
        <Achievements />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;


