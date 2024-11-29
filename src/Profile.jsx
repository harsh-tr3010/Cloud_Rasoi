import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/style.css';
import './Profile.css';
import logoImage from './img/logo.png';


export default function Profile() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0">
    
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 navbar-back">
                <a href="" class="navbar-brand p-0">
                    <h1 class="text-primary m-0"><img src={logoImage} width="100px" height="200px" />Cloud Rasoi</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 pe-4">
                        <ul className="navbar-nav ms-auto py-0 pe-4">
                            <li className="list-one">
                                <Link to="/" className="nav-item nav-link" activeClassName="active">Home</Link>
                            </li>
                            <li className="list-two">
                                <Link to="/AboutUs" className="nav-item nav-link" activeClassName="active">About Us</Link>
                            </li>
                            <li className="list-three">
                                <Link to="/Reviews" className="nav-item nav-link" activeClassName="active">Reviews</Link>
                            </li>
                            <li className="list-four">
                                <Link to="/ContactUs" className="nav-item nav-link" activeClassName="active">Contact Us</Link>
                            </li>
                            <li className="list-five">
                                <Link to="/Profile" className="nav-item nav-link" activeClassName="active">Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <a href="" class="btn btn-primary py-2 px-4">Sign Up/ Login</a>
                </div>
            </nav>
            <Outlet />

            <div class="container-xxl py-5 bg-dark hero-header mb-5" style={{height: '50px'}}>
                <div class="container my-5 py-5" style={{height: '550px'}}>
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
      </div>
    <div>
        <div className="container">
            <div className="main-div">
                <div className="left-div">
                    <h3>Muskan Lalwani</h3>
                    <p>8799087654</p>
                </div>
                <div className="right-div">
                    <button id="submit">Edit Profile</button>
                </div>
            </div>
            <div className="body-div">
                <div className="left-body">
                    <button className='order' id="ab">Orders</button>
                    <button className='order'>Favourites</button>
                    <button className='order'>Addresses</button>
                    <button className='order'>Settings</button>
                </div>
                <div className="right-body">
                    <div className="top-div">
                        <p id="p">Past Orders</p>
                    </div>
                    <div className="bottom-div">
                        <div className="boxes">
                            <div className="left-boxes"></div>
                            <div className="right-boxes">
                                <p id="Ab">Bhagat Halwai</p>
                                <p>Khandari</p>
                                <p>ORDER #15678524325773 | Sun, Apr 7,2024, 10:42 AM</p>
                                <button id="details">VIEW DETAILS</button>
                            </div>
                            <div className="right2">
                                Delivered on Sun, pr 7,2024, 11:24 AM 
                            </div>
                           
                        </div>
                        <div className="bottoms">
                            <div className="top-bottoms">
                                <div className="para-div"><p id="bd">Bedai (Desi Ghee) X 16, Kachodi X 4</p></div>
                                <div className="amount"><p id="amount">Total Paid: Rs 253</p></div>
                            </div>
                            <div className="neech-bottoms">
                               <button class="abcd" id="Re">REORDER</button>
                               <button class="abcd
                               " id="help">HELP</button>
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
