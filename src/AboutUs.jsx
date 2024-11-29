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

export default function AboutUs() {
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
                                {/* <a href="profile.html" class="nav-item nav-link">Profile</a> */}
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

      {/* <!-- About Start --> */}
      <div class="container-xxl py-5"  style={{height: '550px'}}>
            <div class="container" style={{height: '550px'}}>
                <div class="row g-5 align-items-center">
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
                        <h5 class="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 class="mb-4">Welcome to <i class="fa fa-utensils text-primary me-2"></i>Cloud Rasoi</h1>
                        <p class="mb-4">As we know, the traditional food service industry is facing significant challenges in adapting to modern consumer demands for convenience, speed, and variety.</p>
                        <p class="mb-4">The rise of online food delivery platforms has highlighted inefficiencies and limitations in traditional restaurant models. So the potential solution for the same is CLOUD RASOI.</p>
                        <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
    </>
  )
}

