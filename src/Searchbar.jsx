// import React,{useState} from 'react';
// import axios from 'axios';
// import './Searchbar.css';
// import './Searchbar1.css';
// import {Link,Outlet} from 'react-router-dom';
// import NavlogoImage from './img/CR-icon.png';
// import biryani from './img/biryani.avif';
// import pizza from './img/pizza.avif';
// import sandwich from './img/sandwich.avif';
// import southindian from './img/southindian.avif';
// import northindian from './img/northindian.avif';
// import dessert from './img/dessert.avif';
// import icecream from './img/icecream.avif';
// import chinese from './img/chinese.avif';
// import burger from './img/burger.avif';
// import cake from './img/cake.avif';
// import rolls from './img/rolls.avif';
// import tea from './img/tea.avif';
// // import hero1 from './img/hero1.png'; 

// const Searchbar=()=> {
//         const [query, setQuery] = useState('');
//         const [results, setResults] = useState([]);
      
//         const handleSearch = async () => {
//           try {
//             const response = await axios.post('http://localhost:3001/search', { query });
//             setResults(response.data);
//           } catch (error) {
//             console.error('Error searching:', error);
//           }
//         };
      
//   return (
//     <>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//         <div id="root" style={{height: '100%'}}>
//             <div className="whole-background _3arMG">
//                 <header className="header-section _76q0O">
//                     <div className="main-navbar global-nav" style={{width: '1400px'}}>
//                         <div className="interior-navbar _1EuBh">
//                             <a href='/' className="logo d9y3g" title="CloudRasoi" style={{marginRight: '16px'}}>
//                             <img src={NavlogoImage} width="50px" height="50px" ></img>
//                             </a>
//                             <div role="button" className="address-button _2z2N5" tabIndex="0">
//                                 <span className="other _1tcx6">
//                                     <span className="_3odgy">Other</span>
//                                 </span>
//                                 <span className="address _3HusE">Agra, Uttar Pradesh, India</span>
//                                 <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
//                             </div>
//                             <ul className="navbar-list _1JNGZ">
//                                 <li className="cart _1fo6c">
//                                     <div className="inner _1fmVk _30y3a">
//                                         <div>
//                                             <div className="inner1 _2CgXb">
//                                                 <a className="_1T-E4" href="">
//                                                     <span className="_3yZyp"><i class="fa-solid fa-cart-shopping" style={{width: '20px', height: '20px', fontSize: '18px'}}></i></span>
//                                                     <span>Cart</span>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="cart _1fo6c" style={{width: '78px'}}>
//                                     <div className="inner1 _2CgXb">
//                                         <a className="_1T-E4" href="">
//                                             <span className="_3yZyp"><i class="fa-regular fa-user" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
//                                             <span>Sign In</span>
//                                         </a>
//                                     </div>
//                                 </li>
//                                 <li className="cart _1fo6c" style={{width: '62px'}}>
//                                     <div className="inner1 _2CgXb" style={{padding: '10px', }}>
//                                         <a className="_1T-E4" href="">
//                                             <span className="_3yZyp"><i class="" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
//                                             <Link to="/Udashboard" className='_1T-E4' activeclassname="active">
//                                             <span>Dashboard</span>
//                                             </Link>
//                                         </a>
//                                     </div>
//                                 </li>
//                                 <li className="cart _1fo6c _ma1fo6c" style={{width: '62px'}}>
//                                     <div className="inner1 _2CgXb">
//                                         <a className="_1T-E4" href="">
//                                             <span className="_3yZyp"><i class="fa-solid fa-percent" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
//                                             <span className="_OFFER12">Offers</span>
                                        
//                                             <span className="PJaej">New</span>
//                                         </a>
//                                     </div>
//                                 </li>
//                                 <li className="cart _1fo6c" style={{width: '62px'}}>
//                                     <div className="inner1 _2CgXb">
//                                         <a className="_1T-E4" href="">
//                                             <span className="_3yZyp"><i class="fa-solid fa-magnifying-glass" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
//                                             <span>Search</span>
//                                         </a>
//                                     </div>
//                                 </li>
//                                 <li className="cart _1fo6c" style={{width: '156.5px'}}>

//                                 </li>
                                
//                             </ul>
//                         </div>
//                     </div>
//                 </header>
//                 <div className="belowheader nDVxx">
//                     <div className="searchbar rbcmH">
//                         <div className="border _1JbgW _1jet9" data-testid="search-bar">
//                             <form style={{height: '48px'}}>
//                                 <div className="inner _1QBzC">
//                                     <div className="text _2O4-3">
//                                         <input type="text" className="_2FkHZ" placeholder="Search for restaurants and food" maxLength="200" value={query} onChange={(e) => setQuery(e.target.value)}></input>
//                                     </div>
//                                     <div className="_2p8XD">

//                                         <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass" style={{color: '#fea116'}} ></i></button>
//                                     </div>
//                                 </div>
//                                 <input type="submit" hidden></input>
//                             </form>
//                         </div>
//                     </div>



//                     <ul className="results-list">
//         {results.map((item, index) => (
//           <li key={index} className="result-item">
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//             <p className="price">${item.price}</p>
//           </li>
//         ))}
//       </ul>
//                     <div className="belowsearchbar _2NSqs">
//                         <div className="_3X3Bt">
//                             <div className="Search_wrapper__lQvnw _1cEc4" data-testid="search-pl-wrapper">
//                                 <div className="Search_divider__3ARUS _5iVPM"></div>
//                                 <div className="Search_widgetsV2__27BBR">
//                                     <div className="styles_container__21c6K" data-testid="recent-search-container">
//                                         <div className="styles_title__3JXzj">
//                                             <div className="styles_titleText__zT3EN">Recent Searches</div>
//                                         </div>
//                                         <div className="styles_recentSearchListItem__2m98P">
//                                             <div className="styles_recentSearchListItemIcon__2ljTv">
//                                                 <i class="fa-solid fa-magnifying-glass" ></i>
//                                             </div>
//                                             <button className="styles_recentSearchListItemText__kQT2N styles_recentSearchListItemTextLast__2n6WK" data-testid="recent-search-item">Anupama Tiffin service</button>
//                                         </div>
//                                     </div>
//                                     <div></div>
//                                 </div>
//                                 <div className="Search_widgetsV2__27BBR">
//                                     <div className="styles_container__jxIGl">
//                                         <div></div>
//                                         <div className="styles_headerContainer__2UgeD" data-testid="grid-header">
//                                             <div style={{padding: '28px 0px 0px 16px'}}>
//                                                 <h2 className="styles_headerContainerTitle__27_ET">
//                                                     <span>Popular Cuisines</span>
//                                                 </h2>
//                                                 <span className='styles_headerContainerSubtitle__1WRg5' aria-hidden="true"></span>
//                                             </div>
//                                         </div>
//                                         <div data-testid="grid-container" aria-hidden="false" className='grid _gc098'>
//                                             <div className="styles_slider__podEu" data-testid="grid-slider">
//                                                 <div className="styles_row__1ivP1" data-testid="grid-row">
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={biryani}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={chinese}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={dessert}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={northindian}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={southindian}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={icecream}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={cake}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={burger}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={pizza}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={rolls}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={sandwich}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         <img alt className="styles_img__3HNZ4" loading="lazy" src={tea}></img>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="styles_slide__2c207" >
//                                                         <div className="Carousel_slide__klR8u">
//                                                             <div style={{height: '88px'}}>
//                                                                 <div className="styles_container__1Nshr" data-testid="image-info-container">
//                                                                     <button className="Ripple_container__17nxL styles_containerImg__3AXGh" data-testid="image-info-ripple">
//                                                                         {/* <img alt className="styles_img__3HNZ4" loading="lazy" src={hero1}></img> */}
//                                                                     </button>
//                                                                 </div>
//                                                                 <div></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    

//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Searchbar;

import React, { useState } from 'react';
import axios from 'axios';
import './Searchbar.css';
import './Searchbar1.css';
import NavlogoImage from './img/CR-icon.png';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const navigate = useNavigate();


  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3100/search', { query });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

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
    <div className="search-bar-container">
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for food or restaurants..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    
      <ul className="results-list">
        {results.map((item, index) => (
          <li key={index} className="result-item" onClick={() => handleNavigation(`/SBBMB/${item.id}`)}>
            <h3>{item.rasoi_name}</h3>
            <p>{item.rasoi_category}</p>
            <p>{item.rasoi_address}</p>
            <p>{item.rasoi_pincode}</p>


            {/* <p className="price">${item.price}</p> */}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SearchBar;
