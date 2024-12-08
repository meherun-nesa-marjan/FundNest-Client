import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc"); 
    const navigate = useNavigate();

    const fetchCampaigns = async (sort) => {
        try {
            const response = await fetch(`https://assignment-10-silk.vercel.app/campaigns?sort=${sort}`);
            const data = await response.json();
            if (data.success) {
                setCampaigns(data.data);
            }
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        }
    };

   
    useEffect(() => {
        fetchCampaigns(sortOrder);
    }, [sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    return (
        <div className="lg:w-11/12 mx-auto py-20">
            <h2 className="text-2xl font-bold mb-4 text-center">All Campaigns</h2>
            <button
                onClick={toggleSortOrder}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
            
            {/* Mobile-friendly responsive table */}
            <div className="hidden md:block">
                <table className="w-full border-collapse overflow-x-auto border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">#</th>
                            <th className="border border-gray-300 p-2">User Name</th>
                            <th className="border border-gray-300 p-2">Campaign Title</th>
                            <th className="border border-gray-300 p-2">Campaign Type</th>
                            <th className="border border-gray-300 p-2">Minimum Donation</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => (
                            <tr key={campaign._id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 p-2">{campaign.name}</td>
                                <td className="border border-gray-300 p-2">{campaign.title}</td>
                                <td className="border border-gray-300 p-2">{campaign.type}</td>
                                <td className="border border-gray-300 p-2 text-center">${campaign.minDonation}</td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <button
                                        onClick={() => navigate(`/campaign/${campaign._id}`)}
                                        className="mt-4 bg-[#754738] text-white px-4 py-2 rounded hover:bg-[#D9B8A7]"
                                    >
                                        See More
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden">
                {campaigns.map((campaign, index) => (
                    <div key={campaign._id} className="border border-gray-300 p-4 mb-4 rounded-md shadow-md hover:bg-gray-50">
                      <span className="font-bold">{index + 1}. {campaign.title}</span>
                        <p><strong>Campaign Type:</strong> {campaign.type}</p>
                        <p><strong>User Name:</strong> {campaign.name}</p>
                        <p><strong>Minimum Donation:</strong> ${campaign.minDonation}</p>
                        <button
                                onClick={() => navigate(`/campaign/${campaign._id}`)}
                                className="bg-[#754738] text-white px-4 py-2 rounded hover:bg-[#D9B8A7]"
                            >
                                See More
                            </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCampaigns;
