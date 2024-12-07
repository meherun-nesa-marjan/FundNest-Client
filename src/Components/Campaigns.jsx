import { useLoaderData, Link } from 'react-router-dom';
import { useState } from 'react';

const Campaigns = () => {
    const campaignData = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState([...campaignData]);

    const handleSort = (order) => {
        const sortedData = [...campaignData].sort((a, b) => {
            return order === 'asc'
                ? a.minDonation - b.minDonation
                : b.minDonation - a.minDonation;
        });
        setSortedCampaigns(sortedData);
    };

    return (
        <div className="lg:w-11/12 mx-auto py-20">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 ">All Campaigns</h2>
                <p className='text-xl font-bold"'>Empowering innovators to turn ideas into reality. Join the movement today!</p>
            </div>

            {/* Sort Dropdown */}
            <div className="mb-5">
                <div className="dropdown dropdown-right dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"> <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Sort by Minimum Donation
                    </button></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li
                            onClick={() => handleSort('asc')}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            Ascending
                        </li>
                        <li
                            onClick={() => handleSort('desc')}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            Descending
                        </li>
                    </ul>
                </div>

            </div>

            {/* Campaigns Table */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">#</th>
                        <th className="border border-gray-300 p-2">Title</th>
                        <th className="border border-gray-300 p-2">Type</th>
                        <th className="border border-gray-300 p-2">Minimum Donation</th>
                        <th className="border border-gray-300 p-2">Deadline</th>
                        <th className="border border-gray-300 p-2">Organizer</th>
                        <th className="border border-gray-300 p-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCampaigns.map((campaign, index) => (
                        <tr key={campaign._id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 p-2">{campaign.title}</td>
                            <td className="border border-gray-300 p-2">{campaign.type}</td>
                            <td className="border border-gray-300 p-2 text-center">
                                ${campaign.minDonation}
                            </td>
                            <td className="border border-gray-300 p-2 text-center">
                                {new Date(campaign.deadline).toLocaleDateString()}
                            </td>
                            <td className="border border-gray-300 p-2">{campaign.name}</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <Link
                                    to={`/campaign/${campaign._id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Campaigns;
