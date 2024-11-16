/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Profile.css';

export const Profile = ({ username, email, password, phone, age, gender, address }) => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editableUsername, setEditableUsername] = useState(username);
  const [editableEmail, setEditableEmail] = useState(email);
  const [editablePassword, setEditablePassword] = useState(password);
  const [editablePhone, setEditablePhone] = useState(phone);
  const [editableAge, setEditableAge] = useState(age);
  const [editableGender, setEditableGender] = useState(gender);
  const [editableAddress, setEditableAddress] = useState(address);
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Default profile image

  // Function to handle image upload
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Save the updated information
  const handleSave = () => {
    console.log('User details updated:', {
      username: editableUsername,
      email: editableEmail,
      password: editablePassword,
      phone: editablePhone,
      age: editableAge,
      gender: editableGender,
      address: editableAddress,
    });
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>

      {/* Profile Picture Section */}
      <div className="profile-picture-section">
        <img src={profileImage} alt="Profile" className="profile-picture" />
        {isEditing && (
          <input type="file" onChange={handleProfileImageChange} accept="image/*" />
        )}
      </div>

      {/* Editable fields */}
      <div className="profile-details">
        <p>
          <strong>Username:</strong> 
          {isEditing ? (
            <input
              type="text"
              value={editableUsername}
              onChange={(e) => setEditableUsername(e.target.value)}
            />
          ) : (
            editableUsername
          )}
        </p>

        <p>
          <strong>Email:</strong> 
          {isEditing ? (
            <input
              type="email"
              value={editableEmail}
              onChange={(e) => setEditableEmail(e.target.value)}
            />
          ) : (
            editableEmail
          )}
        </p>

        <p>
          <strong>Phone Number:</strong> 
          {isEditing ? (
            <input
              type="tel"
              value={editablePhone}
              onChange={(e) => setEditablePhone(e.target.value)}
            />
          ) : (
            editablePhone
          )}
        </p>

        <p>
          <strong>Age:</strong> 
          {isEditing ? (
            <input
              type="number"
              value={editableAge}
              onChange={(e) => setEditableAge(e.target.value)}
            />
          ) : (
            editableAge
          )}
        </p>

        <p className='gender'>
          <strong>Gender:</strong>
          {isEditing ? (
            <select
            
              value={editableGender || ''}  // Ensure gender value is set
              onChange={(e) => setEditableGender(e.target.value)}
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <span>{editableGender ? editableGender.charAt(0).toUpperCase() + editableGender.slice(1) : 'Not specified'}</span>
          )}
        </p>

        <p>
          <strong>Address:</strong> 
          {isEditing ? (
            <input
              type="text"
              value={editableAddress}
              onChange={(e) => setEditableAddress(e.target.value)}
            />
          ) : (
            editableAddress
          )}
        </p>

        <p>
          <strong>Password:</strong> 
          {isEditing ? (
            <div>
              <input
                type={showPassword ? "text" : "password"}
                value={editablePassword}
                onChange={(e) => setEditablePassword(e.target.value)}
              />
             
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
              </div>
            
          ) : (
            ' ******'
          )}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="profile-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="save-button">
              Save
            </button>
            <button onClick={handleEditToggle} className="cancel-button">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleEditToggle} className="edit-button">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};
