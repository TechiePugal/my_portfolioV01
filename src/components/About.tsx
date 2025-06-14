import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Zap, Users, Code, Brain, Rocket, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: Award,
      title: "Hackathon Champion",
      description: "Multiple wins in Smart India Hackathon & DRDO challenges",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Target,
      title: "Government Impact",
      description: "Solutions deployed for public sector digital transformation",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI/ML Innovation",
      description: "Advanced ML models for real-world problem solving",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Startup Mentor",
      description: "Guiding tech startups through product development",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Contributing to community-driven development",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: Shield,
      title: "Security Expert",
      description: "Implementing robust cybersecurity solutions",
      color: "from-red-400 to-pink-500"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: "🚀" },
    { number: "50K+", label: "Users Impacted", icon: "👥" },
    { number: "15+", label: "Technologies Mastered", icon: "⚡" },
    { number: "5+", label: "Years Experience", icon: "🎯" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              {/* Main image */}
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-cyan-900/50 rounded-3xl"></div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-80 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Tech icons floating around */}
              {['⚛️', '🐍', '☁️', '🤖', '🔗', '⚡'].map((icon, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  style={{
                    top: `${20 + Math.sin(index) * 60}%`,
                    left: `${20 + Math.cos(index) * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Crafting Digital Excellence Through 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Innovation</span>
              </motion.h3>
              
              <motion.div
                className="space-y-4 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-lg">
                  I'm a passionate <strong className="text-cyan-400">Software Architect</strong> and 
                  <strong className="text-purple-400"> Full-Stack Developer</strong> currently driving innovation 
                  at Super Group of Companies. My journey spans from IoT ecosystems to AI-powered solutions, 
                  always pushing the boundaries of what's possible.
                </p>
                
                <p>
                  With expertise in <strong className="text-cyan-400">cloud-native architectures</strong>, 
                  <strong className="text-purple-400"> machine learning</strong>, and 
                  <strong className="text-pink-400"> blockchain technologies</strong>, I transform complex 
                  challenges into elegant, scalable solutions that make a real-world impact.
                </p>
              </motion.div>
            </div>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {['Enterprise Architecture', 'AI/ML Solutions', 'Cloud Infrastructure', 'IoT Innovation'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                >
                  <span className="text-cyan-400 font-semibold text-sm">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} mb-4`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 2.4 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;