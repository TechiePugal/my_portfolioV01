import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    "Software Architect", 
    "Full-Stack Developer", 
    "AI/ML Engineer", 
    "Cloud Solutions Expert",
    "IoT Innovator",
    "Blockchain Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Mouse follower effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Mobile menu button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-gray-800/80 backdrop-blur-md rounded-full text-white hover:bg-gray-700/80 transition-all duration-300 border border-gray-600/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Navigation */}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Profile Image */}


          {/* Name with glitch effect */}
<motion.h1 
  className="mt-20 md:mt-0 text-6xl md:text-8xl font-bold mb-6 relative"
  initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    {personalInfo.name}
  </span>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-50"
    animate={{
      x: [0, 2, -2, 0],
      opacity: [0, 0.5, 0],
    }}
    transition={{
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    {personalInfo.name}
  </motion.div>
</motion.h1>

          
          {/* Dynamic role with typewriter effect */}
          <motion.div 
            className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-gray-300 mr-3">I'm a </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 20, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -20, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description with reveal animation */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Let's Collaborate</span>
            </motion.a>
            
            <motion.a
              href="#projects"
              className="group px-8 py-4 border-2 border-gray-600 hover:border-cyan-400 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Explore My Work</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.button>
    </header>
  );
};

export default Header;