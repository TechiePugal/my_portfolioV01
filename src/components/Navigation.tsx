import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-8 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex space-x-8 bg-white/70 rounded-full px-8 py-4 border border-white/20"
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-black-400 hover:text-blue-700 transition-colors duration-300 font-medium"
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-40"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white text-2xl font-semibold hover:text-green-400 transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;