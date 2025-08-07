import { motion } from "framer-motion";

const Transition = () => {
  return (
    <motion.div
      className="h-40 md:h-60 bg-gradient-to-b from-blue-800 to-[#0a0a0a] flex items-center justify-center text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Let’s move from <span className="text-blue-400">Skills</span> to{" "}
        <span className="text-blue-400">Projects</span>!
      </motion.h2>
    </motion.div>
  );
};

export default Transition;
