import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, Square, Building, MapPin } from "lucide-react";

const FloorPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const floorPlans = [
    {
      id: 1,
      title: "300 Sq Ft Office",
      size: "300 sq ft",
      type: "Office Space",
      features: ["Reception Area", "Private Office", "Washroom", "Storage"],
      price: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1579445505461-acecf2596190?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHxibHVlfDE3NTIyNTU1MjJ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      title: "500 Sq Ft Office",
      size: "500 sq ft",
      type: "Office Space",
      features: ["Reception Area", "2 Private Offices", "Meeting Room", "Washroom", "Storage"],
      price: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHxibHVlfDE3NTIyNTU1MjJ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      title: "300 Sq Ft Retail",
      size: "300 sq ft",
      type: "Retail Space",
      features: ["Open Floor Plan", "Display Areas", "Storage", "Customer Area"],
      price: "Contact for Pricing",
      image: "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg"
    },
    {
      id: 4,
      title: "500 Sq Ft Retail",
      size: "500 sq ft",
      type: "Retail Space",
      features: ["Open Floor Plan", "Display Areas", "Storage", "Customer Area", "Fitting Room"],
      price: "Contact for Pricing",
      image: "https://images.pexels.com/photos/5781273/pexels-photo-5781273.jpeg"
    },
    {
      id: 5,
      title: "Premium Corner Office",
      size: "750 sq ft",
      type: "Premium Office",
      features: ["Corner Location", "Panoramic Views", "Executive Office", "Conference Room", "Reception", "Storage"],
      price: "Contact for Pricing",
      image: "https://images.pexels.com/photos/8728248/pexels-photo-8728248.jpeg"
    },
    {
      id: 6,
      title: "Large Retail Space",
      size: "800 sq ft",
      type: "Large Retail",
      features: ["Spacious Layout", "Multiple Display Areas", "Storage Room", "Customer Lounge", "Premium Location"],
      price: "Contact for Pricing",
      image: "https://images.pexels.com/photos/32327360/pexels-photo-32327360.jpeg"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Floor Plans</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore our thoughtfully designed commercial spaces, perfectly crafted for your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Spaces Overview */}
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
              Available Spaces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From compact offices to spacious retail locations, find the perfect space for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {plan.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Square className="h-5 w-5 text-blue-600" />
                    <span className="text-lg font-semibold text-blue-600">{plan.size}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-gray-900">{plan.price}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedPlan(plan)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Types Overview */}
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
              Space Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of commercial spaces designed for different business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Spaces</h3>
              <p className="text-gray-600 mb-4">
                Professional office environments ranging from 300 to 750 sq ft, perfect for 
                startups, consultancies, and established businesses.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Modern design and layout</li>
                <li>• Natural lighting</li>
                <li>• Private and shared options</li>
                <li>• Meeting room access</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Square className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Spaces</h3>
              <p className="text-gray-600 mb-4">
                Prime retail locations from 300 to 800 sq ft, ideal for showrooms, 
                boutiques, and commercial establishments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• High foot traffic areas</li>
                <li>• Flexible layouts</li>
                <li>• Display-friendly design</li>
                <li>• Storage facilities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Corner Units</h3>
              <p className="text-gray-600 mb-4">
                Exclusive corner locations with panoramic views and premium positioning, 
                perfect for executive offices and flagship stores.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Corner positioning</li>
                <li>• Multiple windows</li>
                <li>• Enhanced visibility</li>
                <li>• Premium amenities</li>
              </ul>
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
              Ready to View Your Perfect Space?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Tanveer Ahmed to schedule a viewing and discuss your business requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule Viewing
              </a>
              <a
                href="tel:+923001234567"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Details Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedPlan.title}</h3>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <img
                src={selectedPlan.image}
                alt={selectedPlan.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Space Details</h4>
                  <p className="text-gray-600">Size: {selectedPlan.size}</p>
                  <p className="text-gray-600">Type: {selectedPlan.type}</p>
                  <p className="text-gray-600">Price: {selectedPlan.price}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <ul className="text-gray-600 space-y-1">
                    {selectedPlan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Schedule Viewing
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Download Plan
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FloorPlans;