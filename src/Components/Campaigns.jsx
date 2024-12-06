
import { useLoaderData, Link } from 'react-router-dom';

const Campaigns = () => {
    const campaignData = useLoaderData();
    return (
        <div className='lg:w-11/12 mx-auto py-20'>
            <h2 className="text-2xl font-bold mb-4 text-center">All Campaigns</h2>
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
                    {campaignData.map((campaign, index) => (
                        <tr key={campaign._id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 p-2">{campaign.title}</td>
                            <td className="border border-gray-300 p-2">{campaign.type}</td>
                            <td className="border border-gray-300 p-2 text-center">${campaign.minDonation}</td>
                            <td className="border border-gray-300 p-2 text-center">{campaign.deadline}</td>
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
