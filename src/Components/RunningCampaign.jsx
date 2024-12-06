import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RunningCampaign = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/runningCampaigns")
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center text-2xl">Loading campaigns...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Running Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.slice(0, 6).map((campaign) => (
                    <div
                        key={campaign._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <img
                            src={campaign.imageUrl || "https://via.placeholder.com/300"}
                            alt={campaign.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                            <p className="text-gray-700 mb-2">
                                Type: <strong>{campaign.type}</strong>
                            </p>
                            <p className="text-gray-700 mb-2">
                                Minimum Donation: <strong>${campaign.minDonation}</strong>
                            </p>
                            <p className="text-gray-700">
                                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                            </p>
                            <button
                                onClick={() => navigate(`/campaign/${campaign._id}`)}
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                See More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RunningCampaign;
