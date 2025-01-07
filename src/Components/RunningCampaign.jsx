import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const RunningCampaign = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://assignment-10-silk.vercel.app/runningCampaigns")
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setError("Failed to load campaigns. Please try again.");
                setLoading(false);
            });
    }, []);

    const handleType = (count) => {
        console.log(`Word typed: ${count}`);
    }

    const handleDone = () => {
        console.log("Done with all loops!");
    }

    if (loading) {
        return <div className="text-center text-2xl">Loading campaigns...</div>;
    }


    return (
        <div className="lg:w-10/12 w-fullcontainer mx-auto py-8">
           
            <div className="mb-6">
            <h2 className="text-3xl font-bold text-center">Running Campaigns</h2>
                <h1 className="text-center text-xl" style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    We believe that collective action can change the{' '}
                    <span className="text-[#754738] font-bold">
                        <Typewriter
                            words={['Society', 'Community', 'World']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign._id}
                        className="bg-white dark:bg-slate-600 dark:text-white shadow-md rounded-lg overflow-hidden"
                    >
                        <img
                            src={campaign.imageUrl || "https://via.placeholder.com/300"}
                            alt={campaign.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold dark:text-white  mb-2">{campaign.title}</h3>
                            <p className="text-gray-700 mb-2 dark:text-white ">
                                Type: <strong>{campaign.type}</strong>
                            </p>
                            <p className="text-gray-700 dark:text-white  mb-2">
                                Minimum Donation: <strong>${campaign.minDonation}</strong>
                            </p>
                            <p className="text-gray-700 dark:text-white ">
                                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                            </p>
                            <button
                                onClick={() => navigate(`/campaign/${campaign._id}`)}
                                className="mt-4 bg-[#754738] text-white px-4 py-2 rounded hover:bg-[#D9B8A7]"
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
