import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import './UserSignUp.css';
// import Login from './Login';
import { Link,useNavigate } from 'react-router-dom';
// import NavlogoImage from './img/CR-icon.png';

const UserSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [createpassword, setCreatepassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [pincode, setPincode] = useState('');

  // const [isSignedIn, setIsSignedIn] = useState(false);
  const [error, setError] = useState('');


  const navigate = useNavigate(); // Hook to programmatically navigate
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSignedIn(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/insignup`, {
        name,
        email,
        phone,
        createpassword,
        confirmpassword,
        pincode
      });

      console.log("User signed up successfully:", response.data);

      if (response.data.length > 0) {
      navigate('/Login');
        // setIsSignedIn(true);
      } else {
        setError('Invalid user');
      }
    } catch (error) {
      setError("There was an error adding the user");
    }
  };

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      <div>
        <div className="mains-divs _md12">
         
            <div className="login-container-mains _l2c3m">
              <div className='logos-images _li009'>
              </div>
              <center><h1>Sign Up</h1></center>
              <div className="backofform" >
                <form onSubmit={handleSubmit} className="_fus898">
                  <i className="fa-solid fa-user"></i>
                  <input 
                    type="text" 
                    className="_textfield11" 
                    name="name" 
                    placeholder='User Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  /><br />

                  <i className="fa-solid fa-envelope"></i>
                  <input 
                    type="text" 
                    className="_textfield11" 
                    name="email" 
                    placeholder='E-mail' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  /><br />

                  <i className="fa-solid fa-phone"></i>
                  <input 
                    type="text" 
                    className="_textfield11" 
                    name="phone" 
                    placeholder='Mobile Number' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                  /><br />

                  <i className="fa-solid fa-lock"></i>
                  <input 
                    type="password" 
                    className="_textfield11" 
                    name="createpassword" 
                    placeholder='Create Password' 
                    value={createpassword}
                    onChange={(e) => setCreatepassword(e.target.value)} 
                    required 
                  /><br />

                  <i className="fa-solid fa-lock"></i>
                  <input 
                    type="password" 
                    className="_textfield11" 
                    name="confirmpassword" 
                    placeholder='Confirm Password' 
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)} 
                    required 
                  /><br />

                  <i className="fa-solid fa-map-pin"></i>
                  <input 
                    type="text" 
                    className="_textfield11" 
                    name="pincode" 
                    placeholder='PIN Code' 
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)} 
                    required 
                  />

                  <button type="submit" className='bus009'>Sign Up</button>
                  <br />

                  {error && <div className="error-message">{error}</div>}

                  <span className='para-ofsignup _psu1010'>
                    Already have an account? <Link to="/login" className="" activeClassName="active">Log In</Link>
                  </span>
                </form>
              </div>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
