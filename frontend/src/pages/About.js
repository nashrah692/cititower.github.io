import React from "react";
import { motion } from "framer-motion";
import { Building2, Target, Eye, Calendar, Award } from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const timeline = [
    { year: "2020", event: "Project Conception", description: "Tanveer Ahmed envisioned a modern commercial landmark for Multan" },
    { year: "2021", event: "Construction Begins", description: "Groundbreaking ceremony marks the start of construction" },
    { year: "2022", event: "Structural Completion", description: "Core structure and framework completed" },
    { year: "2023", event: "Interior Development", description: "Premium finishes and modern amenities installed" },
    { year: "2024", event: "Grand Opening", description: "Citi Tower officially opens to businesses" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Citi Tower</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              A vision transformed into reality by Tanveer Ahmed, creating Multan's premier commercial destination
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Citi Tower emerged from a vision to transform Multan's commercial landscape. 
                Conceived by Tanveer Ahmed, this landmark building represents years of careful 
                planning, innovative design, and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From its inception, the project aimed to create more than just a building – 
                it sought to establish a symbol of progress and opportunity in the heart of Multan. 
                Today, Citi Tower stands as a testament to quality construction and modern 
                commercial architecture.
              </p>
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
                <Building2 className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Premium Commercial Spaces</h3>
                  <p className="text-gray-600">Designed for modern business success</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/418285/pexels-photo-418285.jpeg"
                alt="Citi Tower Building"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Tanveer Ahmed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/11158027/pexels-photo-11158027.jpeg"
                alt="Tanveer Ahmed - Owner of Citi Tower"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Tanveer Ahmed
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <span className="font-semibold text-blue-600">Tanveer Ahmed</span> is the visionary 
                owner and developer behind Citi Tower. With years of experience in real estate 
                development and a deep understanding of Multan's commercial needs, he has created 
                a landmark that serves the business community with excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                His commitment to quality, transparency, and professional management has made 
                Citi Tower the preferred choice for businesses seeking premium commercial spaces 
                in Multan. Tanveer Ahmed's vision continues to shape the future of commercial 
                real estate in the region.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Clear Ownership Declaration
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Tanveer Ahmed</span> is the sole owner of Citi Tower, 
                  with no affiliation to any other developers or entities. This ensures direct, 
                  transparent communication and professional service for all tenants and clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving business success through exceptional commercial spaces and professional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide premium commercial spaces that enable businesses to thrive, 
                while maintaining the highest standards of service, transparency, and 
                professional management in Multan's commercial real estate sector.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as Multan's premier commercial destination, setting new 
                standards for quality construction, modern amenities, and exceptional 
                tenant experience in the region's business landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Development Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vision to reality - the journey of Citi Tower's creation
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Citi Tower Community
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience the difference of working with Tanveer Ahmed and the Citi Tower team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </a>
              <a
                href="/floor-plans"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Available Spaces
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;