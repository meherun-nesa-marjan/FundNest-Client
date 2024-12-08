import React, { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddCampaign = () => {
    const { user } = useContext(AuthContext)
    if (!user || !user.email) {
        return <div className='text-center text-2xl '>Please log in to Add your campaigns.</div>;
    }
    
    const handleAddCampaign = (e) => {
        
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;
        const email = form.userEmail.value;
        const title = form.campaignTitle.value;
        const type = form.campaignType.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const campaignData = {
            name,
            email,
            title,
            type,
            description,
            imageUrl,
            minDonation,
            deadline,
        }
        // send data to server
        fetch('https://assignment-10-silk.vercel.app/campaignData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(campaignData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            toast.success("Add Campaign successful!");
            form.reset();
           
    };

    return (
        <div className="bg-bannar bg-opacity-5 bg-no-repeat bg-cover flex justify-center items-center">
            <div className="py-10 w-full lg:w-4/6">
                <form
                    onSubmit={handleAddCampaign}
                    id="addCampaignForm"
                    className="bg-white p-6 rounded-lg w-full dark:bg-slate-600 dark:text-white"
                >
                    <h2 className="text-2xl font-bold mb-4 text-center text-[#754738] dark:text-white">
                        Add New Campaign
                    </h2>

                    <label htmlFor="imageUrl" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        Image URL
                    </label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter image URL"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183]"
                        required
                    />

                    <label htmlFor="campaignTitle" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        Campaign Title
                    </label>
                    <input
                        type="text"
                        id="campaignTitle"
                        name="campaignTitle"
                        placeholder="Enter campaign title"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183]"
                        required
                    />

                    <label htmlFor="campaignType" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        Campaign Type
                    </label>
                    <select
                        id="campaignType"
                        name="campaignType"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183] dark:text-white"
                        required
                    >
                        <option value="" disabled selected>
                            Select campaign type
                        </option>
                        <option value="personal">Personal Issue</option>
                        <option value="startup">Startup</option>
                        <option value="business">Business</option>
                        <option value="creative">Creative Ideas</option>
                    </select>

                    <label htmlFor="description" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter campaign description"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183]"
                        rows="4"
                        required
                    ></textarea>

                    <label htmlFor="minDonation" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        Minimum Donation Amount
                    </label>
                    <input
                        type="number"
                        id="minDonation"
                        name="minDonation"
                        placeholder="Enter minimum donation amount"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183]"
                        required
                    />

                    <label htmlFor="deadline" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        Deadline
                    </label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183]"
                        required
                    />

                    <label htmlFor="userEmail" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        User Email
                    </label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={user.email || ''}
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183]"
                        readOnly
                        required
                    />

                    <label htmlFor="userName" className="block font-medium mb-2 text-[#754738] dark:text-white">
                        User Name
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={user.displayName || ''}
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-[#AE9183]"
                        readOnly
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#AE9183] text-white py-2 px-4 rounded-md hover:bg-[#754738] transition-colors"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCampaign;
