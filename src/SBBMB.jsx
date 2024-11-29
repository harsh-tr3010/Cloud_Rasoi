import "./SBBMB.css";
import './Navbar.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NavlogoImage from "./img/CR-icon.png";

export default function SBBMB() {
  const [tiffinService, setTiffinService] = useState(null); // Initialize with null to indicate loading
  const [menuPlan, setMenuPlan] = useState([]);
  const [img1, setImg] = useState([]);
  const { id } = useParams();
  const [foodItems, setFoodItems] = useState([]);


  const navigate = useNavigate();

    useEffect(() => {
      console.log("WEEEE");
      axios
        .post(`http://localhost:3100/food-items/${id}`)
        .then((response) => {
          console.log(response.data);
          setMenuPlan(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the tiffin service details:", error);
        });
    }, [id]);

  
  
  const handleNavigation = (path) => {
    navigate(path);
};

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

<div id="root" style={{height: '100%'}}>
            <div className="whole-background _3arMG">
                <header className="header-section _76q0O">
                    <div className="main-navbar global-nav">
                        <div className="interior-navbar _1EuBh">
                            <a href='/' className="logo d9y3g" title="CloudRasoi" style={{marginRight: '16px'}}>
                            <img src={NavlogoImage} width="50px" height="50px" ></img>
                            </a>
                            <div role="button" className="address-button _2z2N5" tabIndex="0">
                                <span className="other _1tcx6">
                                    <span className="_3odgy">Other</span>
                                </span>
                                <span className="address _3HusE">Agra, Uttar Pradesh, India</span>
                                <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
                            </div>
                            <ul className="navbar-list _1JNGZ">
                                <li className="cartdiv _1fo6c">
                                    <div className="inner _1fmVk _30y3a">
                                        <div>
                                            <div className="inner1 _2CgXb">
                                                <a className="_1T-E4" onClick={() => handleNavigation('/Cart')}>
                                                    <span className="_3yZyp"><i class="fa-solid fa-cart-shopping" style={{width: '20px', height: '20px', fontSize: '18px'}}></i></span>
                                                    <span>cart</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '78px'}}>
                                    <div className="inner1 _2CgXb">
                                        <a className='_1T-E4' onClick={() => handleNavigation('/Uprofile')}>
                                        <span className="_3yZyp"><i class="fa-regular fa-user" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
                                        <span>Sign In</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '62px'}}>
                                    <div className="inner1 _2CgXb" style={{padding: '10px' }}>
                                        <a className="_1T-E4" onClick={() => handleNavigation('/Udashboard')}>
                                            <span className="_3yZyp"><i class="" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
                                            <span>Dashboard</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '62px'}}>
                                    <div className="inner1 _2CgXb">
                                        <a className="_1T-E4">
                                            <span className="_3yZyp"><i class="fa-solid fa-percent" style={{width: '18px', height: '19px', fontSize: '18px'}}></i>Offers</span>
                                        
                                            <span className="PJaej">New</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '62px'}}>
                                    <div className="inner1 _2CgXb">
                                        <a className="_1T-E4" onClick={() => handleNavigation('/Searchbar')}>
                                            <span className="_3yZyp"><i class="fa-solid fa-magnifying-glass" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
                                            <span>Search</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '156.5px'}}>

                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        </div>

        <div className="boxmain _bm1234">
        <div>
            <h2>Food Items</h2>
            <ul>
                {menuPlan.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity_kg} kg - Rs {item.price}
                    </li>
                ))}
            </ul>
        </div>
          <div className="boxflex _bf1234">
            <div className="headingbox _pvhb123">
              <div className="headingmain _pvhm1234">
                <h1 id="pvheadinghg112"></h1>
              </div>
            </div>
            <div className="headingsdiv _pvhv123">
              {menuPlan ? (
                <div className="mainboxrate _pvme1234">
                  <div className="div1 _pvd111">
                    <div className="left _pvlt12">
                      <div className="logo _pvlg11"></div>
                      <div className="content _pvct11">
                        <tr>
                          <td className="_s1234">4⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                      </div>
                    </div>
                  </div>
                  <div className="cuisine _pvce121">
                    <div className="contents _pvcs98">
                      <span>{menuPlan.category}</span>
                    </div>
                  </div>
                  <div className="outlet _pvot121">
                    <div className="headingout _pvh11111">
                      <span className="pvab12">Outlet </span>
                      <span id="pvS">{menuPlan.address}</span>
                    </div>
                    <div className="time _pvte1">
                      <span className="pvab12">{menuPlan.phone}</span>
                    </div>
                  </div>
                  <div className="cycle _pvc189">
                    <div className="pvcycle">
                      <div className="pvleft-cycle">
                        <i className="fa-solid fa-bicycle"></i>
                      </div>
                      <div className="pvright-cycle">Free delivery</div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





