import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "intro" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur border-blue-900 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          My Portfolio
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-white text-lg font-sm">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative group transition-all duration-300"
            >
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                duration={700}
                offset={-80}
                className="cursor-pointer px-3 py-1 rounded-md transition-all duration-300 
                  group-hover:text-blue-400 group-hover:shadow-blue-500/50 group-hover:shadow-lg"
              >
                {link.label}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a] px-6 pt-4 pb-6 text-white"
          >
            <ul className="flex flex-col gap-4 text-lg">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer hover:text-blue-400 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-80}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
