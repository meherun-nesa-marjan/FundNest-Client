import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";
const CampaignDetails = () => {
    const campaign = useLoaderData();
    const { user } = useContext(AuthContext)
    const isDeadlinePassed = () => {
        if (!campaign?.deadline) return false;
        const deadlineDate = new Date(campaign.deadline);
        const currentDate = new Date();
        return currentDate > deadlineDate;
    };
    const handleDonate = () => {
        if (isDeadlinePassed()) {
            Swal.fire({
                icon: "error",
                title: "Campaign Expired",
                text: "You cannot donate to this campaign as the deadline has passed.",
            });
            return;
        }
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Unauthorized",
                text: "Please log in to donate.",
            });
            return;
        }
        const donation = {
            campaignId: campaign._id,
            campaignTitle: campaign.title,
            amount: campaign.minDonation, 
            email: user.email,
            username: user.displayName,
            date: new Date(),
        };

        fetch('http://localhost:5000/myDonations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(donation),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Thank You!",
                        text: "Your donation has been successfully recorded.",
                    });
                }
            })
            .catch((error) => {
                console.error("Error processing donation:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong. Please try again.",
                });
            });









            
    };
    if (!campaign) {
        return <div className="text-center text-2xl text-red-500">Campaign not found.</div>;
    }
    return (
        <div className="container mx-auto p-6">
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img className='p-6'
                        src={campaign.imageUrl}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold mb-4">Campaign-tittle:{campaign.title}</h2>
                    <p className="text-gray-700 mb-4"><strong>Campaign-description:</strong>{campaign.description}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Type:</strong> {campaign.type}
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Minimum Donation:</strong> ${campaign.minDonation}
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Deadline:</strong> {campaign.deadline}
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleDonate}
                            className="bg-[#754738] text-white px-6 py-2 rounded hover:bg-[#D9B8A7]"
                        >
                            Donate
                        </button>
                    </div>
                </div>
            </div>









        </div>
    );
};

export default CampaignDetails;


