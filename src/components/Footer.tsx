import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          {/* <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>using React + TypeScript</span>
          </div> */}
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className="text-gray-600 text-xs">
            Crafted with modern web technologies for an exceptional user experience
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;