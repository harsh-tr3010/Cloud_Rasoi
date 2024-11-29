import React, { useEffect } from 'react';
import './Navbar.css';
import './Udashboard.css';
import { useNavigate } from 'react-router-dom';
import {Link, Outlet} from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/style.css';
import NavlogoImage from './img/CR-icon.png';
import Ourrasoi from './img/Ourrasoi.png';
import Tiffinservice from './img/Tiffinservice.png';
import Confectioner from './img/Confectioner.jpg';
import Dashimages from './img/sbbmb.webp';

import logoImage from './img/logo.png';
import hero5Image from './img/hero5.webp.webp';
import about1Image from './img/about-01.png';
import about2Image from './img/about-04.png';
import about3Image from './img/about-03.png';
import about4Image from './img/about-02.png';
import testimonial1 from './img/testimonial-1.jpg';
import testimonial2 from './img/testimonial-2.jpg';
import testimonial3 from './img/testimonial-3.jpg';
import testimonial4 from './img/testimonial-4.jpg';

export default function Udashboard(props) {
  

    
    const navigate = useNavigate();


    const handleNavigation = (path) => {
        navigate(path);
    };
  
  


    return (
    <>    
 
    <div>

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



      
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="containerss">

            <div className="mainsss">
                <div className="optionsss">
                    <div className="image-optionss">
                        <div className="upperboxofimage _uboi12">
                            <div className="innertextbox _itb12">
                                <div className="abovebox _ab012">
                                    <span className='textofitb _toi01'>hello {props.user1} <br/>Up To 20%</span>
                                </div>
                                <div className="belowbox _bb012">
                                    <span className='textofitb _toi02'>Claim Your Discount Code: [CLR008]</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="backofcategory _b100oc">
                    <div className="headings _hc10">
                        <div className="heads _he20">
                            <div className="hs _h20">
                                <h3 className='_cate001'>Category</h3>
                            </div>
                        </div>
                    </div>
                    <div className="divback _db10">
                        <div className="divss _d1o0">
                            <div className="leftCR _lcr1">
                                <Link to="/OurRasoi" className='' activeclassname="active">
                                    <div className="imageleft _il10">
                                        <img src={Ourrasoi} alt="ourrasoi" width="220px" height="135px" className="imagesection _is0 "></img>
                                    </div>
                                </Link>
                                <div className="headingimage _hi10">
                                    <ul>
                                        <li>
                                            <Link to="/OurRasoi" className='' activeclassname="active"><button className="headCR _hcr">Our Rasoi</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rightTS _rts1">
                            <Link to="/Tiffinservice" className='' activeclassname="active">
                                <div className="imageright _il10 _il101">
                                    <img src={Tiffinservice} alt="tiffin service" width="220px" height="135px" className="imagesection _is0 _is01"></img>
                                </div>
                                </Link>
                                <div className="headingimage _hi10">
                                    <ul>
                                        <li>
                                            <Link to="/Tiffinservice" className='' activeclassname="active"><button className="headCR _hcr _tsh1">Tiffin Services</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rightTS _rts1">
                            <Link to="/Caterersdash" className='' activeclassname="active">
                                <div className="imageright _il10 _il101">
                                    <img src={Confectioner} alt="tiffin service" width="220px" height="135px" className="imagesection _is0 _is01"></img>
                                </div>
                                </Link>
                                <div className="headingimage _hi10">
                                    <ul>
                                        <li>
                                            <Link to="/Caterersdash" className='' activeclassname="active"><button className="headCR _hcr _tsh1">Halwai's</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           



              </div>
        

        </div>
    </div>
    
    
      </>
      )
      }

