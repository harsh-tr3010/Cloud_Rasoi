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

export default function Reviews() {
  return (
    <>
        {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet" />

      {/* Icon Font Stylesheet */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

      {/* Libraries Stylesheet */}
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

      {/* Customized Bootstrap Stylesheet */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />

      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />

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
                                {/* <a href="index.html" class="nav-item nav-link active">Home</a> */}
                                <Link to="/" className="nav-item nav-link" activeClassName="active">Home</Link>
                            </li>
                            <li className="list-two">
                                {/* <a href="/AboutUs" class="nav-item nav-link">About Us</a> */}
                                <Link to="/AboutUs" className="nav-item nav-link" activeClassName="active">About Us</Link>
                            </li>
                            <li className="list-three">
                                {/* <a href="tiffinservices.html" class="nav-item nav-link">Reviews</a> */}
                                <Link to="/Reviews" className="nav-item nav-link" activeClassName="active">Reviews</Link>
                            </li>
                            <li className="list-four">
                                {/* <a href="profile.html" class="nav-item nav-link">Contact Us</a> */}
                                <Link to="/ContactUs" className="nav-item nav-link" activeClassName="active">Contact Us</Link>
                            </li>
                            <li className="list-five">
                                {/* <a href="profile.html" class="nav-item nav-link">Contact Us</a> */}
                                <Link to="/Profile" className="nav-item nav-link" activeClassName="active">Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <a href="" class="btn btn-primary py-2 px-4">Sign Up/ Login</a>
                </div>
            </nav>
            <Outlet />

            <div class="container-xxl py-5 bg-dark hero-header mb-5" style={{height: '50px'}}>
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            {/* <h2 >Ghar Jaisa Khana,<br />Cloud Rasoi se hi Mangana</h2> */}
                            {/* <p class="text-white animated slideInLeft mb-4 pb-2">Experience the taste of perfect home made food at CLOUD RASOI, one of the best Ghost kitchen in india.</p> */}
                            {/* <a href="signup.html" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Order Now</a> */}
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            {/* <img class="img-fluid" src={hero5Image} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
      </div>

      {/* <!-- Reviews Start --> */}
      <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="text-center">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Reviews</h5>
                    <h1 class="mb-5">User Reviews!!!</h1>
                </div>
                <div class="owl-carousel testimonial-carousel" style={{width: '1100px', display: 'flex'}}>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial1} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial2} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial3} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial4} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Reviews End --> */}
    </>
  )
}
