import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/style.css';
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

export default function Layout (){
    return (
        <>
        

      <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
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
                                <Link to="" className="nav-item nav-link" activeClassName="active">Home</Link>
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
                    <ul>
                        <li>
                            <Link to="/UserSignUp" className="btn btn-primary py-2 px-4" activeClassName="active">SignUp</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />

            <div class="container-xxl py-5 bg-dark hero-header mb-5 _heroheader301">
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h2 >Ghar Jaisa Khana,<br />Cloud Rasoi se hi Mangana</h2>
                            <p class="text-white animated slideInLeft mb-4 pb-2">Experience the taste of perfect home made food at CLOUD RASOI, one of the best Ghost kitchen in india.</p>
                            <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Order Now</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src={hero5Image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
      </div>

      {/* <!-- Service Start --> */}
        <div class="container-xxl py-5 _bgservice102" style={{backgroundColor: 'light'}}>
            <div class="container" style={{height: '400px'}} >
            <div class="text-center">
            <h3 class="section-title ff-secondary text-center text-primary fw-normal _shmarg104">Our Services</h3>
            </div>

                <div class="row g-4 _shiftrow103" style={{width: '1200px',}}>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="service-item rounded pt-3">
                            <a href="">
                                <ul>
                                    <li>
                                        <Link to="/Login" className='' activeClassName="active">
                                        <div class="p-4">
                                            <i class="fa fa-3x fa-user text-primary mb-4"></i>
                                            <h5>User Signup</h5> 
                                            <p className='paragraphtag _ptt0'>Sign Up to Order Food</p>
                                        </div>
                                        </Link>
                                    </li>
                                </ul>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service-item rounded pt-3">
                            <a href="#">
                                <Link to="/Vendorfirstpage" className='' activeClassName="active">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Restaurant Partner</h5> 
                                    <p className='_ptt0'>Register Your Kitchen</p>
                                </div>
                                </Link>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="service-item rounded pt-3">
                            <a href="#">
                                <Link to="/Deliverysignup" className='' activeClassName="active">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-user text-primary mb-4"></i>
                                    <h5>Delivery Boy</h5> 

                                    <p className='_ptt0'>Register as a Delivery Boy</p>
                                </div>
                                </Link>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="service-item rounded pt-3">
                            <a href='#'>
                                <Link to="/Catererssignup" className='' activeClassName="active">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Confectioner</h5>

                                    <p className='_ptt0'>Register as a Confectioner</p>
                                </div>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- About Start --> */}
      <div class="container-xxl py-5 _bgcolor101"  style={{height: '850px'}}>
            <div class="container" style={{height: '550px'}}>
            <div class="text-center">
                    <h3 class="section-title ff-secondary text-center text-primary fw-normal">About Us</h3>
                </div>
                <div class="row g-5 align-items-center _margintop203">
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about1Image} />
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow zoomIn stylew75" data-wow-delay="0.3s" src={about2Image} />
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about3Image} />
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about4Image} />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="mb-4">Welcome to <i class="fa fa-utensils text-primary me-2"></i>Cloud Rasoi</h1>
                        <p class="mb-4">As we know, the traditional food service industry is facing significant challenges in adapting to modern consumer demands for convenience, speed, and variety.</p>
                        <p class="mb-4">The rise of online food delivery platforms has highlighted inefficiencies and limitations in traditional restaurant models. So the potential solution for the same is CLOUD RASOI.</p>
                        <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Reviews Start --> */}
      <div class="container-xxl py-5 wow fadeInUp _bgmargin101" data-wow-delay="0.1s">
            <div class="container" style={{height: '500px'}}>
                <div class="text-center">
                    <h3 class="section-title ff-secondary text-center text-primary fw-normal">Reviews</h3>
                </div>
                <div class="owl-carousel testimonial-carousel _margintop202" style={{width: '1350px', display: 'flex'}}>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Best web application to order food online. Services are awesome and nature of halwai's are also good so i give 5 star rating.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial1} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Muskan Lalwani</h5>
                                <small>5 star Chef</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>I ordered the food from this platform and the packing was very good. </p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial2} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Aadil</h5>
                                <small>Singer</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Awesome platform for ordering food online in bulk, and they also provide the Confectioner service</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial3} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Harsh Tripathi</h5>
                                <small>Business man</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>I ordered the food from Varshney ji ki rasoi, and the taste was very delicious.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial4} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Pakhi Varshney</h5>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Reviews End --> */}

      {/* <!-- Footer Start --> */}
      <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn _fo555" data-wow-delay="0.1s" >
            <div class="container py-5" style={{height: '400px'}}>
                <div class="row g-5" style={{justifyContent: 'space-around'}}>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Admin Dashboard</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Reservation</a>
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Sikandra, Agra</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>For Enquiry Please Enter your Email.</p>
                        <div class="position-relative mx-auto" style={{maxwidth: '400px'}} >
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" style={{height: '50px'}}>
                <div class="copyright _crmb0066">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Cloud Rasoi</a>, All Right Reserved. 
							
							&nbsp;Designed By <a>Cloud Rasoi Team.</a><br/><br/>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
        </>
    );
}
