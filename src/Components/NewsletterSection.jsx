import React, { useState } from 'react';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can handle the form submission, like sending the email to a backend or an API
        if (email) {
            setMessage('Thank you for subscribing to our newsletter!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div className="bg-[#f8f8f8] py-20">
            <div className="lg:w-11/12 mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#754738] mb-4">Stay Updated!</h2>
                <p className="text-lg text-gray-600 mb-6">Sign up for our newsletter to receive the latest updates, offers, and news from FundNest.</p>
                
                <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="px-4 py-2 border border-gray-300 rounded-md w-80"
                    />
                    <button type="submit" className="bg-[#754738] text-white px-6 py-2 rounded-md">
                        Subscribe
                    </button>
                </form>

                {message && (
                    <div className="mt-4 text-lg font-semibold text-green-600">{message}</div>
                )}
            </div>
        </div>
    );
};

export default NewsletterSection;
