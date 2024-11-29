import React, { useState } from 'react';
import axios from 'axios';
import './Catererssignup.css';  

const Catererssignup = () => {
  const [profile, setProfile] = useState({
    name: '',
    phone: '',
    description: '',
    profileImage: null,
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfile({
        ...profile,
        profileImage: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('phone', profile.phone);
    formData.append('description', profile.description);
    formData.append('address', profile.address);
    formData.append('profileImage', profile.profileImage);

    try {
      const response = await axios.post('http://localhost:3100/insertconfec', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('There was an error updating the profile!', error);
    }
  };

  return (
    <div className="profile-pageh1">
      
      <div className="infoh1"></div>
      <h1>Caterer Information</h1>
      <div>
        <form id="profileFormh1" onSubmit={handleSubmit}>
          <h3>Personal Information</h3>
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
          <input type="tel" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone Number" />
          <h3>Additional Information</h3>
          <textarea name="description" value={profile.description} onChange={handleChange} placeholder="Description"></textarea>
          <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
          <input type="file" name="profileImage" onChange={handleImageChange} accept="image/*" />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Catererssignup;