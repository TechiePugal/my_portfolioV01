import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-20 h-20 rounded-full object-cover shadow-lg"
                  />
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        <span className="font-semibold">{edu.degree} - {edu.field}</span>
                      </div>
                    </div>
                    
                    <div className="text-right space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="text-green-600 font-semibold">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>

                  {edu.coursework && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.achievements && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;