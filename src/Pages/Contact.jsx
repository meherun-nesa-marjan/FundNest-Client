
import React, { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
        setIsSubmitted(true);
        // Optionally, reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      };
    
      return (
        <div className="min-h-screen  dark:bg-slate-800 dark:text-white flex flex-col items-center py-10">
          <div className="lg:w-8/12 w-full mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-[#754738] mb-6">
              Contact Us
            </h1>
    
            {isSubmitted ? (
              <div className="text-center">
                <h2 className="text-xl text-green-500">Thank you for your message!</h2>
                <p className="text-lg text-[#715d57]">We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-[#754738] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
    
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-[#754738] mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
    
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg text-[#754738] mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows="6"
                    required
                  />
                </div>
    
                <button
                  type="submit"
                  className="btn bg-[#754738] text-white w-full py-3 mt-4"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      );
};

export default Contact;
