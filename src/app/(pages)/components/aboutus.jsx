import React from 'react';

// Mock data for 'about' and 'vision' to resolve the import error
// In a real application, these would be imported from your '../navigation/about' file
const about = [
  {
    id: 1,
    title: "Our Mission",
    subtitle: "At INOVAREUN, we are dedicated to transforming digital landscapes with innovative solutions.",
    text: "believes in crafting exceptional web experiences that drive real results. We blend creativity with cutting-edge technology to build platforms that not only look stunning but also perform flawlessly, helping businesses achieve their full online potential."
  }
];

const vision = [
  {
    id: 1,
    title: "Our Vision",
    text: "To be the leading partner for businesses seeking to revolutionize their digital presence, recognized for our commitment to excellence, user-centric design, and sustainable technological advancements. We envision a future where every business, regardless of its size, has access to powerful and intuitive web solutions that fuel their growth."
  }
];


const Aboutus = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100  py-16 md:py-24 font-inter">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Main "About Us" Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900  leading-tight mb-4 drop-shadow-sm">
            Discover Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-700  max-w-3xl mx-auto">
            Learn more about who we are, what drives us, and the values that guide our work.
          </p>
        </div>

        {/* About Section - Mission/Story */}
        {about.map((item) => (
          <div 
            className="bg-white  rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 mb-12 
                       transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl
                       border border-gray-100  overflow-hidden" 
            key={item.id}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-800 dmb-4">
                {item.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
              <p className="text-base md:text-lg text-center text-gray-600  max-w-2xl mx-auto mb-8">
                {item.subtitle}
              </p>
              <div className="bg-blue-50  rounded-2xl p-6 md:p-8 lg:p-10 w-full max-w-4xl shadow-inner text-gray-700  leading-relaxed text-center">
                <p className="text-lg">
                  <strong className="text-blue-700 ">INOVAREUN</strong> {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Vision Section */}
        <div className="mt-16 md:mt-20">
          {vision.map((item) => (
            <div 
              className="bg-white  rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 mb-12 
                         transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl
                         border border-gray-100  overflow-hidden" 
              key={item.id}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl font-bold text-center text-purple-800  mb-4">
                  {item.title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
                <div className="bg-purple-50  rounded-2xl p-6 md:p-8 lg:p-10 w-full max-w-4xl shadow-inner text-gray-700  leading-relaxed text-center">
                  <p className="text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Aboutus;
