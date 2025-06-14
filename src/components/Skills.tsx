import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M0,5 L10,5 M5,0 L5,10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="5" cy="5" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Expertise</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-6"
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
            A comprehensive arsenal of cutting-edge technologies and frameworks, 
            constantly evolving with the latest industry trends and innovations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-500 group">
                {/* Category Header */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
                </motion.div>
                
                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group/skill relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      {/* Skill Card */}
                      <div className="relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/30 hover:border-indigo-900/50 transition-all duration-300 overflow-hidden">
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <div className="relative z-10">
                          {/* Skill Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <motion.span 
                                className="text-3xl"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.1 }}
                              >
                                {skill.icon}
                              </motion.span>
                              <span className="font-bold text-white group-hover/skill:text-indigo-400 transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                            <motion.span 
                              className="text-sm font-bold text-indigo-400 bg-indigo-400/20 px-3 py-1 rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.5 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="relative">
                            <div className="w-full bg-gray-600/50 rounded-full h-3 overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : {}}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.8,
                                  ease: "easeOut"
                                }}
                              >
                                {/* Animated shine effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: categoryIndex * 0.2 + skillIndex * 0.1 + 2 
                                  }}
                                />
                              </motion.div>
                            </div>
                            
                            {/* Skill level indicator */}
                            {/* <motion.div
                              className="absolute -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg"
                              style={{ left: `${skill.level}%`, transform: 'translateX(-50%)' }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={inView ? { opacity: 1, y: 0 } : {}}
                              transition={{ 
                                duration: 0.3, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.05 + 1.5 
                              }}
                            >
                              {skill.level}%
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
                            </motion.div> */}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-indigo-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Milestones</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "100+", label: "Projects Completed", icon: "🚀", color: "from-blue-400 to-cyan-400" },
                  { number: "25+", label: "Technologies Mastered", icon: "⚡", color: "from-purple-400 to-pink-400" },
                  { number: "10+", label: "Hackathon Wins", icon: "🏆", color: "from-yellow-400 to-orange-400" },
                  { number: "5+", label: "Years Experience", icon: "🎯", color: "from-green-400 to-emerald-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-5xl mb-3"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 1.9 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;