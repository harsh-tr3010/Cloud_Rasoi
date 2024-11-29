import React,{useState} from 'react';
import axios from 'axios';

const Delboylistinsert = () => {
    const [formData , setFormData] = useState({
        name : '',
        phonenumber : '',
        vehiclenumber : '',
        licensenumber : '',
        pincode : '',
       


    });


    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
       });
    };
    

    const handleSubmit = async (event) =>{

        event.preventDefault();
        try{
            console.log(formData);
            const response=await axios.post('http://localhost:3100/delivery-signup',formData)
        

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
    <div className="signup-container1">
      <div className="signup-left">
        {/* Add image or SVG here */}
      </div>
      <div className="signup-right003">
        <h4 className='_dbd004'>Delivery Boy Details </h4>
        <p>Hey you, enter your details to create your account</p>
        <form onSubmit={handleSubmit} className="deliveryform">
          <label htmlFor="name">
            <i className="fas fa-user"></i>
            <input type="text" id="name" name="name"
            value={formData.firstname}
            onChange={handleChange} placeholder="Enter your Name"
             />
          </label>
          
          
          
          <label htmlFor="phonenumber">
            <i className="fas fa-phone"></i>
            <input type="tel" id="phonenumber" name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange} placeholder="Enter your Phonenumber" />
          </label>

          
          <label htmlFor="vehiclenumber">
            <i className="fas fa-lock"></i>
            <input type="vehiclenumber" id="vehiclenumber" name="vehiclenumber"
            value={formData.vehiclenumber}
            onChange={handleChange} placeholder="Enter your Vehiclenumber" />
          </label>





          <label htmlFor="licensenumber">
            <i className="fas fa-lock"></i>
            <input type="licensenumber" id="licensenumber" name="licensenumber"
            value={formData.licensenumber}
            onChange={handleChange} placeholder="Enter your License Number" />
          </label>

          <label htmlFor="pincode">
            <i className="fas fa-lock"></i>
            <input type="pincode" id="pincode" name="pincode"
            value={formData.pincode}
            onChange={handleChange} placeholder="Enter your Pincode" />
          </label>





          
          
          <button type="submit" className='_aatt005'>Submit Details</button>
        </form>
       
        
      </div>
    </div>
  );
}

export default Delboylistinsert;


