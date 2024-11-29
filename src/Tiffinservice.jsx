import React from 'react';
import './Tiffinservice.css';
import './Navbar.css';
import {Link, Outlet} from 'react-router-dom';
import NavlogoImage from './img/CR-icon.png';
import { useNavigate } from 'react-router-dom';




export default function Rasoii() {
    const navigate = useNavigate();


    const handleNavigation = (path) => {
        navigate(path);
    };
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
            
            <div className="main-section _ms12">
                    <div className="headingrasoiii">
                        <p id="ourrasoii">Tiffin Services</p>
                        <p id="tastehere">Tastes the delectable classics, delectable food to make your day.</p>

                    </div>
                    <div className="flexingmaindiv">
                        <div className="buttonsrasoi">
                            <button id="buttonrasoi1">Filter</button>
                            <button id="buttonrasoi1">Sort By</button>
                            <button id="buttonrasoi1">Fast Delivery</button>
                            <button id="buttonrasoi1">Ratings 4.0+</button>
                            <button id="buttonrasoi1">Pure Veg</button>
                            <button id="buttonrasoi1">Offers</button>
                            <button id="buttonrasoi1">Rs. 300-Rs. 400</button>
                            <button id="buttonrasoi1">Less than Rs. 300</button>
                        </div>
                        <div className="rasoitoexplore">
                            <p id="paragraphtoexplore">Our Tiffin Plans</p>
                        </div>
                        <div className="divboxforrasoi">
                        <div className="flexboxforfood">
                        <div className="imageforboxforfood _i1"></div>
                        <div className="contentforboxforfood">
                            {/* <ul>
                                <li> */}
                                    <Link to="/Anupama" className='' activeclassname="active">
                                        <span className='titleofkitchen _tok12'>Anupama Tiffin Service</span>
                                    </Link>
                                {/* </li>
                            </ul> */}
                            <div className="startext _stx0">
                                <span className='iconstar _is12'><i class="fa-regular fa-star _fsi00"></i></span>
                                <span className='icontext _is13'>30-35mins</span>
                                </div>
                                <span className='addtext _adt14'>kamla Nagar, Agra</span>
                        </div>
                        </div>
                        <div className="flexboxforfood">
                <div className="imageforboxforfood _i2"></div>
                <div className="contentforboxforfood">
                {/* <ul>
                                <li> */}
                                    <Link to="/Narayan" className='' activeclassname="active">
                                        <span className='titleofkitchen _tok12'>Narayan Tiffin Service</span>
                                    </Link>
                                {/* </li>
                            </ul> */}
                            <div className="startext _stx0">
                                <span className='iconstar _is12'><i class="fa-regular fa-star _fsi00"></i></span>
                                <span className='icontext _is13'>40-45mins</span>
                                </div>
                                <span className='addtext _adt14'>Dayal Bagh, Agra</span>
                </div>
              </div>
              <div className="flexboxforfood">
                <div className="imageforboxforfood _i3"></div>
                <div className="contentforboxforfood">
                <ul>
                                <li>
                                    <Link to="/Durga" className='' activeclassname="active">
                                        <span className='titleofkitchen _tok12'>Durga Tiffin Service</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="startext _stx0">
                                <span className='iconstar _is12'><i class="fa-regular fa-star _fsi00"></i></span>
                                <span className='icontext _is13'>40-45mins</span>
                                </div>
                                <span className='addtext _adt14'>Nagla Padi, Agra</span>
                </div>
              </div>
              <div className="flexboxforfood">
                <div className="imageforboxforfood _i4"></div>
                <div className="contentforboxforfood">
                <ul>
                                <li>
                                    <Link to="/Durga" className='' activeclassname="active">
                                        <span className='titleofkitchen _tok12'>Naresh Tiffin Service</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="startext _stx0">
                                <span className='iconstar _is12'><i class="fa-regular fa-star _fsi00"></i></span>
                                <span className='icontext _is13'>45-50mins</span>
                                </div>
                                <span className='addtext _adt14'>New Agra, Agra</span>
                </div>
              </div>
                </div>
                
                
                </div>
        </div>
            
        
        
    </>
  )
}
