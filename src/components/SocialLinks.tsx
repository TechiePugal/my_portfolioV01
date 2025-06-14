import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, Terminal } from 'lucide-react';
import { socialLinks } from '../data/portfolio';

const iconComponents = {
  Mail,
  Linkedin,
  Github,
  Code,
  Terminal
};

const SocialLinks: React.FC = () => {
  const colors = [
    'from-red-500 to-pink-500',
    'from-blue-500 to-cyan-500', 
    'from-gray-700 to-gray-900',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-yellow-500'
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social, index) => {
        const IconComponent = iconComponents[social.icon as keyof typeof iconComponents];
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Background glow effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${colors[index]} rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
            
            {/* Main button */}
            <div className={`relative p-4 bg-gradient-to-r ${colors[index]} rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-white/40`}>
              <IconComponent size={20} />
            </div>

            {/* Tooltip */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              {social.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </motion.div>

            {/* Ripple effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${colors[index]} rounded-full opacity-30`}
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;