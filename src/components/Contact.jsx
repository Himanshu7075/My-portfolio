import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#0a0a0a] text-white py-16 px-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-blue-400 underline decoration-blue-500 decoration-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Info + Social */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="bg-[#111] bg-white bg-opacity-5 backdrop-blur-md border border-blue-400 rounded-xl p-6 shadow-xl hover:shadow-blue-500 transition duration-300 space-y-6">
            <div className="flex items-center gap-4 text-lg text-blue-300 hover:text-blue-500 transition">
              <FaPhoneAlt className="text-blue-500 text-2xl" />
              <span>+91-7764857589</span>
            </div>
            <div className="flex items-center gap-4 text-lg text-blue-300 hover:text-blue-500 transition">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <span>7764himanshu@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-lg text-blue-300 hover:text-blue-500 transition">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <span>Patna, Bihar, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#111] border-2 border-blue-500 rounded-xl p-6 shadow-xl hover:shadow-blue-500 transition duration-300 space-y-4">
            <a
              href="https://www.linkedin.com/in/himanshu-kumar-a3012b328/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg text-blue-300 hover:text-blue-500 transition duration-300 group"
            >
              <FaLinkedin className="text-blue-500 text-2xl group-hover:scale-110 group-hover:shadow-blue-500 group-hover:shadow-md transition" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Himanshu7075"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg text-blue-300 hover:text-blue-500 transition duration-300 group"
            >
              <FaGithub className="text-blue-500 text-2xl group-hover:scale-110 group-hover:shadow-blue-500 group-hover:shadow-md transition" />
              <span>GitHub</span>
            </a>
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg text-pink-300 hover:text-pink-500 transition duration-300 group"
            >
              <FaInstagram className="text-pink-400 text-2xl group-hover:scale-110 group-hover:shadow-pink-500 group-hover:shadow-md transition" />
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          action="https://formsubmit.co/7764himanshu@gmail.com"
          method="POST"
          className="bg-[#111] p-8 rounded-xl shadow-lg hover:shadow-blue-500 transition duration-300 space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
