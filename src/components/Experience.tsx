import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="text-green-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-20 h-20 rounded-xl object-cover shadow-lg"
                  />
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-green-600 mb-3">
                        <Briefcase className="w-5 h-5 mr-2" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="text-right space-y-2 lg:ml-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + highlightIndex * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;