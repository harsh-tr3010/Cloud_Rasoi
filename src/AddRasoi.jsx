import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRasoi = () => {
  const [profile, setProfile] = useState({
    rasoi_name: '',
    rasoi_category: '',
    rasoi_address: '',
    pincode: '',
    image_URL: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value} = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfile({
        ...profile,
        image_URL: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('rasoi_name', profile.rasoi_name);
    formData.append('rasoi_category', profile.rasoi_category);
    formData.append('rasoi_address', profile.rasoi_address);
    formData.append('pincode', profile.pincode);
    formData.append('image_URL', profile.image_URL);


    try {
      const response = await axios.post('http://localhost:3100/addrasoi', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile inserted successfully!');
    } catch (error) {
      console.error('There was an error updating the profile!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add your rasoi</h1>
      <input type="text" name="rasoi_name" value={profile.rasoi_name} placeholder="rasoi name" onChange={handleChange} required />
      <input type="text" name="rasoi_category" value={profile.rasoi_category} placeholder="raosi category" onChange={handleChange} required />
      <input type="text" name="rasoi_address" value={profile.rasoi_address} placeholder="raosi address" onChange={handleChange} required />
      <input type="text" name="pincode" value={profile.pincode} placeholder="Enter your pincode" onChange={handleChange} required />


      <input type="file" name="image_URL" onChange={handleImageChange} required />
      <button type="submit" className='bus009'>Sign Up</button>
    </form>
  );
};

export default AddRasoi;

