import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, MessageSquare, User, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import SocialLinks from './SocialLinks';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-red-400 to-pink-500",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "from-green-400 to-emerald-500",
      description: "Let's have a conversation"
    },
    {
      icon: MapPin,
      title: "Location",
      value: personalInfo.location,
      href: "#",
      color: "from-blue-400 to-cyan-500",
      description: "Based in Tamil Nadu, India"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
        </div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Connect</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mb-6"
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
            Ready to bring your next big idea to life? Let's collaborate and create something extraordinary together. 
            I'm always excited to work on innovative projects and solve complex challenges.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-center space-x-6 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="relative z-10 flex items-center space-x-6">
                      <motion.div 
                        className={`p-4 bg-gradient-to-r ${method.color} rounded-2xl shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                        <a 
                          href={method.href}
                          className="text-purple-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-purple-400" />
                Connect on Social
              </h3>
              <div className="flex space-x-4">
                <SocialLinks />
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-green-500/30"
            >
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="text-lg font-bold text-green-400">Available for Projects</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Currently accepting new projects and collaborations. 
                I typically respond within 24 hours and offer free initial consultations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 relative overflow-hidden">
              {/* Form background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-purple-400" />
                  Send me a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label htmlFor="name" className="block text-white font-semibold mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2 text-purple-400" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-gray-700/70 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <label htmlFor="email" className="block text-white font-semibold mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700/70 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label htmlFor="subject" className="block text-white font-semibold mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-green-400" />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-gray-700/70 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <label htmlFor="message" className="block text-white font-semibold mb-2 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-pink-400" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:bg-gray-700/70 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, ideas, or how we can collaborate..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Button background animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10 flex items-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex items-center space-x-3 p-4 rounded-xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="font-medium">
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! I\'ll get back to you within 24 hours.' 
                          : 'Failed to send message. Please try again or contact me directly.'}
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;