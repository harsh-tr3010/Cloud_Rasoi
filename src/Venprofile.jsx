// import React, {useEffect, useState} from 'react'
// import './Venprofile.css';
// import {Link, Outlet} from 'react-router-dom';
// import NavlogoImage from "./img/CR-icon.png";
// import axios from 'axios';

// export default function Venprofile(props) {
//   const [data, setData] = useState([]); 
  

//   useEffect(() => {
//     axios.post("http://localhost:3100/fetchlogin")
//       .then((response) => {
//         setData(response.data);
//         // console.log(Object.keys(response.data));  
//       })
//       .catch((error) => {
//         console.error("there was an error fetching the employee details", error);
//       });
//   }, []);

//   useEffect(() => {
//     // Log specific user data once data is fetched
//     if (data.length > 0) {
//       const targetPhoneNumber = ''; // Replace with actual user ID or identifier
//       const user = data.find(user => props.user1 === targetPhoneNumber); // Adjust based on your data structure
      
//       if (user) {
//         console.log('Specific User Data:', user);
//       } else {
//         console.log('User not found');
//       }
//     }
//   }, [data]);
//   return (
    
//     <div>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

//         <div className="container _cr25">
//         <div id="root" style={{ height: "100%" }}>
//         <div className="whole-background _3arMG">
//           <header className="header-section _76q0O">
//             <div className="main-navbar global-nav">
//               <div className="interior-navbar _1EuBh">
//                 <a
//                   href="/"
//                   className="logo d9y3g"
//                   title="CloudRasoi"
//                   style={{ marginRight: "16px" }}
//                 >
//                   <img src={NavlogoImage} width="50px" height="50px"></img>
//                 </a>
//                 <div
//                   role="button"
//                   className="address-button _2z2N5"
//                   tabIndex="0"
//                 >
//                   <span className="other _1tcx6">
//                     <span className="_3odgy">Other</span>
//                   </span>
//                   <span className="address _3HusE">
//                     Agra, Uttar Pradesh, India
//                   </span>
//                   <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
//                 </div>
//                 <ul className="navbar-list _1JNGZ">
//                   <li className="cart _1fo6c">
//                     <div className="inner _1fmVk _30y3a">
//                       <div>
//                         <div className="inner1 _2CgXb">
//                           <a className="_1T-E4" href="/checkout">
//                             <span className="_3yZyp">
//                               <i
//                                 class="fa-solid fa-cart-shopping"
//                                 style={{
//                                   width: "20px",
//                                   height: "20px",
//                                   fontSize: "18px",
//                                 }}
//                               ></i>
//                             </span>
//                             <span>Cart</span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "78px" }}>
//                     <div className="inner1 _2CgXb">
//                       <span className="_3yZyp">
//                         <i
//                           class="fa-regular fa-user"
//                           style={{
//                             width: "18px",
//                             height: "19px",
//                             fontSize: "18px",
//                           }}
//                         ></i>
//                       </span>
//                       <span>Sign In</span>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "62px" }}>
//                     <div className="inner1 _2CgXb" style={{padding: '10px', }}>
//                       <a className="_1T-E4" >
//                         <span className="_3yZyp">
//                           <i
//                             class=""
//                             style={{
//                               width: "18px",
//                               height: "19px",
//                               fontSize: "18px",
//                             }}
//                           ></i>
//                         </span>
//                         <Link to="/Vdashboard" className='_1T-E4' activeclassname="active">
//                         <span>Dashboard</span>
//                         </Link>
//                       </a>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c _ma1fo6c" style={{ width: "62px" }}>
//                     <div className="inner1 _2CgXb">
//                       <a className="_1T-E4" href="/support">
//                         <span className="_3yZyp">
//                           <i
//                             class="fa-solid fa-percent"
//                             style={{
//                               width: "18px",
//                               height: "19px",
//                               fontSize: "18px",
//                             }}
//                           ></i>
//                           Offers
//                         </span>

//                         <span className="PJaej">New</span>
//                       </a>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "62px" }}>
//                     <div className="inner1 _2CgXb">
//                       <a className="_1T-E4" href="/support">
//                         <span className="_3yZyp">
//                           <i
//                             class="fa-solid fa-magnifying-glass"
//                             style={{
//                               width: "18px",
//                               height: "19px",
//                               fontSize: "18px",
//                             }}
//                           ></i>
//                         </span>
//                         <span>Search</span>
//                       </a>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "156.5px" }}></li>
//                 </ul>
//               </div>
//             </div>
//           </header>
//         </div>
//         <div className="body _by25">
//             <div className="leftbox _lx25">
//                 <div className="photodiv _pv26">


//                 </div>
//                 <div className="abc901"><input type="file" className='abc90'></input></div>
//                 <div className="divboxy _dy789">
//                     <div className="button11">
//                         <button className='b709'>Edit Profile</button>
//                         <button className='b709'>About us</button>
//                         <button className='b709'>View Orders</button>
//                         <button className='b709'>Settings</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="rightbox _rx25" >
//                 <div className="headingbox _hx25">
//                     <h3 className='_heading_002'>Partner With Us</h3>
//                 </div>
//                 <div className="belowheadingdiv _bhd10o1">
//                     <div className="bhd-lft _blt202">
//                         <div className="form-divofzz _fod404">
//                         <form>
//                             <label className='_lab2020'>Name:</label><br></br>
//                             <input type='text' name='name' className='_tex201'></input>
//                             {/* <label className='_lab2020'>Kitchen name:</label><br></br>
//                             <input type='text' name='name' className='_tex202'></input>
//                             <label className='_lab2020'>Owner name:</label><br></br>
//                             <input type='text' name='name' className='_tex202'></input> */}
//                             <label className='_lab2020'>Email:</label><br></br>
//                             <input type='text' name='name' className='_tex202'></input>
//                             <label className='_lab2020'>Phone number:</label><br></br>
//                             <input type='text' name='name' className='_tex202' value={data?.name || ''} readOnly />
//                         </form>
//                         </div>
//                     </div>
//                     <div className="bhd-rght _blt203">
//                     <div className="form-divofzz _fod404">
//                         <form>
//                             <label className='_lab2020'>Pincode:</label><br></br>
//                             <input type='text' name='name' className='_tex201'></input>
//                             <label className='_lab2020'>city:</label><br></br>
//                             <input type='text' name='name' className='_tex202'></input>
//                             <label className='_lab2020'>state:</label><br></br>
//                             <input type='text' name='name' className='_tex202'></input>
//                             <label className='_lab2020'>country:</label><br></br>
//                             <input type='text' name='name' className='_tex202'></input>
//                             {/* <label className='_lab2020'>Pan card:</label><br></br>
//                             <input type='text' name='name' className='_tex202'></input> */}
//                         </form>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="button-div _bud30o3">
//                     <button type='submit' className='_bure9090'>Update</button>
//                 </div>
//             </div>
        
//         </div>
//       </div>
      
//         </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Venprofile.css';
import { Link } from 'react-router-dom';
import NavlogoImage from "./img/CR-icon.png";

export default function Venprofile(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.post("http://localhost:3100/fetchlogin")
      .then((response) => {
        // Assuming response.data is an array of users
        const targetPhoneNumber = props.user1; // Adjust this as necessary
        const user = userData.find(user => user.phoneNumber === targetPhoneNumber); // Adjust based on your data structure
        setUserData(user);
      })
      .catch((error) => {
        console.error("There was an error fetching the user details", error);
      });
  }, [props.user1]);

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      <div className="container _cr25">
        {/* Header and Navbar */}
        <header className="header-section _76q0O">
          <div className="main-navbar global-nav">
            <div className="interior-navbar _1EuBh">
              <a href="/" className="logo d9y3g" title="CloudRasoi">
                <img src={NavlogoImage} width="50px" height="50px" alt="Logo" />
              </a>
              {/* Navbar items */}
              {/* ... */}
            </div>
          </div>
        </header>

        <div className="body _by25">
          <div className="leftbox _lx25">
            {/* Profile actions */}
            {/* ... */}
          </div>
          <div className="rightbox _rx25">
            <div className="headingbox _hx25">
              <h3 className='_heading_002'>Partner With Us</h3>
            </div>
            <div className="belowheadingdiv _bhd10o1">
              <div className="bhd-lft _blt202">
                <div className="form-divofzz _fod404">
                  <form>
                    <label className='_lab2020'>Name:</label><br />
                    <input type='text' name='name' className='_tex201' value={userData?.name || ''} readOnly />
                    <label className='_lab2020'>Email:</label><br />
                    <input type='text' name='email' className='_tex202' value={userData?.email || ''} readOnly />
                    <label className='_lab2020'>Phone number:</label><br />
                    <input type='text' name='phone' className='_tex202' value={userData?.phoneNumber || ''} readOnly />
                  </form>
                </div>
              </div>
              <div className="bhd-rght _blt203">
                <div className="form-divofzz _fod404">
                  <form>
                    <label className='_lab2020'>Pincode:</label><br />
                    <input type='text' name='pincode' className='_tex201' value={userData?.pincode || ''} readOnly />
                    <label className='_lab2020'>City:</label><br />
                    <input type='text' name='city' className='_tex202' value={userData?.city || ''} readOnly />
                    <label className='_lab2020'>State:</label><br />
                    <input type='text' name='state' className='_tex202' value={userData?.state || ''} readOnly />
                    <label className='_lab2020'>Country:</label><br />
                    <input type='text' name='country' className='_tex202' value={userData?.country || ''} readOnly />
                  </form>
                </div>
              </div>
            </div>
            <div className="button-div _bud30o3">
              <button type='submit' className='_bure9090'>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
