import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem("token");
      console.log(token)
      try {
        const response = await axios.get("http://localhost:3000/api/profiles/get-profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-details">
        <h2>Personal Information</h2>
        <p><strong>Learning Style:</strong> {userData.learningStyle}</p>
        <p><strong>Strengths:</strong> {userData.subjectStrengths}</p>
        <p><strong>Interests:</strong> {userData.interests}</p>
      </div>

      <div className="profile-progress">
        <h2>Progress Overview</h2>
        <p><strong>Courses Completed:</strong> {userData.coursesCompleted}</p>
        <p><strong>Courses In Progress:</strong> {userData.coursesInProgress}</p>
        <p><strong>Upcoming Assignments:</strong> {userData.upcomingAssignments}</p>
      </div>

      <button className="edit-profile-button">Edit Profile</button>
    </div>
  );
};

export default Profile;
