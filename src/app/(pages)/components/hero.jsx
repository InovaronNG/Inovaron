import React, { useState, useEffect } from 'react';

const Hero = () => {
    // Define the slides for the carousel with reliable placeholder image URLs
    const slides = [
        {
            id: 1,
            headline: "We Build Web Experiences That Deliver Results",
            subheading: "Tailored digital solutions crafted to elevate your brand and drive measurable business growth.",
            tagline: "Innovative. Seamless. Scalable.",
            // Placeholder for digital strategy background
            imageUrl: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2h8ZW58MHx8MHx8fDA%3D", 
            // Placeholder for web dev illustration
            illustrationUrl: "https://placehold.co/600x400/1E3A8A/FFFFFF?text=Web+Dev+Illustration" 
        },
        {
            id: 2,
            headline: "Unlock Your Business's Full Online Potential",
            subheading: "From stunning websites to powerful web applications, we create tools that truly work for you.",
            tagline: "Creative. User-Centric. Robust.",
            // Placeholder for business growth background
            imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRlY2h8ZW58MHx8MHx8fDA%3D", 
            // Placeholder for analytics and growth illustration
            illustrationUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBofGVufDB8fDB8fHww" 
        },
        {
            id: 3,
            headline: "Your Vision, Our Expertise: Digital Made Real",
            subheading: "Partner with us to transform your ideas into engaging and high-performing web platforms.",
            tagline: "Collaborative. Transparent. Efficient.",
            // Placeholder for collaborative design background
            imageUrl: "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHRlY2h8ZW58MHx8MHx8fDA%3D", 
            // Placeholder for teamwork illustration
            illustrationUrl: "https://placehold.co/600x400/36B37E/FFFFFF?text=Teamwork+Illustration" 
        },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const autoplayInterval = 7000; // 7 seconds

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => 
            (prevIndex + 1) % slides.length
        );
    };

    // Autoplay effect
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, autoplayInterval);

        // Clear interval on component unmount or when slide changes manually
        return () => clearInterval(intervalId);
    }, [currentSlideIndex, slides.length, autoplayInterval]);

    const currentSlide = slides[currentSlideIndex];

    return (
        <section 
            className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image for the current slide */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
                style={{ 
                    backgroundImage: `url('${currentSlide.imageUrl}')`,
                    opacity: 1,
                }}
            >
                {/* Dynamic Overlay for better text readability and visual depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-purple-800/70 opacity-90"></div>
            </div>
            
            <div className="relative z-10 w-full px-4 py-16 flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-20 max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="flex flex-col text-center md:text-left items-center md:items-start text-white max-w-xl animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                        {currentSlide.headline}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl font-light leading-relaxed opacity-90">
                        {currentSlide.subheading}
                    </p>
                    <div className="mt-10">
                        <a
                            href="/service" // Link directly to the service page
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-xl 
                                       hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 
                                       focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                            aria-label="Explore Our Services"
                        >
                            Explore Our Services
                        </a>
                    </div>
                    <p className="mt-8 text-base font-light italic opacity-70">
                        {currentSlide.tagline}
                    </p>
                </div>

                {/* Hero Illustration */}
                <div className="hidden md:flex md:w-1/2 justify-end animate-fade-in-right">
                    {/* <img 
                        src={currentSlide.illustrationUrl}
                        alt="Modern web development and digital solutions illustration" 
                        className="w-full h-auto object-contain max-w-lg shadow-2xl rounded-lg" 
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x300/e0e0e0/333333?text=Image+Not+Found"; }}
                    /> */}
                </div>
            </div>

            {/* Carousel navigation dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 
                                    ${currentSlideIndex === index ? 'bg-white scale-125' : 'bg-gray-400 opacity-60'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Tailwind CSS keyframes for subtle animations */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-fade-in-right {
                    animation: fadeInRight 0.8s ease-out forwards;
                    animation-delay: 0.2s; /* Stagger animation for visual interest */
                }
            `}</style>
        </section>
    );
};

export default Hero;
