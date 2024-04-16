// ProfilePage.jsx

import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/userService';

function ProfilePage() {
  const [userProfile, setUserProfile] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await getUserProfile(); // Implement userService.js to fetch user profile
      setUserProfile(response.user);
      setName(response.user.name);
      setEmail(response.user.email);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setError('Error fetching user profile');
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = { name, email };
      await updateUserProfile(updatedProfile); // Implement userService.js to update user profile
      // Optionally, update local state or display success message
    } catch (error) {
      console.error('Error updating user profile:', error);
      setError('Error updating user profile');
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfilePage;
