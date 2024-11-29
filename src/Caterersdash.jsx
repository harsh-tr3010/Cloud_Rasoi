import React, {useEffect,useState} from 'react';
import './Navbar.css';
import './Caterersdash.css';
import firstcater from './img/firstcater.jpeg';
import secondcater from './img/secondcater.jpg';
import thirdcater from './img/thirdcater.jpg';
import { useNavigate } from 'react-router-dom';
import NavlogoImage from './img/CR-icon.png';
import rasoiback from './img/rasoiback.png';
import axios from 'axios';

const baseURL = 'http://localhost:3100';


const Caterersdash=() => {
    const [caterers, setCaterers] = useState([]);
  const [selectedCaterer, setSelectedCaterer] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/caterers`)
      .then(response => response.json())
      .then(data => setCaterers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleItemClick = (catererId) => {
    axios.get(`${baseURL}/caterers/${catererId}`)
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

        <div className="container-xxl py-5 bg-dark hero-header mb-5 _length101">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Catering Services</h1>
          <p className='_pofhalwai1'>(Caterer's/Halwai)</p>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container _length102">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Caterer's/Halwai</h5>
            <h1 className="mb-5">Most Popular Caterer's</h1>
          </div>
        </div>
        <div className="belowcontainer _bec1o1">
          <hr />
          {caterers.map(caterer => (
            <div key={caterer.id} className="Firstcaterers _fc001" onClick={() => handleItemClick(caterer.id)}>
              <div className="Leftsideoffc _lsoff1">
              <img src={`http://localhost:3100/uploads/${caterer.profileImage}`} className='imageoff' width="100%" height="270px" alt={caterer.name} />

              </div>
              <div className="Rightsideoffc _rsoff1">
                <div className="_rsoff10">
                  <div className="stardivr"><i className={`fa-regular fa-star stars-${caterer.rating}`}></i></div>
                  <div className="taglinedivt">
                    <span>Home Catering Services Agra</span>
                  </div>
                </div>
                <div className="_rsoff20">
                  <div className="innerrsoff2">
                    <h3 className='titleofcater _toc1'>{caterer.name}</h3>
                  </div>
                </div>
                <div className="_rsoff30">
                  <div className="innerrsoff3">
                    <p className='rsofftext'>{caterer.description}<h6>Learn more</h6></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>

      {selectedCaterer && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>{selectedCaterer.name}</h2>
            
            <p>Phone Number: {selectedCaterer.phone}</p>
            <p>Address: {selectedCaterer.address}</p>
          </div>
        </div>
      )}
    
    </>
  )
}

export default Caterersdash;
