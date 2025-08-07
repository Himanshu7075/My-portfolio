// import { motion } from "framer-motion";

// const achievements = [
//   { title: "Hackathon Winner", year: "2024", desc: "Tula’s Hackathon" },
//   { title: "Innovator", year: "2024", desc: "Recognized for smart glasses for visually impaired." },
//   { title: "Received ₹2 Lakh Grant ", year: "2024", desc: " IDEATHON, ITS College Greater Noida" },
//   { title: "Hackathon Winner", year: "2025", desc: "Dev Bhoomi Hackathon" },
//   { title: "Research Paper", year: "2025", desc: " Revitalizing Water: Domestic Wastewater Treatment by Regaining Nutrients and Reusing Wastewater for Domestic Purposes (Published on ResearchGate)" },
// ];

// const Achievements = () => {
//   return (
//     <section id="achievements" className="min-h-screen px-6 py-20 bg-dark text-white">
//       <motion.h2
//         className="text-4xl font-bold mb-10 text-center"
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Achievements
//       </motion.h2>
//       <div className="space-y-10 max-w-3xl mx-auto">
//         {achievements.map((ach, index) => (
//           <motion.div
//             key={index}
//             className="p-6 rounded-lg border border-blue-500 bg-gray-900 hover:scale-[1.02] transition-transform duration-300"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2 }}
//           >
//             <h3 className="text-2xl font-semibold text-blue-400">{ach.title}</h3>
//             <p className="text-sm text-gray-400">{ach.year}</p>
//             <p className="mt-2 text-white">{ach.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Achievements;






























import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  { title: "Hackathon Winner", year: "2024", desc: "Tula’s Hackathon" },
  { title: "Innovator", year: "2024", desc: "Recognized for smart glasses for visually impaired." },
  { title: "Received ₹2 Lakh Grant", year: "2024", desc: "IDEATHON, ITS College Greater Noida" },
  { title: "Hackathon Winner", year: "2025", desc: "Dev Bhoomi Hackathon" },
  { title: "Research Paper", year: "2025", desc: "Revitalizing Water: Domestic Wastewater Treatment by Regaining Nutrients and Reusing Wastewater for Domestic Purposes (Published on ResearchGate)" },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        className="text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Achievements
      </motion.h2>

      <div className="relative max-w-4xl mx-auto pl-6">
        <div className="absolute left-1 top-0 h-full w-1 bg-blue-500 rounded-full"></div>

        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            className="relative mb-12 ml-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="absolute -left-12 top-0 bg-blue-600 rounded-full p-3 shadow-lg animate-pulse">
              <FaTrophy className="text-white text-xl" />
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-md border border-blue-400 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 hover:border-blue-300 hover:shadow-blue-500">
              <h3 className="text-2xl font-semibold text-blue-400">{ach.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{ach.year}</p>
              <p className="text-white">{ach.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
