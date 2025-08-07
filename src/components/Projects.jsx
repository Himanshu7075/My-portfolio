// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Based content summarizer",
    description:
      "A tool that uses artificial intelligence to condense large amounts of text into shorter, more concise summaries. ",
    tech: ["Python", "Flask", "React", "IoT"],
    link: "https://github.com/your-username/railway-crack-detection",
  },
  {
    title: "Hospital Management System",
    description:
      "Predicts diseases using social media activity integrated with medical appointment booking and doctor video consultations.",
    tech: ["React", "Node.js", "MongoDB", "AI", "Razorpay"],
    link: "https://github.com/your-username/health-predictor",
  },
  {
    title: "Smart Glasses for Visually Impaired",
    description:
      "Low-cost wearable device using ToF sensors, OCR, and bone conduction to help blind users navigate and read text.",
    tech: ["Raspberry Pi", "Python", "Tesseract OCR", "gTTS"],
    link: "https://github.com/your-username/smart-glasses",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 bg-black text-white overflow-hidden"
    >
      {/* Floating glowing background */}
      <motion.div
        className="absolute w-96 h-96 opacity-20 rounded-full blur-3xl top-[-100px] left-[-120px] z-0"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute w-96 h-96 opacity-20 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <motion.h2
        className="text-5xl font-bold text-center mb-16 text-blue-400 underline decoration-blue-600 decoration-4 z-10 relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-blue-900 rounded-xl p-8 shadow-lg hover:shadow-blue-700 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              {project.title}
            </h3>
            <p className="text-base text-gray-300 mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-700/80 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300 glow-on-hover"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

