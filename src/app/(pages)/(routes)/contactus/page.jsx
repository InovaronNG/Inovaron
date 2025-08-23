"use client"
import React, { useState } from 'react';
import Footer from '../../components/Footer'; // Corrected Footer component path
import { motion } from 'framer-motion'; // For animations
import { MessageCircleMore } from 'lucide-react'; // Example icon for the hero section

// Main Contact Us Page Component
const ContactUsPage = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // State for loading and submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionMessage('');

        // In a real application, you would send this data to your backend API
        // For demonstration, we'll simulate an API call with a delay
        try {
            console.log('Form Data Submitted:', formData);
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

            // Reset form and show success message
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setSubmissionMessage('✅ Your message has been sent successfully!');
        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionMessage('❌ There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay each child animation
                delayChildren: 0.3    // Delay before children animations start
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 }, // Start slightly below and invisible
        visible: {
            y: 0,           // Move to original position
            opacity: 1,     // Become visible
            transition: {
                type: "spring", // Spring animation for a smooth bounce effect
                stiffness: 100  // Stiffness of the spring
            }
        }
    };

    return (
        // Main container for the entire page, ensuring full height and flex column layout
        <div className="w-full flex flex-col min-h-screen font-inter">
            {/* Hero Section - A vibrant, animated header for the contact page */}
            <motion.section
                className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-bl-3xl rounded-br-3xl shadow-lg"
                initial={{ opacity: 0, y: -50 }} // Initial state: slightly above and invisible
                animate={{ opacity: 1, y: 0 }}   // Animate to: visible and at original position
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            >
                {/* Abstract background shapes for subtle animation and visual interest */}
                <div className="absolute inset-0 z-0 opacity-20">
                    {/* Floating circle 1 */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-overlay"
                        animate={{ y: [-10, 10, -10], x: [-10, 10, -10] }} // Gentle floating effect
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                    {/* Floating circle 2 */}
                    <motion.div
                        className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-white rounded-full mix-blend-overlay"
                        animate={{ y: [10, -10, 10], x: [10, -10, 10] }} // Gentle floating effect with a delay
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    ></motion.div>
                    {/* Pulsing and rotating circle */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full mix-blend-overlay"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }} // Scaling and rotating effect
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    ></motion.div>
                </div>

                {/* Hero section content: Icon, Title, and Subtitle */}
                <motion.div
                    className="relative z-10 max-w-3xl mx-auto text-center"
                    variants={containerVariants} // Apply container animation variants
                    initial="hidden"
                    animate="visible"
                >
                    {/* Lucide icon for visual branding */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <MessageCircleMore size={64} className="mx-auto text-white drop-shadow-lg" />
                    </motion.div>
                    {/* Main title of the hero section */}
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg"
                        variants={itemVariants} // Apply item animation variants
                    >
                        Get in Touch
                    </motion.h1>
                    {/* Subtitle/description for the hero section */}
                    <motion.p
                        className="text-xl md:text-2xl font-light leading-relaxed mb-8 drop-shadow-md"
                        variants={itemVariants} // Apply item animation variants
                    >
                        We're here to help and eager to hear from you. Reach out with any questions or feedback!
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Main Contact Content - This is the existing contact form and info */}
            {/* flex-grow ensures this section takes up available space between hero and footer */}
            <div className="flex-grow bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 lg:p-10 w-full max-w-4xl flex flex-col lg:flex-row gap-8">
                    {/* Contact Information Section (left side) */}
                    <div className="lg:w-1/2 space-y-6 text-gray-700">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 rounded-md">Contact Us </h1>
                        <p className="text-lg leading-relaxed">
                            We'd love to hear from you! Whether you have a question about our features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-4">
                            {/* Phone contact details */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
                                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Phone
                                </h2>
                                <a href="tel:09014495422" className="ml-7">(+123) 9014495422</a>
                            </div>
                            {/* Email contact details */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
                                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    Email
                                </h2>
                                <p className="ml-7">inovaronng@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section (right side) */}
                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name input field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            {/* Email input field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            {/* Subject input field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Regarding..."
                                    required
                                />
                            </div>
                            {/* Message textarea field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                            </div>
                            {/* Submit button with loading spinner */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                            {/* Submission message display */}
                            {submissionMessage && (
                                <p className={`text-center text-sm ${submissionMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'} mt-4`}>
                                    {submissionMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            {/* Footer component */}
            <Footer />
        </div>
    );
};

export default ContactUsPage;
