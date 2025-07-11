import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Users, 
  Award, 
  MapPin, 
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574868240055-b2fdf9fda3c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0b3dlcnxlbnwwfHx8Ymx1ZXwxNzUyMjU1NTEwfDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 z-10" />
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Citi Tower</span>
              <span className="block text-blue-300 text-3xl md:text-4xl font-light">
                A Symbol of Progress in Multan
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Discover premium commercial spaces in Multan's most prestigious business address, 
              proudly owned by Tanveer Ahmed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/floor-plans"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Floor Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Citi Tower
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Multan, Citi Tower stands as a testament to modern 
              commercial architecture. Owned by <span className="font-semibold text-blue-600">Tanveer Ahmed</span>, 
              this landmark building offers premium office and retail spaces designed for success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Spaces</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern office and retail spaces ranging from 300 to 500 sq ft, 
                designed with contemporary aesthetics and functionality.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategically located in Multan's business district with excellent 
                connectivity and accessibility for your business operations.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Owner</h3>
              <p className="text-gray-600 leading-relaxed">
                Proudly owned by Tanveer Ahmed, ensuring transparent dealings 
                and professional management of all commercial operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Page Previews */}
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
              Explore Citi Tower
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover everything our landmark building has to offer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/about" className="block">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1568195142278-c044a3cf4fa1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjB0b3dlcnxlbnwwfHx8Ymx1ZXwxNzUyMjU1NTEwfDA&ixlib=rb-4.1.0&q=85"
                    alt="About Citi Tower"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">About Us</h3>
                    <p className="text-blue-200">Our story and vision</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/floor-plans" className="block">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1566342867278-c6ac46714392?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjB0b3dlcnxlbnwwfHx8Ymx1ZXwxNzUyMjU1NTEwfDA&ixlib=rb-4.1.0&q=85"
                    alt="Floor Plans"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Floor Plans</h3>
                    <p className="text-blue-200">Detailed layouts and spaces</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/contact" className="block">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1603294278610-b5bd0506303e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHxibHVlfDE3NTIyNTU1MjJ8MA&ixlib=rb-4.1.0&q=85"
                    alt="Contact Us"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Contact</h3>
                    <p className="text-blue-200">Get in touch with us</p>
                  </div>
                </div>
              </Link>
            </motion.div>
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
              Ready to Make Citi Tower Your Business Address?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Tanveer Ahmed today to discuss available spaces and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923001234567"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="mailto:info@cititower.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;