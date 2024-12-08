import React from 'react';

const ExtraSection = () => {
    const faqs = [
        {
            question: "What is the purpose of this platform?",
            answer: "Our platform connects donors with impactful causes and projects, ensuring transparency and making a real difference in communities worldwide.",
        },
        {
            question: "How can I start a campaign?",
            answer: "Starting a campaign is easy! Simply sign up, fill out the campaign form with details about your cause, and submit it for approval.",
        },
        {
            question: "Are there any fees for using the platform?",
            answer: "We charge a small processing fee to maintain the platform and ensure smooth operations. The exact percentage will be shown before finalizing your campaign.",
        },
        {
            question: "Is my donation secure?",
            answer: "Absolutely. We use industry-standard encryption to protect your information and ensure secure transactions.",
        },
        {
            question: "How do I get donations??",
            answer: "Our platform makes it simple to share your fundraiser in a variety of ways to bring in donations, track your progress, and post updates to engage your community.",
        },
    ];

    return (
        <div className=" py-10">
            <div className="lg:w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#754738] dark:text-white mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="collapse collapse-plus bg-white shadow-lg rounded-lg"
                        >
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl font-medium text-[#754738] peer-checked:text-[#42291d]">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
