import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OurRasoi.css';
import './Navbar.css';
import SBBMB from './SBBMB';
import { useNavigate } from 'react-router-dom';
import NavlogoImage from './img/CR-icon.png';


const baseURL = 'http://localhost:3100';


const OurRasoi=()=> {
  const [caterers, setCaterers] = useState([]);
  const [selectedCaterer, setSelectedCaterer] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/fetchrasoi`)
      .then(response => response.json())
      .then(data => setCaterers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleItemClick = (catererId) => {
    axios.get(`${baseURL}/fetchrasoi/${catererId}`)
      .then(response => {
        setSelectedCaterer(response.data);
      })
      .catch(error => console.error('Error fetching caterer details:', error));
  };

  const closePopup = () => {
    setSelectedCaterer(null);
  };
    const navigate = useNavigate();


    const handleNavigation = (path) => {
        navigate(path);
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
                <p id="_orr001">Our Rasoi</p>
                <p id="_tsh002">Taste the delectable classics, delectable food to make your day.</p>
              </div>
              <div className="flexingmaindiv _fmde101">
                <div className="rasoitoexplore _rte003">
                  <p id="_pte004">Rasoi's to Explore</p>
                </div>
                <div className="divboxforrasoi _dbr009">
                  {caterers.map(caterer => (
                    <div className="flexboxforfood" key={caterer.id}>
                      <div className="imageforboxforfood _im1">
                        <img src={`http://localhost:3100/uploads/${caterer.image_URL}`} alt='service.rasoi_name' width='280px' height='200px' style={{borderRadius: '20px'}}/>
                      </div>
                      <div className="contentforboxforfood">
                        <ul>
                          <li>
                            <span className='titleofkitchen _tok12' onClick={() => handleNavigation(`/SBBMB/${caterer.id}`)}>
                              {caterer.rasoi_name}
                            </span>
                          </li>
                        </ul>
                        <div className="startext _stx0">
                          <span className='iconstar _is12'>
                            <i className="fa-regular fa-star _fsi00"></i>
                          </span>
                          <span className='icontext _is13'>15-20mins</span>
                        </div>
                        <span className='addtext _adt14'>{caterer.rasoi_address}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        
      </>
    );
}

export default OurRasoi;

