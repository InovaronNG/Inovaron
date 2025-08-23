import React from 'react';
import Footer from './Footer';
import Aboutus from './aboutus';
import Contactus from './Contactus';
import Hero from './hero';

// Mock data for services to resolve the import error
const services = [
  { id: 1, name: "Web Design", description: "Crafting beautiful and functional websites tailored to your brand.", icon: "🎨" },
  { id: 2, name: "Web Development", description: "Building robust and scalable web applications with cutting-edge technology.", icon: "💻" },
  { id: 3, name: "SEO Optimization", description: "Improving your search engine rankings to drive organic traffic.", icon: "📈" },
  { id: 4, name: "E-commerce Solutions", description: "Developing secure and user-friendly online stores for your business.", icon: "🛒" },
  { id: 5, name: "UI/UX Design", description: "Creating intuitive and engaging user interfaces for an exceptional experience.", icon: "✨" },
  { id: 6, name: "Digital Marketing", description: "Strategies to connect you with your target audience and grow your reach.", icon: "🚀" },
];


const Main = () => {
  return (
    <section className="bg-white font-inter text-gray-900 ">
    <Hero/>
      {/* Services Section */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-sm">
            Our Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600  max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services designed to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div 
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                         border border-gray-100 " 
              key={item.id}
            >
              <div className="mb-4 text-5xl text-blue-600 ">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 ">
                {item.name}
              </h2>
              <p className="text-base text-gray-600 ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <Aboutus />

      {/* Contact Us Section */}
      <Contactus />
      
      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default Main;
