import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Square, 
  MapPin, 
  Phone, 
  Mail, 
  Filter, 
  Building,
  Store,
  Search
} from "lucide-react";

const ShopsOffices = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const availableUnits = [
    {
      id: 1,
      name: "Premium Corner Office",
      type: "office",
      size: "750 sq ft",
      floor: "5th Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["Corner location", "Panoramic views", "Executive suite", "Conference room"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    },
    {
      id: 2,
      name: "Modern Office Suite",
      type: "office",
      size: "500 sq ft",
      floor: "4th Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["2 Private offices", "Reception area", "Meeting room", "Storage"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    },
    {
      id: 3,
      name: "Compact Business Office",
      type: "office",
      size: "300 sq ft",
      floor: "3rd Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["Private office", "Reception area", "Storage", "Natural lighting"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    },
    {
      id: 4,
      name: "Prime Retail Space",
      type: "retail",
      size: "800 sq ft",
      floor: "Ground Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["High foot traffic", "Display windows", "Storage room", "Customer parking"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    },
    {
      id: 5,
      name: "Boutique Retail Unit",
      type: "retail",
      size: "500 sq ft",
      floor: "Ground Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["Corner location", "Display area", "Fitting room", "Storage"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    },
    {
      id: 6,
      name: "Compact Retail Space",
      type: "retail",
      size: "300 sq ft",
      floor: "Ground Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["Street facing", "Display window", "Storage", "Easy access"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    },
    {
      id: 7,
      name: "Executive Office",
      type: "office",
      size: "600 sq ft",
      floor: "6th Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["Executive suite", "Secretary area", "Meeting room", "City views"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    },
    {
      id: 8,
      name: "Showroom Space",
      type: "retail",
      size: "1000 sq ft",
      floor: "Ground Floor",
      status: "available",
      price: "Contact for Pricing",
      features: ["Large display area", "Customer lounge", "Storage", "Parking spaces"],
      contact: "+92 300 123 4567",
      email: "info@cititower.com"
    }
  ];

  const filteredUnits = availableUnits.filter(unit => {
    const matchesType = filter === "all" || unit.type === filter;
    const matchesSearch = unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         unit.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "available": return "bg-green-100 text-green-800";
      case "occupied": return "bg-red-100 text-red-800";
      case "reserved": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Available Spaces</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover premium office and retail spaces in Citi Tower, managed by Tanveer Ahmed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search spaces..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "all" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Units
              </button>
              <button
                onClick={() => setFilter("office")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "office" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Offices
              </button>
              <button
                onClick={() => setFilter("retail")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "retail" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Retail
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUnits.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {unit.type === "office" ? (
                        <Building className="h-6 w-6 text-blue-600" />
                      ) : (
                        <Store className="h-6 w-6 text-blue-600" />
                      )}
                      <span className="text-sm font-medium text-gray-600 capitalize">
                        {unit.type}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{unit.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Square className="h-4 w-4" />
                      <span>{unit.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{unit.floor}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {unit.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-gray-900">{unit.price}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{unit.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{unit.email}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <a
                        href={`tel:${unit.contact}`}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                      >
                        Call Now
                      </a>
                      <a
                        href={`mailto:${unit.email}`}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredUnits.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No units found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Citi Tower */}
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
              Why Choose Citi Tower?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of being part of Multan's premier business address
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Location</h3>
              <p className="text-gray-600">
                Located in the heart of Multan's business district with excellent connectivity and accessibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Design</h3>
              <p className="text-gray-600">
                Contemporary architecture with state-of-the-art facilities and premium finishes throughout.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Management</h3>
              <p className="text-gray-600">
                Direct management by Tanveer Ahmed ensures transparent dealings and excellent service.
              </p>
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
              Ready to Secure Your Space?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Tanveer Ahmed today to discuss availability and schedule a viewing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/floor-plans"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Floor Plans
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShopsOffices;