"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Code, TrendingUp, ShoppingBag, Layout, Megaphone } from 'lucide-react'; 
import Footer from "../../components/Footer"
import {useRouter} from "next/router";

// Mock data for services
const services = [
  { id: 1, name: "Web Design", description: "Crafting beautiful and functional websites tailored to your brand.", icon: <Sparkles className="w-12 h-12" /> },
  { id: 2, name: "Web Development", description: "Building robust and scalable web applications with cutting-edge technology.", icon: <Code className="w-12 h-12" /> },
  { id: 3, name: "SEO Optimization", description: "Improving your search engine rankings to drive organic traffic.", icon: <TrendingUp className="w-12 h-12" /> },
  { id: 4, name: "E-commerce Solutions", description: "Developing secure and user-friendly online stores for your business.", icon: <ShoppingBag className="w-12 h-12" /> },
  { id: 5, name: "UI/UX Design", description: "Creating intuitive and engaging user interfaces for an exceptional experience.", icon: <Layout className="w-12 h-12" /> },
  { id: 6, name: "Digital Marketing", description: "Strategies to connect you with your target audience and grow your reach.", icon: <Megaphone className="w-12 h-12" /> },
];

const router = useRouter()

const handleSolution = (e) =>{
    e.preventDefault()
    router.push("/services")
}


// Hero component with refined styling
const Hero = () => (
  <div className="relative bg-gradient-to-br from-indigo-950 to-gray-900 text-white py-24 md:py-40 overflow-hidden rounded-b-[4rem] shadow-2xl">
    <div className="absolute inset-0 z-0 opacity-10">
      {/* Subtle background pattern */}
      <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <pattern id="pattern-hero" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="1" height="1" fill="rgba(255,255,255,0.05)" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-hero)" />
      </svg>
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up">
        Innovate. Reimagine. Unite.
      </h2>
      <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto opacity-90 animate-fade-in delay-200">
        Transforming digital ideas into powerful realities.
      </p>
      <button onClick={handleSolution()} className="mt-10 px-8 py-4 bg-amber-400 text-indigo-950 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in delay-400 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-70">
        Discover Our Solutions
      </button>
    </div>
  </div>
);

// About Us component with refined styling
const Aboutus = () => (
  <div className="bg-gradient-to-br from-gray-50 to-white  text-gray-900  py-20 md:py-32 rounded-3xl mx-4 shadow-xl -mt-16 relative z-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-700 ">
        Who We Are
      </h2>
      <p className="mt-4 text-lg md:text-xl max-w-4xl mx-auto text-gray-700 ">
        Inovareun is a collective of visionary designers and developers dedicated to pushing the boundaries of digital innovation. We believe in crafting experiences that are not only aesthetically pleasing but also profoundly impactful and functionally superior. Our journey is driven by a passion for technology and a commitment to excellence, ensuring every project we undertake redefines possibilities.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <div className="p-6 bg-indigo-100  rounded-xl shadow-md backdrop-blur-sm transform hover:scale-105 transition-all duration-300 border border-indigo-200">
          <p className="text-3xl font-bold text-indigo-700 ">2+</p>
          <p className="text-lg text-gray-800 ">Years Experience</p>
        </div>
        <div className="p-6 bg-amber-100  rounded-xl shadow-md backdrop-blur-sm transform hover:scale-105 transition-all duration-300 border border-amber-200 ">
          <p className="text-3xl font-bold text-amber-700 ">50+</p>
          <p className="text-lg text-gray-800">Successful Projects</p>
        </div>
      </div>
    </div>
  </div>
);

// Contact Us component with refined styling
const Contactus = () => (
  <div className="bg-gradient-to-br from-indigo-900 to-gray-950 text-white py-20 md:py-32 rounded-t-[4rem] shadow-2xl mt-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Let's Create Together
      </h2>
      <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-90">
        Ready to start your next big project? Reach out to us, and let's turn your vision into reality.
      </p>
      <div className="mt-10">
        <a href="mailto:inovaronng@gmail.com" className="inline-block px-10 py-4 bg-amber-400 text-indigo-900 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-70">
          Say Hello
        </a>
      </div>
    </div>
  </div>
);

const AnimatedFeatureSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [spinClass, setSpinClass] = useState('');
  const [objectTransform, setObjectTransform] = useState('translate-x-full opacity-0');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setSpinClass('animate-spin-slow'); // Start spin when visible
      setObjectTransform('translate-x-0 opacity-100'); // Object slides in
    } else {
      setSpinClass(''); // Stop spin when not visible
      setObjectTransform('translate-x-full opacity-0'); // Object slides out
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-gray-100 to-white  py-20 md:py-32 overflow-hidden relative rounded-3xl mx-4 my-20 shadow-xl">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900  leading-tight mb-4 drop-shadow-sm">
          Our Vision
        </h2>
        <p className="text-lg md:text-xl text-gray-700  max-w-3xl mx-auto mb-12">
          We are dedicated to transforming digital landscapes with innovative solutions, meeting needs in ways people never imagined possible.
        </p>

        <div className="relative flex justify-center items-center h-64 md:h-96">
          {/* Spinning Object */}
          <div className={`w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-indigo-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 ${spinClass}`}>
            <Sparkles className="text-white text-5xl w-16 h-16" />
          </div>

          {/* Object moving into container */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                                  w-48 h-48 md:w-64 md:h-64 border-4 border-indigo-400 rounded-xl 
                                                  flex items-center justify-center bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm 
                                                  transition-all duration-1000 ease-out 
                                                  ${objectTransform}`}>
            <Megaphone className="text-indigo-400 text-6xl w-20 h-20" />
          </div>
        </div>
      </div>

      {/* Tailwind CSS for custom animations (spin-slow, fade-in, fade-in-up) */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

const App = () => {

  return (
    <div className="bg-gray-100  font-inter dark:text-white min-h-screen antialiased">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-sm text-gray-900 ">
            Our Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-amber-500 rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600  max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services designed to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              className="bg-white  rounded-xl shadow-lg p-6 flex flex-col items-center text-center
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                         border border-gray-100 dark:border-gray-700"
              key={item.id}
            >
              <div className="mb-4 text-5xl text-indigo-600 ">
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

      {/* Animated Feature Section */}
      <AnimatedFeatureSection />

      {/* About Us Section */}
      <Aboutus />

      {/* Contact Us Section */}
      <Contactus />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
