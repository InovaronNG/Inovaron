"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Cloud, Smartphone, Monitor, Database, Rocket, Lightbulb, Code, Users, Brush } from 'lucide-react';

import Footer from '../../components/Footer';

// Data for the services section
const servicesData = [
    {
        title: "Web & App Development",
        description: "Building responsive, high-performance websites and web applications tailored to your business needs.",
        icon: <Monitor size={48} className="text-purple-600" />,
        features: ["Custom React & Next.js apps", "Sleek UI/UX design", "Scalable backend systems"]
    },
    {
        title: "Cloud & DevOps Solutions",
        description: "Implementing robust cloud infrastructure and automating your development lifecycle for efficiency.",
        icon: <Cloud size={48} className="text-teal-600" />,
        features: ["AWS/GCP/Azure setup", "CI/CD pipelines", "Microservices architecture"]
    },
    {
        title: "Mobile Application Development",
        description: "Creating engaging and intuitive mobile apps for iOS and Android, ensuring a seamless user experience.",
        icon: <Smartphone size={48} className="text-orange-600" />,
        features: ["Native & cross-platform apps", "Performance optimization", "App store deployment"]
    },
    {
        title: "Data & Analytics Services",
        description: "Transforming your data into actionable insights with powerful databases and analytical dashboards.",
        icon: <Database size={48} className="text-indigo-600" />,
        features: ["Custom data pipelines", "Real-time analytics dashboards", "Predictive modeling"]
    }
];

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const ServicesPage = () => {
    return (
        <div className="w-full flex flex-col min-h-screen font-inter bg-gray-50 text-gray-800">

            {/* Hero Section */}
            <motion.section
                className="relative bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-bl-3xl rounded-br-3xl shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="absolute inset-0 z-0 opacity-20">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-overlay"
                        animate={{ y: [-10, 10, -10], x: [-10, 10, -10] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                    <motion.div
                        className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-white rounded-full mix-blend-overlay"
                        animate={{ y: [10, -10, 10], x: [10, -10, 10] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    ></motion.div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full mix-blend-overlay"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    ></motion.div>
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="mb-4">
                        <LayoutGrid size={64} className="mx-auto text-white drop-shadow-lg" />
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg"
                        variants={itemVariants}
                    >
                        Solutions for Your Business
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl font-light leading-relaxed drop-shadow-md"
                        variants={itemVariants}
                    >
                        From ideation to deployment, we build custom software that empowers your growth.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Services Grid Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Core Services</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                variants={itemVariants}
                            >
                                <div className="p-4 bg-gray-100 rounded-full mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                                <ul className="text-left text-gray-700 space-y-2 w-full">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-gray-900">How We Work</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {/* Step 1: Discovery */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white">
                            <Lightbulb size={48} className="text-yellow-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">1. Discovery & Strategy</h3>
                            <p className="text-gray-600">We work with you to define project goals and outline a clear roadmap for success.</p>
                        </motion.div>
                        {/* Step 2: Design */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white">
                            <Brush size={48} className="text-pink-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">2. Design & Prototyping</h3>
                            <p className="text-gray-600">Creating intuitive user experiences and beautiful interfaces that resonate with your audience.</p>
                        </motion.div>
                        {/* Step 3: Development */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white">
                            <Code size={48} className="text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">3. Development & Testing</h3>
                            <p className="text-gray-600">Building robust and scalable solutions with clean, well-documented code and rigorous testing.</p>
                        </motion.div>
                        {/* Step 4: Launch */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white">
                            <Rocket size={48} className="text-red-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">4. Deployment & Support</h3>
                            <p className="text-gray-600">Seamlessly launching your project and providing ongoing support and maintenance.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to start your project?</h2>
                    <p className="text-lg sm:text-xl font-light mb-8">We're here to help. Get in touch with us to discuss your vision and see how we can bring it to life.</p>
                    <a href="#" className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-indigo-800 rounded-full shadow-lg hover:bg-indigo-900 transition-all duration-300 transform hover:scale-105">
                        <Users size={20} className="mr-2" />
                        Let's Talk
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
