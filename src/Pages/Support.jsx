import React, { useState } from 'react';

const Support = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        issue: "",
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
        // Add your form submission logic here
        console.log(formData);
        setIsSubmitted(true);
        // Optionally, reset form after submission
        setFormData({
          name: "",
          email: "",
          issue: "",
        });
      };
    
      return (
        <div className="min-h-screen dark:bg-slate-800 dark:text-white flex flex-col items-center py-10">
          <div className="lg:w-8/12 w-full mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-[#754738] mb-6">
              Support
            </h1>
    
            <div className="space-y-6">
              <p className="text-xl text-justify text-[#715d57]">
                If you're experiencing issues or need assistance, please feel free
                to reach out. Our support team is ready to help you resolve any
                concerns you may have.
              </p>
    
              <h2 className="text-2xl font-semibold text-[#754738]">
                Common Support Topics:
              </h2>
              <ul className="list-disc list-inside text-lg text-[#715d57]">
                <li>Account-related inquiries</li>
                <li>Campaign issues</li>
                <li>Payment problems</li>
                <li>General platform assistance</li>
              </ul>
    
              <h3 className="text-2xl font-semibold text-[#754738] mt-6">
                Contact Support
              </h3>
              {isSubmitted ? (
                <div className="text-center">
                  <h2 className="text-xl text-green-500">
                    Thank you for reaching out to us!
                  </h2>
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
                      htmlFor="issue"
                      className="block text-lg text-[#754738] mb-2"
                    >
                      Issue or Concern
                    </label>
                    <textarea
                      name="issue"
                      id="issue"
                      value={formData.issue}
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
                    Submit Support Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      );
};

export default Support;