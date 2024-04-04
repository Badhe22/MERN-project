import React, { useState } from "react";

function UserDashboard({ user }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    contactInfo: user.contactInfo,
    address: user.address
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send updated profile data to server
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}!</h2>
      <div className="profile">
        <h3>Your Profile</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="contactInfo">Contact Info:</label>
            <input type="text" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <div className="orders">
        <h3>Your Orders</h3>
        {/* Display user's orders */}
      </div>
    </div>
  );
}

export default UserDashboard;
