import React, { useContext, useState } from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom';

const MyCampaign = () => {
    const initialCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(initialCampaigns); // Local state for campaigns
    const { user } = useContext(AuthContext);

    if (!user || !user.email) {
        return <div className='text-center text-2xl '>Please log in to see your campaigns.</div>;
    }

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-silk.vercel.app/campaignData/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log('Delete API response:', data); // Log response
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success"
                            });
                            setCampaigns((prevCampaigns) =>
                                prevCampaigns.filter((campaign) => campaign._id !== _id)
                            );
                        }
                    })
                    .catch((error) => console.error('Error deleting campaign:', error));
            }
        });
    };

    return (
        <div className='lg:w-11/12 mx-auto py-20'>
            <h2 className="text-2xl font-bold mb-4 text-center">My Campaigns</h2>
            {campaigns && campaigns.length > 0 ? (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">#</th>
                            <th className="border border-gray-300 p-2">Title</th>
                            <th className="border border-gray-300 p-2">Type</th>
                            <th className="border border-gray-300 p-2">Minimum Donation</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => (
                            <tr key={campaign._id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 p-2">{campaign.title}</td>
                                <td className="border border-gray-300 p-2">{campaign.type}</td>
                                <td className="border border-gray-300 p-2 text-center">${campaign.minDonation}</td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <Link to={`/UpdateCampaign/${campaign._id}`}>
                                        <button
                                            className="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
                                        >
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(campaign._id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500">You have not added any campaigns yet.</p>
            )}
        </div>
    );
};

export default MyCampaign;
