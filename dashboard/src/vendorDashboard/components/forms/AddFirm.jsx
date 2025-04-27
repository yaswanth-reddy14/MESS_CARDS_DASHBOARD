import React, { useState } from 'react';
import { API_URL } from '../../data/apiPath';

const AddFirm = () => {
  const [messName, setMessName] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [file, setFile] = useState(null);

  const handleImageUpload =(event) => {
    const selectedImage = event.target.files[0];
    setFile(selectedImage)
  }
  const handleFirmSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!messName || !area || !address || !contact) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const loginToken = localStorage.getItem("loginToken");
      if (!loginToken) {
        alert("User not authenticated. Please login again.");
        return;
      }

      const formData = new FormData();
      formData.append('messName', messName);
      formData.append('area', area);
      formData.append('address', address);
      formData.append('contact', contact);

      if (file) {
        formData.append('image', file);
      }

      const response = await fetch(`${API_URL}/firm/add-firm`, {
        method: "POST",
        headers: {
          'token': loginToken, // only token here, FormData will auto set 'Content-Type'
        },
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Mess details added successfully!");
        console.log("Server Response:", data);

        // Clear form
        setMessName("");
        setArea("");
        setAddress("");
        setContact("");
        setFile(null);
      } else {
        alert(data.message || "Failed to add mess details. Please try again.");
      }

    } catch (error) {
      console.error("Error while adding mess:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="firmSection">
      <form className="tableForm" onSubmit={handleFirmSubmit}>
        <h3>Add Mess Details</h3>

        <label>Mess Name</label>
        <input
          type="text"
          name="messName"
          value={messName}
          onChange={(e) => setMessName(e.target.value)}
          placeholder="Enter Mess Name"
        />

        <label>Area</label>
        <input
          type="text"
          name="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter Area"
        />

        <label>Mess Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Mess Address"
        />

        <label>Contact Number</label>
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Contact Number"
        />

        <label>Upload Your Mess Image (Optional)</label>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFirm;
