import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function UserDashboard({ user, setUser }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    //contactInfo: user.contactInfo,
    //address: user.address
  });

  const history = useHistory();

  useEffect(() => {
    // Check if user is logged in on component mount
    const isLoggedIn = !!localStorage.getItem("authToken"); // Check if authentication token exists
    if (!isLoggedIn) {
      // Redirect to homepage if user is not logged in
      history.push("/");
    }
  }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send updated profile data to server
    console.log("Form submitted with data:", formData);
    // Update user state if needed
    setUser({ ...user, ...formData });
  };

  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem("authToken");
    // Clear user state
    setUser(null);
    // Redirect to homepage
    history.push("/");
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
          
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <div className="orders">
        <h3>Your Orders</h3>
        {/* Display user's orders */}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserDashboard;
