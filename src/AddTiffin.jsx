import React, { useState } from 'react';
import './AddTiffin.css';
import axios from 'axios';

const Tiffininsert = () => {




  const [formData , setFormData] = useState({
    planname : '',
    itemname : '',
    description : '',
    span : '',
    price : '',
    

  
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
        const response=await axios.post('http://localhost:3100/tiffin-insert',formData)
    

        if(response.data.success) {
            console.log('Signup Successful');
            // alert('Your Tiffin Plan added successfully');
        }else{
            console.error('Signup Failed');
        }
    }catch(error) {
        console.error('Error:',error);
    }


};



  return (
    <div className="form-container1oo1">
      <h3 className='_tit1010'>Tiffin Menu Form</h3>
      <form onSubmit={handleSubmit}>

      <div className="form-group002">
          <label htmlFor="planname">Plan Name</label><br/>
          <input
          name='planname'
            type="text"
            className='_aate202'
            value={formData.planname}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group002">
          <label htmlFor="menuItem">Menu Item Name</label><br/>
          <input
          name='itemname'
            type="text"
            className='_aate202'

            value={formData.itemname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group002">
          <label htmlFor="description">Item Description</label><br/>
          <textarea
          name='description'
          className='_aate202'
            
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group002">
          <label htmlFor="span">Time for Tiffin Plan</label><br/>
          <input
            type="text"
            name='span'
            className='_aate202'
            
            value={formData.span}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group002">
          <label htmlFor="price">Price</label><br/>
          <input
            type="number"
           name='price'
           className='_aate202'

            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='aadilkabutton _akb101'>Submit</button>
      </form>
    </div>
  );
};

export default Tiffininsert;
