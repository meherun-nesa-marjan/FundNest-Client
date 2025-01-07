import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const campaign = useLoaderData();
  const { _id, name, email, title, type, description, imageUrl, minDonation, deadline } = campaign;

  const handleUpdateCampaign = (e) => {
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

    const updatedCampaign = {
        name,
        email,
        title,
        type,
        description,
        imageUrl,
        minDonation,
        deadline,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this campaign?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-silk.vercel.app/campaignData/${_id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCampaign),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Updated!", "Your campaign has been updated.", "success");
             

            } else {
              Swal.fire("No Changes", "No changes were made to the campaign.", "info");
            }
            
          })
          
          .catch((error) => {
            console.error("Error updating campaign:", error);
            Swal.fire("Error", "Could not update the campaign. Please try again.", "error");
          });
      }
    });
  };

  return (
    <div className="lg:w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#754738]">
        Update Your Campaign
      </h2>

      <form
        onSubmit={handleUpdateCampaign}
        id="updateCampaignForm"
        className="bg-white p-6 rounded-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Update Campaign
        </h2>

        <label htmlFor="userName" className="block font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          defaultValue={name}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          readOnly
          required
        />

        <label htmlFor="userEmail" className="block font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          defaultValue={email}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          readOnly
          required
        />

        <label htmlFor="campaignTitle" className="block font-medium mb-2">
          Campaign Title
        </label>
        <input
          type="text"
          id="campaignTitle"
          name="campaignTitle"
          defaultValue={title}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          required
        />

        <label htmlFor="campaignType" className="block font-medium mb-2">
          Campaign Type
        </label>
        <select
          id="campaignType"
          name="campaignType"
          defaultValue={type}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          required
        >
          <option value="" disabled>
            Select campaign type
          </option>
          <option value="personal">Personal Issue</option>
          <option value="startup">Startup</option>
          <option value="business">Business</option>
          <option value="creative">Creative Ideas</option>
        </select>

        <label htmlFor="description" className="block font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={description}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          rows="4"
          required
        ></textarea>

        <label htmlFor="imageUrl" className="block font-medium mb-2">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          defaultValue={imageUrl}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          required
        />

        <label htmlFor="minDonation" className="block font-medium mb-2">
          Minimum Donation Amount
        </label>
        <input
          type="number"
          id="minDonation"
          name="minDonation"
          defaultValue={minDonation}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          required
        />

        <label htmlFor="deadline" className="block font-medium mb-2">
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          defaultValue={deadline}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#AE9183] text-white py-2 px-4 rounded-md hover:bg-[#754738] transition-colors"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaign;
