import React, { useState, useEffect } from "react";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    const fetchCampaigns = async (sort) => {
        try {
            const response = await fetch(`http://localhost:5000/campaigns?sort=${sort}`);
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
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">#</th>
                        <th className="border border-gray-300 p-2">Title</th>
                        <th className="border border-gray-300 p-2">Type</th>
                        <th className="border border-gray-300 p-2">Minimum Donation</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign, index) => (
                        <tr key={campaign._id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 p-2">{campaign.title}</td>
                            <td className="border border-gray-300 p-2">{campaign.type}</td>
                            <td className="border border-gray-300 p-2 text-center">${campaign.minDonation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllCampaigns;
