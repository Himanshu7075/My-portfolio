import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const headingCard = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  whileHover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
    transition: { duration: 0.3 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6"
    >
      {/* Left Side: About Me */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col justify-center items-start space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-4xl font-bold mb-4 relative inline-block">
          About Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full animate-pulse"></span>
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          I'm Himanshu Kumar, a passionate Full Stack Developer with a love for building
          elegant and functional digital experiences. From frontend aesthetics to backend
          logic, I bring projects to life using modern tools and clean code. I enjoy exploring
          new technologies, contributing to open source, and leading impactful software development.
        </motion.p>

        {/* Small Glowing Sections */}
        <div className="w-full flex flex-col sm:flex-row gap-8 mt-9">
          <motion.div
            className="bg-blue-600 text-white text-center py-2 px-3 rounded-md font-semibold text-lg w-full sm:w-1/2 cursor-pointer"
            variants={headingCard}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            Co-Founder
          </motion.div>

          <motion.div
            className="bg-blue-600 text-white text-center py-2 px-3 rounded-md font-semibold text-lg w-full sm:w-1/2 cursor-pointer"
            variants={headingCard}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            Learner
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side: Cards */}
      <motion.div
        className="md:w-1/2 w-full mt-10 md:mt-0 flex flex-col items-center justify-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-2xl w-72 md:w-80 cursor-pointer transition-all"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h3 className="text-xl font-bold mb-2 text-blue-400">
            Software Developer
          </motion.h3>
          <motion.p className="text-gray-300 text-sm">
            Skilled in full-stack development using React, Node.js, Express, and MongoDB.
            I build high-performance, responsive, and maintainable web applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-2xl w-72 md:w-80 cursor-pointer transition-all"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h3 className="text-xl font-bold mb-2 text-blue-400">
            Entrepreneur
          </motion.h3>
          <motion.p className="text-gray-300 text-sm">
            I’m the Co-founder of Nexora Tech, dedicated to building smart, scalable digital solutions for startups and small businesses.
            We focus on web, SaaS, and AI tools that make technology simple, impactful, and accessible.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
