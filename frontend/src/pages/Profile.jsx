import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import ProfileSection from "../Components/ProfileSection/ProfileSection";
const Profile = () => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <h2>Hello Innovator 🌟 Ready to Shine?</h2>
        <Link to="/edit-profile">
          <button className="new-btn">Edit Profile</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Profile;
