// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";

// const Intro = () => {
//   return (
//     <section
//       id="intro"
//       className="relative h-screen flex flex-col md:flex-row justify-center items-center bg-black text-white px-6 overflow-hidden"
//     >
//       {/* Glowing Background Effects */}
//       <motion.div
//         className="absolute w-72 h-72 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0 bg-blue-600"
//         animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.3, 0.2] }}
//         transition={{ repeat: Infinity, duration: 10 }}
//       />
//       <motion.div
//         className="absolute w-96 h-96 opacity-20 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0 bg-purple-600"
//         animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ repeat: Infinity, duration: 12 }}
//       />

//       {/* Left Content */}
//       <div className="flex flex-col items-center md:items-start md:w-1/2 z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: -60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-6xl font-extrabold text-center md:text-left mb-6 drop-shadow-lg"
//         >
//           Hi, I'm{" "}
//           <span className="text-blue-500 animate-pulse">Himanshu Kumar</span>
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="text-xl sm:text-2xl font-medium text-center md:text-left mb-4"
//         >
//           <Typewriter
//             options={{
//               strings: [
//                 "Full Stack Developer",
//                 "Software Developer",
//                 "Leadership",
//                 "Tech Explorer",
//                 "Open Source Contributor",
//               ],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.8, duration: 1 }}
//           className="max-w-xl text-center md:text-left text-gray-300 mb-8 leading-relaxed text-lg"
//         >
//           I design and build modern, performant web applications with stunning UIs,
//           seamless UX, and clean code. Let’s create something exceptional together!
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 2.4, duration: 0.6 }}
//           className="flex gap-6"
//         >
//           <a
//             href="#about"
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500 transition-all duration-300 hover:scale-105 glow-on-hover"
//           >
//             About Me
//           </a>
//           <a
//             href="/assets/Himanshu_Kumar_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 border border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 relative overflow-hidden group"
//           >
//             <span className="relative z-10">Download CV</span>
//             <span className="absolute inset-0 bg-white blur-xl opacity-10 group-hover:opacity-40 transition-all duration-500"></span>
//           </a>
//         </motion.div>
//       </div>

//       {/* Profile Picture Frame */}
//       <motion.div
//         initial={{ opacity: 0, x: 80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="mt-12 md:mt-0 md:w-1/2 flex justify-center z-10"
//       >
//         <div className="group w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-lg overflow-hidden relative animate-floating transition-all duration-500">
//           <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_30px_10px_rgba(0,123,255,0.6)] transition-all duration-500 z-0"></div>
//             <img
//               src="/assets/profile.png"
//               alt="Himanshu Profile"
//               className="w-full h-full object-cover rounded-full relative z-10"
//             />
//           </div>

//       </motion.div>
//     </section>
//   );
// };

// export default Intro;



































import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section
      id="intro"
      className="relative h-screen flex flex-col md:flex-row justify-center items-center bg-black text-white px-6 overflow-hidden"
    >

      <motion.div
        className="absolute w-72 h-72 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0 bg-blue-600"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute w-96 h-96 opacity-20 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0 bg-purple-600"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="flex flex-col items-center md:items-start md:w-1/2 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold text-center md:text-left mb-6 drop-shadow-lg"
        >
          Hi, I'm{" "}
          <span className="text-blue-500 animate-pulse">Himanshu Kumar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl sm:text-2xl font-medium text-center md:text-left mb-4"
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Software Developer",
                "Leadership",
                "Tech Explorer",
                "Open Source Contributor",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="max-w-xl text-center md:text-left text-gray-300 mb-8 leading-relaxed text-lg"
        >
          I design and build modern, performant web applications with stunning UIs,
          seamless UX, and clean code. Let’s create something exceptional together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="flex gap-6"
        >
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500 transition-all duration-300 hover:scale-105 glow-on-hover"
          >
            About Me
          </a>

          <a
            href="/assets/Himanshu_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Download CV</span>
            <span className="absolute inset-0 bg-white blur-xl opacity-10 group-hover:opacity-40 transition-all duration-500"></span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-0 md:w-1/2 flex justify-center z-10"
      >
        <div className="w-70 h-70 md:w-80 md:h-80 round-glow-frame float-animation">
          <img
            src="/assets/profile.png"
            alt="Himanshu Profile"
            className="round-profile-img"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
