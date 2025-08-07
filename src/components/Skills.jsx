// import { motion } from "framer-motion";

// const Skills = () => {
//   const categories = [
//     {
//       title: "Frontend Development",
//       skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Next.js"],
//     },
//     {
//       title: "Backend Development",
//       skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "SQL"],
//     },
//     {
//       title: "Programming & Tools",
//       skills: ["Python", "C/C++", "Git & GitHub", "VS Code", "Figma"],
//     },
//     {
//       title: "Others",
//       skills: ["REST API", "Responsive Design", "Web Accessibility", "Problem Solving"],
//     },
//   ];

//   return (
//     <motion.div
//       className="min-h-screen px-6 py-20 bg-[#0a0a0a] text-white"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-4xl font-bold text-center mb-16 text-blue-400 underline decoration-blue-500 decoration-4">
//         My Skills
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {categories.map((category, index) => (
//           <motion.div
//             key={index}
//             className="bg-[#121212] rounded-2xl p-8 border border-blue-900 shadow-lg hover:shadow-blue-800/40 transition duration-300"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">
//               {category.title}
//             </h3>
//             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {category.skills.map((skill, idx) => (
//                 <motion.li
//                   key={idx}
//                   className="bg-blue-700 text-white text-sm sm:text-base px-4 py-2 rounded-lg shadow-md text-center hover:bg-blue-500 transition-all duration-200"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {skill}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Skills;















import { motion } from "framer-motion";

const skills = [
  { name: "HTML", color: "#e34c26" },
  { name: "CSS", color: "#264de4" },
  { name: "JavaScript", color: "#f0db4f" },
  { name: "React", color: "#61DBFB" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Node.js", color: "#68a063" },
  { name: "Express.js", color: "#303030" },
  { name: "MongoDB", color: "#4DB33D" },
  { name: "Git & GitHub", color: "#f1502f" },
  { name: "Python", color: "#306998" },
  { name: "C/C++", color: "#00599C" },
  { name: "DSA", color: "#A259FF" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gradient-to-br bg-dark text-white flex flex-col justify-center items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-blue-500">Skills</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="w-40 h-40 bg-[#1e293b] hover:bg-[#334155] border border-gray-600 hover:border-blue-500 transition-all duration-300 rounded-xl shadow-md flex items-center justify-center text-center p-4 cursor-pointer hover:shadow-blue-500/30"
            style={{
              boxShadow: `0 0 15px 0 ${skill.color}40`,
            }}
          >
            <span
              className="text-lg font-semibold"
              style={{ color: skill.color }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;





























// import { motion } from "framer-motion";

// const skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Tailwind CSS",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "Git & GitHub",
//   "Python",
//   "C/C++",
//   "Figma",
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen py-20 px-6 bg-gradient-to-br bg-dark text-white flex flex-col justify-center items-center"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl font-bold mb-12 text-center"
//       >
//         My <span className="text-blue-500">Skills</span>
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full justify-items-center"
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="w-36 h-36 bg-[#1e293b] border border-gray-700 hover:border-blue-500 transition-all duration-300 rounded-xl shadow-md flex items-center justify-center text-center p-4 cursor-pointer"
//           >
//             <span className="text-white text-lg font-medium">{skill}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;
