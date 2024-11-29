import React, { useState } from 'react';
import './Caterersdetail.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Caterersdetail = () => {
  const [formData, setFormData] = useState({
    image_URL: '',
    caterer_name: '',
    caterer_description: '',
    price: ''
    
  });

  const navigate = useNavigate();

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value,
   });
};

  

const handleSubmit = async (event) =>{

  event.preventDefault();
  const data = new FormData();
    data.append('image_URL', formData.image_URL);
    data.append('caterer_name', formData.caterer_name);
    data.append('caterer_description', formData.caterer_description);
    data.append('price', formData.price);
  try{
      console.log(formData);
      const response=await axios.post('http://localhost:7000/confect-signup',formData)
  

      if(response.data.success) {
          console.log('Signup Successful');

      }else{
          console.error('Signup Failed');
      }
  }catch(error) {
      console.error('Error:',error);
  }


};

  return (
    <div className="signup-container">
      <div className="welcome-section">
        <h1>WELCOME TO</h1>
        <h2>CLOUD RASOI</h2>
        <p>Cloud Rasoi represents a significant leap forward in online food ordering, offering a comprehensive and customer-centric solution that meets the modern consumer's demands for variety, quality, and convenience.</p>
      </div>
      <div className="form-section">
        <div className="tabs">
          <button className="tab active">Sign Up</button>
          
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="file"
              name="image_URL"
              value={formData.name}
              onChange={handleChange}
              placeholder="Upload image"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="caterer_name"
              value={formData.kitchen_name}
              onChange={handleChange}
              placeholder="Caterer Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="caterer_description"
              value={formData.email}
              onChange={handleChange}
              placeholder="Add Description"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="price"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Price per plate"
              required
            />
          </div>
          <button type="submit" className="bus009">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Caterersdetail;
