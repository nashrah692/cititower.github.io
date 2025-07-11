import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1574868240055-b2fdf9fda3c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0b3dlcnxlbnwwfHx8Ymx1ZXwxNzUyMjU1NTEwfDA&ixlib=rb-4.1.0&q=85",
      title: "Citi Tower Exterior",
      category: "exterior",
      description: "Modern glass facade of Citi Tower"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1568195142278-c044a3cf4fa1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjB0b3dlcnxlbnwwfHx8Ymx1ZXwxNzUyMjU1NTEwfDA&ixlib=rb-4.1.0&q=85",
      title: "Building Under Blue Sky",
      category: "exterior",
      description: "Citi Tower against the beautiful Multan sky"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1566342867278-c6ac46714392?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjB0b3dlcnxlbnwwfHx8Ymx1ZXwxNzUyMjU1NTEwfDA&ixlib=rb-4.1.0&q=85",
      title: "Architectural Details",
      category: "exterior",
      description: "Low-angle view showcasing architectural excellence"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1603294278610-b5bd0506303e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHxibHVlfDE3NTIyNTU1MjJ8MA&ixlib=rb-4.1.0&q=85",
      title: "Modern Glass Architecture",
      category: "exterior",
      description: "Contemporary design with blue glass panels"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1579445505461-acecf2596190?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHxibHVlfDE3NTIyNTU1MjJ8MA&ixlib=rb-4.1.0&q=85",
      title: "Professional Architecture",
      category: "exterior",
      description: "Sleek and professional building design"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHxibHVlfDE3NTIyNTU1MjJ8MA&ixlib=rb-4.1.0&q=85",
      title: "Sunlight Reflections",
      category: "exterior",
      description: "Beautiful natural lighting on glass surfaces"
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/11158027/pexels-photo-11158027.jpeg",
      title: "Urban Landmark",
      category: "exterior",
      description: "Citi Tower as Multan's commercial landmark"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/418285/pexels-photo-418285.jpeg",
      title: "Commercial Excellence",
      category: "exterior",
      description: "Professional commercial building standards"
    },
    {
      id: 9,
      url: "https://images.pexels.com/photos/32327360/pexels-photo-32327360.jpeg",
      title: "Modern Office Tower",
      category: "exterior",
      description: "Contemporary office building design"
    },
    {
      id: 10,
      url: "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg",
      title: "Interior Spaces",
      category: "interior",
      description: "Modern interior design and layout"
    },
    {
      id: 11,
      url: "https://images.pexels.com/photos/5781273/pexels-photo-5781273.jpeg",
      title: "Office Interiors",
      category: "interior",
      description: "Professional office environments"
    },
    {
      id: 12,
      url: "https://images.pexels.com/photos/8728248/pexels-photo-8728248.jpeg",
      title: "Premium Spaces",
      category: "interior",
      description: "Luxury commercial interiors"
    }
  ];

  const categories = [
    { id: "all", name: "All Photos", count: galleryImages.length },
    { id: "exterior", name: "Exterior", count: galleryImages.filter(img => img.category === "exterior").length },
    { id: "interior", name: "Interior", count: galleryImages.filter(img => img.category === "interior").length },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore the architectural beauty and modern design of Citi Tower through our comprehensive photo gallery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(image, index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Features */}
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
              Architectural Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail of Citi Tower has been crafted with precision and modern design principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">12</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Floors</h3>
              <p className="text-gray-600">Multiple floors of premium commercial space</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Units</h3>
              <p className="text-gray-600">Diverse office and retail spaces available</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">Round-the-clock security and management</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">A+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Prime location in Multan's business district</p>
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
              Experience Citi Tower in Person
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a visit to see the quality and attention to detail that makes Citi Tower special
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Tour
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={32} />
            </button>
            
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;