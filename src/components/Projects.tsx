import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2, Eye, Star, GitBranch } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'AI/ML', 'Web Development', 'Blockchain', 'IoT', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.technologies.some(tech => {
      switch (filter) {
        case 'AI/ML': return ['Python', 'TensorFlow', 'Machine Learning', 'Computer Vision', 'Deep Learning'].includes(tech);
        case 'Web Development': return ['React', 'Node.js', 'JavaScript', 'TypeScript'].includes(tech);
        case 'Blockchain': return ['Solidity', 'Web3.js', 'Smart Contracts', 'DeFi Protocols'].includes(tech);
        case 'IoT': return ['Arduino', 'Raspberry Pi', 'IoT'].includes(tech);
        case 'Mobile': return ['React Native', 'Mobile'].includes(tech);
        default: return false;
      }
    });
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-gray-600"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, delay: i * 0.01, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A showcase of innovative solutions spanning AI/ML, blockchain, IoT, and full-stack development. 
            Each project represents a unique challenge solved with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Floating Action Buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex space-x-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: selectedProject === project.id ? 1 : 0, scale: selectedProject === project.id ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Project Stats */}
                  <motion.div
                    className="absolute bottom-4 left-4 flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: selectedProject === project.id ? 1 : 0, y: selectedProject === project.id ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-1 text-white text-xs bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star size={12} />
                      <span>{Math.floor(Math.random() * 50) + 10}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-white text-xs bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <GitBranch size={12} />
                      <span>{Math.floor(Math.random() * 20) + 5}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Code2 className="w-5 h-5 text-purple-400 mr-2" />
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700/50 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye size={16} className="mr-2" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/TechiePugal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            Explore More Projects
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;