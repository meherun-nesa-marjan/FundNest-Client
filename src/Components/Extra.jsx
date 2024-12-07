import React from 'react';

const Extra = () => {
    return (
        <div className="bg-[#F4F2EC] py-10">
            <div className="lg:w-11/12 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center relative">
                    
                    {/* Text Content */}
                    <div className="flex flex-col space-y-6 lg:w-3/5 lg:mr-6 lg:ml-10">
                        
                        {/* First Text Box */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h1 className="text-3xl font-bold mb-4 text-[#754738]">Changing the World, One Donation at a Time</h1>
                            <p className="text-lg text-gray-700">
                                "We believe that collective action can change the world. Our mission is to provide a space 
                                where individuals, causes, and projects can connect with a global community ready to support them."
                            </p>
                        </div>

                        {/* Second Text Box */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h1 className="text-3xl font-bold mb-4 text-[#754738]">Creating Opportunities through Collective Action</h1>
                            <p className="text-lg text-gray-700">
                                "We are on a mission to democratize funding and give every visionary the chance to bring their ideas to life."
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-4/5 mb-6 lg:mb-0">
                        <img 
                            src="./images/help.jpg" 
                            alt="Helping Hands" 
                            className="rounded-2xl shadow-md w-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;
