import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
// Removed: import 'react-toastify/dist/ReactToastify.css';
// Please ensure 'react-toastify/dist/ReactToastify.css' is imported globally in your project.

const Contactus = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9d656c0b-a9da-48d9-adf3-776f688cc3ac", // Keep your actual access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        console.error("Submission failed:", result);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-20 lg:py-24 font-inter">
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 lg:p-12 border border-gray-100 dark:border-gray-700">
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white leading-tight">
            Get in Touch
          </h2>
          <p className="mb-8 md:mb-12 text-lg font-medium text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you! Fill out the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-3 text-base text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm-light transition duration-200 ease-in-out"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-3 text-base text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm-light transition duration-200 ease-in-out"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="block p-3 w-full text-base text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-200 ease-in-out"
                placeholder="Leave your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-600 rounded-lg shadow-lg 
                         hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 
                         transition-all duration-300 ease-in-out transform hover:scale-105"
              disabled={loading}
            >
              {!loading ? (
                "Send Message"
              ) : (
                <div className="flex items-center gap-2">
                  <span>Sending...</span>
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-5 text-blue-200 animate-spin fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
