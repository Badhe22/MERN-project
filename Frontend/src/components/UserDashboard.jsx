import React from "react";

function UserDashboard({ user }) {
  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}</h2>
      <div className="profile">
        <h3>Your Profile</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Contact Info: {user.contactInfo}</p>
        <p>Address: {user.address}</p>
        {/* Add form fields for updating profile */}
      </div>
      <div className="orders">
        <h3>Your Orders</h3>
        {/* Display user's orders */}
      </div>
    </div>
  );
}

export default UserDashboard;
