import React, { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from 'react-router-dom';

const MyDonations = () => {
    const { user } = useContext(AuthContext); 
    if (!user || !user.email) {
        return <div className='text-center text-2xl '>Please log in to See your DonationsData.</div>;
    }
    const donations = useLoaderData()


    return (
        <div className="container mx-auto p-6 lg:w-10/12 w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">My Donations</h2>
            {donations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donations.map((donation) => (
                        <div
                            key={donation._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{donation.campaignTitle}</h3>
                                <p className="text-gray-700 mb-2">
                                    Amount Donated: <strong>${donation.amount}</strong>
                                </p>
                                <p className="text-gray-700 mb-2">
                                    Campaign ID: <strong>{donation.campaignId}</strong>
                                </p>
                                <p className="text-gray-700">
                                    Date: {new Date(donation.date).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">You have not donated to any campaigns yet.</p>
            )}
        </div>
    );
};

export default MyDonations;
