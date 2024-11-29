import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Udashboard from './Udashboard';
import NavlogoImage from './img/CR-icon.png';
import Caterersdetail from './Caterersdetail';

export default function Catererslogin() {
  const [phone, setPhone] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/fetchlogin`, {
        phone,
        confirmpassword
      });

      console.log(response.data);
      if (response.data.length > 0) {
        setIsLoggedIn(true);
      } else {
        setError('Invalid mobile number or password');
      }
    } catch (error) {
      setError('An error occurred while trying to log in');
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
        {isLoggedIn ? (
          <Caterersdetail user1={phone}/>
        ) : (
          <div className="main-divoflogin _mdol101">
            <div className="containerboxof-login _cbol202">
              <div className="logoimage-oflogin _lio303">
                {/* <img src={NavlogoImage} alt="Logo" /> */}
              </div>
              <center><h1>Log In</h1></center>
              <div className="backformoflogin _bfol001">
                <form onSubmit={handleSubmit} className='_fmf002'>
                  <i className="fa-solid fa-phone _fpe001"></i><br/>
                  <input 
                    type="text" 
                    className="_textfield12" 
                    name="phone" 
                    placeholder="Mobile Number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                  /><br />

                  <i className="fa-solid fa-lock _flk002"></i><br/>
                  <input 
                    type="password" 
                    className="_textfield12" 
                    name="confirmpassword" 
                    placeholder="Confirm Password" 
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)} 
                    required 
                  /><br />

                  <br/><button type="submit" className="bus0010">Log In</button>
                  
                  {error && <div className="error-message">{error}</div>}
                  
                  <span className="paragraph-span _pss002">
                    Don't have an account? <Link to="/UserSignUp">Sign Up</Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
